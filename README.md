# My Portfolio Website

Personal DevOps portfolio — live at [sulemanb.com](https://sulemanb.com)

![Deploy](https://img.shields.io/badge/Deploy-GitHub_Actions-2088FF?style=flat&logo=githubactions&logoColor=white)
![Host](https://img.shields.io/badge/Host-Hetzner_VPS-D50C2D?style=flat&logo=hetzner&logoColor=white)
![CDN](https://img.shields.io/badge/CDN-Cloudflare-F38020?style=flat&logo=cloudflare&logoColor=white)
![Proxy](https://img.shields.io/badge/Proxy-Nginx-009639?style=flat&logo=nginx&logoColor=white)

---

## What This Is

A single-file HTML/CSS/JS portfolio website, automatically deployed to a self-hosted Hetzner VPS on every push to `main` via GitHub Actions.

---

## Architecture

```
Local machine
    │
    │  git push
    ▼
GitHub Repository
    │
    │  GitHub Actions (SCP)
    ▼
Hetzner VPS — /root/landing-page/index.html
    │
    ▼
Nginx Proxy Manager (Docker)
    │
    ▼
Cloudflare CDN
    │
    ▼
sulemanb.com
```

---

## Stack

| Layer | Technology | Purpose |
|---|---|---|
| Website | HTML / CSS / JS | Single file portfolio |
| CI/CD | GitHub Actions | Auto-deploy on push |
| Transfer | SCP (appleboy/scp-action) | Copy file to VPS |
| Server | Hetzner VPS (Ubuntu) | Hosting |
| Reverse Proxy | Nginx Proxy Manager | Route traffic, SSL |
| CDN | Cloudflare | Caching, DDoS protection |

---

## How Deployment Works

Every push to `main` triggers the GitHub Actions workflow which:

1. Checks out the repository
2. Copies `index.html` to `/root/landing-page/` on the VPS via SCP
3. Nginx Proxy Manager serves the updated file immediately

The workflow uses three GitHub repository secrets:

| Secret | Purpose |
|---|---|
| `VPS_HOST` | Hetzner VPS IP address |
| `VPS_USER` | SSH user (`root`) |
| `VPS_KEY` | Private SSH key for authentication |

---

## deploy.yml

```yaml
name: Deploy to VPS

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Deploy index.html to VPS
        uses: appleboy/scp-action@v0.1.7
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_KEY }}
          source: "index.html"
          target: "/root/landing-page/"
```

---

## Cloudflare Cache

Cloudflare CDN caches the website at the edge. After each deployment, if changes are not immediately visible:

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Select your domain → **Caching** → **Configuration**
3. Click **Purge Cache** → **Purge Everything**

Browser Cache TTL is set to **30 seconds** during active development to minimise manual purging.

---

## Key Files

```
my-portfolio-website/
├── index.html                  # Portfolio website
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment pipeline
└── README.md
```

---

## What I Learned

- How to set up an automated CI/CD pipeline using GitHub Actions
- How to securely transfer files to a remote server via SCP using SSH keys
- How to store sensitive credentials as GitHub repository secrets
- How Cloudflare CDN caching interacts with deployments and how to purge it

---

## Related Projects

- **[devops-vps-ci-cd](https://github.com/1010sb/devops-vps-ci-cd)** — VPS infrastructure setup (Docker, Nginx, Cloudflare, UFW)

---

## Author

**Suleman Butt** — QA Engineer transitioning to DevOps & Cloud Engineering

[sulemanb.com](https://sulemanb.com) · [LinkedIn](https://linkedin.com/in/suleman-butt) · [GitHub](https://github.com/1010sb)
