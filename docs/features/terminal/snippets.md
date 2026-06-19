# Snippets

Snippets are saved commands you can run again without retyping them. Useful for anything you type often, like a restart command, a log tail, or a one-off diagnostic script.

## Creating a snippet

Open the Snippets panel from the sidebar and add a new one with a name and the command itself. You can organize snippets into folders and drag them into the order you want.

## Running a snippet

Click a snippet to run it in your active terminal. If you're connected to multiple terminals at once, Termix can run the same snippet across all of them at the same time.

## Sharing snippets

Like hosts, snippets can be shared with a specific user or a role, with view access. This is handy for sharing a team's standard commands instead of everyone keeping their own copy.

## Importing and exporting snippets

You can back up your snippets or move them between Termix instances using the import/export buttons in the Snippets panel.

### Exporting

Click the Export button to download all your snippets and folders as a `snippets-export.json` file. The file includes every snippet's name, command, description, folder, display order, and any host filters you've set.

### Importing

Click the Import button and select (or drag and drop) a `.json` file in the Termix export format. Before importing you can choose whether to overwrite existing snippets with the same name and folder, or skip them and only add new ones.

After the import completes, Termix shows a summary of how many snippets and folders were added, updated, or skipped.

### File format

The JSON file has two top-level arrays:

```json
{
  "snippets": [
    {
      "name": "Restart nginx",
      "content": "sudo systemctl restart nginx",
      "description": "Restart the web server",
      "folder": "Web",
      "order": 0
    }
  ],
  "folders": [
    {
      "name": "Web",
      "color": "#3b82f6",
      "icon": "folder"
    }
  ]
}
```

`name` and `content` are required for each snippet. All other fields are optional. Folders are matched by name, so importing a file where a folder already exists will skip that folder rather than create a duplicate.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
