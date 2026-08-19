# termix files

Browse and move files on your servers over SFTP.

## Naming a remote path

Every remote path is written as the host id, a colon, then the path:

```
3:/etc/hosts
```

That means `/etc/hosts` on host 3. Get host ids from `termix hosts`.

## List a directory

```bash
termix files ls 3:/var/log
```

## Print a file

```bash
termix files cat 3:/etc/hostname
```

Content goes straight to stdout, so you can pipe it:

```bash
termix files cat 3:/etc/os-release | grep VERSION
```

## Download a file

```bash
termix files get 3:/var/log/syslog
termix files get 3:/var/log/syslog ./syslog.txt
termix files get 3:/var/log/syslog ~/logs/
```

With no local path it saves into the current directory using the same filename. Give it a directory and the file lands inside.

## Upload a file

```bash
termix files put ./nginx.conf 3:/etc/nginx/nginx.conf
```

## Make a directory

```bash
termix files mkdir 3:/opt/myapp
```

## Delete

```bash
termix files rm 3:/tmp/old.log
termix files rm -r 3:/tmp/oldstuff
```

`-r` is required to delete a directory and what is inside it. There is no confirmation, so read the path twice.

## Text files only

These commands treat files as text. Images, archives, and binaries can be corrupted by moving them this way.

For binaries, use the file manager in the web app, or tar and encode first:

```bash
termix exec 3 "base64 /opt/app/binary" | base64 -d > binary
```

## Moving files to many hosts

To push one file to every host in a group, use fleets:

```bash
termix fleets exec 2 "..."
```

Fleet transfers in the web app push and pull a file across a whole fleet at once. See [Fleets](/features/fleets/overview).

## Hosts that need 2FA

If a host asks for a TOTP code, these commands cannot prompt for it. Connect once through the web app or `termix ssh` instead.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
