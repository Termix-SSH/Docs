# Installation

Choose the installation method that works best for your platform and use case.

## Server

For running the required Termix backend and web-app front end:

- **[Docker](./install/server/docker.mdx)** - The simplest way to get Termix server up and running with Docker.
- **[Manual](./install/server/manual.md)** - Build and compile Termix from source code for custom deployments.
- **[Proxmox](./install/server/proxmox.md)** - Install to Proxmox as a container via Proxmox VE Helper-Scripts.

All of these store data in SQLite by default, which needs no setup. PostgreSQL and MySQL are also supported if you would rather use a database server you already run. See [Database](/setup/database).

Not sure how much CPU, memory, or disk to give it? See [Benchmarks](/benchmarks) for measured usage and minimum specs. For most people, 1 core and 1 GB of RAM is plenty.

## Cloud Hosting

For hosting the Termix server on a cloud provider. Running Termix outside the network it manages means an outage cannot take Termix with it, so your hosts and saved sessions stay reachable when you need them most. You also get a static IP and access from anywhere without a VPN or port forward.

- **[GINERNET](./install/ginernet.md)** - Install and run the Termix server on a GINERNET VPS.

## Connector

For running Termix as a client/connector application that connects to the server (requires one of the above server installations to be running):

- **[Windows](./install/connector/windows.md)** - Download Windows portable executable or installer.
- **[Linux](./install/connector/linux.md)** - Download Linux portable executable or installer.
- **[macOS](./install/connector/macos.md)** - Download macOS portable executable or via the App Store.
- **[iOS](./install/connector/ios.md)** - Download iOS mobile app from the Apple App Store or via `.ipa`.
- **[Android](./install/connector/android.md)** - Download Android mobile app from the Google Play Store or via `.apk`.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
