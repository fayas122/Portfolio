import SectionLabel from "../components/SectionLabel";
import { skills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <SectionLabel>My Skills</SectionLabel>

        <h2 className="text-2xl font-semibold tracking-tight text-slate-100 sm:text-3xl">
          Technologies I Work With
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group flex items-center gap-4 rounded-xl border border-white/10 bg-[#101719] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#80e9ad]/50 hover:bg-[#15201c]"
            >
              {/* Skill Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-white/[0.03] transition-colors duration-300 group-hover:bg-[#80e9ad]/10">
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className={`h-6 w-6 ${skill.color}`}
                  fill="currentColor"
                  aria-label={skill.name}
                >
                  <path d={skill.icon.path} />
                </svg>
              </div>

              {/* Skill Name */}
              <div className="min-w-0">
                <h3 className="text-sm font-medium text-slate-200 transition-colors group-hover:text-[#80e9ad]">
                  {skill.name}
                </h3>
                <p className="mt-1 text-[10px] text-slate-500">
                  Technology
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}