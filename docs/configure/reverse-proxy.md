---
title: Reverse proxy
description: Put Termix behind nginx, Caddy or Traefik.
---

# Reverse proxy

A reverse proxy puts Termix on a domain with HTTPS. Point it at port `8080` of the Termix container.

Every proxy needs three things for Termix:

- **WebSockets.** Terminals, remote desktop and live updates all use them.
- **Long timeouts.** A terminal can sit idle for hours. Short timeouts drop it.
- **Big uploads.** The file manager sends large files. Don't cap the body size.

## nginx

```nginx
server {
    listen 443 ssl;
    server_name termix.example.com;

    ssl_certificate     /etc/ssl/termix.crt;
    ssl_certificate_key /etc/ssl/termix.key;

    client_max_body_size 0;

    location / {
        proxy_pass http://127.0.0.1:8080;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_read_timeout 86400s;
        proxy_send_timeout 86400s;
    }
}
```

## Caddy

Caddy passes WebSockets and has no body limit, so this is all you need:

```
termix.example.com {
    reverse_proxy 127.0.0.1:8080
}
```

## Traefik

```yaml
services:
  termix:
    labels:
      - traefik.enable=true
      - traefik.http.routers.termix.rule=Host(`termix.example.com`)
      - traefik.http.routers.termix.entrypoints=websecure
      - traefik.http.routers.termix.tls.certresolver=letsencrypt
      - traefik.http.services.termix.loadbalancer.server.port=8080
```

## Real client IPs

Behind a proxy, Termix sees the proxy's IP for every request. That makes rate limits and the audit log less useful. Tell Termix which proxies to trust, and it takes the client IP from `X-Forwarded-For`:

```yaml
environment:
  TRUSTED_PROXIES: "172.16.0.0/12"
```

Use your proxy's IP or network. Only list proxies you control. Anyone listed can claim to be any IP.

## Sub path

To serve Termix at `https://example.com/termix/`, set `BASE_PATH` and have the proxy strip the path before it passes the request on:

```yaml
environment:
  BASE_PATH: "/termix"
```

```nginx
location /termix/ {
    proxy_pass http://127.0.0.1:8080/;
    # plus the same headers and timeouts as above
}
```

## Sign in through the proxy

Authelia, Authentik and similar tools can sign people in to Termix for you. See [trusted proxy login](/configure/trusted-proxy-login).

## Callback URLs

Sign in plugins like [Single sign-on](/plugins/sso) build callback URLs from the request. If they come out as `http://` behind an HTTPS proxy, make sure the proxy sends `X-Forwarded-Proto`, or set `EXTERNAL_FORCE_HTTPS=true`.
