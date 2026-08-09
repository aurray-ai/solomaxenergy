import { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#061d3b] py-20 text-white">
      <div className="absolute inset-0 solar-grid opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(247,195,22,0.28),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
          {eyebrow}
        </p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
        <div className="mt-5 max-w-2xl text-sm font-medium leading-7 text-white/72 sm:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}
