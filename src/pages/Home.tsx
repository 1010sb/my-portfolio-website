import { projectTiers, projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionBadge from '../components/SectionBadge';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="animate-fade-in-up rounded-3xl border border-border bg-card p-14 shadow-[0_25px_70px_rgba(0,0,0,0.1)] backdrop-blur-2xl dark:shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
      <div className="mb-12 flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="mb-2.5 bg-gradient-to-br from-ink to-muted bg-clip-text text-[2.2rem] font-extrabold tracking-[-0.03em] text-transparent">
            Suleman Butt
          </div>
          <div className="font-mono text-[0.95rem] font-medium text-accent">www.sulemanb.com</div>
        </div>
        <div className="inline-flex items-center gap-2.5 rounded-full border border-warning/20 bg-warning/10 px-6 py-3 text-[0.75rem] font-semibold uppercase text-warning">
          <div className="h-2 w-2 animate-pulse-glow rounded-full bg-warning" />
          Under Construction
        </div>
      </div>

      <h1 className="mb-6 text-[3.5rem] font-extrabold leading-[1.15] max-[850px]:text-[2.5rem]">
        DevOps Portfolio
      </h1>
      <p className="mb-8 max-w-[820px] text-xl leading-[1.8] text-muted">
        I architect reliable, high-availability systems with a quality-first mindset. Currently,
        I'm building a series of DevOps projects designed to solve real-world infrastructure
        challenges. I'm passionate about creating the kind of automated, scalable systems that
        empower teams to ship better software at high speed.
      </p>

      {projectTiers.map((tier, i) => (
        <div key={tier} className={i === projectTiers.length - 1 ? 'mb-12' : 'mb-8'}>
          <div className="mb-2 mt-2">
            <SectionBadge tier={tier} />
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7">
            {projects
              .filter((p) => p.tier === tier)
              .map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
          </div>
        </div>
      ))}

      <div className="mb-10 flex justify-center">
        <a
          href="https://www.linkedin.com/in/suleman-butt"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-2xl bg-accent px-10 py-4 font-semibold text-white no-underline transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(96,165,250,0.4)]"
        >
          Connect on LinkedIn →
        </a>
      </div>

      <Footer />
    </div>
  );
}
