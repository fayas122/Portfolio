
export default function ProjectCard({ project }) {
  return (
    <article
      className="
        theme-surface theme-border group
        overflow-hidden rounded-xl border
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#80e9ad]/50
        hover:shadow-[0_10px_30px_rgba(54,150,91,0.08)]
      "
    >
      {/* Project Preview */}
      <div className="relative mx-3 mt-3 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={`${project.title} preview`}
          loading="lazy"
          className="
            h-36 w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
            sm:h-32
          "
        />

        {/* Image Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

        {/* Project Category */}
        {project.category && (
          <span
            className="
              absolute left-2.5 top-2.5
              rounded-full border border-white/20
              bg-black/60 px-2.5 py-1
              text-[9px] font-medium text-white
              backdrop-blur-md
            "
          >
            {project.category}
          </span>
        )}
      </div>

      {/* Project Information */}
      <div className="p-4">
        <h3 className="theme-heading text-sm font-semibold leading-5 transition-colors group-hover:text-[#80e9ad]">
          {project.title}
        </h3>

        <p className="theme-muted mt-2.5 min-h-[52px] text-[11px] leading-[1.6]">
          {project.description}
        </p>

        {/* Technology Tags */}
        {project.tags?.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="
                  theme-tag rounded-full
                  border border-[var(--border)]
                  px-2.5 py-1
                  text-[9px] font-medium
                  transition-colors
                  group-hover:border-[#80e9ad]/15
                "
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Text Links — No Icons */}
        <div className="mt-4 flex items-center gap-4 text-[10px] font-medium">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-muted transition-colors hover:text-[#80e9ad]"
            >
              GitHub
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-accent transition-colors hover:underline"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
