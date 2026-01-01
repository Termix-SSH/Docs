# macOS Installation

## Installation Methods

### Apple App Store (Recommended)

Using your Apple device, visit [this link](https://apps.apple.com/us/app/termix-ssh-companion/id6752672071) or search `Termix - SSH Companion` on the Apple App Store. You can install and open it like you would any other app via the App Store.

Once installed and opened, follow the on-screen guide to connect to your existing Termix instance. If you enjoy the app, consider leaving an honest review so the app shows up higher in the search results.

Since Apple has to manually review the app on their app store, it may take a few days after a Termix update before its available on the App Store. The `Update Required` screen will appear whether or not the update is acutally available to download.

### Homebrew

Install via [homebrew](https://brew.sh/):

```bash
brew tap Termix-SSH/Termix https://github.com/Termix-SSH/Termix.git
brew install --cask termix
```

**Update:**

```bash
brew update
brew upgrade --cask termix
```

**Uninstall:**

```bash
brew uninstall --cask termix
```

> Termix is not available on the official homebrew repository. It may be available in the future.

### GitHub Releases

Click on the download link below for your specific device architecture and desired installation type.

| Architecture | Type | Download Link                                                                                            |
| ------------ | ---- | -------------------------------------------------------------------------------------------------------- |
| Universal    | DMG  | [Download](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_macos_universal_dmg.dmg) |
| x64          | DMG  | [Download](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_macos_x64_dmg.dmg)       |
| arm64        | DMG  | [Download](https://github.com/Termix-SSH/Termix/releases/latest/download/termix_macos_arm64_dmg.dmg)     |

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
