# RBAC (Role Based Access Control)

RBAC stands for Role Based Access Control. It lets you share hosts with other users instead of giving everyone their own copy. Termix implements it like this:

1. An admin creates a role.
2. An admin assigns users to that role. Admins get the built in "admin" role automatically, and everyone else gets "user".
3. A user can edit a host and share it with either a specific user or a whole role.
4. The user picks a permission level. View only is the only level right now.
5. The user sets how long the share lasts, in hours.

:::warning
A host can only be shared if it uses a saved credential for auth, not a typed in password, SSH key, or no auth. Host data is encrypted with the owner's password, so sharing it directly would weaken that encryption. Credentials don't have this problem, which is why they're required for sharing.
:::

Sharing works the same way for SSH, RDP, VNC, and Telnet hosts.

## Step 1:

With an Admin user (such as the initial user) visit the Admin Settings using the button in the bottom left after logging in, the button with your username on it.

Then, visit the `Roles` tab. From there, you can click `Create Role` in the upper right and create as many roles as needed.

In this menu, you can also edit or delete roles as well.

## Step 2:

In the same Admin Settings panel, visit the `User` tab.

From there, click on the blue edit icon. Scroll down to the `Role Management` section and assign as many roles as needed.

You can also remove roles from this menu.

## Step 3/4/5:

Either as an admin or a user, visit the Host Manager and either edit a host.

Then, visit the `Sharing` tab. From there, you are able to either share a host with a specific user and set a duration. Or, you can share a host with an entire Role.

In this menu, you can also set the permission level (only one available currently) and the duration. In the table below, you can manage all the shared users/roles.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
