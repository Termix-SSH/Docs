---
title: "DNS"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/dns"
description: "Manage DNS records and domains across Cloudflare, Route 53, Namecheap and other providers."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-DNS/edit/main/docs/index.md"
plugin_id: "dns"
plugin_version: "1.0.0"
plugin_latest: true
---
DNS lets you manage the DNS records and domains you keep at different providers from one place in Termix. Add a login for each provider, then edit records, watch expiry dates and check that your zones are healthy.

Open DNS from the rail or the command palette.

## Supported providers

| Provider        | DNS records | Domain list (expiry, auto renew, lock) | Keys you need                                |
| --------------- | ----------- | -------------------------------------- | -------------------------------------------- |
| Cloudflare      | Yes         | No                                     | API token with Zone, DNS, Edit               |
| Amazon Route 53 | Yes         | Yes                                    | Access key ID and secret key                 |
| DigitalOcean    | Yes         | No                                     | API token                                    |
| Hetzner         | Yes         | No                                     | API token from a Hetzner Cloud project       |
| Namecheap       | Yes         | Yes                                    | API user, API key and the allowed IP address |
| GoDaddy         | Yes         | Yes                                    | API key and secret                           |
| Porkbun         | Yes         | Yes                                    | API key and secret key                       |
| Gandi           | Yes         | Yes                                    | Personal access token                        |

Keys are stored encrypted on the Termix server and are never shown again. When you edit a login, leave a key empty to keep the saved one.

Some providers need a setting on their side first:

- Namecheap only lets API calls come from an allowed IP address. Add the public address of your Termix server in the Namecheap API settings and enter the same address here. Only domains that use Namecheap DNS show up as zones.
- Porkbun needs API access turned on for each domain.
- GoDaddy can give 403 errors for accounts with only a few domains. Their API is limited to larger accounts.
- Route 53 domain lists use the Route 53 Domains service in us-east-1. The key needs `route53:ListHostedZones`, `route53:ListResourceRecordSets`, `route53:ChangeResourceRecordSets`, `route53domains:ListDomains` and `route53domains:GetDomainDetail`.

## Records

Pick a zone to see its records. You can filter them, add a record, change one or delete one. Termix checks the record before it is sent, so a wrong IP address or a CNAME at the root is caught first.

- Names are relative to the zone. Use @ for the zone itself.
- MX and SRV records have a priority. SRV values look like: weight port target.
- A TTL of 1 means automatic on Cloudflare.
- On Cloudflare, A, AAAA and CNAME records can be proxied.
- Records the provider manages, such as Route 53 alias records and the root name servers, are shown but cannot be changed here.

Changing a record needs the Change DNS records permission.

## Domains

Domains lists every domain your registrar logins know about, soonest expiry first. You see the expiry date, whether auto renew is on, whether the domain is locked and its name servers.

You can also watch any domain by name. Termix looks it up through the public RDAP service, so it works for domains you did not register through a connected provider. Watched domains are checked once a day.

Termix sends an alert when a domain has 30, 14, 7, 3 and 1 days left, and when it has expired. Alerts go to everyone who can manage DNS. They use the alert channels you set up in the Alerts plugin.

Termix does not buy, renew or transfer domains. It only reads them.

## Links

A link keeps a record pointed at an address that can change.

- A host: the record follows the host's address. It updates when the host changes.
- This server's public address: Termix looks up its own public IPv4 or IPv6 address and keeps the record up to date. This works like dynamic DNS.

Links are checked every 5 minutes and when a host changes. If an update fails, you get one alert, and another when it works again.

## Health checks

The Health tab of a zone checks:

- That the domain points at the name servers your provider gave you, and that those servers agree on the zone version.
- DNSSEC, using a public validating resolver.
- CNAMEs that clash with other records, sit at the root, or point at names that no longer exist.
- Mail records when the zone has MX records: SPF (including the 10 lookup limit), DMARC, DKIM keys and whether the mail servers resolve.
- Whether the zone has CAA records.

Check resolvers asks Cloudflare, Google and Quad9 for each record and shows what they answer. Use it after a change to see if it has spread.

If you turn on daily checks for a login, Termix runs the health checks every day and alerts you when a new check starts failing.

## Copies, restore and files

Termix saves a copy of a zone before it changes it, and once a day when it finds that the zone changed outside Termix. In that case you also get an alert. Each zone keeps its latest 40 copies.

- Compare shows what a restore would change.
- Restore puts the zone back to a copy. A copy of the current records is saved first. Restoring needs the Manage DNS logins permission.
- Download zone file saves the records as a BIND file.
- Import reads a BIND file. Preview shows what would change. By default an import only adds and changes records. Turn on the removal option to delete records that are not in the file.

Turn off Keep copies of zones in a login to stop all of this for its zones.

## For other plugins and automation

DNS provides the service dns.records. A plugin can find the zone for a host name, add a record and remove it again. This is how a plugin can answer a DNS certificate challenge without its own provider keys.

The actions in DNS can be used by the assistant, rules and the CLI: list zones, records and domains, check a zone, set and delete a record, save a copy and update links. The domain expiry signal shows on the Operations Center.

## Permissions

| Permission         | Default roles | What it allows                                                             |
| ------------------ | ------------- | -------------------------------------------------------------------------- |
| See DNS            | Admin, user   | Open the tab, see zones, records, domains, links and run health checks     |
| Change DNS records | Admin         | Add, change and delete records, save copies, import files, refresh domains |
| Manage DNS logins  | Admin         | Add logins, watch domains, create links and restore copies                 |

Logins are shared by the whole server. Anyone who can see DNS can see the records of every login.
