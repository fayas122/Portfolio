
import { ArrowRight } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionLabel>Featured Projects</SectionLabel>

            <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
              Some of My Work
            </h2>
          </div>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="mb-1 hidden items-center gap-2 text-xs font-medium text-[#80e9ad] transition hover:gap-3 sm:flex"
          >
            View All Projects <ArrowRight size={14} />
          </a>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
