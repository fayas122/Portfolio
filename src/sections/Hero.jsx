
import { ArrowRight, Code2, Mail } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import SocialLinks from "../components/SocialLinks";

export default function Hero({ lightMode = false }) {
  return (
    <section
      id="home"
      className={`relative isolate min-h-[410px] overflow-hidden scroll-mt-20 transition-colors duration-300 ${
        lightMode ? "bg-[#f5f8f5]" : "bg-[#080e0f]"
      }`}
    >
      {/* Background Glow */}
      <div
        className={`pointer-events-none absolute -right-20 top-0 -z-10 h-[420px] w-[420px] rounded-full blur-[130px] ${
          lightMode ? "bg-emerald-400/20" : "bg-emerald-500/10"
        }`}
      />

      {/* Bottom Organic Background */}
      <div
        className={`pointer-events-none absolute -bottom-5 left-0 -z-10 h-24 w-[55%] rounded-r-[50%] blur-sm ${
          lightMode ? "bg-[#dcebe0]/70" : "bg-[#10201a]/70"
        }`}
      />

      {/* Hero Layout */}
      <div className="mx-auto grid min-h-[510px] max-w-5xl items-center gap-2 px-5 pb-5 pt-16 sm:pt-16 md:grid-cols-[1fr_1fr] md:gap-0 md:px-2 md:pb-5 lg:px-0">
        {/* Left Content */}
        <div className="relative z-20">
          {/* Greeting */}
          <span
            className={`inline-flex rounded-full border px-3.5 py-1 text-[11px] font-medium ${
              lightMode
                ? "border-[#4c8a68]/50 bg-[#e5f3e9] text-[#276b43]"
                : "border-[#4c8a68]/60 bg-[#173b2b]/30 text-[#9bf2bd]"
            }`}
          >
            Hello, I'm
          </span>

          {/* Name */}
          <h1
            className={`mt-2 whitespace-nowrap text-[34px] font-semibold leading-[1.12] tracking-[-0.045em] sm:text-[42px] lg:text-[48px] ${
              lightMode ? "text-[#17241c]" : "text-[#f4f7fa]"
            }`}
          >
            {personalInfo.firstName}{" "}
            <span className="text-[#80e9ad]">
              {personalInfo.lastName}
            </span>
          </h1>

          {/* Role */}
          <p
            className={`mt-3 text-[11px] font-medium uppercase tracking-[0.38em] sm:text-xs ${
              lightMode ? "text-[#405448]" : "text-[#d0dce0]"
            }`}
          >
            {personalInfo.role}
          </p>

          {/* Description */}
          <p
            className={`mt-4 max-w-[330px] text-[12px] leading-[1.65] sm:text-[13px] ${
              lightMode ? "text-[#425348]" : "text-[#cbd5df]"
            }`}
          >
            {personalInfo.description}
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className={`group inline-flex items-center gap-3 rounded-full px-5 py-[11px] text-[11px] font-semibold text-[#07120b] shadow-[0_0_20px_rgba(128,233,173,0.08)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#a0f5c2] ${
              lightMode
                ? "bg-gradient-to-br from-[#b8e4c6] via-[#6ebc89] to-[#dcefe1]"
                : "bg-gradient-to-br from-[#24583d] via-[#397c56] to-[#10251c]"
            }`}
          
            >
              View My Projects

              <ArrowRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-[10px] text-[11px] transition duration-300 hover:border-[#80e9ad] hover:text-[#80e9ad] ${
                lightMode
                  ? "border-[#aab8ae] text-[#273a2d]"
                  : "border-[#526066] text-[#e1e7eb]"
              }`}
            >
              Contact Me
              <Mail size={13} />
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-5 [&>div]:mt-0">
            <SocialLinks lightMode={lightMode} />
          </div>
        </div>

        {/* Right Profile Visual */}
        <div className="relative mx-auto flex top-[11%] h-[330px] w-full max-w-[490px] items-center justify-center sm:h-[360px] md:ml-auto md:h-[370px]">
          {/* Organic Green Shape */}
          <div
            className={`absolute left-[12%] top-[8%] h-[83%] w-[75%] rotate-[-9deg] rounded-[36%_45%_27%_40%] ${
              lightMode
                ? "bg-gradient-to-br from-[#b8e4c6] via-[#6ebc89] to-[#dcefe1]"
                : "bg-gradient-to-br from-[#24583d] via-[#397c56] to-[#10251c]"
            }`}
          />

          {/* Soft Green Glow */}
          <div
            className={`absolute left-[7%] top-[18%] h-[68%] w-[82%] rounded-[45%_30%_38%_28%] blur-2xl ${
              lightMode ? "bg-emerald-500/15" : "bg-emerald-400/10"
            }`}
          />

          {/* Profile Image */}
          <div className="absolute inset-x-[5%] bottom-0 top-10 z-10 flex items-end justify-center">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="h-full w-full object-contain object-bottom"
            />
          </div>

          {/* Handwritten Annotation */}
          <div
            className={`absolute right-[1%] top-[7%] z-20 rotate-[-8deg] font-serif text-[14px] italic leading-[1.3rem] ${
              lightMode ? "text-[#28784b]" : "text-[#80e9ad]"
            }`}
          >
            <p>Code</p>
            <p className="ml-2">Build</p>
            <p className="ml-3">Improve</p>
          </div>

          {/* Curved Arrow */}
          <svg
            className={`absolute right-[7%] top-[23%] z-20 h-14 w-12 ${
              lightMode ? "text-[#358c59]" : "text-[#80e9ad]/80"
            }`}
            viewBox="0 0 48 64"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M39 3C37 22 26 36 8 45"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
            <path
              d="M16 35L8 45L20 43"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Hand-Drawn Sketch */}
          <svg
            className={`absolute bottom-[25%] left-[1%] z-20 h-24 w-20 ${
              lightMode ? "text-[#358c59]/80" : "text-[#80e9ad]/70"
            }`}
            viewBox="0 0 80 100"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M73 4C54 15 22 40 8 55C3 62 20 52 30 46C43 38 59 26 70 21C76 18 66 31 58 42C43 60 27 76 14 91"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>

          {/* Floating Info Card */}
          <div
            className={`absolute bottom-[7%] right-0 z-30 w-[145px] rounded-xl border p-3 shadow-2xl backdrop-blur-md sm:right-[-2px] sm:w-[160px] ${
              lightMode
                ? "border-[#c5d8ca] bg-white/95"
                : "border-white/15 bg-[#11191b]/95"
            }`}
          >
            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#245f43] text-[#9bf2bd]">
              <Code2 size={16} />
            </div>

            <p
              className={`text-[11px] leading-[1.15rem] ${
                lightMode ? "text-[#34483b]" : "text-slate-200"
              }`}
            >
              Turning ideas
              <br />
              into real web apps
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Divider */}
      <div
        className={`h-px bg-gradient-to-r from-transparent ${
          lightMode ? "via-[#358c59]/30" : "via-[#80e9ad]/20"
        } to-transparent`}
      />
    </section>
  );
}
