# API Keys

API keys let scripts, tools, or CI/CD pipelines talk to Termix without needing a username and password. Each key acts as a specific user.

## Creating a Key

1. Go to Admin Settings then the API Keys tab
2. Click Create API Key
3. Give it a name (e.g. `CI Pipeline`)
4. Pick which user it should act as
5. Optionally set an expiry date
6. Click Create API Key then copy the token shown. It won't be shown again.

## Using a Key

Add it as a `Bearer` token in the `Authorization` header of any request.

**curl:**
```bash
curl -H "Authorization: Bearer tmx_your_token_here" http://your-termix-url/host/db/hosts
```

**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://your-termix-url/host/db/hosts" `
  -Headers @{ "Authorization" = "Bearer tmx_your_token_here" }
```

**JavaScript / fetch:**
```js
fetch("http://your-termix-url/host/db/hosts", {
  headers: { Authorization: "Bearer tmx_your_token_here" }
})
```

## Revoking a Key

Go to API Keys in Admin Settings, find the key, and click the trash icon.

## Notes

- Tokens start with `tmx_`
- Keys work on any endpoint that only requires a logged-in user

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
