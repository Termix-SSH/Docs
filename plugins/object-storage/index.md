---
title: "Object Storage"
sidebar_label: "Overview"
sidebar_position: 0
slug: "/object-storage"
description: "Browse and manage S3-compatible object storage buckets and files."
hide_title: true
custom_edit_url: "https://github.com/Termix-SSH/Plugin-Object-Storage/edit/main/docs/index.md"
plugin_id: "object-storage"
plugin_version: "1.0.0"
plugin_latest: true
---
Object Storage lets you browse and manage the buckets you keep at S3-compatible services from one place in Termix. Add a login for each service, then work with files, change bucket settings and watch how much each bucket holds.

Open Buckets from the rail or the command palette.

## Supported services

Any service that speaks the S3 API works. These have a preset that fills in the endpoint for you:

| Service                | Endpoint                                        | Notes                                    |
| ---------------------- | ----------------------------------------------- | ---------------------------------------- |
| Amazon S3              | `https://s3.<region>.amazonaws.com`             | Use the region of the bucket             |
| MinIO                  | Your own address                                | Turn on path style addresses             |
| Cloudflare R2          | `https://<account id>.r2.cloudflarestorage.com` | Region is `auto`. Create an R2 API token |
| Backblaze B2           | `https://s3.<region>.backblazeb2.com`           | Use an application key                   |
| Wasabi                 | `https://s3.<region>.wasabisys.com`             |                                          |
| DigitalOcean Spaces    | `https://<region>.digitaloceanspaces.com`       | Region is for example `nyc3`             |
| Hetzner Object Storage | `https://<region>.your-objectstorage.com`       | Region is for example `fsn1`             |
| Other S3-compatible    | Your own address                                | SeaweedFS, Ceph, Garage and similar      |

Keys are stored encrypted on the Termix server and are never shown again. When you edit a login, leave a key empty to keep the saved one.

A service on a private address, like a MinIO box in your home network, works. Termix only allows the endpoint you entered. If the service uses a certificate from a private authority, paste the CA certificate in the login.

## Logins

Open the Logins section and add a login with the endpoint, the region and an access key. Use Test login to check that the keys work. A key that can only read buckets is enough to browse and download.

Termix checks every login every few minutes. You get one alert when a login stops working and one when it works again.

## Browsing and files

Pick a bucket to see its folders and objects. Click a name to see its size, type and details. Images and small text files are shown right there.

- Upload files with the Upload button or by dropping them on the list. Files over 8 MB are sent in parts, so big files work.
- Upload folder keeps the folder structure.
- Download saves the object. Interrupted downloads can resume.
- Rename or move changes the full name of an object or folder. Copy makes a second one. Folders are copied one object at a time.
- Deleting a folder deletes everything inside it.
- Temporary link makes a link that works without keys for 1 hour, 1 day or 7 days, and copies it to your clipboard. The link is saved in the audit log.

## Bucket settings

Open a bucket and use the Settings tab to change:

- Versioning. Once on, it can only be suspended.
- Lifecycle rules that delete old objects, old versions or unfinished uploads.
- CORS rules for browser access.
- Bucket policy as JSON.
- Tags.
- Encryption of new objects on the server.
- Public access blocks.

Not every service supports every setting. A setting the service does not support says so instead of failing.

## Size and limits

Termix counts the objects and bytes of every bucket once a day and keeps 90 days of history. Use Count now in the Usage tab to count right away. Very large buckets are counted up to a page limit and marked as a partial count.

Set a size or object limit in the Settings tab. Termix sends an alert once when the bucket goes over it.

## Permissions

| Permission | What it allows                                                           |
| ---------- | ------------------------------------------------------------------------ |
| View       | Open the tab, browse and download                                        |
| Edit       | Upload, copy, move, rename, delete and make temporary links              |
| Manage     | Add logins, create and delete buckets, change bucket settings and limits |

Admins have all three by default. Users can view. Logins are shared by everyone who can view, so give each login only the access you want others to have.
