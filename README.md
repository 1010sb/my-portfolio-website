# My Portfolio Website

Personal DevOps portfolio — live at [sulemanb.com](https://sulemanb.com)

## Stack
- HTML/CSS/JS — single file portfolio
- Hosted on Hetzner VPS (Ubuntu)
- Served via Nginx Reverse Proxy (Docker)
- CDN via Cloudflare

## Deployment
Automatic deployment via GitHub Actions on every push to `main`.
The workflow copies `index.html` to the VPS using SCP.