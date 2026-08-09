import Image from "next/image";
import { Award, CheckCircle2, Leaf, ShieldCheck, SunMedium } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const values = [
  "Safe, reliable and affordable renewable energy solutions.",
  "Clean energy systems designed for African power needs.",
  "Experienced professionals in solar generation and energy storage.",
  "A clear commitment to moving communities away from fossil fuels.",
];

export default function AboutPage() {
  return (
    <main className="bg-white text-[#10233f]">
      <PageHero eyebrow="About Us" title="A reputable renewable energy company in Nigeria.">
        Solomax Renewable Energy Ltd helps homes, businesses and industrial clients harness solar
        power for instant usage and store excess generated energy for periods of high demand.
      </PageHero>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-8">
          <div className="relative min-h-[360px] overflow-hidden rounded shadow-xl">
            <Image
              src="/gallery/about.jpeg"
              alt="Solomax Renewable Energy Ltd company profile and project collage"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="bg-[#6b351a] object-contain"
            />
            <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded bg-[#f7c316] px-5 py-4 text-[#061d3b] shadow-xl">
              <Award className="h-8 w-8" />
              <div>
                <p className="text-xl font-black">10+</p>
                <p className="text-[11px] font-extrabold uppercase">Years of Experience</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
              Company Profile
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#061d3b] sm:text-4xl">
              Engineering clean power generation and storage solutions.
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
              Solomax was formed from a clear passion to develop solar power generation and energy
              storage solutions. The company provides solutions that improve power experience with
              clean energy for Africans.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
              Our firm is dedicated to engineering renewable solutions that contribute sustainable
              directions in clean energy generation, with the motive of moving Africa from fossil
              fuels.
            </p>
            <div className="mt-7 grid gap-3">
              {values.map((value) => (
                <p key={value} className="flex items-center gap-3 text-sm font-bold text-[#061d3b]">
                  <CheckCircle2 className="h-5 w-5 text-[#49a942]" />
                  {value}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-16">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {[
            ["Our Vision", "Moving Africa into a society powered by sustainable sources of energy.", SunMedium],
            ["Our Mission", "Continually provide solar solutions that improve clean energy access.", ShieldCheck],
            ["Our Future", "Help clients adopt efficient systems that support a cleaner environment.", Leaf],
          ].map(([title, text, Icon]) => {
            const ValueIcon = Icon as typeof SunMedium;
            return (
              <article key={title as string} className="rounded border border-slate-200 bg-white p-6 shadow-sm">
                <ValueIcon className="h-8 w-8 text-[#f7c316]" />
                <h3 className="mt-5 text-xl font-black text-[#061d3b]">{title as string}</h3>
                <p className="mt-3 text-sm font-medium leading-7 text-slate-600">{text as string}</p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
