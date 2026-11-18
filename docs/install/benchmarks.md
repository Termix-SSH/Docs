---
title: Benchmarks
description: How much CPU, RAM and disk Termix uses, measured on 26.11.2.
---

# Benchmarks

Real numbers from testing Termix 26.11.2, where every plugin runs in its own process. For the short version, see [what it needs](/install#server).

## Test setup

- Termix 26.11.2 Docker image with the default plugins from the first run
- A VM with 8 cores (AMD Ryzen 9 9955HX), 14 GB RAM, Docker 29.9.2
- SQLite, starting empty
- No remote desktop sessions
- Default settings: status checks every 30s, metrics every 30s, history kept 7 days, idle plugins stop after 10 minutes
- 12 SSH servers, with hosts added from 100 up to 20,000 spread across them
- The app open in a browser the whole time, so every host gets status checks

## Image

|          |         Size |
| -------- | -----------: |
| Download | about 220 MB |
| On disk  | about 760 MB |

About 90 MB of that is the bundled plugins.

## Server usage

|    Hosts |   CPU |     RAM | Database |
| -------: | ----: | ------: | -------: |
| 0 (idle) |  0.9% |  452 MB |  1.38 MB |
|      100 |  1.4% |  693 MB |  1.49 MB |
|      500 |  3.1% |  726 MB |  1.86 MB |
|    1,000 |  4.0% |  708 MB |  2.35 MB |
|    2,000 |  5.5% |  723 MB |  3.32 MB |
|    5,000 | 10.0% |  780 MB |  6.20 MB |
|   10,000 | 19.9% |  863 MB | 11.03 MB |
|   20,000 | 33.3% | 1061 MB | 20.64 MB |

CPU is the average out of one core, so 100% is one core fully busy. Short spikes went up to about one and a half times the average. RAM is the highest seen while measuring, for the whole container with every plugin process in it.

Idle is a fresh server with nobody signed in, after idle plugins stopped. Once someone opens the app, the plugins that page uses start, which adds about 250 MB. Right after a start every plugin that is turned on runs once, so the first few minutes use about 600 MB.

Every host stayed online at every step.

## Cost per host

- Disk: about 1 KB per saved host
- RAM: about 20 KB per host on top of the plugin processes
- CPU: about 0.2% of a core per 100 hosts, for status checks

Status checks for a user's hosts start once that user opens the app. They only open a TCP connection to the host's port and never log in.

## Plugin processes

Each plugin runs in its own process, about 70 to 110 MB each. With the default plugins:

| When                    | Running plugins |    RAM |
| ----------------------- | --------------: | -----: |
| Right after a start     |              17 | 614 MB |
| Idle, nobody signed in  |               9 | 452 MB |
| The app open, 100 hosts |              16 | 693 MB |

The ones that stay up at idle are the sign in plugins, the terminal, status checks, alerts, action approvals, the look, and plugins with work on a timer like Docker's health alerts. A plugin that only serves pages stops after 10 idle minutes (`TERMIX_PLUGIN_IDLE_MINUTES`) and starts again when a request needs it. The plugins page lists each running plugin's memory and warns admins when the server gets close to its memory limit.

With every plugin turned on and nothing set up, measured on a 4 core GitHub runner:

|                                     |         |
| ----------------------------------- | ------: |
| Server memory at rest               | 2296 MB |
| Server memory right after a login   | 3588 MB |
| Plugin frames in the page           |      22 |
| Browser JavaScript memory           |  229 MB |
| Time to the dashboard (second load) |   2.3 s |

## Host Metrics

Host Metrics only collects while someone is looking at a host. Otherwise it uses nothing.

Watching hosts, out of 100 saved:

| Watched hosts |  CPU |
| ------------: | ---: |
|             0 | 1.3% |
|            12 | 1.3% |
|            50 | 1.5% |
|           100 | 1.7% |

That is about 0.004% CPU per watched host. RAM stayed within the normal swing as idle plugins stopped, so watching hosts adds almost nothing.

Every check saves one history row while the host is watched, and rows older than the history setting are deleted on their own. To use less disk, raise the metrics interval or lower the history retention in the plugin's admin settings.

## The host list

The host list is sent in one response, about 5.5 KB per host before compression.

|  Hosts |   Size |   Time |
| -----: | -----: | -----: |
|    100 | 0.5 MB |  36 ms |
|  1,000 | 5.5 MB | 260 ms |
|  5,000 |  27 MB |  1.4 s |
| 10,000 |  55 MB |  2.7 s |
| 20,000 | 110 MB |  5.3 s |

## Check your own numbers

```bash
# CPU and memory
docker stats termix

# Database size
docker exec termix ls -l /app/data/db.sqlite.encrypted
```

If your numbers look higher, it is usually remote desktop running, many hosts open in Host Metrics, a shorter interval or a longer retention.
