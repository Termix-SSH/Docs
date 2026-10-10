---
title: Benchmarks
description: How much CPU, RAM and disk Termix uses, measured on 26.10.0.
---

# Benchmarks

Real numbers from testing Termix 26.10.0. For the short version, see [what it needs](/install#server).

## Test setup

- Termix 26.10.0 Docker image, default plugins from the first run
- Docker 27.4.0, 16 CPU cores, 15.2 GB RAM
- SQLite, starting empty
- No remote desktop (guacd)
- Default settings: status checks every 30s, metrics every 30s, history kept 7 days
- 12 SSH servers, with hosts added from 1 up to 20,000 spread across them
- The app open the whole time, so every host gets status checks

## Image

|          |         Size |
| -------- | -----------: |
| Download | about 240 MB |
| On disk  |       746 MB |

About 110 MB of that is the bundled plugins.

## Server usage

|    Hosts |   CPU |    RAM | Database |
| -------: | ----: | -----: | -------: |
| 0 (idle) | 0.02% | 187 MB |  0.82 MB |
|      100 |  0.4% | 137 MB |  0.92 MB |
|      500 |  1.3% | 177 MB |  1.30 MB |
|    1,000 |  2.0% | 163 MB |  1.78 MB |
|    2,000 |  3.7% | 252 MB |  2.72 MB |
|    5,000 |  7.0% | 354 MB |  5.60 MB |
|   10,000 | 12.1% | 456 MB | 10.39 MB |
|   20,000 | 21.6% | 735 MB | 19.96 MB |

CPU is the average out of one core, so 100% is one core fully busy. Short spikes went up to about twice the average. RAM is the highest seen while measuring. Node frees memory in bursts, so it moves around by about 50 MB, which is why 100 hosts can show less than idle.

Everything stayed stable at 20,000 hosts, with every host online.

## Cost per host

- Disk: about 1 KB per saved host
- RAM: about 30 KB per host
- CPU: about 0.1% of a core per 100 hosts, for status checks

Status checks for a user's hosts start once that user opens the app. They only open a TCP connection to the host's port and never log in.

## Host Metrics

Host Metrics only collects while someone is looking at a host. If no one is, then it utilizes no resources.

Watching hosts, out of 100 saved:

| Watched hosts |  CPU |    RAM |
| ------------: | ---: | -----: |
|             0 | 0.7% | 178 MB |
|            12 | 1.0% | 198 MB |
|            50 | 1.8% | 191 MB |
|           100 | 2.5% | 209 MB |

That is about 0.02% CPU and 0.3 MB of RAM per watched host.

Every check saves one history row, about 160 bytes on disk. At the default 30s interval that is about 460 KB per host per day while it is watched. A host watched around the clock for the default 7 days of history uses about 3 MB, and old rows are deleted on their own.

To use less disk, raise the metrics interval or lower the history retention in the plugin's admin settings.

## The host list

The host list is sent in one response, about 4 KB per host before compression.

|  Hosts |   Size |   Time |
| -----: | -----: | -----: |
|    100 | 0.4 MB |  30 ms |
|  1,000 | 4.2 MB | 180 ms |
|  5,000 |  21 MB |  0.7 s |
| 10,000 |  42 MB |  1.3 s |
| 20,000 |  85 MB |  2.7 s |

## Check your own numbers

```bash
# CPU and memory
docker stats termix

# Database size
docker exec termix ls -l /app/data/db.sqlite.encrypted
```

If your numbers look higher, it is usually remote desktop running, many hosts open in Host Metrics, a shorter interval or a longer retention.
