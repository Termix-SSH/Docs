# RBAC (Role Based Access Control)

RBAC stands for Role Based Access Control. Termix implements it using this "workflow":

1. Admin creates a role
2. Admin assigns user to a role (admins are pre-assigned "admin" role and users are assigned "user" role)
3. User can edit a host and choose to share that host with either a user, or a role.
4. User assigns sharing permission level (for now, view only is the only option)
5. User sets expiration date for the sharing (in hours)

:::warning
In order for a host to be shared, it MUST use credentials as its form of auth (not password, none, ssh key, etc.). That's because your SSH host data is encrypted with your users password so sharing that host would reduce the security. Instead, using a credential makes it simpler to develop and overall more secure for the user.
:::

RBAC is not yet available on any remote desktop connections, only SSH.

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
