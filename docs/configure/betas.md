---
title: Betas
description: Try new versions of Termix and its plugins early.
---

# Betas

Betas are early builds of the next version. They come out on Tuesdays and Fridays when there is something new. They can have bugs, and your feedback is what makes the stable release better.

## Termix betas

### Docker

Use the `beta` tag:

```yaml
image: ghcr.io/termix-ssh/termix:beta
```

Then `docker compose pull && docker compose up -d`. To go back, change the tag to `latest`. Back up first, since a beta can change the database in a way an older version can't read.

### Desktop

Admins can turn on **Termix betas** in **Settings**, **Updates**. You then hear about new betas, with a download link.

## Plugin betas

Each plugin can use betas on its own. Open a plugin in the **Plugins** tab and press **Try beta**. **Back to stable** returns it to the stable channel. It stays on the beta until a stable release is newer.

**Settings**, **Updates** also has buttons to move all plugins to betas or back.

## Feedback

Beta builds show a **Send beta feedback** button. It opens a GitHub issue with your version filled in. Plugin betas have their own feedback link on the plugin's page.
