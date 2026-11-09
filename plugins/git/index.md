---
title: "Git"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/git"
description: "See, pull, commit and push git repos on your hosts, and keep them up to date with auto pull."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Git/edit/main/docs/index.md"
plugin_id: "git"
plugin_version: "1.0.0"
plugin_latest: true
---
Git shows and manages the git repos on a Linux host over SSH. Each host gets its own tab with its repos, changes, branches, history and auto pull.

## Set up a host

1. Open the host in Manage and turn on the Git setting.
2. Open the host menu and choose Git.
3. Press Add repo. Scan the host, type a folder, or clone a repo.

Git runs as the host's login user. It uses that user's SSH keys, credential helpers and git settings, so Termix stores no git passwords or tokens. Git never asks questions: a command that needs a password fails with git's message instead of waiting.

The host needs git installed. Turn on Use sudo in the host settings only for repos that the login user cannot use.

## What you can do

- Repos: see each repo's branch, ahead and behind counts, changed files and last commit.
- Changes: read diffs, stage and unstage files, discard changes and commit.
- Branches: switch, create, merge and delete branches. A merge with conflicts is undone right away.
- History: read the log and open any commit with its patch.
- Stash: stash, apply, pop and drop. See the remotes of the repo.
- Fetch, pull and push from the top of a repo. Pull is fast forward only and push never forces.

Reads need connect access to the host. Changes need edit access. A host set to Read only never changes.

## Adding repos

Scan looks four levels deep in the scan folders. Set the folders in the host settings, separated by commas. The default is the home folder. A repo only shows in Termix after you add it, and Termix only runs git in repos you added.

Removing a repo only forgets it in Termix. Nothing is deleted on the host.

## Auto pull

Open a repo, choose Auto pull, turn it on and set how often it pulls.

- It runs `git fetch` and then a fast forward merge. It never creates a merge commit.
- It skips a repo with uncommitted changes, with no upstream branch, or that has diverged from its upstream.
- It runs as you, with your access. If you lose edit access to the host, it stops pulling.
- The last 20 runs are listed with what happened.
- You get an alert when a repo starts failing and when it works again. A skip is not a failure.

A command after a pull runs in the repo folder when new commits arrived. It needs the Run commands after auto pull permission, which admins have by default. The command runs on every pull that brings new commits, so keep it short and safe to repeat.

## Terminal panel

Open the Git panel from a terminal tab to see the repo of the folder the terminal is in. Turn it off per host with the Panel beside the terminal setting.

## Dashboard and status tiles

The Git repos dashboard card lists repos that are behind, have changes or fail to pull, across your hosts. Operations Center, Automations and the assistant can also read how many repos are behind, dirty or failing, and can fetch, pull, push, switch branch and reset.

## Limits

- Pull is fast forward only. Fix a diverged branch in a terminal.
- Merge conflicts, rebase and force push are not offered. Use a terminal for those.
- Diffs over 300 KB are cut.
- Submodules are not managed.
