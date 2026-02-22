# Docker

与其他替代方案不同，Termix 不使用 Docker socket，这与 Termix 整体的设计理念一致。它通过 SSH 执行命令来获取信息，这也使得你的配置过程更加简单。

## 配置 Docker

如果系统上已安装 Docker 且在 `$PATH` 中可用，并且当前用户有权限运行 docker，那么 Termix 的 Docker 集成大概率已经可以正常工作。

如果系统上安装了 `sudo`，但用户没有在不使用 sudo 的情况下运行 Docker 的权限，你会遇到错误，因为 Termix 不会以 sudo 方式执行任何 Docker 命令。要解决这个问题，请将你的用户添加到 docker 用户组：

```bash
sudo usermod -aG docker $USER
```

你的用户现在已加入 Docker 用户组，应该可以正常连接了！

## 故障排查

- 确保用户可以在不报错、不被提示输入任何密码的情况下运行 `docker --version`
- 尝试通过终端或文件管理器会话确认你的凭据是否正确

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
