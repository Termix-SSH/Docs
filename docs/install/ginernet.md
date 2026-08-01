# GINERNET

:::info Sponsored
GINERNET is a paid sponsor of Termix. This page was created as part of that sponsorship.
:::

## Benefits

Running the Termix server on a cloud VPS instead of inside your own network has a few advantages:

- **Out-of-band access:** If Termix runs inside the network it manages, an outage takes Termix with it, and your hosts, credentials, and saved sessions are stuck inside the system you are trying to fix. An external VPS stays reachable no matter what happens to your network.
- **Independent failure:** A VPS does not share power, network, hypervisor, or storage with the machines it manages. One failure cannot take out both your infrastructure and the tool you fix it with.
- **Reachable from anywhere:** A public endpoint means no VPN or port forward to reach your hosts from a laptop, a phone, or someone else's network.
- **Static IP:** A fixed address is easy to allowlist in firewalls and `sshd` configs, and it does not change when a home ISP re-leases your address.
- **No hardware to maintain:** Backups and rebuilds are handled by GINERNET.
- **Better uptime:** Datacenter power, cooling, and network redundancy usually beat a homelab or office rack.

## Setup

### Create an account

Go to [manager.ginernet.com](https://manager.ginernet.com) and create an account with a username and password.

Once you are in, open the billing tab and fill in your billing details. You will also need to complete identity verification before you can create a server.

### Add an SSH key

Open the **SSH Keys** tab in the left sidebar and click **Generate SSH key**, or **Add SSH key** if you already have one.

![The SSH Keys page in the GINERNET Manager, with the Generate SSH key button highlighted](/img/ginernet/ssh-keys-page.png)

Name it something like `Termix SSH Key` and click **Generate**.

![The Generate SSH key dialog with the name set to Termix SSH Key](/img/ginernet/generate-ssh-key.png)

:::warning
If you generate a new key, copy the private key now. It is only shown once.
:::

### Create the VPS

Open the **VPSs** tab and click **Create your first VPS**, or **Create a VPS** in the top right if you already have one.

![The empty VPS list with the Create your first VPS button highlighted](/img/ginernet/vps-list-empty.png)

A modal opens. If this is your first GINERNET VPS, leave it on **Create a new VDC** and name it something like `Termix VDC`, then click **Continue**.

![The Create VPS dialog with Create a new VDC selected and the name set to Termix VDC](/img/ginernet/create-vps-vdc.png)

On the **Basic configuration** screen:

- **Location:** Whatever is avaliable to you
- **Server type:** AMD EPYC/Ryzen
- **Hostname:** `termix`
- **Operating system:** Debian 13 (Ubuntu works too)
- **Management type:** Unmanaged

![The Basic configuration step of the VPS wizard](/img/ginernet/wizard-1-basic-configuration.png)

Click **Next**.

For **Resources**, 1 vCore and 1 GB of RAM is enough for 0 to 20 hosts. Scale up as you add more. The default 10 GB disk is plenty. Click **Next**.

![The Resources step with CPU and RAM set to 1 vCore and 1 GB](/img/ginernet/wizard-2-resources.png)

For **Network**, set **Primary IPv4** to **New IP (/32)**. Leave traffic billing on pay as you go unless you want a monthly quota. Click **Next**.

![The Network step with Primary IPv4 set to New IP](/img/ginernet/wizard-3-network.png)

Skip the **Licenses** tab. On the **SSH Keys** tab, tick the key you just added.

![The SSH Keys step with the Termix SSH Key selected](/img/ginernet/wizard-5-ssh-keys.png)

Click **Create VPS**. It takes about 30 seconds to provision. You can watch progress in the top right and on the progress bar at the bottom.

![The provisioning task page showing a status of Succeeded](/img/ginernet/provision-succeeded.png)

Once it shows as succeeded, open the **VPSs** tab and select your server. From here you can manage it, see your costs, network information, and public IP. Backups, stats, and the remote console are also here.

![The VPS overview page with the Access box highlighted](/img/ginernet/vps-overview.png)

### Open the firewall

Termix runs on port 8080, so you need to allow it.

Open the **Firewall** tab at the top and click **New rule** in the rules box at the bottom.

![The Rules box on the Firewall tab with the New rule button highlighted](/img/ginernet/firewall-new-rule-button.png)

Fill in the rule:

- **Direction:** IN
- **Action:** ACCEPT
- **Protocol:** tcp
- **Source:** Any IP, or just your own IP if you want to lock it down
- **Destination:** Any IP
- **Source port:** leave empty
- **Destination port:** 8080
- **Description:** `Allow Termix NGINX`

Then hit **Save**.

![The Edit firewall rule dialog filled in to allow inbound TCP traffic to the Termix port](/img/ginernet/firewall-rule-modal.png)

### Connect to the server

Go back to the overview page. The **Access** box on the left has your public IPv4 and IPv6 and the username.

Copy the IPv4 address and username into your SSH client and connect using the key you generated. If you do not have an SSH client set up, click **Open console** and work from the built in console instead. In the console, press enter, then log in with the username and password shown in the **Access** box.

### Create a user (optional)

Logging in as root is not ideal. To create your own user:

```bash
adduser termix
```

Enter a password and fill in the prompts. Then open the SSH config:

```bash
nano /etc/ssh/sshd_config
```

Set these two values:

```
PermitRootLogin no
PasswordAuthentication no
```

Save and exit. Before restarting SSH, open a second connection with the new user and confirm it works. If you lock yourself out, you can still get back in through the GINERNET console.

Once you have confirmed it works, restart SSH:

```bash
sudo systemctl restart ssh
```

:::info
On Debian the service is `ssh`. On some distributions it is `sshd`. If the command above fails, try `sudo systemctl restart sshd`.
:::

### Install Docker

The current instructions are always in the [Docker docs](https://docs.docker.com/engine/install/debian/#install-using-the-repository). As of now:

```bash
# Add Docker's official GPG key:
sudo apt update
sudo apt install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
sudo tee /etc/apt/sources.list.d/docker.sources <<EOF
Types: deb
URIs: https://download.docker.com/linux/debian
Suites: $(. /etc/os-release && echo "$VERSION_CODENAME")
Components: stable
Architectures: $(dpkg --print-architecture)
Signed-By: /etc/apt/keyrings/docker.asc
EOF

sudo apt update
```

Then install Docker:

```bash
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Install Termix

Create a folder and download the compose file:

```bash
mkdir -p ~/termix
cd ~/termix
curl -fsSL -o docker-compose.yml https://raw.githubusercontent.com/Termix-SSH/Termix/refs/heads/main/docker/docker-compose.yml
```

Start it:

```bash
sudo docker compose up -d
```

The first start takes a while as the images download. It is ready when you see `Container Termix started`.

### Open Termix

Termix is now running on port 8080. Open `http://YOUR_IP:8080` in a browser, using the IPv4 address from the **Access** box.

Enter a username and password. This creates your first admin user, and Termix is ready to use.

![The Termix signup screen in a browser, creating the first admin account](/img/ginernet/termix-signup.png)

### Scaling up

If your instance starts feeling laggy as you add hosts, go to the VPS overview page and click **Modify resources** in the resources box to add more CPU or RAM.

## Support

If you need help or want to request a feature with Termix, visit the [Issues](https://github.com/Termix-SSH/Support/issues) page, log in, and press `New Issue`.
Please be as detailed as possible in your issue, preferably written in English. You can also join the [Discord](https://discord.gg/jVQGdvHDrf) server and visit the support
channel, however, response times may be longer.

