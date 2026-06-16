# Tailscale

Termix can talk to your Tailscale tailnet in two ways: pulling in your device list so you don't have to type in IPs by hand, and connecting to hosts using Tailscale SSH instead of a password or key.

## Device discovery

1. Go to [tailscale.com/admin/settings/keys](https://tailscale.com/admin/settings/keys) and generate an API key. A key with read access to devices is enough.
2. In Termix, open **Admin Settings** and paste the key into the Tailscale API Key field.
3. Save it. The key is encrypted before it's stored.

Once a key is set, open the Host Editor and you'll see a device dropdown. Picking a device fills in the host's IP for you, preferring its `100.x` Tailscale address if it has one.

This is just a shortcut for filling in an IP. It doesn't import the device as a host automatically, and it doesn't authenticate anything on its own. You still need to set up SSH access on that host, either with a password, key, or Tailscale SSH below.

## Tailscale SSH

If your servers run [Tailscale SSH](https://tailscale.com/kb/1193/tailscale-ssh), you can set a host's auth method to **Tailscale** instead of password or key. Termix won't send any SSH credentials at all. Your `tailscaled` daemon on the server handles checking who's connecting and whether your tailnet's ACL policy allows it.

To use this, the server needs to be running Tailscale with SSH turned on:

```bash
tailscale set --ssh
```

If the connection fails, check that Tailscale is running on the server, that SSH is advertised with the command above, and that your ACL policy allows the connection from the machine running Termix.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
