# SSH 隧道

## 理解 SSH 隧道

SSH 隧道在本地计算机和远程服务器之间建立连接，使端口上的流量能够安全地双向传输。

隧道可以是本地隧道（将本地端口转发到远程）或远程隧道（将远程端口转发到本地）。

## 服务器要求

### 必需的 SSH 服务器设置

为使 SSH 隧道正常工作，目标 SSH 服务器必须在 `/etc/ssh/sshd_config` 中配置以下设置：

```bash
# Allow port forwarding
AllowTcpForwarding yes

# Bind remote ports (required for reverse tunnels)
GatewayPorts yes

# Allow root login (if using root user)
PermitRootLogin yes

# Allow public key authentication
PubkeyAuthentication yes

# Allow password authentication (if using passwords)
PasswordAuthentication yes
```

修改完成后，重启 SSH 服务：

```bash
sudo systemctl restart sshd
```

### 安装 sshpass

如果使用密码认证，需要在本地和远程系统上安装 `sshpass`：

**Debian/Ubuntu：**

```bash
sudo apt install sshpass
```

**CentOS/RHEL/Fedora：**

```bash
sudo yum install sshpass
# or
sudo dnf install sshpass
```

**macOS：**

```bash
brew install hudochenkov/sshpass/sshpass
```

## 配置

在主机管理器中添加/编辑主机时，导航到隧道选项卡。在选项卡底部，点击 `Add Tunnel Connection`。

### 字段说明：

**隧道类型：**
- Local (-L)：将源主机（你当前添加/编辑的主机）的端口转发到远程目标
```bash
[ Source ]
localhost:8080
     |
     |
     v
[ Endpoint ]
     |
     v
127.0.0.1:8080
```
- Remote (-R)：将远程目标的端口转发到源主机（你当前添加/编辑的主机）
```bash
[ Endpoint ]
localhost:8080
     |
     |
     v
[ Source ]
     |
     v
127.0.0.1:8080
```

**端口：**
- Source：在源主机上被转发/接收的端口（取决于隧道类型）
- Endpoint：在目标主机上被转发/接收的端口（取决于隧道类型）

**目标 SSH 配置：**
- 在此选择定义远程目标的主机，流量将被转发到该主机或从该主机接收（取决于隧道类型）

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
