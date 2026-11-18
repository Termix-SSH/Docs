---
title: "Changelog"
sidebar_label: "Changelog"
sidebar_position: 99
slug: "/classic-layout/changelog"
custom_edit_url: null
toc_max_heading_level: 2
plugin_id: "classic-layout"
plugin_version: "1.1.3"
plugin_latest: true
---
## 1.1.3

### Added

- All apps at the bottom of the rail: in Simple and Balanced the rail keeps the core panels and the apps you pin, and every other app is one click away there. Pin, unpin or open an app's settings from it or with a right click
- Interface defaults in Settings: admins pick the look and the rail apps people start with, for everyone or per role, and can lock them
- Add host form setting in Settings, Host list: start the add host form short or with every option
- Settings lists the apps on your rail first, then the other apps
- Desktop app: a Close to tray switch in Settings, Interface. Turn it off to quit Termix when you close the window
- Admin settings, General: a switch to trust new host keys without a prompt, for plugins and schedules that connect with nobody to ask
- New API keys: pick read only, actions, run actions or full access, and an expiry or never. Left as is, a key is read only and works for 90 days
- Making someone an admin or turning off password login says when the change waits for the other admins
- Users can be turned off and back on from the user page, and new SSO accounts can wait for approval. The user list filters by active, turned off and waiting
- Invite links: make a link with a role, an expiry and a number of uses, even with sign up off
- Access review page: every host, folder and credential share in one list, with filters and CSV export, also on each user's page
- Display name and email for each account, set by the user or an admin
- Admin settings, Accounts and access: turn off admins opening every user's hosts, and approve new SSO accounts
- People with a helpdesk or auditor role see the users, sessions, access review and audit log pages they are allowed to use
- Edit host in a tab's right click menu
- A Theme button at the bottom of the rail switches between themes without opening Settings

### Changed

- Picking a section in the host editor jumps straight to it instead of scrolling down the whole form
- Form fields in settings, the host editor and the credential editor are a shade darker than the page, like every other field
- The add host form starts with the address, login, folder and tags. More options shows the rest
- The host menu starts with three ways to open the host. Other tools are under More tools, and less used actions under More
- Host and credential panels put search, sort, filter and add on one row. Refresh, import and list settings moved to the menu next to add
- The tab bar's right dock, full screen and hide buttons are in one View menu
- A tab's close button is easier to hit: a bigger hover box and a click area that reaches into the tab's edge
- The dashboard's links and command palette tip moved to a Help menu, and a new dashboard starts with the stats strip, the host list and recent activity
- The tile picker groups plugin tiles by app
- Plugin sections in the host editor show their own heading once instead of twice
- Host list and credential list settings moved to their own pages in Settings. The settings button next to Add host now opens that page
- Runs in its own process on Termix 26.11.2 and later, with no access to the server beyond what Termix allows it
- The branding API takes a PNG or JPEG logo. The settings page turns a WebP into a PNG before sending, so WebP logos still work there
- Needs Termix 26.11.2 or newer
- Usage bars and health badges other plugins add to dashboard host rows are drawn from plain values, with no frame per host, so a long host list loads faster (needs Termix 26.11.2)
- The host editor jumps to a section without scrolling when the system asks for reduced motion
- Form fields in the host editor, settings and admin pages all use one background, and the Tags box is as tall as the Folder picker beside it
- The simple host editor shows the common settings plugins pick, like a protocol's login right after you switch it on, plus notes and pin. Everything else stays under Advanced

### Fixed

- Add host opens the form right away instead of waiting for the host list to load
- Host editor: the section list on the left shows the settings of plugins that load after it opens, and jumps to a section once you switch its protocol on
- Quick Connect says it is loading while plugins start, instead of saying nothing can connect
- Switching the dashboard to the homepage shows a loading spinner instead of a blank page
- Host rows show status dots other plugins add, like the site status of a host mirrored from another Termix
- The built-in admin and user roles can have their permissions edited
- Long tab titles are cut short on phones instead of pushing the buttons off the tab
- No double line between the tab list and split view while plugin buttons in the tab bar load

## 1.1.2

### Added

- Pick what a click on a host opens, such as the terminal, Docker or the host page. Set a default in Customize sidebar and change it for one host from its menu
- Host tools can open inside the host page instead of their own tab, set in Customize sidebar. Their own tab stays the default
- Only the host page, in the same setting, takes the connect buttons off host rows so a click on a host opens its page
- Pick which buttons show on one host's row from its menu. Customize sidebar keeps the default for every host
- The host menu lists the host's actions, when Operations Center is on
- API keys can be limited to reading or running actions
- The dashboard is a grid of tiles you can move and resize freely, with as many columns as you like. Your old layout moves over on its own
- Until you arrange it, the dashboard fills the screen down to the bottom
- The dashboard's add list has a search, filters and groups, and can add a plugin's status or action as its own tile, like Operations Center's
- A setup step to pick how host rows work, connect buttons, buttons plus a host page button, or only the host page, when a plugin offers a host page
- The dashboard layout is saved with your account, so it follows you to every browser. A layout saved in this browser moves over on its own
- A dashboard you never arranged puts Needs attention first, when Operations Center is on
- Admin setting to stop anyone saving passwords and keys, with a note in the host and credential editors (Termix #1753)
- Desktop app: keep a credential on this device only and use it as your login for a shared host or folder (Termix #1749)

### Changed

- Settings, the host and login editors and the dashboard use the shared tile look, with lines between sections instead of separate boxes
- Keybindings settings use one list with a line between rows instead of separate boxes
- The SSL certificate status is a plain row instead of a box
- Toolbars, loading screens, back buttons and Save bars match the rest of Termix

### Fixed

- Closing the command palette puts focus back on the terminal, so you can keep typing
- Folder host counts now include sub-hosts, so a folder no longer shows more online hosts than it has
- A host's status tooltip no longer covers its right click menu
- The session timeout box in admin settings is as tall as its Save button
- Recent activity in quick search opens the host you used, not another host with the same or its old name
- A compact host row with the address and tags turned off fits on one line, with its buttons next to the name
- The Manage tab shows the list or the editor, not both squeezed together, when the tab is narrow, like beside the sidebar on a tablet
- The clear buttons in the folder and parent host pickers have a name and work from the keyboard
- Protocol switches in the host editor have names for screen readers
- Folders in the Manage tab start open even when the list loads after the tab opens
- Picking another credential or defaults level while one is loading in the Manage tab no longer opens the first one
- Dashboard host status and recent activity rows open with Enter or Space
- Leaving the keybinding field without pressing a key stops recording
- Clearing recent activity on the dashboard says so when it fails
- Tab bar, keybinding and accent color buttons have names for screen readers

## 1.1.1

### Added

- Plugins can add buttons to the right of the tab bar, next to split view. SSH Terminal puts its terminal tools there

### Fixed

- The side rail no longer opens behind Customize sidebar and other panels when you hover over it

## 1.1.0

### Added

- Rail items can show a small status dot, used by Sync to show if the desktop is connected to its server
- Plugins can replace the status badge in the dashboard's host list, used by Host Metrics to show failing health checks
- Customize sidebar can turn off alternating row colors in the host list (needs Termix 26.10.6)
- Removing someone from a shared folder offers to remove their access from the folder's hosts too (needs Termix 26.10.6)
- A folder with hosts shared with you has a Set personal login button, so you pick your own login once for all of them (needs Termix 26.10.6)

### Fixed

- On the desktop, a host shared with you opens read only with a note to change it on the server, instead of failing with Error saving host
- A failed host save shows the reason the server gave
- Compact host rows give the name its own full line, so long names are not cut short or covered by the row actions

## 1.0.2

### Fixed

- Cloning a host now keeps which settings are custom and which follow the defaults

## 1.0.1

### Fixed

- The bottom of the app was cut off under the title bar in the desktop app

## 1.0.0

### Added

- A place in the profile row of the app rail where a plugin can put an account switcher
- The Termix layout as a plugin: icon rail, sidebar, tab bar, right dock, mobile bottom bar, Dashboard, Manage, Settings and the command palette
- The host list and the Dashboard as components other plugins can place
- Admins set the app name, tagline and logo here. An existing setup keeps its branding
- Hosts a plugin manages show a lock and open read only, and Add host is hidden when hosts can only come from that plugin
- Admins can redirect HTTP to HTTPS from the general admin settings
- The first run steps for the preset and for theme, accent, font and language
