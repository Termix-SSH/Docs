# Reverse Proxy

Some reverse proxies may need some configuration changes to support Termix

## NGINX

In `nginx.conf` you need to "upgrade" the connection to support websockets using:

```
proxy_set_header Connection 'upgrade';
```

for example:

```
location / {
    proxy_pass http://localhost:8080;

    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;

    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
}
```

## Traefik

If you use Docker, in your `docker-compose.yml` add these labels, filled out as needed:

```
labels:
  - "traefik.enable=true"

  - "traefik.http.routers.termix.entrypoints=http"
  - "traefik.http.routers.termix.rule=Host(`termix.local.domain.com`) || Host(`termix.domain.com`)"
  - "traefik.http.middlewares.termix-https-redirect.redirectscheme.scheme=https"
  - "traefik.http.routers.termix.middlewares=termix-https-redirect"

  - "traefik.http.routers.termix-secure.entrypoints=https"
  - "traefik.http.routers.termix-secure.rule=Host(`termix.local.domain.com`) || Host(`termix.domain.com`)"
  - "traefik.http.routers.termix-secure.tls=true"
  - "traefik.http.routers.termix-secure.tls.certresolver=cloudflare"
  - "traefik.http.routers.termix-secure.service=termix"

  - "traefik.http.services.termix.loadbalancer.server.port=8080"

  - "traefik.docker.network=proxy"
```

## Caddy

Caddy has native WebSocket support so no extra configs should be needed.

```
termix.domain.com {
    reverse_proxy localhost:8080
}
```
