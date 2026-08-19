# AI Providers

A provider is the service that actually runs the model. You add at least one before the assistant can do anything. You can add several and switch between them from the panel.

## Turning the feature on first

An admin has to enable the assistant for the instance before providers can be used. Go to **Admin Settings**, find the AI section, and turn it on. Then each user turns it on for themselves in their profile.

## Supported providers

| Provider          | Needs an API key       | Needs a URL |
| ----------------- | ---------------------- | ----------- |
| Ollama            | No                     | Yes         |
| Anthropic         | Yes                    | No          |
| OpenAI            | Yes                    | No          |
| Google Gemini     | Yes                    | No          |
| OpenAI compatible | Depends on the service | Yes         |

OpenAI compatible covers anything that speaks the OpenAI API format, which is most things. OpenRouter, Groq, Mistral, DeepSeek, together.ai, LM Studio, and vLLM all work this way. Point it at the right base URL and it behaves like any other provider.

## Adding a provider

Open the AI panel, click the settings gear, and add a provider. Pick the type, give it a label so you can tell it apart later, then fill in the base URL or API key it needs.

Termix tries to fetch the list of models the provider offers. If it cannot reach the service or the provider has no model list endpoint, you get a short starting list instead. You can always type a model name by hand, so a model missing from the list is not a problem.

Your API key is encrypted before it is stored and is never sent back to the browser. The settings screen only shows the first few characters so you can tell two keys apart.

## Running a model on your own hardware

If you would rather nothing leaves your network, run [Ollama](https://ollama.com) and point Termix at it. Nothing goes to a third party.

There is one extra step. Termix blocks outbound requests to private and LAN addresses by default, which is what stops a misconfigured provider being used to probe your internal network. To use a local model, an admin adds its address to the allowed list under **Admin Settings**.

These are allowed out of the box:

- `localhost`
- `127.0.0.1`
- `::1`
- `host.docker.internal`

If Ollama runs on another machine, add that hostname or IP to the list. Without it, connections to a local model will fail on purpose.

:::info
Running Termix in Docker and Ollama on the host machine? Use `http://host.docker.internal:11434` as the base URL, since `localhost` inside the container means the container itself.
:::

## Which model to pick

Bigger models follow multi-step instructions better and are less likely to misread your setup. Small local models are fine for simple questions but tend to struggle with longer tool use.

Whatever you choose, the assistant still cannot change anything without your approval, so a weaker model means worse suggestions rather than a safety problem.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
