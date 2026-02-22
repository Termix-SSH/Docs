# TOTP（双因素认证）

## 概述

双因素认证 (2FA) 通过要求密码和由身份验证器应用生成的基于时间的一次性密码 (TOTP) 来为你的账户增加额外的安全层。本指南将引导你在 Termix 中设置、管理和使用双因素认证。

## 前提条件

在设置双因素认证之前，请确保你具备：

- 一部安装了身份验证器应用的智能手机或设备
- 一个本地用户名和密码账户，TOTP 无法与 OIDC 配合使用。

## 推荐的身份验证器应用

- **Google Authenticator** (iOS/Android)
- **Microsoft Authenticator** (iOS/Android)
- **Authy** (iOS/Android/Desktop)
- **1Password** (iOS/Android/Desktop)
- **Bitwarden** (iOS/Android/Desktop)

## 设置双因素认证

### 步骤 1：开始设置

1. 进入 **Profile & Security** 部分
2. 点击 **Security** 选项卡
3. 点击 **"Enable Two-Factor Authentication"**

### 步骤 2：扫描二维码

1. Termix 将显示一个二维码
2. 打开你的身份验证器应用并扫描该二维码
3. 你也可以手动输入二维码下方显示的密钥

### 步骤 3：验证设置

1. 你的身份验证器应用将生成一个 6 位数的验证码
2. 在验证字段中输入该验证码
3. 点击 **"Verify and Enable"**

### 步骤 4：保存备用码

1. 验证成功后，你将收到备用码
2. 下载或复制这些备用码
3. 每个备用码只能使用一次
4. 点击 **"Complete Setup"** 完成设置

## 使用双因素认证

### 日常登录

1. 像往常一样输入你的用户名和密码
2. 当系统提示时，打开你的身份验证器应用
3. 输入应用中显示的 6 位数验证码

### 验证码生成

- TOTP 验证码每 30 秒刷新一次
- 每个验证码的有效时间有限
- 如果验证码过期，等待下一个验证码出现即可

## 管理双因素认证设置

### 查看状态

- 在用户个人资料中查看 **Security** 选项卡
- 状态将显示为 "Enabled" 并带有绿色盾牌图标

### 禁用双因素认证

1. 进入 **Security** 选项卡
2. 点击 **"Disable 2FA"**
3. 输入以下任一项：
   - 你的账户密码，或
   - 身份验证器应用中的有效 TOTP 验证码
4. 点击 **"Disable Two-Factor Authentication"**

### 管理备用码

#### 生成新的备用码

如果你丢失了现有的备用码：

1. 进入 **Security** 选项卡
2. 点击 **"Backup Codes"**
3. 输入你的密码或 TOTP 验证码
4. 点击 **"Generate New Backup Codes"**
5. 保存新的备用码

#### 下载备用码

1. 点击备用码旁边的 **"Download"** 按钮
2. 将下载一个包含所有备用码的文本文件
3. 将此文件存储在安全的位置

## 备用码

### 什么是备用码？

备用码是一次性使用的验证码，允许你在以下情况下访问账户：

- 丢失了身份验证器设备
- 无法访问身份验证器应用

### 使用备用码

1. 登录时，当系统提示输入 TOTP 验证码时
2. 输入一个备用码来代替常规的 TOTP 验证码

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
