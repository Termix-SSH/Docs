# Benchmarks

Real numbers from testing Termix v2.7.0.

## What to give it

| Hosts        | CPU      | RAM    | Disk  |
| ------------ | -------- | ------ | ----- |
| 1-25         | 1 core   | 512 MB | 1 GB  |
| 26-100       | 1 core   | 1 GB   | 2 GB  |
| 101-500      | 2 cores  | 1 GB   | 5 GB  |
| 501-2,000    | 2 cores  | 2 GB   | 10 GB |
| 2,001-10,000 | 4 cores  | 2 GB   | 20 GB |
| 10,000+      | 4+ cores | 4 GB   | 40 GB |

Most people have under 100 hosts, so 1 core and 1 GB is plenty. Idle, Termix uses about 118 MB of RAM.

Add another core and 1 GB if you use remote desktop, since `guacd` runs as a second container.

## Test setup

- Termix v2.7.0 as a Docker image
- Docker 27.4.0, 16 CPU cores, 15.18 GB RAM
- SQLite, starting empty
- No remote desktop
- Default settings: status checks every 60s, metrics every 30s, history kept 7 days
- 12 real SSH servers to connect to
- Hosts added from 1 up to 20,000
- Interface tested in Chrome

Past about 1,000 hosts the 12 SSH servers get overloaded and some metric checks fail. CPU and RAM are unaffected, but the disk numbers are worked out from the row size instead of watched for a week.

## Server usage

|    Hosts |   CPU |      RAM | Database |
| -------: | ----: | -------: | -------: |
| 1 (idle) | 0.03% |   118 MB |  0.76 MB |
|       12 | 0.76% |   124 MB |  0.77 MB |
|      100 |  2.8% |   156 MB |  0.84 MB |
|      500 | 10.8% |   261 MB |  1.24 MB |
|    1,000 | 12.0% |   294 MB |  1.80 MB |
|    2,000 | 16.2% |   332 MB |  2.86 MB |
|    5,000 | 19.4% |   457 MB |  5.77 MB |
|   10,000 | 20.1% |   652 MB | 10.57 MB |
|   20,000 |  ~42% | 1,723 MB | 17.25 MB |

CPU is out of one core, so 100% is one core fully busy. At 20,000 hosts only half were monitored.

## Cost per host

- Disk: about 1 KB per host
- RAM: about 55 KB per monitored host. Saved but unmonitored hosts cost almost nothing
- CPU: very little, and it levels off after 1,000 hosts

## Disk is mostly history

The hosts themselves are tiny. The metrics history is what grows:

- One row per metrics check, about 76 bytes
- At the default 30s interval, 2,880 rows per host per day
- About 216 KB per host per day, or 1.5 MB per host per week

With the default 7 day retention, 100 monitored hosts levels out around 150 MB. Old rows get deleted automatically.

To use less disk: check metrics less often, lower the retention (Admin Settings, under Monitoring), or turn metrics off for hosts you do not care about.

## Metrics slow down after 1,000 hosts

Termix checks several hosts at once, adding a worker per 20 hosts, up to 50. You hit that at 1,000 monitored hosts.

After that it cannot get through every host in 30 seconds. Nothing crashes, your metrics just get older. Raise `METRICS_POLL_CONCURRENCY` if you want them fresher, see [Environment Variables](/setup/environment-variables).

## The host list gets big

Termix sends the whole host list in one go. At 20,000 hosts that is a 38 MB response taking about 1.4 seconds. At 1,000 hosts it is under 2 MB and you will not notice.

## Above 20,000 hosts

The server fell over when about 20,000 hosts were monitored while new ones were being added. It needed a restart. The database was fine.

The same 20,000 hosts were stable with only 10,000 monitored. Turn metrics off for hosts that do not need it.

## Interface

|  Hosts | Page load | Memory | Scrolling |
| -----: | --------: | -----: | --------- |
|    200 |      22 s |  32 MB | Smooth    |
|  1,000 |      22 s |  51 MB | Smooth    |
|  5,000 |      23 s |  98 MB | Smooth    |
| 10,000 |      23 s | 273 MB | Smooth    |
| 19,100 |     258 s | 595 MB | Unusable  |

Up to about 10,000 hosts the interface is fine. The 22 second load is there even at 200 hosts, so that is startup, not your host count.

Between 10,000 and 20,000 it gets bad. At 19,100 hosts the page took over four minutes to load.

The sidebar is not the problem. It only draws 20-30 rows at a time no matter how many hosts you have, which is why the list looks short until you scroll.

The slowdown is the Host Status card on the Dashboard, which draws a row for every host. At 5,000 hosts it was over 99% of the page. Known issue, being fixed. Until then, stay off the Dashboard if you have a lot of hosts. Everything else works fine.

## Check your own numbers

```bash
# CPU and memory
docker stats termix

# Database size
docker exec termix stat -c %s /app/data/db.sqlite.encrypted
```

If your numbers look off, it is usually remote desktop running, a shorter metrics interval, or a longer retention.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.
