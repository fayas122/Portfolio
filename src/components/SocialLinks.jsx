
import { personalInfo } from "../data/portfolioData";

const socials = [
  { text: "GH", href: personalInfo.github, label: "GitHub" },
  { text: "IN", href: personalInfo.linkedin, label: "LinkedIn" },
  { text: "IG", href: personalInfo.instagram, label: "Instagram" },
];

export default function SocialLinks() {
  return (
    <div className="mt-7 flex items-center gap-3">
      {socials.map(({ text, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          title={label}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/5 bg-[#141e22] text-sm font-semibold text-slate-300 transition hover:-translate-y-1 hover:bg-[#80e9ad] hover:text-[#07120b]"
        >
          {text}
        </a>
      ))}
    </div>
  );
}
