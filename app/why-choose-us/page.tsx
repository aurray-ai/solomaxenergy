import { BadgeCheck, Leaf, PiggyBank, ShieldCheck, UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const reasons = [
  ["High Quality", "Globally trusted solar products selected for performance and durability.", ShieldCheck],
  ["Expert Installation", "Experienced professionals with design, engineering and practical project knowledge.", BadgeCheck],
  ["Cost Effective", "Dependable renewable energy systems with fair pricing and long-term value.", PiggyBank],
  ["Customer Service", "Reliable, dependable and exceptional support for African energy users.", UsersRound],
  ["Sustainable Future", "Cleaner power solutions that help reduce dependence on fossil fuels.", Leaf],
];

const principles = [
  "Customer service",
  "Employee commitment",
  "Environmental respect",
  "Regulatory integrity",
  "Operational excellence",
];

export default function WhyChooseUsPage() {
  return (
    <main className="bg-[#f7f9fc] text-[#10233f]">
      <PageHero eyebrow="Why Choose Us" title="A partner focused on safety, reliability and clean energy.">
        Solomax combines practical industry knowledge with strong principles that support clients,
        employees, communities and the environment.
      </PageHero>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-5 lg:px-8">
          {reasons.map(([title, text, Icon]) => {
            const ReasonIcon = Icon as typeof ShieldCheck;
            return (
              <article key={title as string} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                <ReasonIcon className="h-8 w-8 text-[#f7c316]" />
                <h2 className="mt-5 text-lg font-black text-[#061d3b]">{title as string}</h2>
                <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
            Core Principles
          </p>
          <h2 className="mt-3 text-3xl font-black text-[#061d3b]">What guides our work</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {principles.map((principle) => (
              <div key={principle} className="rounded border border-slate-200 bg-[#fbfcff] p-5 text-sm font-black text-[#061d3b]">
                {principle}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
