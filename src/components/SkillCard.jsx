
export default function SkillCard({ skill }) {
  return (
    <div className="group flex min-h-[105px] flex-col items-center justify-center gap-3 rounded-xl border border-white/[0.09] bg-[#0e1517] px-2 py-4 transition duration-300 hover:-translate-y-1 hover:border-[#80e9ad]/50 hover:bg-[#14231b]">
      <span
        className={`flex h-8 items-center justify-center text-3xl font-bold ${skill.color}`}
      >
        {skill.icon}
      </span>

      <span className="text-center text-[11px] font-medium text-slate-300 transition group-hover:text-white">
        {skill.name}
      </span>
    </div>
  );
}
