---
title: "Ansible"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/ansible"
description: "Run Ansible playbooks and ad-hoc commands from a control host, with an inventory made from your Termix hosts."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Ansible/edit/main/docs/index.md"
plugin_id: "ansible"
plugin_version: "1.0.0"
plugin_latest: true
---
Ansible runs playbooks and ad-hoc commands from a control host that you already have in Termix. Termix connects to the control host over SSH and runs `ansible-playbook` and `ansible` there. Your playbooks stay as plain files on that host.

## Set up a host

1. Install `ansible-core` on the host you want as the control node. `pipx install ansible-core` or your package manager both work.
2. Open the host in Manage and turn on the Ansible setting.
3. Set the Project folder. It is `~/ansible` by default and holds your playbooks, roles and `ansible.cfg`.
4. Open the host menu and choose Ansible.

If the hosts you manage use password logins, install `sshpass` on the control host too.

## Playbooks

The Playbooks tab lists the files in the project folder, four folders deep. Files with a `hosts:` line are marked as playbooks. Click a file to edit it, or press Run on a playbook. A playbook is syntax checked on a temporary copy before it is saved, and the old file stays if the check fails.

## Running

Pick where the playbook runs:

- Project inventory: uses `ansible.cfg` or an inventory file you name inside the project.
- Termix hosts: pick hosts in Termix and Ansible gets an inventory made from them. Each host is named after its Termix name. Folders become `folder_` groups, tags become `tag_` groups and every host is in the `termix` group.

You can turn on check mode, diff and run as root, limit the hosts, set tags, add extra variables and raise the output detail. A run keeps going on the control host if you close Termix.

## Logins

For Termix hosts, Termix passes the saved login of each host to Ansible: user, port, password or key, and the Sudo Password for run as root. They are written to a private file in the run folder and removed when the run ends. Hosts with a key that has a passphrase are not supported. A host that has a Jump Host or other special route in Termix must also be reachable from the control host directly.

If you pick the control host itself, Ansible runs against it locally.

## Access

Anyone with access to the control host can see the playbook list and the run list. Reading files, reading run output, starting runs and editing need edit access to the control host. Running on Termix hosts needs edit access to each of them, because a playbook can do anything on a host.

## Runs

Each run keeps its output, command and result under `~/.termix-ansible/runs` on the control host for 30 days. Open a run to see the output while it runs, the recap per host, and to stop it.

## Ad-hoc and facts

Ad-hoc runs one module, like `ansible all -m ping`. Facts runs the `setup` module on the Termix hosts you pick and shows system, kernel, CPUs, memory, address and uptime. The full output is in the run.

## Vault

Set the Vault password file in the host settings to a file on the control host. It is passed to every run with `--vault-password-file`.
