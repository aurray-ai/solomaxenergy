import { BatteryCharging, Building2, Factory, SolarPanel, Wrench, Zap } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const services = [
  ["Residential Solar", "Reliable solar power and storage systems for modern homes.", SolarPanel],
  ["Commercial Solar", "Cost-conscious renewable energy installations for businesses.", Building2],
  ["Industrial Projects", "Scalable solar systems for factories, facilities and operations.", Factory],
  ["Energy Storage", "Battery and storage solutions for high-demand power periods.", BatteryCharging],
  ["Maintenance", "System care, checks and performance support after installation.", Wrench],
  ["Energy Consulting", "Project design, engineering planning and practical energy advice.", Zap],
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f7f9fc] text-[#10233f]">
      <PageHero eyebrow="Our Services" title="Solar solutions built for homes, businesses and industry.">
        Solomax provides clean energy systems designed around reliability, affordability and
        long-term value.
      </PageHero>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {services.map(([title, text, Icon]) => {
            const ServiceIcon = Icon as typeof SolarPanel;
            return (
              <article key={title as string} className="group rounded border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-14 w-14 items-center justify-center rounded bg-[#061d3b] text-[#f7c316] transition group-hover:bg-[#f7c316] group-hover:text-[#061d3b]">
                  <ServiceIcon className="h-7 w-7" />
                </div>
                <h2 className="mt-8 text-xl font-black text-[#061d3b]">{title as string}</h2>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
