# Secure Edge-to-Container Stack

A hardened, production-ready Linux server on Hetzner VPS with Cloudflare CDN, SSL termination, Nginx Reverse Proxy, and Docker — built from scratch.

![Stack](https://img.shields.io/badge/Ubuntu-22.04-E95420?style=flat&logo=ubuntu&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-Compose-2496ED?style=flat&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-Proxy_Manager-009639?style=flat&logo=nginx&logoColor=white)
![Cloudflare](https://img.shields.io/badge/Cloudflare-CDN_&_Proxy-F38020?style=flat&logo=cloudflare&logoColor=white)
![SSL](https://img.shields.io/badge/SSL-Let's_Encrypt-003A70?style=flat&logo=letsencrypt&logoColor=white)
![UFW](https://img.shields.io/badge/Firewall-UFW-E95420?style=flat&logo=linux&logoColor=white)

---

## What I Built

A secure, self-hosted infrastructure stack on a Hetzner VPS — configured entirely from scratch without managed hosting. The goal was to understand how real production infrastructure is hardened, proxied, and exposed to the public internet safely.

**Live at:** [sulemanb.com](https://sulemanb.com)

---

## Architecture

```
Internet
    │
    ▼
Cloudflare CDN & Proxy
(DDoS protection, caching, DNS)
    │
    ▼
Hetzner VPS — Ubuntu
UFW Firewall (ports 80, 443, 22 only)
    │
    ▼
Nginx Proxy Manager (Docker container)
(SSL termination via Let's Encrypt)
    │
    ▼
Application containers (Docker Compose)
```

---

## Stack

| Layer | Technology | Purpose |
|---|---|---|
| Server | Hetzner VPS (Ubuntu 22.04) | Cloud compute |
| Firewall | UFW | Block all traffic except 22, 80, 443 |
| CDN & Proxy | Cloudflare | DDoS protection, caching, DNS |
| Reverse Proxy | Nginx Proxy Manager | Route traffic, manage SSL |
| SSL | Let's Encrypt + Cloudflare | End-to-end HTTPS |
| Containers | Docker + Docker Compose | Application runtime |

---

## What I Did — Step by Step

### 1. Server Setup
- Provisioned Ubuntu VPS on Hetzner Cloud
- Configured SSH key-based authentication (password login disabled)
- Created a non-root sudo user
- Set up UFW firewall — allow only ports 22 (SSH), 80 (HTTP), 443 (HTTPS)

### 2. Docker & Docker Compose
- Installed Docker Engine and Docker Compose on Ubuntu
- Defined all services in `docker-compose.yml` for reproducible deployments
- Used Docker networks to isolate container communication

### 3. Nginx Proxy Manager
- Deployed Nginx Proxy Manager as a Docker container via Compose
- Configured proxy hosts to route incoming requests to target containers
- Managed SSL certificates through the NPM web UI

### 4. SSL — Let's Encrypt + Cloudflare
- Obtained SSL certificates via Let's Encrypt through Nginx Proxy Manager
- Configured Cloudflare in Full (Strict) SSL mode for end-to-end encryption
- Set up automatic certificate renewal

### 5. Cloudflare CDN
- Pointed domain DNS to Cloudflare nameservers
- Enabled Cloudflare proxy for DDoS protection and caching
- Configured firewall rules to only accept traffic from Cloudflare IP ranges

---

## Key Files

```
devops-vps-ci-cd/
├── docker-compose.yml       # All container definitions
├── nginx/                   # Nginx Proxy Manager data (volumes)
└── README.md
```

---

## docker-compose.yml (structure)

```yaml
version: '3'

services:
  nginx-proxy-manager:
    image: jc21/nginx-proxy-manager:latest
    ports:
      - "80:80"
      - "443:443"
      - "81:81"   # Admin UI
    volumes:
      - ./data:/data
      - ./letsencrypt:/etc/letsencrypt
    restart: unless-stopped

  # Application containers sit behind the proxy
  # and are not exposed directly to the internet
```

---

## Security Decisions

- **SSH keys only** — password authentication disabled on day one
- **UFW restricts all inbound** except SSH, HTTP, HTTPS
- **Cloudflare as the only public entry point** — origin IP is not exposed
- **Let's Encrypt + Cloudflare Full Strict** — no mixed or plain HTTP traffic reaches the server
- **Containers not exposed directly** — all public traffic goes through Nginx Proxy Manager

---

## What I Learned

- How to provision and harden a Linux server from scratch
- How reverse proxies route traffic between the public internet and backend services
- How SSL termination works in a layered stack (Cloudflare → Let's Encrypt → container)
- How Docker Compose manages multi-container environments reproducibly
- How Cloudflare CDN, DNS proxying, and firewall rules interact

---

## Next Steps

- [ ] Add GitHub Actions CI/CD pipeline for automated deployments
- [ ] Write first Dockerfile to containerise a Python application
- [ ] Add Terraform to provision the Hetzner VPS as code

---

## Author

**Suleman Butt** — QA Engineer transitioning to DevOps & Cloud Engineering

[sulemanb.com](https://sulemanb.com) · [LinkedIn](https://linkedin.com/in/suleman-butt) · [GitHub](https://github.com/1010sb)
