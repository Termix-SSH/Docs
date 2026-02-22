# JSON 导入格式

使用本指南创建 JSON 文件，以批量导入 SSH 主机。

## 必填字段

- **`ip`** - 主机 IP 地址（string）
- **`port`** - SSH 端口（number，1-65535）
- **`username`** - SSH 用户名（string）
- **`authType`** - 认证类型：`"password"`、`"key"`、`"credential"` 或 `"none"`

## 认证字段

### 密码认证

- **`password`** - 当 authType 为 "password" 时必填（string）

### 密钥认证

- **`key`** - SSH 私钥内容（string）- 当 authType 为 "key" 时必填
- **`keyPassword`** - 可选的密钥口令（string）
- **`keyType`** - 密钥类型（string）：`"auto"`（默认）、`"ssh-rsa"`、`"ssh-ed25519"`、`"ecdsa-sha2-nistp256"`、`"ecdsa-sha2-nistp384"`、`"ecdsa-sha2-nistp521"`、`"ssh-dss"`、`"ssh-rsa-sha2-256"`、`"ssh-rsa-sha2-512"`

### 凭据认证

- **`credentialId`** - 已有凭据的 ID（number）- 当 `authType` 为 `"credential"` 时必填
  - 注意：在导入引用凭据的主机之前，必须先在 Termix 中创建凭据。可在凭据查看器中的 `ID:` 文本处找到对应 ID。
- **`overrideCredentialUsername`** - 覆盖凭据中的用户名（boolean，默认：false）- 仅在使用凭据认证时生效。启用后，将使用主机中指定的用户名而非凭据中的用户名。

### 无认证

- 无需额外字段。适用于使用证书认证的主机，或认证由外部处理的场景。

## 组织字段

- **`name`** - 显示名称（string，未提供时自动生成为 `username@ip`）
- **`folder`** - 组织文件夹（string，默认："Default"）
- **`tags`** - 标签字符串数组（array，默认：[]）
- **`pin`** - 置顶到主机列表顶部（boolean，默认：false）
- **`notes`** - 关于主机的备注（string，可选）

## 功能开关

- **`enableTerminal`** - 启用终端访问（boolean，默认：true）
- **`enableTunnel`** - 启用 SSH 隧道（boolean，默认：true）
- **`enableFileManager`** - 启用文件管理器访问（boolean，默认：true）
- **`enableDocker`** - 启用 Docker 集成（boolean，默认：false）
- **`defaultPath`** - 文件管理器的默认目录路径（string，默认："/"）

## 隧道配置

为此主机配置 SSH 端口转发隧道：

- **`tunnelConnections`** - 隧道对象数组（array，默认：[]）
  - **`sourcePort`** - Termix 服务器上的本地端口（number，1-65535）
  - **`endpointPort`** - 目标服务器上的远程端口（number，1-65535）
  - **`endpointHost`** - 目标主机名称（string）- 必须匹配已有主机的名称或 `username@ip` 格式
  - **`maxRetries`** - 失败时的重试次数（number，0-100，默认：3）
  - **`retryInterval`** - 重试间隔秒数（number，1-3600，默认：10）
  - **`autoStart`** - Termix 启动时自动开启隧道（boolean，默认：false）

## 高级配置

### SOCKS5 代理配置

为 SSH 连接配置 SOCKS 代理（单个代理或代理链）：

- **`useSocks5`** - 启用 SOCKS5 代理（boolean，默认：false）
- **`socks5Host`** - SOCKS5 代理主机地址（string）- 用于单代理模式
- **`socks5Port`** - SOCKS5 代理端口（number，1-65535，默认：1080）- 用于单代理模式
- **`socks5Username`** - SOCKS5 代理用户名（string，可选）- 用于单代理模式
- **`socks5Password`** - SOCKS5 代理密码（string，可选）- 用于单代理模式
- **`socks5ProxyChain`** - 代理链节点数组（array，默认：[]）- 用于代理链模式
  - **`host`** - 代理服务器主机名或 IP（string）
  - **`port`** - 代理服务器端口（number，1-65535）
  - **`type`** - 代理协议版本：`4` 表示 SOCKS4，`5` 表示 SOCKS5（number）
  - **`username`** - 代理认证用户名（string，可选）
  - **`password`** - 代理认证密码（string，可选）

**注意：** 请选择单代理模式（使用 `socks5Host`、`socks5Port` 等）或代理链模式（使用 `socks5ProxyChain`）其中之一。如果 `socks5ProxyChain` 中有条目，将优先使用代理链而非单代理设置。

### 统计配置

配置主机监控和统计数据收集：

- **`statsConfig`** - 统计配置对象
  - **`enabledWidgets`** - 已启用的组件类型数组（array，默认：["cpu", "memory", "disk", "network", "uptime", "system", "login_stats"]）
    - 可用组件：`"cpu"`、`"memory"`、`"disk"`、`"network"`、`"uptime"`、`"processes"`、`"system"`、`"login_stats"`
  - **`statusCheckEnabled`** - 启用定期状态检查（boolean，默认：true）
  - **`statusCheckInterval`** - 状态检查间隔秒数（number，5-3600，默认：30）
  - **`metricsEnabled`** - 启用指标收集（boolean，默认：true）
  - **`metricsInterval`** - 指标收集间隔秒数（number，5-3600，默认：30）

### 跳板主机（堡垒机/代理主机）

配置通过中间服务器的多跳 SSH 连接：

- **`jumpHosts`** - 跳板主机对象数组（array，默认：[]）
  - **`hostId`** - 用作跳板主机的已有 Termix 主机 ID（number）
  - 可在主机查看器中的 `ID:` 文本处找到对应 ID。

### 快捷操作

使用已保存的代码片段配置一键命令：

- **`quickActions`** - 快捷操作对象数组（array，默认：[]）
  - **`name`** - 操作的显示名称（string）
  - **`snippetId`** - 要执行的已有代码片段 ID（number）
  - 注意：在导入引用代码片段的主机之前，必须先在 Termix 中创建代码片段。可在 SSH 工具栏中的 `ID:` 文本处找到对应 ID。

### 终端配置

自定义终端外观和行为：

- **`terminalConfig`** - 终端配置对象（可选）
  - **`cursorBlink`** - 启用光标闪烁（boolean，默认：true）
  - **`cursorStyle`** - 光标样式：`"block"`、`"underline"` 或 `"bar"`（string，默认："block"）
  - **`fontSize`** - 字体大小，单位像素（number，8-24，默认：14）
  - **`fontFamily`** - 字体族名称（string，默认："monospace"）
  - **`letterSpacing`** - 字间距，单位像素（number，-2 到 10，默认：0）
  - **`lineHeight`** - 行高倍数（number，1.0-2.0，默认：1.0）
  - **`theme`** - 颜色主题名称（string，默认："termixDark"）
  - **`scrollback`** - 回滚缓冲区大小，单位行（number，1000-100000，默认：10000）
  - **`bellStyle`** - 响铃通知样式：`"none"`、`"sound"`、`"visual"` 或 `"both"`（string，默认："none"）
  - **`rightClickSelectsWord`** - 右键选择单词（boolean，默认：false）
  - **`fastScrollModifier`** - 快速滚动修饰键：`"alt"`、`"ctrl"` 或 `"shift"`（string，默认："alt"）
  - **`fastScrollSensitivity`** - 快速滚动灵敏度（number，1-10，默认：5）
  - **`minimumContrastRatio`** - 文本最低对比度（number，1-21，默认：1）
  - **`backspaceMode`** - 退格键模式：`"normal"` 或 `"control-h"`（string，默认："normal"）
  - **`agentForwarding`** - 启用 SSH agent 转发（boolean，默认：false）
  - **`environmentVariables`** - 环境变量对象数组（array，默认：[]）
    - **`key`** - 变量名（string）
    - **`value`** - 变量值（string）
  - **`startupSnippetId`** - 终端启动时运行的代码片段 ID（number，可为 null）
  - **`autoMosh`** - 可用时自动使用 Mosh（boolean，默认：false）
  - **`moshCommand`** - 自定义 Mosh 命令（string，默认："mosh"）
  - **`sudoPasswordAutoFill`** - 自动填充 sudo 密码（boolean，默认：false）
  - **`sudoPassword`** - 用于 sudo 自动填充的密码（string，可选）

### 高级 SSH 设置

- **`forceKeyboardInteractive`** - 强制使用键盘交互认证（boolean，默认：false）

## JSON 结构示例

### 基本结构

导入文件必须是包含 `"hosts"` 数组的 JSON 对象，或者文件本身直接是主机对象的数组。

```json
{
  "hosts": [
    {
      "name": "Web Server - Production",
      "ip": "192.168.1.100",
      "port": 22,
      "username": "admin",
      "authType": "password",
      "password": "your_secure_password_here",
      "folder": "Production",
      "tags": ["web", "production", "nginx"],
      "pin": true,
      "notes": "Main production web server running Nginx. Contact ops@company.com for access.",
      "enableTerminal": true,
      "enableTunnel": false,
      "enableFileManager": true,
      "enableDocker": false,
      "defaultPath": "/var/www"
    },
    {
      "name": "Database Server",
      "ip": "192.168.1.101",
      "port": 22,
      "username": "dbadmin",
      "authType": "key",
      "key": "-----BEGIN OPENSSH PRIVATE KEY-----\nYour SSH private key content here\n-----END OPENSSH PRIVATE KEY-----",
      "keyPassword": "optional_key_passphrase",
      "keyType": "ssh-ed25519",
      "folder": "Production",
      "tags": ["database", "production", "postgresql"],
      "pin": false,
      "notes": "PostgreSQL production database. Requires VPN access.",
      "enableTerminal": true,
      "enableTunnel": true,
      "enableFileManager": false,
      "enableDocker": false,
      "tunnelConnections": [
        {
          "sourcePort": 5432,
          "endpointPort": 5432,
          "endpointHost": "Web Server - Production",
          "maxRetries": 3,
          "retryInterval": 10,
          "autoStart": true
        }
      ],
      "statsConfig": {
        "enabledWidgets": ["cpu", "memory", "disk", "network", "uptime"],
        "statusCheckEnabled": true,
        "statusCheckInterval": 30,
        "metricsEnabled": true,
        "metricsInterval": 30
      }
    },
    {
      "name": "Development Server",
      "ip": "192.168.1.102",
      "port": 2222,
      "username": "developer",
      "authType": "credential",
      "credentialId": 1,
      "overrideCredentialUsername": false,
      "folder": "Development",
      "tags": ["dev", "testing"],
      "pin": false,
      "notes": "Development environment for testing new features.",
      "enableTerminal": true,
      "enableTunnel": false,
      "enableFileManager": true,
      "enableDocker": true,
      "defaultPath": "/home/developer"
    },
    {
      "name": "Private Network Server",
      "ip": "10.0.0.50",
      "port": 22,
      "username": "sysadmin",
      "authType": "password",
      "password": "secure_password",
      "folder": "Infrastructure",
      "tags": ["bastion", "jump-host"],
      "notes": "Jump host for accessing internal network servers.",
      "enableTerminal": true,
      "enableTunnel": true,
      "enableFileManager": true,
      "jumpHosts": [
        {
          "hostId": 1
        }
      ],
      "quickActions": [
        {
          "name": "System Update",
          "snippetId": 5
        },
        {
          "name": "Check Disk Space",
          "snippetId": 12
        }
      ]
    },
    {
      "name": "Certificate-Based Server",
      "ip": "192.168.1.200",
      "port": 22,
      "username": "certuser",
      "authType": "none",
      "folder": "Secure Hosts",
      "tags": ["cert-auth", "secure"],
      "notes": "Uses certificate-based authentication. Cert must be installed in SSH agent.",
      "enableTerminal": true,
      "enableTunnel": false,
      "enableFileManager": false,
      "forceKeyboardInteractive": false
    },
    {
      "name": "Server Behind Single Proxy",
      "ip": "10.10.10.100",
      "port": 22,
      "username": "proxyuser",
      "authType": "password",
      "password": "secure_password",
      "folder": "Proxied Hosts",
      "tags": ["proxy", "socks5"],
      "notes": "Accessible through corporate SOCKS5 proxy.",
      "useSocks5": true,
      "socks5Host": "proxy.example.com",
      "socks5Port": 1080,
      "socks5Username": "proxyauth",
      "socks5Password": "proxypass"
    },
    {
      "name": "Server Behind Proxy Chain",
      "ip": "172.16.0.50",
      "port": 22,
      "username": "chainuser",
      "authType": "key",
      "key": "-----BEGIN OPENSSH PRIVATE KEY-----\nYour SSH private key content here\n-----END OPENSSH PRIVATE KEY-----",
      "folder": "Proxied Hosts",
      "tags": ["proxy-chain", "multi-hop"],
      "notes": "Requires multi-hop proxy chain to access.",
      "useSocks5": true,
      "socks5ProxyChain": [
        {
          "host": "proxy1.example.com",
          "port": 1080,
          "type": 5,
          "username": "proxy1user",
          "password": "proxy1pass"
        },
        {
          "host": "proxy2.internal.net",
          "port": 1080,
          "type": 5,
          "username": "proxy2user",
          "password": "proxy2pass"
        },
        {
          "host": "proxy3.secure.local",
          "port": 9050,
          "type": 4
        }
      ]
    },
    {
      "name": "Customized Terminal Server",
      "ip": "192.168.1.150",
      "port": 22,
      "username": "devops",
      "authType": "password",
      "password": "terminal_password",
      "folder": "Development",
      "tags": ["custom", "terminal"],
      "notes": "Server with custom terminal configuration and startup scripts.",
      "enableTerminal": true,
      "terminalConfig": {
        "cursorBlink": true,
        "cursorStyle": "bar",
        "fontSize": 16,
        "fontFamily": "jetbrainsMono",
        "letterSpacing": 0.5,
        "lineHeight": 1.2,
        "theme": "monokai",
        "scrollback": 50000,
        "bellStyle": "visual",
        "rightClickSelectsWord": true,
        "fastScrollModifier": "ctrl",
        "fastScrollSensitivity": 7,
        "minimumContrastRatio": 4,
        "backspaceMode": "normal",
        "agentForwarding": true,
        "environmentVariables": [
          {
            "key": "NODE_ENV",
            "value": "development"
          },
          {
            "key": "API_URL",
            "value": "https://api.dev.example.com"
          }
        ],
        "startupSnippetId": 3,
        "autoMosh": true,
        "moshCommand": "mosh --server=/usr/local/bin/mosh-server",
        "sudoPasswordAutoFill": true,
        "sudoPassword": "sudo_password_here"
      }
    }
  ]
}
```

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
