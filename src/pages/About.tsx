import Footer from '../components/Footer';

export default function About() {
  return (
    <div className="animate-fade-in-up rounded-3xl border border-border bg-card p-14 shadow-[0_25px_70px_rgba(0,0,0,0.1)] backdrop-blur-2xl dark:shadow-[0_25px_70px_rgba(0,0,0,0.5)]">
      <h1 className="mb-6 text-[3.5rem] font-extrabold leading-[1.15] max-[850px]:text-[2.5rem]">
        Professional Profile
      </h1>
      <p className="mb-8 max-w-[820px] text-xl leading-[1.8] text-muted">
        Leveraging my roots in Quality Assurance to build the next generation of
        High-Performance, Automated Cloud Infrastructure.
      </p>

      <div className="my-10 grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h3 className="mb-5 flex items-center gap-2.5 text-[1.4rem] text-accent">
            <span>💼</span> Professional Experience
          </h3>
          <p className="mb-4 text-[1.05rem] leading-relaxed text-muted">
            Working as a <b>QA Engineer at Rossmann</b> since 2023. I ensure the resilience of the
            POS Eco-System and mission-critical retail infrastructure.
          </p>
          <ul className="mt-4 list-none">
            <li className="flex justify-between border-b border-border py-2 font-mono text-sm">
              Workplace Infrastructure <span className="font-bold text-success">Active</span>
            </li>
            <li className="flex justify-between border-b border-border py-2 font-mono text-sm">
              Linux Systems Administration <span className="font-bold text-success">✓</span>
            </li>
            <li className="flex justify-between border-b border-border py-2 font-mono text-sm">
              Google Cloud Platform <span className="font-bold text-success">✓</span>
            </li>
            <li className="flex justify-between border-b border-border py-2 font-mono text-sm">
              Datadog Observability <span className="font-bold text-success">✓</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-5 flex items-center gap-2.5 text-[1.4rem] text-accent">
            <span>🎓</span> Academic Journey
          </h3>
          <p className="mb-4 text-[1.05rem] leading-relaxed text-muted">
            Currently pursuing an <b>M.Sc. DevOps & Cloud</b>. My research and studies focus on
            scalable, secure, and automated delivery lifecycles.
          </p>
          <ul className="mt-4 list-none">
            <li className="flex justify-between border-b border-border py-2 font-mono text-sm">
              Study & Research <span className="font-bold text-success">Focus</span>
            </li>
            <li className="flex justify-between border-b border-border py-2 font-mono text-sm">
              Python Scripting <span className="font-bold text-success">✓</span>
            </li>
            <li className="flex justify-between border-b border-border py-2 font-mono text-sm">
              Terraform (IaC) <span className="font-bold text-success">Learning</span>
            </li>
            <li className="flex justify-between border-b border-border py-2 font-mono text-sm">
              GitHub Actions & CI/CD <span className="font-bold text-success">Learning</span>
            </li>
            <li className="flex justify-between border-b border-border py-2 font-mono text-sm">
              Docker & Kubernetes <span className="font-bold text-success">Learning</span>
            </li>
          </ul>
        </div>
      </div>

      <h3 className="mt-12 text-[1.4rem] text-ink">Global Skill Stack</h3>
      <div className="mt-6 flex flex-wrap gap-3">
        {['Linux', 'Python', 'GCP', 'Docker', 'Kubernetes', 'Git', 'GitHub Action', 'CI CD', 'Terraform', 'Datadog'].map(
          (skill) => (
            <div
              key={skill}
              className="rounded-full border border-success/30 bg-success/10 px-5 py-2 text-[0.95rem] font-semibold text-success"
            >
              {skill}
            </div>
          ),
        )}
      </div>

      <h2 className="mt-16 text-[2.5rem] font-extrabold leading-[1.15]">Get In Touch</h2>
      <div className="mt-6 grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-7">
        <div className="rounded-2xl border border-border bg-muted/5 p-9 text-center">
          <div className="mb-4 text-2xl">💼</div>
          <h4 className="mb-4 text-2xl font-semibold text-ink">LinkedIn</h4>
          <a
            href="https://www.linkedin.com/in/suleman-butt"
            className="font-bold text-accent no-underline"
          >
            Visit Profile →
          </a>
        </div>
        <div className="rounded-2xl border border-border bg-muted/5 p-9 text-center">
          <div className="mb-4 text-2xl">📧</div>
          <h4 className="mb-4 text-2xl font-semibold text-ink">Email</h4>
          <a href="mailto:sahamd.ent@gmail.com" className="font-bold text-accent no-underline">
            Send Email →
          </a>
        </div>
      </div>

      <div className="mt-12">
        <Footer />
      </div>
    </div>
  );
}
