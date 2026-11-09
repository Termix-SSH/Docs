---
title: "Operations Center"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/operations-center"
description: "Run, roll out, approve and track every plugin action across your hosts, with a page per host and tables across all of them."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Operations-Center/edit/main/docs/index.md"
plugin_id: "operations-center"
plugin_version: "1.0.0"
plugin_latest: true
---
Operations Center is where you run and watch the actions other plugins offer. Plugins such as Docker, Services, Wake-on-LAN, Kubernetes and Host Metrics declare what they can do, and every one of those actions shows up here with no setup.

Open it from the Operations button in the rail, or search for an action in the command palette.

Operations opens on an overview: what needs attention, what waits for approval, the latest runs and rollouts in progress. Arrange tiles moves, resizes and adds tiles, including any plugin's status. The menu on the left shows counts next to Approvals, History (failed runs in the last day), Rollouts and Drift.

## Run an action

1. Open Operations and pick Actions.
2. Search for an action and pick it, or pick a plugin to see only its actions. Its form opens next to the list. Only hosts where the action applies are offered.
3. For an action on one item, such as a container, pick it from the list.
4. Fill in the form and press Dry run to see what would happen, or Run.

Every run is checked the same way wherever it starts: your role permissions, your access to the host, the action's inputs and the approval rules. Destructive actions ask before they run.

## Host page

Each host has a Host page. Open it from the host's menu or the Host page button.

The page opens on an overview made of tiles. Out of the box it shows the host's status tiles, its terminal, tiles other plugins add (such as Host Metrics charts), how many containers, services and other things it has, a few one click actions, recent changes and the full list of actions.

Press Arrange tiles to change it. Drag a tile to move it, drag its edges to resize it, and add tiles from the list on the right. You can add:

- Any status a plugin reports. A count shows as a number, a gauge as a bar, a list as rows. Some have a fix button.
- Any action, with its fields right in the tile, like Run snippet with the snippet to pick. Destructive actions ask first.
- All of one plugin's actions as a row of buttons.
- Lists, such as the host's containers, with buttons on each row.
- A live session, such as the terminal. Full size opens it over the whole page and it keeps running.
- Tiles from other plugins, recent changes, the action list and the counts.

Tiles are the same for every host, and a host only shows the ones it has. Turn on Only this host to give one host its own tiles. Reset goes back to the default.

Every session and tool for the host is also on the left. They open inside the page and keep running while you move between them, so you need one tab instead of ten. Open in its own tab puts one back in a normal tab, for split view.

The tool buttons on a host row still open their own tabs, like always. To open them inside the host page instead, go to Customize sidebar and set Open host tools in to The host page. Then each button shows that tool on the host's page, and a page already open for the host is reused.

Pick Only the host page to make the page the one way to work with a host. Host rows lose their connect buttons, and a click on a host opens its page. Ctrl click or middle click still opens a second page.

The host page also shows up in other places:

- Beside a terminal, as a panel with the host's status tiles and actions. Open it from the panel bar on the terminal's edge.
- In the tab bar, where the Host page button opens the page for the host you are working on. Right click a tab for the same thing.
- On the host row, where a dot shows next to the name while one of the host's status tiles is warning or failing. Hover it to see which. Turn it off with Show the attention dot in this plugin's settings.
- In the host's menu, under Actions, with one list per plugin. Actions with nothing to fill in run right away; the rest open with their form.

## Hosts

Hosts shows a card per host, worst first, with the status tiles that need a look. Click one to open its host page. Switch to the list view for tables:

The tables show one kind of thing across every host, such as every container or every service. Filter by host or status, search the table, select rows on any hosts and run an action on all of them at once. Click a host name to open its host page. Hosts answer in the background, so the table fills in as they reply.

History can show one action, one host or one status. Long lists in every view show a page at a time.

## Rollouts

A rollout runs one action across many hosts in steps:

- Canary hosts run first.
- Then hosts at a time, with an optional wait between groups.
- Stop after failures pauses the rollout when that many hosts fail. 0 never stops.

Pick hosts one by one or by tag. Pause, stop, resume or retry the hosts that failed at any time. If Termix restarts during a rollout, it waits for you to check the hosts and resume. It never carries on with a change on its own.

## Approvals and rules

Rules decide what needs a person. They are checked from the top, and the first one that matches decides:

- Run: goes ahead.
- Needs approval: waits in Approvals until someone with the same access approves or rejects it.
- Refuse: never runs.

A rule can match how risky an action is, which plugin and action it is, where the run came from (the web app, an API key, an automation, a rollout, a drift check, the assistant or MCP) and host tags. With no match, people and their automations go by their permissions, and the assistant and MCP can't change anything. A new server starts with two rules: the assistant and MCP can read, and their changes need approval.

The person who asked can't approve their own request, unless the rule allows it or the request came from the assistant, MCP or an automation. Changing rules needs the Manage approval rules permission.

Plugins run inside Termix, so how risky an action is comes from the plugin. Plugins that are not signed as official always count as changes.

## Drift

A baseline is a check that should always pass, such as a firewall port being open. It runs on the hosts you pick every few minutes and shows which hosts are as expected and which drifted. Add a fix action to fix drifted hosts with one click, or let the baseline fix them on its own. Approval rules still apply to the fix. You get an alert when a host drifts.

## MCP

Operations Center has an MCP server, so AI tools like Claude Code can use Termix actions.

1. Give the user the Use the MCP server permission.
2. Make an API key in Termix, limited to Read actions or Run actions.
3. Point the tool at `https://your-termix/plugin-api/operations-center/mcp` with the header `Authorization: Bearer <key>`.

Only actions a plugin marked safe for MCP are offered. Changes follow the approval rules, so by default they wait for you in Approvals.

## Dashboard tiles

When you arrange the dashboard, the add list has every plugin's status and action. A status tile shows how every host is doing, worst first, or one host you pick. An action tile is a button, for a host you pick once.

## Needs attention

Add the Needs attention card to the dashboard to see failing status tiles, waiting approvals, failed runs, drifted hosts and stopped rollouts in one place.

## Homepage widgets

With the Homepage plugin on, add these widgets to your homepage:

- Status tiles: what every plugin reports about your hosts. Pick which tiles to show, or only the ones with a problem.
- Found links: web addresses plugins know about, such as Reverse Proxy routes, kept up to date with nothing to type in.
- Action button: one button that runs an action, such as restarting a service on a host. It goes through the same checks and rules as any other run.
