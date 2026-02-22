# 手动安装

如果你更倾向于从源码手动编译 Termix，请按照以下步骤操作。

## 前置要求

- Git
- Node.js（v18 或更高版本）
- NPM
- Docker
- Docker Compose
- OpenSSL（使用 https 时需要将其添加到 `PATH` 环境变量中）

## 安装步骤

1. 克隆仓库：

```bash
git clone https://github.com/Termix-SSH/Termix.git
cd Termix
```

2. 安装依赖并构建项目：

```bash
npm install
npm run build
```

3. 启动应用：

```bash
npm run preview
```

:::tip
在生产环境中，建议通过 Nginx 运行网站。Nginx 配置文件位于仓库的 Docker 目录中。
:::

4. 启动后端服务：

```bash
npm run dev:backend
```

## 从源码构建

如果你想从源码构建 Termix 并创建自己的 Docker 镜像，请按照以下步骤操作：

### 构建步骤

1. 克隆仓库：

```bash
git clone https://github.com/Termix-SSH/Termix.git
cd Termix
```

2. 安装依赖：

```bash
npm install
```

3. 构建前端：

```bash
npm run build
```

4. 构建 Docker 镜像：

```bash
docker build -t termix:latest -f docker/Dockerfile .
```

5. 创建 Docker Compose 文件以使用你构建的镜像：

```yaml
services:
  termix:
    image: termix:latest
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

6. 启动容器：

```bash
docker-compose up -d
```

## 环境变量

参见[文档](/environment-variables)。

## 使用

编译并运行后，可以通过 `http://localhost:8080`（或你配置的其他端口）访问 Termix。

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
