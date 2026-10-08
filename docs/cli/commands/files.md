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

To keep a way back, move it to the trash instead. You can restore it from the file manager in the web app:

```bash
termix files rm --trash 3:/tmp/old.log
```

## Binary files

Images, archives and other binaries move as they are, so `get` and `put` are safe for any file.

## Moving files to many hosts

To push one file to every host in a group, use fleets:

```bash
termix fleets exec 2 "..."
```

Fleet transfers in the web app push and pull a file across a whole fleet at once. See [Fleets](/plugins/fleets).

## Hosts that ask for a code

If a host asks for a verification code, a password or a key passphrase, you are asked for it in the terminal. Hosts that need a browser sign-in only work from the web app.
