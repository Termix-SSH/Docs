# 贡献指南

## 前置要求

- [Node.js](https://nodejs.org/en/download/)（使用 v24 构建）
- [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- [Git](https://git-scm.com/downloads)

## 安装

1. 克隆仓库：
   ```sh
   git clone https://github.com/Termix-SSH/Docs
   ```
2. 安装依赖：
   ```sh
   npm install
   ```

## 运行开发服务器

执行以下命令：

```sh
npm run docs:dev
```

这将启动前端开发服务器。你可以通过访问 `http://localhost:5173/` 来查看文档。

## 贡献流程

1. **Fork 仓库**：点击[仓库页面](https://github.com/Termix-SSH/Termix)右上角的 "Fork" 按钮。
2. **创建新分支**：
   ```sh
   git checkout -b feature/my-new-feature
   ```
3. **进行修改**：实现你的功能、修复或改进。
4. **提交更改**：
   ```sh
   git commit -m "Feature request my new feature"
   ```
5. **推送到你的 Fork**：
   ```sh
   git push origin feature/my-feature-request
   ```
6. **创建 Pull Request**：前往原始仓库，创建一个带有清晰描述的 PR。

## 支持

如果你需要帮助或想要为 Termix 提交功能请求，请访问 [Issues](https://github.com/Termix-SSH/Support/issues) 页面，登录后点击 `New Issue`。
请尽可能详细地描述你的问题，最好使用英文。你也可以加入 [Discord](https://discord.gg/jVQGdvHDrf) 服务器并访问支持频道，不过响应时间可能较长。
