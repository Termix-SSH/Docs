## Installation

Visit the [Termix Docs](https://docs.termix.site/install) for full installation instructions across all platforms.

Sample Docker Compose file (you can omit `guacd` and the network if you don't plan on using remote desktop features):

```yaml
services:
  termix:
    image: ghcr.io/lukegus/termix:latest
    container_name: termix
    restart: unless-stopped
    ports:
      - "8080:8080"
    volumes:
      - termix-data:/app/data
    environment:
      PORT: "8080"
    depends_on:
      - guacd
    networks:
      - termix-net

  guacd:
    image: guacamole/guacd:1.6.0
    container_name: guacd
    restart: unless-stopped
    ports:
      - "4822:4822"
    networks:
      - termix-net

volumes:
  termix-data:
    driver: local

networks:
  termix-net:
    driver: bridge
```

### Cloud Hosting

You can also run the Termix server on a cloud VPS instead of inside your own network. If Termix runs on the network it manages, an outage takes Termix with it, and your hosts and saved sessions are stuck inside the system you are trying to fix. Hosting it externally keeps it reachable no matter what happens to your network, and gives you a static IP and access from anywhere without a VPN or port forward.

The tradeoff is that Termix holds SSH credentials for every host you manage, so hosting it externally puts them on hardware you do not control and gives them a public attack surface. Which option is better depends on your setup.

[GINERNET](https://docs.termix.site/install/ginernet) is a sponsor of Termix, and there is a full step by step guide for deploying to their VPS platform in the docs.

<br />
