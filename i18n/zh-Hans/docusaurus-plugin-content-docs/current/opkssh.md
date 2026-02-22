# OPKSSH (OpenPubkey SSH)

请访问 [OPKSSH on GitHub](https://github.com/openpubkey/opkssh) 了解 OPKSSH 的安装与文档。

目前，Termix 仅支持在终端、文件管理器和 Docker 管理器中使用 OPKSSH。

## 配置

如果你还没有安装，请使用上面的链接在所有 SSH 服务器上安装 OPKSSH。Termix 会自动在你的实例中安装 OPKSSH。

**第 1 步：**
在主机管理器中创建一个 SSH 主机，将认证类型设置为 OPKSSH。

**第 2 步：**
在该主机上启动一个 SSH 终端连接。连接时会弹出一个对话框，告诉你 OPKSSH 配置文件的生成路径。

**第 3 步：**
编辑生成的 `config.yml` 文件。配置文件位置取决于你的部署方式：
- **开发环境/手动编译**：`db/data/.opk/config.yml`
- **Docker**：`/app/data/.opk/config.yml`（挂载卷）

```yaml
providers:
  - alias: google
    issuer: https://accounts.google.com
    client_id: YOUR_CLIENT_ID
    client_secret: YOUR_CLIENT_SECRET
    scopes: openid email profile
    access_type: offline
    prompt: consent
    redirect_uris:
      - http://localhost:5173/ssh/opkssh-callback   # Development/Manual Compile
      - http://localhost:8080/ssh/opkssh-callback   # Docker (or your mapped port)
```

`remote_redirect_uris` 字段告诉 OPKSSH 在发送给身份提供商的 OAuth 授权请求中包含哪个 URL。它必须与你的 Termix 实例的公开 URL + `/ssh/opkssh-callback` 匹配。Termix 会自动将浏览器的 OAuth 回调代理到 OPKSSH 的内部监听器，你无需暴露任何 OPKSSH 内部端口。

有关提供商 issuer URL 和其他配置，请参阅 [OPKSSH config docs](https://github.com/openpubkey/opkssh/blob/main/docs/config.md)。

**第 4 步：**
在你的身份提供商（Google、GitHub、Microsoft 等）中配置 OAuth 凭据。

**Authorized JavaScript Origins：**
- 开发环境/手动编译：`http://localhost:5173`
- Docker：`http://localhost:8080`（或你映射的端口）
- 反向代理：`https://termix.yourdomain.com`

**Authorized Redirect URIs：**
将与你的部署方式匹配的 Termix 回调 URL 添加到 OAuth 提供商：

- 开发环境/手动编译：`http://localhost:5173/ssh/opkssh-callback`
- Docker：`http://localhost:8080/ssh/opkssh-callback`（或你映射的端口）
- 反向代理：`https://termix.yourdomain.com/ssh/opkssh-callback`

这些必须与 `config.yml` 中的 `redirect_uris` 条目一致。

将 OAuth 提供商中的 Client ID 和 Client Secret 复制到你的 `config.yml` 中。

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
