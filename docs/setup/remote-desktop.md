# Remote Desktop (RDP, VNC, Telnet)

All remote desktop features in Termix rely on [guacd](https://hub.docker.com/r/guacamole/guacd). It's the gateway/proxy backend that translates the remote desktop protocol into HTML.

Remote desktop is also available on mobile clients.

## Setting Up

### Step 1: Install guacd

Unlike other tools in Termix, guacd is not automatically installed. To install it (natively or in Docker), you can visit [Apache Guacamole Docs](https://guacamole.apache.org/doc/gug/installing-guacamole.html). The docs will mention their tool called guacamole, all you need is guacd.

#### Quick Installation Methods

**Docker Compose:** Use the official Docker compose in [install](/install/server/docker#installation). \
**Docker Run:** `docker run --name some-guacd -d guacamole/guacd`. Ensure this guacd container is accessible to the Termix container using Docker networks. \
**Native:** Manually compile and run from [GitHub](https://github.com/apache/guacamole-server).

### Step 2: Configuring Termix

Visit the Admin Settings by clicking on your username on the bottom left. In the General tab, you will see a `Enable RDP/VNC/Telnet Support` toggle, ensure its enabled with a checkmark. Then, enter the URL of your guacd service in the input under the toggle:

#### Example URLs

**Official Docker Compose:** `guacd:4822` \
**Docker Run:** `guacd:4822` (depends on your network setup) \
**Native:** `localhost:4822`

### Step 3: Create the Host

Visit the Host Manager using the bottom in the top left. Find the Add Host button and select your remote desktop protocol of choice at the top.

You are then given the opportunity to enter the IP, username, password, options, etc. just like any other remote desktop client.

## Session Recording

RDP, VNC, and Telnet hosts can record their sessions to video files on disk. In the host's settings, under Session Recording, set a Recording Path on the server running guacd, and Termix will save a recording every time someone connects. This is separate from the [Session Recording](/features/terminal/session-recording) for SSH terminals, which stores plain text logs instead of video.

## Environment Variables

See [Environment Variables](/setup/environment-variables#guacamole-configuration).

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
