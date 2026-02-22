# macOS

## 安装方式

### Apple App Store（推荐）

使用你的 Apple 设备，访问[此链接](https://apps.apple.com/us/app/termix-ssh-companion/id6752672071)或在 Apple App Store 中搜索 `Termix - SSH Companion`。你可以像安装其他应用一样通过 App Store 安装并打开它。

安装并打开后，按照屏幕上的引导连接到你已有的 Termix 实例。如果你喜欢这个应用，请考虑留下真实的评价，这样可以帮助应用在搜索结果中获得更高的排名。

由于 Apple 需要对应用商店中的应用进行人工审核，Termix 更新后可能需要几天时间才能在 App Store 上下载到新版本。无论更新是否已可供下载，都会显示 `Update Required` 界面。

### Homebrew

通过 [Homebrew](https://brew.sh/) 安装：

```bash
brew tap Termix-SSH/Termix https://github.com/Termix-SSH/Termix.git
brew install --cask termix
```

**更新：**

```bash
brew update
brew upgrade --cask termix
```

**卸载：**

```bash
brew uninstall --cask termix
```

> Termix 目前未上架 Homebrew 官方仓库，未来可能会上架。

### GitHub Releases

点击下方对应你的设备架构和安装类型的下载链接。

| 架构      | 类型 | 下载链接                                                                                                     |
| --------- | ---- | ------------------------------------------------------------------------------------------------------------ |
| Universal | DMG  | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_macos_universal_dmg.dmg)         |
| x64       | DMG  | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_macos_x64_dmg.dmg)               |
| arm64     | DMG  | [下载](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_macos_arm64_dmg.dmg)             |

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
