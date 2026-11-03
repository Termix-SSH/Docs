---
title: F-Droid
description: The Termix app build for F-Droid and how to build it yourself.
---

# F-Droid

The F-Droid build of the Android app is the same app with no Google code in it. It is made from source by F-Droid, so it is signed with F-Droid's key and not ours. A phone cannot update from the Google Play or APK build to this one, or back. Install one or the other.

## Install

Open [Termix on F-Droid](https://f-droid.org/packages/com.karmaa.termix/) on your phone, or search for Termix in the F-Droid app. It also works in other F-Droid clients like Droid-ify and Neo Store.

Termix is still waiting to be added to F-Droid. Until it shows up there, use [Google Play or the APK](android.md), or build it yourself below.

F-Droid builds each new version on its own servers after we tag it, so updates show up there a few days after Google Play and GitHub.

To move from the Google Play or APK build, make a backup first in Settings, Local data, Export backup. Then uninstall the app, install it from F-Droid and use Import backup in the same place. A linked server syncs its hosts back after you sign in again.

## What is different

- No Play Services, ML Kit or install referrer library.
- Scan a code is not in this build. Import hosts from a file, or paste a link, instead.
- Everything else works the same, including the terminal, files, tunnels, Docker, metrics, services and remote desktop.
- Usage statistics are in the app but off until you answer the question on first start. See [usage statistics](/privacy#mobile-app).

## Build it yourself

You need Node 24, Rust 1.99.1 with the four Android targets, cargo-ndk 4.1.2, zig 0.15.2, the Android NDK 27.1.12297006 and JDK 17. These are the same steps F-Droid runs, from the recipe in [docs/fdroid](https://github.com/Termix-SSH/Mobile/tree/main/docs/fdroid).

```bash
git clone https://github.com/Termix-SSH/Mobile.git
cd Mobile
export TERMIX_FDROID=1
export ANDROID_NDK_HOME=$ANDROID_HOME/ndk/27.1.12297006
npm ci
node scripts/prepare-fdroid.cjs
sh scripts/build-native-fdroid.sh
npx expo prebuild --platform android --no-install
cd android && ./gradlew assembleRelease
```

The APK is unsigned. Sign it with your own key before you install it.

This makes one APK for every phone type. F-Droid makes a smaller APK for each one instead. To do the same, also set `TERMIX_FDROID_VERCODE` to the version code times ten plus 1 for armeabi-v7a, 2 for arm64-v8a, 3 for x86 or 4 for x86_64. For 2.0.0 on most phones that is `export TERMIX_FDROID_VERCODE=200002`.

`build-native-fdroid.sh` builds the SSH engine and the terminal library from source. The libraries do not depend on the build path or the time, so two builds on the same toolchain give the same files.

The app's code is in the [Mobile repo](https://github.com/Termix-SSH/Mobile).
