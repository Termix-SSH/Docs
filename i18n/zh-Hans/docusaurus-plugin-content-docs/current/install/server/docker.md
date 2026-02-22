# Docker

使用 Docker 是启动 Termix 服务端最简单的方式。

## Docker Run 安装

```bash
# Step 1: Create the volume
docker volume create termix-data

# Step 2: Run the container
docker run -d \
  --name termix \
  --restart unless-stopped \
  -p 8080:8080 \
  -v termix-data:/app/data \
  -e PORT=8080 \
  ghcr.io/lukegus/termix:latest
```

## Docker Compose 安装

如果需要更完善的配置，可以使用 Docker Compose：

```yaml
services:
  termix:
    image: ghcr.io/lukegus/termix:latest
    container_name: termix
    restart: unless-stopped
    ports:
      - '8080:8080'
    volumes:
      - termix-data:/app/data
    environment:
      PORT: '8080'

volumes:
  termix-data:
    driver: local
```

运行以下命令启动容器：

```bash
docker-compose up -d
```

## Docker Hub 镜像

除了 GHCR，你也可以使用 Docker Hub 镜像：

```bash
docker run -d \
  --name termix \
  --restart unless-stopped \
  -p 8080:8080 \
  -v termix-data:/app/data \
  -e PORT=8080 \
  bugattiguy527/termix:latest
```

或使用 Docker Compose：

```yaml
services:
  termix:
    image: bugattiguy527/termix:latest
    container_name: termix
    restart: unless-stopped
    ports:
      - '8080:8080'
    volumes:
      - termix-data:/app/data
    environment:
      PORT: '8080'

volumes:
  termix-data:
    driver: local
```

## 指定版本

要下载特定版本的 Docker 镜像，可以访问 [GitHub](https://github.com/users/LukeGus/packages/container/package/termix)，将 Docker 标签替换为表格中列出的任意一项。

你也可以将 docker run/compose 中的 `:latest` 替换为 `:version.x.x.x`，并将 `x.x.x` 改为你想安装的版本号。所有版本列表请参见[此处](https://github.com/Termix-SSH/Termix/releases)。

## 环境变量

参见[文档](/environment-variables)。

## 使用

安装完成后，可以通过 `http://localhost:8080`（或你配置的其他端口）访问 Termix。

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
