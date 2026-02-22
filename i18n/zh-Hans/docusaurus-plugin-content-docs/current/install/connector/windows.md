# Windows

## 安装方式

### Chocolatey（推荐）

通过 [Chocolatey](https://community.chocolatey.org/packages/termix-ssh/) 安装：

```powershell
choco install termix-ssh
```

**更新：**

```powershell
choco upgrade termix-ssh
```

**卸载：**

```powershell
choco uninstall termix-ssh
```

所有命令都会提示你授权运行安装脚本，该脚本会下载并安装 `.msi` 文件。

由于 Chocolatey 需要对应用商店中的应用进行人工审核，Termix 更新后可能需要几天时间才能在 Chocolatey 上下载到新版本。无论更新是否已可供下载，都会显示 `Update Required` 界面。

### GitHub Releases

点击下方对应你的设备架构和安装类型的下载链接。

| 架构 | 类型     | 下载链接                                                                                                       |
| ---- | -------- | -------------------------------------------------------------------------------------------------------------- |
| x64  | NSIS     | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_windows_x64_nsis.exe)              |
| x64  | MSI      | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_windows_x64_msi.msi)               |
| x64  | 便携版   | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_windows_x64_portable.zip)          |
| ia32 | NSIS     | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_windows_ia32_nsis.exe)             |
| ia32 | MSI      | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_windows_ia32_msi.msi)              |
| ia32 | 便携版   | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_windows_ia32_portable.zip)         |

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
