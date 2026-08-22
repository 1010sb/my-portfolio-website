import type { ProjectTier } from '../data/projects';

const TIER_STYLES: Record<ProjectTier, string> = {
  Beginner: 'text-success bg-success/8 border-success/20',
  Intermediate: 'text-warning bg-warning/8 border-warning/20',
  Advanced: 'text-accent bg-accent/8 border-accent/20',
};

export default function SectionBadge({ tier }: { tier: ProjectTier }) {
  return (
    <span
      className={`inline-block rounded-full border px-3.5 py-[5px] font-mono text-[0.72rem] font-bold uppercase tracking-[0.08em] ${TIER_STYLES[tier]}`}
    >
      ▸ {tier}
    </span>
  );
}
