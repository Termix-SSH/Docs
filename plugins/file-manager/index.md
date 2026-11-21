---
title: "File Manager"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/file-manager"
description: "Browse, edit and move files over SFTP, including straight from one server to another."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-File-Manager/edit/main/docs/index.md"
plugin_id: "file-manager"
plugin_version: "1.2.2"
plugin_latest: true
---
File Manager lets you browse and change files on your hosts over SFTP, FTP, WebDAV and SMB. Upload, download, rename, move, delete, edit files in a code editor, preview images and video, and copy files straight from one server to another.

## Set up a host

File Manager uses the host's SSH login, so a host you can open a terminal on is ready. Open the host in Manage and check Enable File Manager is on in its File Manager section. Set Default Path to the folder it should open in.

Then pick Files from the host's menu, or the file button in the tab bar.

A host saved with the username `$ask` asks who to log in as when File Manager connects, so one key can open the files of many users, like one Linux user per site. It offers the last five names you used.

## FTP hosts

Some devices only speak FTP, like an Xbox 360 or a Wii. Open the host in Manage, add the FTP protocol and fill in the port, security and login. Choose None for plain FTP, or Explicit or Implicit TLS for FTPS. Anonymous sign in is a login choice too.

A host with SSH and File Manager on opens over SFTP first. Pick FTP in the toolbar to use it instead.

## WebDAV hosts

WebDAV works with Nextcloud, ownCloud, many NAS boxes and any web server with WebDAV on. Open the host in Manage, add the WebDAV protocol and fill in:

- HTTPS, on unless the server has none, and the port if it is not 443 or 80.
- Path, where WebDAV lives on the server. Nextcloud uses `/remote.php/dav/files/<your user>`. Leave it empty for the root.
- The login. Termix signs in with Basic authentication, so keep HTTPS on.

## SMB shares

SMB opens a Windows or Samba share, like a NAS. Open the host in Manage, add the SMB protocol and fill in the share name, the domain or workgroup (WORKGROUP when unsure), and the login.

Termix speaks SMB 2 and signs in with NTLMv2. Samba, most NAS boxes and older Windows work. Shares that require SMB 3, encryption or signing do not work yet. That includes Windows 11 24H2 and Windows Server 2025 with their default settings.

## Hosts with more than one protocol

The Termix server makes FTP, WebDAV and SMB connections, so it must be able to reach the host. When a host has more than one way in, like SSH and an SMB share, a picker in the toolbar switches between them. Termix remembers the choice for the host in this browser.

Over FTP, WebDAV and SMB there is no sudo, permissions, archives, copy or trash, and delete is permanent. Copying between hosts needs SFTP on both.

## Browse and edit

- Click to open folders, and double-click a file to edit or preview it.
- Drag files from your computer to upload them. Select and download files or whole folders.
- Right-click for rename, move, copy, permissions and more.
- Right-click an archive to extract it. Progress shows at the bottom of the file list until it is done.
- The editor highlights code. Save writes straight back to the server.
- Images, PDFs, audio and video open in a preview.
- In the desktop app, Open externally edits a file in your own editor, or opens it with the app your computer uses for that type when you haven't chosen an editor. Pick the editor, like VS Code, with Choose external editor. Saving there uploads it back. Pictures and other non text files work too.
- To always open some file types outside Termix, list their endings in Settings, File Manager, Open these file types outside Termix, like `psd, jpg, pdf`, or `*` for every file.

### Sudo

If you don't have permission for a file, Termix asks for the sudo password and does it with sudo. If the host has a Sudo Password saved, it is used for you.

## Files panel beside a terminal

Open the files button on the right edge of an SSH terminal, or Files panel in the tab's menu, to show your files next to the terminal. It connects to the same host on its own, so there is nothing to set up. Drag its edge to resize it, and use the arrow in its header to move it to the left, right or bottom.

- It opens in the folder your terminal is in and follows it when you cd. Turn off Follow terminal in the panel to browse on your own.
- The refresh button jumps to the terminal's folder now. The terminal button types a cd into the terminal for the folder you are viewing, so only use it at a prompt.
- History lists the folders you used most and most recently on this host.

Turn off Show files panel in terminals in a host's File Manager section to keep it from opening there. In Settings, File Manager you can open the panel with every new terminal, pick its side and size, hide the edge button, set how often the terminal folder is checked, and set how many folders history keeps.

## Trash

Deleting a file moves it to a trash folder, `.termix-trash` in your home folder on that server, instead of destroying it. Open Trash from the sidebar to see what you deleted and Restore it to where it was.

- Each host and user has its own trash.
- Restore fails rather than overwriting something that is now at that path.
- Items older than the retention period, 7 days by default, are cleaned up when you open the trash. Change it in the trash view, from 1 to 3650 days.
- Files on a different filesystem than your home folder can't go to the trash. Termix tells you instead of quietly deleting them.
- Deleting from the trash, or emptying it, is permanent.

Turn off Confirm before moving files to trash in Settings, File Manager to skip the question.

To skip the trash, tick Delete permanently in the delete prompt, or press Shift+Delete, which opens the prompt with it already ticked. A permanent delete always asks first, even with the question turned off.

## Copy between hosts

Open SFTP from a host's menu to see two hosts side by side, and copy between them. Termix tries a direct route between the hosts and a relay through Termix, picks the faster one, and checks every file with SHA-256 when it is done.

Both hosts need to be reachable from the Termix server.

## Local files in the desktop app

In the desktop app, Show local files adds your own computer as a pane next to the server, for drag and drop in both directions. Simultaneous File Transfers in settings sets how many files go at once. Lower it if your server limits SFTP channels.

## Old servers

Some devices have no SFTP. Turn on SCP Legacy Mode for those hosts and Termix uses SCP and shell commands instead.

Who can use it is set by the `file-manager.use` permission. Admins and users have it at first.
