import type { Project } from '../data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  const isCompleted = project.status === 'completed';

  return (
    <div
      className={`flex flex-col rounded-2xl border bg-muted/5 p-9 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent ${
        isCompleted ? 'border-success' : 'border-border'
      }`}
    >
      <div
        className={`mb-5 flex items-center gap-2 font-mono text-[0.72rem] font-semibold ${
          isCompleted ? 'text-success' : 'text-warning'
        }`}
      >
        <span
          className={`h-[7px] w-[7px] rounded-full bg-current ${isCompleted ? '' : 'animate-blink'}`}
        />
        {isCompleted ? 'Completed' : 'Coming Soon'}
      </div>

      <h4 className="mb-4 text-2xl font-semibold text-ink">{project.title}</h4>
      <p className="mb-6 flex-grow text-base leading-relaxed text-muted">{project.description}</p>

      <div>
        {project.tech.map((tag) => (
          <span
            key={tag}
            className="mb-1.5 mr-1.5 inline-block rounded-lg bg-muted/10 px-3.5 py-1.5 font-mono text-[0.72rem] text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-accent transition-all duration-300 hover:translate-x-1 hover:text-accent-hover"
        >
          View Project GitHub →
        </a>
      )}
    </div>
  );
}
