# Linux

## 安装方式

### Flatpak（推荐）

通过 [Flatpak](https://flatpak.org/) 安装：

```bash
wget https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_flatpak.flatpak
flatpak install --user termix_linux_flatpak.flatpak
```

**启动：**

```bash
flatpak run com.karmaa.termix
```

**更新：**

```bash
flatpak update com.karmaa.termix
```

**卸载：**

```bash
flatpak uninstall com.karmaa.termix
```

> Termix 目前未上架 Flatpak 官方仓库，未来可能会上架。

### GitHub Releases

点击下方对应你的设备架构和安装类型的下载链接。

| 架构   | 类型     | 下载链接                                                                                                            |
| ------ | -------- | ------------------------------------------------------------------------------------------------------------------- |
| x64    | AppImage | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_x64_appimage.AppImage)            |
| x64    | DEB      | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_x64_deb.deb)                      |
| x64    | 便携版   | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_x64_portable.tar.gz)              |
| arm64  | AppImage | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_arm64_appimage.AppImage)          |
| arm64  | DEB      | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_arm64_deb.deb)                    |
| arm64  | 便携版   | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_arm64_portable.tar.gz)            |
| armv7l | AppImage | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_armv7l_appimage.AppImage)         |
| armv7l | DEB      | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_armv7l_deb.deb)                   |
| armv7l | 便携版   | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_linux_armv7l_portable.tar.gz)           |

如果你使用的是可执行文件版本的 Termix，请在可执行文件所在目录运行以下命令来设置正确的权限：

```
chmod +x termix
sudo chown root:root chrome-sandbox
sudo chmod 4755 chrome-sandbox
```

启动应用，运行：

`./termix --no-sandbox`

请勿使用 `sudo` 启动。

### AUR

可以在[这里](https://aur.archlinux.org/packages/termix-bin)找到。版本可能不是最新的。

安装命令示例：
```bash
yay -S termix-bin
```

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
