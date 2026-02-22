# 功能

Termix 部分功能的使用说明。

## 管理员设置

使用管理员账户登录后，点击左下角的用户名，然后点击 `Admin Settings`。

## TOTP

参阅 [TOTP 文档](https://docs.termix.site/totp)。

## OIDC

OIDC 必须在创建本地账户后，在管理员设置中进行配置。目前尚不支持通过环境变量创建。参阅 [OIDC](https://docs.termix.site/oidc) 了解更多。

## 主机管理

登录后，点击左上角的 `Host Manager` 按钮来添加 SSH 主机和凭据。在这里你可以创建和自定义主机。

## 凭据部署

在 `Host Manager` 的 `Add Credential` 标签页中创建一个凭据，选择 SSH 密钥作为认证类型。然后返回 `Credential Viewer` 标签页，点击目标凭据上的绿色箭头图标，按照屏幕上的步骤操作。

## SOCKS5

在 `Host Manager` 中创建主机时，在 Terminal 标签页底部配置 SOCKS5。

## RBAC

参阅 [RBAC](https://docs.termix.site/rbac) 获取详细的操作步骤列表。

## 分屏

点击顶部标签栏中某个标签上的 `<|>` 图标（位于关闭按钮旁边），这将在分屏标签中打开 `SSH Tool Sidebar`。按照屏幕上的步骤操作。

## SSH 工具 / 命令历史 / 代码片段 / 分屏

点击右上角的 `Hammer` 图标，将打开一个包含上述所有功能标签页的侧边栏。

## 服务器状态

在 `Host Manager` 中配置主机时启用 Server Stats，然后从 `Left Sidebar` 连接到该主机时选择 `Server Details` 选项。参阅[服务器状态](https://docs.termix.site/server-stats)了解更多。

## 导出/导入

前往 `Admin Settings`，进入 `Database` 标签页。

## SSH 终端

在 `Host Manager` 中配置主机时启用 Terminal，然后从 `Left Sidebar` 点击 `>_` 图标。

## SSH 隧道

在 `Host Manager` 中配置主机时设置隧道，然后从 `Left Sidebar` 连接到该主机时选择 `Server Details` 选项。参阅[隧道](https://docs.termix.site/tunnels)了解更多。

## SSH 文件管理器

在 `Host Manager` 中配置主机时启用 File Manager，然后从 `Left Sidebar` 连接到该主机时选择 `File Manager` 选项。文件管理器仅适用于常见的 Linux 系主机。

## Docker 管理

在 `Host Manager` 中配置主机时启用 Docker，然后从 `Left Sidebar` 连接到该主机时选择 `Docker` 选项。

## 命令面板

双击 `Left Shift` 打开。可在用户资料中禁用。

## 自定义仪表盘

使用仪表盘右上角的 `Gear` 图标进行配置。

## 网络拓扑图

在仪表盘中启用 Network Graph。使用 Network Graph 上的箭头进行自定义。

## 快速连接

点击右上角 `Hammer` 旁边的 `Lightning` 图标，输入连接信息后即可连接。

## SSL 证书生成

参阅 [SSL](https://docs.termix.site/ssl)。

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
