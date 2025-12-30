# Docker

To be consistent with the rest of Termix, it does NOT use the Docker socket (unlike alternatives). Instead, it obtains its information via commands over SSH. This also makes the setup way easier for you, the user.

## Setting Up Docker

If Docker is installed on the system and in the `$PATH`, and the user has permission to run docker, then the Termix docker integration will likely already work.

If `sudo` is installed on the system and the user does not have permission to use Docker without it, then, you will be met with an error since Termix does not run any of the Docker commands with sudo. To fix this, add your user to the docker group:

```bash
sudo usermod -aG docker $USER
```

Your user will now be inside the Docker group and should now also connect properly!

## Trouble Shooting

- Make sure the user can run `docker --version` without error or without being prompted for any form of password
- Confirm that your credentials are correct by trying a terminal or file manager session

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
