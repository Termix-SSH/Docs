# 反向代理

部分反向代理可能需要进行一些配置更改才能支持 Termix。

## NGINX

在 `nginx.conf` 中，你需要通过以下方式"升级"连接以支持 WebSocket：

```
proxy_set_header Connection 'upgrade';
```

例如：

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

如果你使用 Docker，在 `docker-compose.yml` 中添加以下 labels，根据需要填写：

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

Caddy 原生支持 WebSocket，因此不需要额外配置。

```
termix.domain.com {
    reverse_proxy localhost:8080
}
```

## 更改基础路径

使用 `VITE_BASE_PATH` 环境变量来配置基础路径。

**示例：**
```bash
VITE_BASE_PATH=/termix/

http://localhost:8080/termixx
```

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
