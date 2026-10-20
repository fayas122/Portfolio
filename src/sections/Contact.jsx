
import { ArrowRight, ArrowUpRight, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/portfolioData";

export default function Contact({ lightMode }) {
  return (
    <section
      id="contact"
      className="scroll-mt-24 pb-10 pt-4 sm:pb-14"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Contact CTA */}
        <div
          className={`relative overflow-hidden rounded-2xl border px-6 py-8 sm:px-10 sm:py-10 ${
            lightMode
              ? "border-[#426951]/30 bg-gradient-to-r from-[#edf7ef] via-[#f5f8f4] to-[#eaf3ed]"
              : "border-[#426951]/50 bg-gradient-to-r from-[#10251e] via-[#0e1b19] to-[#101719]"
          }`}
        >
          {/* Background glow */}
          <div className="pointer-events-none absolute -right-10 -top-24 h-56 w-56 rounded-full bg-emerald-500/10 blur-[80px]" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <Send
                size={34}
                strokeWidth={1.4}
                className="mt-1 shrink-0 text-[#80e9ad]"
              />

              <div>
                <h2
                  className={`text-xl font-semibold sm:text-2xl ${
                    lightMode
                      ? "text-[#245c39]"
                      : "text-[#a3f3c3]"
                  }`}
                >
                  Let's Work Together
                </h2>

                <p
                  className={`mt-2 max-w-lg text-xs leading-6 ${
                    lightMode ? "text-slate-600" : "text-slate-300"
                  }`}
                >
                  Have a project in mind or just want to say hi?
                  I'd love to hear from you.
                </p>
              </div>
            </div>

            {/* Navigate to the full-page contact form */}
            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 self-start rounded-full bg-[#80e9ad] px-5 py-3 text-xs font-semibold text-[#08120c] transition hover:-translate-y-1 hover:bg-[#a0f5c2] sm:self-center"
            >
              Get In Touch
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>

        {/* Footer */}
        <footer
          className={`mt-8 flex flex-col items-center justify-between gap-3 border-t pt-6 text-center text-[11px] sm:flex-row sm:text-left ${
            lightMode
              ? "border-black/[0.08] text-slate-500"
              : "border-white/[0.07] text-slate-500"
          }`}
        >
          <a
            href="#home"
            className="font-serif text-xl italic text-[#80e9ad]"
          >
            MF
          </a>

          <p>
            © {new Date().getFullYear()} {personalInfo.name}.
            Built with React.
          </p>

          <a
            href="#home"
            className="flex items-center gap-2 transition hover:text-[#80e9ad]"
          >
            Back to top
            <ArrowUpRight size={13} />
          </a>
        </footer>
      </div>
    </section>
  );
}
