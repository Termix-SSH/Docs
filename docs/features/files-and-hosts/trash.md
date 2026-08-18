# File Manager Trash

Deleting a file in the file manager moves it to a trash folder instead of destroying it. If you delete the wrong thing, you can put it back.

## How it works

Termix keeps a `.termix-trash` folder in the home directory of the user you connect as, on each server. A deleted file is moved there and Termix remembers where it came from.

The trash is per server and per user. Each host has its own, so deleting something on one server does not show up in another server's trash.

## Restoring something

Open the trash from the file manager sidebar. You get a list of what you deleted, when, and where it came from.

Restore puts the file back at its original path. If something else is already there, the restore fails rather than overwriting it.

## Emptying the trash

You can delete one item for good, or empty the whole trash at once. Both are permanent, and there is nothing to undo them with.

## Automatic cleanup

Trash does not pile up forever. Anything older than the retention period is cleaned out on its own, which defaults to 7 days.

You can change this from the trash dialog, to anything between 1 and 3650 days. The cleanup happens when the trash is opened, so a server you never look at keeps its deleted files until the next time you check.

Remember that deleted files still take up disk space until they are cleaned out. A shorter retention is worth setting on a machine that is tight on space.

## Things worth knowing

Deleting only works within one filesystem. Termix moves the file rather than copying it, which is instant even for very large files, but it means a file on a different mount than your home directory cannot go to the trash. Deleting one of those tells you so instead of silently destroying it.

The trash folder itself is protected. You cannot delete `.termix-trash` through the file manager, which stops the trash being thrown away with everything in it.

Deleting a folder moves the whole thing, contents included, and restoring brings all of it back.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
