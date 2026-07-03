# HashiCorp Vault SSH Signer

Termix can use HashiCorp Vault as an SSH certificate authority. Instead of storing a password or key, Termix signs in to Vault via OIDC and asks it to sign a short-lived SSH certificate. The signed cert is used for the connection and then thrown away. No secrets are stored in Termix.

## How it works

1. You connect to a host that has Vault set as its auth method.
2. Termix opens a browser window for you to sign in to Vault via OIDC.
3. Once signed in, Vault issues a signed SSH certificate.
4. Termix uses that cert to authenticate with the SSH server.

Your SSH servers need to be configured to trust Vault's CA. See the [Vault SSH Secrets Engine docs](https://developer.hashicorp.com/vault/docs/secrets/ssh/signed-ssh-certificates) for that setup.

## Setting up a Vault profile

Go to the Host Editor, set the auth method to Vault Signer, and click Manage Vault profiles. Create a new profile with:

- Vault Address - the URL of your Vault server, e.g. `https://vault.example.com`
- Namespace - optional, for Vault Enterprise namespaces
- OIDC Auth Mount - the path of the OIDC auth method, defaults to `oidc`
- OIDC Role - the Vault OIDC role to request
- SSH Secrets Mount - the path of the SSH secrets engine, defaults to `ssh-client-signer`
- SSH Signer Role - the Vault SSH role that controls what principals and extensions the cert gets
- Valid Principals - optional comma-separated list of principals to request
- Ephemeral Key Type - the key type for the throwaway keypair, defaults to `ssh-ed25519`

Profiles can be shared with all users, which is handy if everyone connects to the same Vault.

## Assigning a profile to a host

In the Host Editor, set the auth method to Vault Signer and pick a profile from the dropdown. When you connect, Termix will open the Vault OIDC sign-in window. Complete the sign-in there and the connection will continue automatically.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
