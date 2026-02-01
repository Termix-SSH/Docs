# Environment Variables

| Config Name    | Variable     | Default | Note                                                                                                                                        |
|----------------| ------------ |---------|---------------------------------------------------------------------------------------------------------------------------------------------|
| Port           | `PORT`       | `8080`    | Port for the frontend web application. No additional ports should be exposed. Port must not fall within the restricted range `30001–30005`. |
| Enable SSL     | `Enable_SSL` | `false`   | See [SSL](/ssl) for more information on how to enable SSL encryption.                                                                       |
| OIDC Client ID | `OIDC_CLIENT_ID` | `none`    | See [OIDC](/oidc#environment-variables) for more information on how to override OIDC config with env variables.                             |
| Vite Base Path |  `VITE_BASE_PATH`| `/`     | See [Reverse Proxy](/reverse-proxy#changing-base-path) for more information on how to change the base path of Termix.                       |
