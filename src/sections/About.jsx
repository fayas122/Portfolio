
import {
  GraduationCap,
  Code2,
  Rocket,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { personalInfo, highlights, aboutDetails } from "../data/portfolioData";

const icons = {
  graduation: GraduationCap,
  code: Code2,
  rocket: Rocket,
  location: MapPin,
  mail: Mail,
  phone: Phone,
  education: GraduationCap,
};

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <SectionLabel>About Me</SectionLabel>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-100 sm:text-4xl">
              I'm a Self Learner
              <br />
              and <span className="text-[#80e9ad]">Problem Solver</span>
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-slate-400">
              {personalInfo.about}
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = icons[item.icon];

                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <Icon size={22} className="mt-1 shrink-0 text-[#80e9ad]" />
                    <div>
                      <h3 className="text-xs font-semibold text-slate-200">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-[10px] leading-4 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-[#101719] p-6 sm:mt-20">
              <p className="mb-5 text-xs italic text-[#80e9ad]">
                A little about me ↘
              </p>

              <div className="space-y-5">
                {aboutDetails.map((item) => {
                  const Icon = icons[item.icon];

                  return (
                    <div key={item.icon + item.text} className="flex items-start gap-3">
                      <Icon size={16} className="mt-0.5 shrink-0 text-[#80e9ad]" />
                      <span className="text-xs leading-5 text-slate-300">
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="group relative min-h-[280px] overflow-hidden rounded-2xl border border-white/10 sm:min-h-[330px]">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=85"
                alt="Laptop and workspace"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#080e0f]/80 via-transparent to-transparent" />

              <p className="absolute bottom-5 left-5 text-xs font-medium text-white">
                Creating something meaningful.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
