# OIDC (OpenID Connect)

本指南介绍如何在 Termix 的管理设置中配置 OpenID Connect (OIDC) 身份认证，以启用外部身份提供商认证。

## 概述

OIDC 允许用户通过外部身份提供商（如 Google、Microsoft、Okta、Auth0 等）进行认证，而无需使用本地账户。这提供了更强的安全性、单点登录能力以及集中化的用户管理。

## 前提条件

在配置 OIDC 之前，你需要：

1. **管理员权限**：你必须是 Termix 的管理员
2. **OIDC 提供商账户**：一个兼容 OIDC 的身份提供商账户
3. **应用注册**：在你的 OIDC 提供商中注册一个应用

## 访问 OIDC 设置

1. 在 Termix 中进入 **Admin Settings**
2. 点击 **OIDC** 选项卡
3. 你将看到包含所有必填字段的 OIDC 配置表单

## 必填配置字段

### 1. Client ID

- **用途**：你的应用在 OIDC 提供商中的唯一标识符
- **获取方式**：在 OIDC 提供商中注册应用时提供
- **示例**：`myapp-client-id-12345`

### 2. Client Secret

- **用途**：用于向 OIDC 提供商验证你的应用身份的密钥
- **获取方式**：在 OIDC 提供商中注册应用时提供
- **示例**：`myapp-secret-key-abcdef123456`

### 3. Authorization URL

- **用途**：用户被重定向以进行认证的端点
- **格式**：由 OIDC 提供商提供的 HTTPS URL
- **示例**：`https://your-provider.com/application/o/authorize/`

### 4. Issuer URL

- **用途**：标识你的 OIDC 提供商的基础 URL
- **格式**：唯一标识你的提供商的 HTTPS URL
- **示例**：`https://your-provider.com/application/o/termix/`

### 5. Token URL

- **用途**：你的应用用授权码交换访问令牌的端点
- **格式**：由 OIDC 提供商提供的 HTTPS URL
- **示例**：`https://your-provider.com/application/o/token/`

## 可选配置字段

### 6. User Identifier Path

- **用途**：从 ID token 中提取唯一用户标识符的 JSON 路径
- **默认值**：`sub`（标准 OIDC 字段）
- **常用值**：`sub`、`user_id`、`id`、`email`
- **示例**：如果你的 ID token 为 `{"user": {"id": "12345"}}`，则使用 `user.id`

### 7. Display Name Path

- **用途**：从 ID token 中提取用户显示名称的 JSON 路径
- **默认值**：`name`（标准 OIDC 字段）
- **常用值**：`name`、`display_name`、`full_name`、`username`
- **示例**：如果你的 ID token 为 `{"profile": {"display_name": "John Doe"}}`，则使用 `profile.display_name`

### 8. Scopes

- **用途**：向 OIDC 提供商请求的权限范围
- **默认值**：`openid email profile`
- **常用 scope**：
  - `openid`：OIDC 认证必需
  - `email`：访问用户的电子邮箱地址
  - `profile`：访问基本个人资料信息
  - `groups`：访问用户组成员信息（如果支持）
- **示例**：`openid email profile groups`

### 9. Override User Info URL

- **用途**：当你遇到 `Failed to get user information` 错误时，用于覆盖自动生成的 User Info URL
- **常用值**：`https://your-provider.com/application/o/userinfo/`

## 分步配置指南

### 步骤 1：注册你的应用

1. 登录你的 OIDC 提供商管理控制台
2. 创建一个新的应用或客户端
3. 将应用类型设置为 "Web Application" 或 "Public Client"
4. 记下 Client ID 和 Client Secret

### 步骤 2：获取提供商 URL

1. 在你的 OIDC 提供商中，找到 discovery 端点
2. 记下 Authorization URL、Token URL 和 Issuer URL

### 步骤 3：配置 Termix

1. 打开 Termix Admin Settings → OIDC 选项卡
2. 使用从提供商获取的信息填写所有必填字段
3. 根据你的提供商的 token 结构调整可选字段
4. 点击 "Save Configuration"

### 步骤 4：测试配置

1. 登出
2. 你应该能看到使用 OIDC 提供商登录的选项
3. 认证流程应该会重定向到你的提供商然后返回

## 常见 OIDC 提供商

### Google

- **Authorization URL**: `https://accounts.google.com/o/oauth2/v2/auth`
- **Token URL**: `https://oauth2.googleapis.com/token`
- **Issuer URL**: `https://accounts.google.com`
- **Scopes**: `openid email profile`

### Microsoft (Azure AD)

- **Authorization URL**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/authorize`
- **Token URL**: `https://login.microsoftonline.com/{tenant-id}/oauth2/v2.0/token`
- **Issuer URL**: `https://login.microsoftonline.com/{tenant-id}/v2.0`
- **Scopes**: `openid email profile`

### Auth0

- **Authorization URL**: `https://{your-domain}.auth0.com/authorize`
- **Token URL**: `https://{your-domain}.auth0.com/oauth/token`
- **Issuer URL**: `https://{your-domain}.auth0.com/`
- **Scopes**: `openid email profile`

### Okta

- **Authorization URL**: `https://{your-domain}.okta.com/oauth2/v1/authorize`
- **Token URL**: `https://{your-domain}.okta.com/oauth2/v1/token`
- **Issuer URL**: `https://{your-domain}.okta.com/oauth2/default`
- **Scopes**: `openid email profile`

### Keycloak

- **Authorization URL**: `https://{your-keycloak.domain}/realms/{your_realm_name}/protocol/openid-connect/auth`
- **Token URL**: `https://{your-keycloak.domain}/realms/{your_realm_name}/protocol/openid-connect/token`
- **Issuer URL**: `https://{your-keycloak-domain}/realms/{your_realm_name}`
- **Valid redirect URIs**: `https://termix.{your-domain}/users/oidc/callback`
- **Scopes**: `openid email profile`

### Authelia

- **Authorization URL**: `https://authelia.{your-domain}/api/oidc/authorization`
- **Token URL**: `https://authelia.{your-domain}/api/oidc/token`
- **Issuer URL**: `https://authelia.{your-domain}`
- **Scopes**: `openid email profile`
- **Authelia 配置**：

```yaml
identity_providers:
  oidc:
    claims_policies:
      legacy:
        id_token: ['email', 'email_verified', 'preferred_username', 'name']

    authorization_policies:
      termix:
        default_policy: deny
        rules:
          - policy: one_factor
            subject: group:termix

    clients:
      - client_id: termix
        client_secret: client_secret_here
        public: false
        authorization_policy: termix
        consent_mode: implicit
        claims_policy: legacy
        grant_types:
          - authorization_code
        response_types:
          - code
        scopes:
          - openid
          - profile
          - email
        redirect_uris:
          - https://termix.{your-domain}/users/oidc/callback
        token_endpoint_auth_method: client_secret_post
```

## 高级配置

### 环境变量
设置环境变量将优先于数据库中存储的配置。

| 变量 | 必填 | 默认值 |
|----------|----------|---------|
| OIDC_CLIENT_ID | 是 | - |
| OIDC_CLIENT_SECRET | 是 | - |
| OIDC_ISSUER_URL | 是 | - |
| OIDC_AUTHORIZATION_URL | 是 | - |
| OIDC_TOKEN_URL | 是 | - |
| OIDC_USERINFO_URL | 否 | "" |
| OIDC_IDENTIFIER_PATH | 否 | "sub" |
| OIDC_NAME_PATH | 否 | "name" |
| OIDC_SCOPES | 否 | "openid email profile" |

### 关联本地/OIDC 账户

使用管理员账户访问 `Admin Settings`，点击 OIDC 主机上的蓝色链条图标，然后输入本地账户的用户名。可以通过已关联的本地账户上的橙色链条图标来移除关联。

### 多 OIDC 提供商

目前，Termix 一次只支持一个 OIDC 提供商。如需切换提供商，请使用新提供商的详细信息更新配置。

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
