<div align="center">

<img src="https://raw.githubusercontent.com/Termix-SSH/Termix/main/public/icon.svg" width="120" height="120" alt="Termix Logo" />

<h1>Termix Docs</h1>

<p>Public documentation website for Termix</p>

<p>
  <img src="https://img.shields.io/github/stars/Termix-SSH/Docs?style=flat&label=Stars&color=F39044&labelColor=1a1a1a" />
  <img src="https://img.shields.io/github/forks/Termix-SSH/Docs?style=flat&label=Forks&color=F39044&labelColor=1a1a1a" />
  <a href="https://discord.gg/jVQGdvHDrf"><img alt="Discord" src="https://img.shields.io/discord/1347374268253470720?color=F39044&labelColor=1a1a1a" /></a>
  <a href="https://donate.termix.site/"><img alt="Donate" src="https://img.shields.io/badge/Donate-Support%20Termix-F39044?style=flat&labelColor=1a1a1a" /></a>
</p>

</div>

<br />

## Overview

This is the public documentation website for the project, [Termix](https://github.com/Termix-SSH/Termix).

<br />

## Planned Features

See [Projects](https://github.com/orgs/Termix-SSH/projects/5) for all planned features. If you are looking to contribute, see [Contributing](https://docs.termix.site/contributing).

<br />

## Sponsors

Interested in a paid placement to support development? Email [mail@termix.site](mailto:mail@termix.site).

<!-- SPONSORS:START -->

<div align="center">

<br />

<a href="https://www.digitalocean.com/">
  <img src="https://termix.site/img/sponsors/digitalocean.svg" height="40" alt="DigitalOcean" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://crowdin.com/">
  <img src="https://termix.site/img/sponsors/crowdin.svg" height="40" alt="Crowdin" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://www.blacksmith.sh/">
  <img src="https://termix.site/img/sponsors/blacksmith.svg" height="40" alt="Blacksmith" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://www.cloudflare.com/">
  <img src="https://termix.site/img/sponsors/cloudflare.png" height="40" alt="Cloudflare" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://akamai.com/">
  <img src="https://termix.site/img/sponsors/akamai.svg" height="40" alt="Akamai" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://aws.amazon.com/">
  <img src="https://termix.site/img/sponsors/aws.png" height="40" alt="AWS" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://rackgenius.com/">
  <img src="https://termix.site/img/sponsors/rackgenius.png" height="40" alt="Rack Genius" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://ginernet.com/">
  <img src="https://termix.site/img/sponsors/ginernet.png" height="40" alt="Ginernet" />
</a>
&nbsp;&nbsp;&nbsp;
<a href="https://www.hetzner.com/?mtm_campaign=termix&mtm_medium=referral&mtm_content=sponsoring_link">
  <img src="https://termix.site/img/sponsors/hetzner.png" height="40" alt="Hetzner" />
</a>

</div>

<!-- SPONSORS:END -->

<br />

## Managing Sponsors

All sponsors live in one place: `static/sponsors.json`. The docs homepage reads it directly, and
every README pulls from it, so a new sponsor is a single edit.

To add or change one:

1. Save the logo to `static/img/sponsors/` so it stays available even if the sponsor moves theirs.
2. Add an entry to `static/sponsors.json`. Set `logo` to the local path and `source` to the
   original url the logo came from, so we can tell when the upstream one changes.
3. Run `npm run sponsors:sync` to rewrite the sponsor block in every README.
4. Commit the docs repo and the other repos it touched.

The list is also published at [termix.site/sponsors.json](https://termix.site/sponsors.json).

`npm run sponsors:check` verifies every sponsor site and logo still resolves. It runs weekly in CI
and opens an issue when something breaks, so a dead logo does not sit unnoticed.

The GitHub org profile and the personal `LukeGus` profile readmes cannot pull automatically. Paste
`sponsors-section.md` into those, replacing the old sponsors section.

<br />

## Support

If you need help or want to report an issue with the Termix documentation, visit the [Support](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`. Please be as detailed as possible in your report, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support channel, however, response times may be longer.

<br />

## License

Distributed under the Apache License Version 2.0. See `LICENSE` for more information.
