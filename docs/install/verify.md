---
title: Verify your download
description: Check that a Termix file or image is the one Termix built.
---

# Verify your download

Every file and image Termix ships can be checked. You do not need to trust the download site, only the checks below.

Releases from 26.11.2 on carry:

- A signed `SHA256SUMS` file on each core release, with a `SHA256SUMS.sigstore.json` bundle and a `SHA256SUMS.sig` release key signature next to it.
- Build provenance for each desktop file, portable archive, Flatpak bundle, plugin, CLI binary and mobile file. It says which workflow built the file from which commit.
- A keyless signature, build provenance and an SBOM on each Docker image.

Older releases have none of these.

The desktop app checks updates for you. From 26.11.2 on it installs an update on Windows, macOS, AppImage and deb only after both signatures on the release's `SHA256SUMS` check out (Sigstore, and the release key the Termix root key vouches for, see [Signing keys](signing-keys.md)) and the downloaded file matches it. A release without a signed `SHA256SUMS` is offered as a download link instead.

## Tools

- [GitHub CLI](https://cli.github.com/) 2.49 or newer, for `gh attestation verify`. Sign in once with `gh auth login`.
- [cosign](https://docs.sigstore.dev/cosign/system_config/installation/) 2.5 or newer, for the checksum file and Docker images.

## Desktop app, portable archives and Flatpak bundles

Download the file from the [releases page](https://github.com/Termix-SSH/Termix/releases), then:

```bash
gh attestation verify termix_linux_x64_appimage.AppImage --repo Termix-SSH/Termix
```

Use the real file name. The command prints the workflow and commit that built the file, and fails if the file was changed.

The Windows MSI, the Windows installer, macOS disk images and Linux packages are checked the same way. The Microsoft Store, Mac App Store, Chocolatey and Homebrew builds use the same release files.

## Checksums

Download `SHA256SUMS` and `SHA256SUMS.sigstore.json` from the same release. First check the signature:

```bash
cosign verify-blob SHA256SUMS \
  --bundle SHA256SUMS.sigstore.json \
  --certificate-identity-regexp '^https://github\.com/Termix-SSH/Termix/\.github/workflows/release\.yml@refs/' \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com
```

It prints `Verified OK`. Then check each file you downloaded against it. Put the downloads in the same folder as `SHA256SUMS`.

Linux:

```bash
grep ' termix_linux_x64_appimage.AppImage$' SHA256SUMS | sha256sum -c -
```

macOS:

```bash
grep ' termix_macos_arm64_dmg.dmg$' SHA256SUMS | shasum -a 256 -c -
```

Use your own file name. The check should say `OK`.

Windows PowerShell, one file at a time. Compare the result with the line for that file in `SHA256SUMS`:

```powershell
Get-FileHash .\termix_windows_x64_nsis.exe -Algorithm SHA256
```

## Docker image

Check the signature of the tag you pull:

```bash
cosign verify ghcr.io/termix-ssh/termix:latest \
  --certificate-identity-regexp '^https://github\.com/Termix-SSH/Termix/\.github/workflows/docker\.yml@refs/' \
  --certificate-oidc-issuer https://token.actions.githubusercontent.com
```

Docker Hub works the same way. Use `docker.io/bugattiguy527/termix:latest` or `docker.io/termixssh/termix:latest` in place of the image name. Other tags work too, for example `26.11.2-full`.

Each image also holds its build provenance and SBOM. Print them with:

```bash
docker buildx imagetools inspect ghcr.io/termix-ssh/termix:latest --format '{{ json .Provenance }}'
docker buildx imagetools inspect ghcr.io/termix-ssh/termix:latest --format '{{ json .SBOM }}'
```

To pin an install, use the digest that `cosign verify` checked, like `ghcr.io/termix-ssh/termix@sha256:...`.

The server's dependency list is also in the image at `/app/sbom.cdx.json` and on each release as `termix_sbom.cdx.json`.

## Plugins

A plugin file (`.tmxplug`) is signed by Termix, and Termix checks that signature itself before it installs or updates a plugin. [Signing keys](signing-keys.md) explains which keys it trusts. To check one by hand, download it from the plugin's releases page, then:

```bash
gh attestation verify my-plugin-1.0.0.tmxplug --owner Termix-SSH
```

## Mobile

The Android and iOS files on the [mobile releases page](https://github.com/Termix-SSH/Mobile/releases):

```bash
gh attestation verify termix_android.apk --repo Termix-SSH/Mobile
```

Builds from Google Play and the App Store are signed by the stores.

## CLI

Binaries from the [CLI releases page](https://github.com/Termix-SSH/CLI/releases):

```bash
gh attestation verify termix_linux_x64 --repo Termix-SSH/CLI
```

The npm package carries npm provenance. In a folder with a `package.json`:

```bash
npm install @termix-ssh/cli
npm audit signatures
```

## If a check fails

Do not install the file. Download it again, and if it still fails, [report it privately](https://github.com/Termix-SSH/Termix/security/advisories/new).
