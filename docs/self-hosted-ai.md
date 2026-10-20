# Self-Hosted AI on AWS

:::info Sponsored
AWS covers the cost of this server as a sponsor of Termix. This page was written as part of that sponsorship.
:::

Termix has 36 plugins, a core app, a mobile app, a CLI and docs, all in separate repos, and I maintain them alone. A lot of the work around that is repetitive, so I run my own LLM on an EC2 GPU instance and let it handle the boring parts. This page covers what it does and how it is set up, so you can copy it if you want something similar.

## What it does

Everything talks to one OpenAI compatible API at `llm.termix.site`.

- Translations: every release of core and every plugin translates new or changed English strings into 41 languages. See [Translations](./translations.md).
- Issue triage: the [Triage Bot](https://github.com/Termix-SSH/Triage-Bot) labels new issues, finds duplicates, moves issues opened in the wrong repo and adds them to the project board.
- PR review: every PR in the org gets a short review against that repo's rules and a `Termix AI review` check.
- Community plugin review: each community plugin submission gets a security review of the full source and the built bundle before I look at it.
- Merge conflicts: commenting `/termix fix-conflicts` on a PR has the bot merge the base branch and resolve the conflicts.
- A private chat UI (Open WebUI) for me, only reachable over Tailscale.

Running my own model means no per-token bills, no rate limits during a big release, and nothing from the repos goes to a third party.

## The server

|             |                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------- |
| Instance    | `g6e.xlarge`                                                                                      |
| GPU         | 1x NVIDIA L40S, 48 GB                                                                             |
| CPU and RAM | 4 vCPU, 32 GB                                                                                     |
| Disk        | 500 GB EBS (the model cache is about 30 GB)                                                       |
| OS          | Ubuntu 24.04, AWS Deep Learning Base AMI (NVIDIA driver and Docker GPU support already installed) |

The `g6e.xlarge` is the smallest instance with an L40S. 48 GB of VRAM is enough for a 27B model in FP8 with plenty of room left for context. It costs about $1.86 an hour on demand, so roughly $16k to $17k a year if it never turns off.

## The model

[Qwen3.6-27B](https://huggingface.co/Qwen/Qwen3.6-27B-FP8) in FP8, served with [vLLM](https://docs.vllm.ai). It is good at code, follows JSON output instructions well, and handles all the languages Termix ships. I tried running a second, smaller model next to it, but on one GPU a longer context for one good model was worth more.

The settings that matter:

- `--max-model-len 131072`: 128k context, so the bot can read a whole PR diff or plugin source in one request.
- `--kv-cache-dtype fp8`: halves the memory the context cache uses. This is what makes 128k fit.
- `--gpu-memory-utilization 0.92`: give vLLM almost all of the GPU.
- `--scheduling-policy priority`: requests carry a `priority` field. Issue triage goes first, then conflict fixes, then reviews, and translations last. A release translating thousands of strings never makes a new issue wait.
- `--speculative-config` with `qwen3_next_mtp`: the model guesses 2 tokens ahead. About 83% of guesses are accepted, which makes output noticeably faster.
- `--reasoning-parser qwen3` and `--tool-call-parser qwen3_coder`: split thinking out of the answer and support tool calls.

A single request generates about 43 tokens per second, and it serves up to 32 requests at once.

## How it is set up

It is one Docker Compose project in `/opt/llm` with three services:

| Service      | Listens on       | Reachable from                          |
| ------------ | ---------------- | --------------------------------------- |
| `caddy`      | 80, 443          | The internet, `https://llm.termix.site` |
| `vllm`       | `127.0.0.1:8000` | Only the server itself                  |
| `open-webui` | 8080             | Only my Tailscale network               |

vLLM never faces the internet. Caddy sits in front of it, gets the TLS certificate, and only passes through the inference endpoints.

### Compose file

Trimmed to the parts that matter:

```yaml
services:
  vllm:
    image: vllm/vllm-openai:v0.31.0
    restart: unless-stopped
    ipc: host
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all
              capabilities: [gpu]
    ports:
      - "127.0.0.1:8000:8000"
    volumes:
      - /var/lib/llm/huggingface:/root/.cache/huggingface
    environment:
      VLLM_API_KEY: ${VLLM_API_KEY:?}
      HF_TOKEN: ${HF_TOKEN:-}
    command:
      - Qwen/Qwen3.6-27B-FP8
      - --served-model-name
      - qwen3.6-27b
      - --max-model-len
      - "131072"
      - --gpu-memory-utilization
      - "0.92"
      - --max-num-seqs
      - "32"
      - --kv-cache-dtype
      - fp8
      - --scheduling-policy
      - priority
      - --reasoning-parser
      - qwen3
      - --enable-auto-tool-choice
      - --tool-call-parser
      - qwen3_coder
      - --speculative-config
      - '{"method":"qwen3_next_mtp","num_speculative_tokens":2}'

  open-webui:
    image: ghcr.io/open-webui/open-webui:v0.12.0
    restart: unless-stopped
    network_mode: host
    volumes:
      - open-webui:/app/backend/data
    environment:
      PORT: "8080"
      OPENAI_API_BASE_URL: http://localhost:8000/v1
      OPENAI_API_KEY: ${VLLM_API_KEY:?}
      ENABLE_OLLAMA_API: "false"

  caddy:
    image: caddy:2.11.7
    restart: unless-stopped
    network_mode: host
    volumes:
      - ./caddy/Caddyfile:/etc/caddy/Caddyfile:ro
      - caddy-data:/data
    environment:
      LLM_DOMAIN: ${LLM_DOMAIN:?}
      VLLM_API_KEY: ${VLLM_API_KEY:?}
      PUBLIC_API_KEY_GITHUB: ${PUBLIC_API_KEY_GITHUB:?}
      PUBLIC_API_KEY_BOT: ${PUBLIC_API_KEY_BOT:?}

volumes:
  open-webui:
  caddy-data:
```

Secrets go in a `.env` next to it, readable by root only. Make each key with `openssl rand -hex 32`. The model cache sits on the EBS volume, so a stop and start doesn't download 30 GB again. The first boot still takes about 5 minutes while vLLM loads the model and warms up.

### Caddy and API keys

Each client gets its own key: one for GitHub Actions (translations), one for the bot. Caddy checks the key, then swaps in vLLM's internal key before passing the request on. Client keys never reach vLLM, and I can rotate one without touching the others.

```
{$LLM_DOMAIN} {
	request_body {
		max_size 16MB
	}

	handle /health {
		reverse_proxy 127.0.0.1:8000
	}

	@api path /v1/models /v1/chat/completions /v1/completions /v1/responses /v1/responses/*
	handle @api {
		@authorized {
			header Authorization "Bearer {$PUBLIC_API_KEY_GITHUB}"
			header Authorization "Bearer {$PUBLIC_API_KEY_BOT}"
		}

		handle @authorized {
			reverse_proxy 127.0.0.1:8000 {
				header_up Authorization "Bearer {$VLLM_API_KEY}"
				flush_interval -1
				transport http {
					response_header_timeout 15m
				}
			}
		}

		handle {
			respond 401
		}
	}

	handle {
		respond 404
	}
}
```

Put all the key lines inside one `@authorized` block. Lines in the same block are OR'd. Defining the same named matcher twice breaks Caddy. `flush_interval -1` keeps streaming working, and the long timeout is there because a big review can take a few minutes.

### Network

- AWS security group: inbound 80 and 443 only.
- UFW: deny everything except 80, 443 and the Tailscale interface.
- No public SSH. The OpenSSH server is turned off and I get in with [Tailscale SSH](https://tailscale.com/kb/1193/tailscale-ssh), so there is no port 22 to attack and no keys to manage.
- Open WebUI is only on the tailnet, served over HTTPS with `tailscale serve`.
- The domain is proxied through Cloudflare.

One catch: `tailscale serve` holds port 443 on the Tailscale IP, so Caddy can't bind 443 on every address. Set `default_bind` in the Caddyfile to the instance's private IP. That IP stays the same across stop and start.

## Using it

It is a normal OpenAI compatible API, so any OpenAI SDK works by changing the base URL:

```bash
curl https://llm.termix.site/v1/chat/completions \
  -H "Authorization: Bearer $TERMIX_LLM_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "qwen3.6-27b",
    "priority": 10,
    "messages": [{"role": "user", "content": "Translate to German: Save changes"}]
  }'
```

`priority` is optional. Lower numbers run first.

The translation script and the bot both retry with backoff, and a release never fails if the server is down. The bot keeps its jobs in a SQLite queue, so they just wait until the server is back.

## Day to day

```bash
cd /opt/llm
sudo docker compose ps
sudo docker compose logs -f vllm
sudo docker compose up -d                                # apply config changes
sudo docker compose pull && sudo docker compose up -d   # after bumping image tags
```

To rotate a key, change it in `.env`, run `docker compose up -d` and update the client. To add a client, add a key to `.env`, to Caddy's environment in the compose file and as another line in the `@authorized` block.

## Doing it yourself

1. Launch a `g6e.xlarge` with the Deep Learning Base AMI (Ubuntu 24.04). Give it at least 100 GB of EBS for the model cache. You may need to ask AWS for a G instance quota increase first.
2. Install Tailscale, turn on Tailscale SSH, then close port 22.
3. Point a domain at the instance and open 80 and 443 in the security group.
4. Copy the compose file and Caddyfile above, fill in `.env` and run `sudo docker compose up -d`.
5. Wait for `curl https://your-domain/health` to return 200.

If you don't need 128k context or 32 parallel requests, a smaller model on a cheaper `g6.xlarge` (L4, 24 GB) is a good start.
