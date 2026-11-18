---
title: "SCIM Provisioning"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/scim"
description: "Create, update and remove Termix accounts and roles from your identity provider with SCIM."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-SCIM/edit/main/docs/index.md"
plugin_id: "scim"
plugin_version: "1.0.0"
plugin_latest: true
---
SCIM Provisioning lets your identity provider manage Termix accounts. When someone is assigned to Termix in Entra ID, Okta or another SCIM provider, they get a Termix account. Their name and email stay in step, their account is turned off when they are unassigned, and the groups they are in can give them Termix roles.

SCIM only manages accounts. People still sign in with [Single sign-on](/plugins/sso) or [LDAP](/plugins/ldap), so set one of those up too.

## Add a connection

1. Install the plugin from the Plugins tab.
2. Open Settings, SCIM Provisioning and press Add Connection.
3. Give it a name, like `Entra ID`, and press Save Connection.
4. Copy the Tenant URL and the Secret token that appear. The token is shown only once.
5. Paste both into your identity provider, as shown below.

Each identity provider gets its own connection, with its own URL and token. A connection only sees and changes the accounts it made.

## Entra ID

1. In the Entra admin center, open Enterprise applications and pick the app you use for Termix sign in (or make a new non-gallery app).
2. Open Provisioning, set Provisioning Mode to Automatic.
3. Paste the Tenant URL and the Secret token, then press Test Connection.
4. Under Mappings, keep `userPrincipalName` to `userName` and `mail` to `emails[type eq "work"].value`.
5. Set Provisioning Status to On and save. Entra syncs about every 40 minutes; Provision on demand runs one user right away.

## Okta

1. Open your Termix app in the Okta admin console, then General, App Settings, and turn on SCIM provisioning.
2. Under Provisioning, Integration, set the SCIM connector base URL to the Tenant URL, Unique identifier field for users to `userName`, and Authentication Mode to HTTP Header. Paste the Secret token as the bearer token.
3. Turn on Push New Users, Push Profile Updates and Push Groups, then test and save.
4. Under To App, turn on Create Users, Update User Attributes and Deactivate Users.

Other providers (JumpCloud, OneLogin, Authentik, Keycloak with a SCIM extension) work the same way: the Tenant URL is the SCIM base URL and the token is a bearer token.

## Settings

| Setting                     | What it does                                                                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Enabled                     | Turn off to refuse every request from this provider without deleting anything.                                                              |
| When a user is deleted      | Turn the account off (the default), or delete it. A turned off account comes back if the provider creates the same user again.              |
| Take over existing accounts | Link a pushed user to a Termix account with the same username or email instead of refusing it. Admin accounts are never taken over.         |
| Default roles               | Roles every user from this connection gets, separated by commas.                                                                            |
| Let groups make admins      | Allow a group to be mapped to the admin role. Members become Termix admins and lose it when they leave the group.                           |
| Group roles                 | Groups the provider pushed. Pick a role for a group and its members get it. They lose it when they leave the group or the group is deleted. |
| New Token                   | Make a new token. The old one stops working right away, so paste the new one into your provider.                                            |

Create roles in Settings, Roles first. Roles you give by hand, and roles no group or default names, are never touched.

## Accounts

- The SCIM `userName` becomes the Termix username. The display name comes from `displayName`, or the name parts. The email is the primary or work email.
- Setting a user inactive turns the Termix account off and ends their sessions. Setting them active turns it back on, but only if SCIM turned it off. An account an admin turned off stays off.
- Passwords are never stored. Termix accounts made by SCIM have no password.
- The first time someone signs in with SSO or LDAP, Termix links that sign in to the account SCIM made when the email matches. Make sure your sign in method sends the same email as the provider pushes.
- If a username or email already belongs to another Termix account, the provider gets a uniqueness error until you rename one or turn on Take over existing accounts.

## Troubleshooting

- 401 in the provider's test: The token is wrong or the connection is turned off. Make a new token and paste it again.
- Users show uniqueness errors: Another account already has that username or email. See Accounts above.
- A group role is not given: Check the role exists in Settings, Roles and that the group is mapped. Recent changes on the connection shows failed role syncs.
- Too many failed attempts: Twenty bad tokens from one address in ten minutes block it for a while.

Who can add and change connections is set by `scim.manage`. Only admins have it at first.
