---
title: Contributing
description: How to help with Termix, its plugins and these docs.
---

# Contributing

Termix is spread over a few repos. Pick the one your change belongs in:

| Repo                                                             | What is in it                                                                                                           |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [Termix](https://github.com/Termix-SSH/Termix)                   | The core, the desktop app and the plugin SDK.                                                                           |
| `Plugin-<Name>`                                                  | One plugin each, like [Plugin-Docker](https://github.com/Termix-SSH/Plugin-Docker). Its docs are in its `docs/` folder. |
| [Docs](https://github.com/Termix-SSH/Docs)                       | This site.                                                                                                              |
| [Mobile](https://github.com/Termix-SSH/Mobile)                   | The iOS and Android app.                                                                                                |
| [CLI](https://github.com/Termix-SSH/CLI)                         | The `termix` command.                                                                                                   |
| [Termix-Registry](https://github.com/Termix-SSH/Termix-Registry) | The official and community plugin indexes and the shared release workflows.                                             |

Each repo has a `CONTRIBUTING.md` with how to build and test it.

## How to send a change

1. Fork the repo and make a branch from the `dev-` branch for the next version, or from `main` if there is none.
2. Make your change. Keep it small and focused.
3. Run the repo's tests and lint.
4. Open a pull request with a short description of what and why.

Commit messages use [conventional commits](https://www.conventionalcommits.org/), like `fix: keep the terminal open on resize`.

## The core

You need Node.js 24.

```bash
git clone https://github.com/Termix-SSH/Termix.git
cd Termix
npm install
npm run dev
```

`npm run dev` builds the SDK and the plugins, runs the server in watch mode and starts the web UI. If you have the plugin repos cloned next to it in `../Termix-Plugins`, it builds those too and reloads them when you save.

```bash
npm run lint
npm run test
```

## A plugin

See [develop](/develop) for building and testing plugins.

## These docs

```bash
git clone https://github.com/Termix-SSH/Docs.git
cd Docs
npm install
npm start
```

Core pages are in `docs/`, the plugin development pages in `develop/`. Plugin pages and the API reference are made by `npm run sync` from each plugin's repo, so change those in the plugin repo, not here.

Write plain and short. No long words when a short one does. Every page should tell people what to do.
