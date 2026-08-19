# Trusted Proxy Authentication

Trusted proxy auth lets a reverse proxy in front of Termix handle the login. The proxy checks who someone is, then tells Termix in a header, and Termix signs them in without asking again.

Use this when you already run something like Authelia, Authentik, or Cloudflare Access in front of your services and you do not want a second login screen.

:::warning
This hands the decision of who someone is to your proxy. If a request can reach Termix without passing through that proxy, whoever sent it can claim to be any user by setting a header. Do not turn this on until Termix is only reachable through the proxy.
:::

## How it works

1. Someone opens Termix. Your proxy makes them log in.
2. The proxy adds a header with the username, and optionally another with a role.
3. Termix checks the request came from an address you listed as trusted.
4. If it did, the user is signed in.

Step 3 is what makes it safe. Termix ignores those headers from anywhere except the addresses you name.

## Setting it up

Set these environment variables. See [Environment Variables](/setup/environment-variables) for where they go.

| Variable                             | What it does                                                          |
| ------------------------------------ | --------------------------------------------------------------------- |
| `TRUSTED_PROXY_AUTH_ENABLED`         | Set to `true` to turn it on                                           |
| `TRUSTED_PROXY_AUTH_TRUSTED_PROXIES` | Comma separated list of addresses or CIDR ranges you trust. Required. |
| `TRUSTED_PROXY_AUTH_ROLE_MAP`        | JSON mapping the role your proxy sends to a Termix role. Required.    |
| `TRUSTED_PROXY_AUTH_USERNAME_HEADER` | Header holding the username. Defaults to `x-forwarded-username`.      |
| `TRUSTED_PROXY_AUTH_ROLE_HEADER`     | Header holding the role. Defaults to `x-forwarded-role`.              |

Both the trusted proxy list and the role map are required. Termix will not start with this enabled and either one missing, rather than starting up in a state where anyone could set a header and get in.

Example:

```env
TRUSTED_PROXY_AUTH_ENABLED=true
TRUSTED_PROXY_AUTH_TRUSTED_PROXIES=172.18.0.0/16
TRUSTED_PROXY_AUTH_ROLE_MAP={"admins":"admin","staff":"user"}
```

Set the trusted list as tightly as you can. The single address of your proxy is better than a whole subnet.

## Getting the proxy address right

The address Termix sees is the one that actually connects to it, which is your proxy, not the person browsing. In Docker that is usually the container's address on the shared network. Check your container's IP rather than guessing.

If Termix rejects logins, the trusted list is nearly always the reason. Turn the log level up to see the address the request came from, then add that.

## Using it with other login methods

Trusted proxy auth works alongside local accounts, OIDC, and LDAP. You can leave normal password login on for admins so there is still a way in if the proxy has a problem.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
