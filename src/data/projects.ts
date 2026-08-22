export type ProjectTier = 'Beginner' | 'Intermediate' | 'Advanced';
export type ProjectStatus = 'completed' | 'coming-soon';

export interface Project {
  tier: ProjectTier;
  status: ProjectStatus;
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    tier: 'Beginner',
    status: 'completed',
    title: 'Secure Edge-to-Container Stack',
    description:
      "Hardened Linux server on Hetzner VPS from scratch. Cloudflare CDN with Nginx Reverse Proxy in Docker, UFW firewall, and SSL via Let's Encrypt.",
    tech: ['VPS', 'Ubuntu', 'Docker', 'Nginx', 'Cloudflare'],
    link: 'https://github.com/1010sb/my-portfolio-website',
  },
  {
    tier: 'Beginner',
    status: 'completed',
    title: 'Stock Sentiment Analysis',
    description:
      'NLP pipeline analysing 4.1M tweets across 5 stocks (TSLA, NVDA, PLTR, PG, NEE) using FinBERT. Spearman correlation between sentiment and price movement.',
    tech: ['Python', 'FinBERT', 'NLP', 'Pandas', 'Data Science'],
    link: 'https://github.com/1010sb/StockSentimentAnalysis',
  },
  {
    tier: 'Intermediate',
    status: 'coming-soon',
    title: 'CI/CD Pipeline Automation',
    description:
      'End-to-end automated pipeline with integrated security scanning and artifact management deploying to the VPS on every push.',
    tech: ['GitHub Actions', 'Docker', 'SonarQube'],
  },
  {
    tier: 'Intermediate',
    status: 'coming-soon',
    title: 'Cloud Infrastructure as Code',
    description:
      'Modular infrastructure templates for GCP with automated provisioning. Reproducible environments managed entirely through code.',
    tech: ['Terraform', 'Ansible', 'GCP'],
  },
  {
    tier: 'Advanced',
    status: 'coming-soon',
    title: 'Kubernetes GitOps Platform',
    description:
      'Fully automated GitOps deployments with service mesh and Prometheus monitoring on GCP GKE. Infrastructure and application state managed via Git.',
    tech: ['Kubernetes', 'ArgoCD', 'Helm', 'Prometheus', 'GCP GKE'],
  },
];

export const projectTiers: ProjectTier[] = ['Beginner', 'Intermediate', 'Advanced'];
