---
title: F-Droid
description: The Termix app build for F-Droid and how to build it yourself.
---

# F-Droid

The F-Droid build of the Android app is the same app with no Google code in it. It is made from source by F-Droid, so it is signed with F-Droid's key and not ours. A phone cannot update from the Google Play or APK build to this one, or back. Install one or the other.

## What is different

- No Play Services, ML Kit or install referrer library.
- Scan a code is not in this build. Import hosts from a file, or paste a link, instead.
- Everything else works the same, including the terminal, files, tunnels, Docker, metrics, services and remote desktop.
- Usage statistics are in the app but off until you answer the question on first start. See [usage statistics](/privacy#mobile-app).

## Build it yourself

You need Node 24, Rust 1.99.1 with the four Android targets, cargo-ndk 4.1.2, zig 0.15.2, the Android NDK 27.1.12297006 and JDK 17.

```bash
git clone https://github.com/Termix-SSH/Mobile.git
cd Mobile
export TERMIX_FDROID=1
npm ci
node scripts/prepare-fdroid.cjs
sh scripts/build-native-fdroid.sh
npx expo prebuild --platform android --no-install
cd android && ./gradlew assembleRelease
```

The APK is unsigned. Sign it with your own key before you install it.

`build-native-fdroid.sh` builds the SSH engine and the terminal library from source. The libraries do not depend on the build path or the time, so two builds on the same toolchain give the same files.

The app's code is in the [Mobile repo](https://github.com/Termix-SSH/Mobile).
