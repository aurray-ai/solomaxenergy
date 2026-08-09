"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BatteryCharging,
  Building2,
  CheckCircle2,
  Factory,
  Leaf,
  MapPin,
  Menu,
  PiggyBank,
  ShieldCheck,
  SolarPanel,
  SunMedium,
  UsersRound,
  Zap,
} from "lucide-react";

const navItems = ["Home", "About Us", "Services", "Projects", "Why Choose Us", "Contact"];

const benefits = [
  {
    title: "High Quality",
    text: "We use globally trusted products selected for performance, durability and long-term value.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Installation",
    text: "Our experienced professionals bring practical design, engineering and installation knowledge.",
    icon: BadgeCheck,
  },
  {
    title: "Cost Effective",
    text: "We make dependable renewable energy accessible with fair pricing and efficient systems.",
    icon: PiggyBank,
  },
  {
    title: "Sustainable Future",
    text: "We help move homes and businesses away from fossil fuels toward cleaner power.",
    icon: Leaf,
  },
];

const stats = [
  { value: "150+", label: "Projects Completed", icon: Building2 },
  { value: "100+", label: "Happy Clients", icon: UsersRound },
  { value: "25MW+", label: "Solar Power Installed", icon: BatteryCharging },
];

const services = [
  "Residential solar systems",
  "Commercial solar installations",
  "Energy storage systems",
  "Project design and management",
];

const principles = [
  "Customer service focused on reliability, dependability, fair prices and exceptional service.",
  "Employee commitment through teamwork, safe work environments and high professional standards.",
  "Environmental respect through responsible use of natural resources for future generations.",
  "Regulatory integrity with strict compliance, transparency and open communication.",
  "Operational excellence across safety, performance, assets and customer expectations.",
];

const projects = [
  { title: "Industrial Installation", place: "Lagos, Nigeria", tone: "from-slate-950 to-blue-800" },
  { title: "Commercial Project", place: "Abuja, Nigeria", tone: "from-sky-950 to-cyan-800" },
  { title: "Factory Installation", place: "Port Harcourt, Nigeria", tone: "from-blue-950 to-slate-700" },
  { title: "Solar Power Plant", place: "Kano, Nigeria", tone: "from-zinc-950 to-blue-900" },
];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
};

function ButtonLink({
  children,
  href,
  variant = "gold",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "gold" | "navy" | "outline";
}) {
  const styles = {
    gold: "bg-[#f7c316] text-[#061d3b] hover:bg-[#e3ad08]",
    navy: "bg-[#061d3b] text-white hover:bg-[#0b2e58]",
    outline: "border border-white/55 bg-white/10 text-white hover:bg-white hover:text-[#061d3b]",
  };

  return (
    <a
      href={href}
      className={`group inline-flex h-11 items-center justify-center gap-2 rounded px-5 text-[11px] font-extrabold uppercase tracking-normal shadow-lg shadow-slate-950/10 transition duration-300 ${styles[variant]}`}
    >
      {children}
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  );
}

function PlaceholderImage({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`panel-placeholder solar-grid relative overflow-hidden ${className}`}
      aria-label={`${label} placeholder`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/30" />
      <div className="absolute inset-x-5 bottom-5 z-10 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded bg-[#f7c316] text-[#061d3b] shadow-lg">
          <SolarPanel className="h-5 w-5" />
        </span>
        <span className={`text-sm font-bold ${dark ? "text-white" : "text-white"}`}>{label}</span>
      </div>
      <div className="shine absolute inset-0" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#10233f]">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Solomax home">
            <Image
              src="/logo.jpeg"
              alt="Solomax Renewable Energy Ltd logo"
              width={64}
              height={64}
              className="h-14 w-14 object-contain"
              priority
            />
            <div className="leading-none">
              <p className="text-xl font-black uppercase text-[#061d3b]">Solomax</p>
              <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.28em] text-slate-500">
                Renewable Energy Ltd
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className={`text-[12px] font-bold transition hover:text-[#f7c316] ${
                  index === 0 ? "text-[#f7c316]" : "text-[#061d3b]"
                }`}
              >
                {item}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="#contact">Request a Quote</ButtonLink>
          </div>

          <button
            className="flex h-11 w-11 items-center justify-center rounded border border-slate-200 text-[#061d3b] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </header>

      <section id="home" className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <PlaceholderImage label="Hero solar image placeholder" className="h-full w-full" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/86 to-white/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(247,195,22,0.32),transparent_28%)]" />

        <div className="relative mx-auto grid min-h-[520px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:min-h-[610px] lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded bg-[#fff4c4] px-3 py-2 text-[11px] font-extrabold uppercase text-[#061d3b] shadow-sm">
              <SunMedium className="h-4 w-4 text-[#e3ad08]" />
              Reliable Renewable Energy
            </div>
            <h1 className="max-w-xl text-4xl font-black leading-[1.05] text-[#061d3b] sm:text-5xl lg:text-[58px]">
              Powering Homes and Businesses with Reliable{" "}
              <span className="text-[#f7c316]">Solar Energy</span>
            </h1>
            <p className="mt-6 max-w-lg text-sm font-medium leading-7 text-slate-700 sm:text-base">
              Solomax Renewable Energy Ltd is a reputable solar energy company in Nigeria focused
              on harnessing power from the sun for instant usage and storing excess generated energy
              for when power demand is high.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="#services">Our Services</ButtonLink>
              <ButtonLink href="#contact" variant="navy">
                Request a Quote
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="pointer-events-none relative hidden h-[430px] lg:block"
          >
            <div className="float-soft absolute bottom-2 right-2 h-[330px] w-[560px] skew-x-[-13deg] overflow-hidden rounded-tl-[70px] border border-white/50 shadow-2xl shadow-[#061d3b]/30">
              <PlaceholderImage label="Solar field placeholder" className="h-full w-full" />
            </div>
            <div className="absolute right-10 top-8 flex h-24 w-24 items-center justify-center rounded-full bg-[#f7c316] text-[#061d3b] shadow-xl">
              <Zap className="h-10 w-10" />
            </div>
          </motion.div>
        </div>
      </section>

      <section id="why-choose-us" className="bg-[#061d3b] text-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-4 sm:px-6 md:grid-cols-2 md:divide-x md:divide-y-0 lg:grid-cols-4 lg:px-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                {...fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group flex gap-4 py-8 md:px-5 lg:px-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded border border-[#f7c316]/45 text-[#f7c316] transition group-hover:bg-[#f7c316] group-hover:text-[#061d3b]">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold">{benefit.title}</h3>
                  <p className="mt-2 text-[12px] font-medium leading-5 text-white/72">{benefit.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="about-us" className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr_0.55fr] lg:items-center lg:px-8">
          <motion.div {...fadeUp} className="relative">
            <PlaceholderImage
              label="Installation team placeholder"
              className="min-h-[330px] rounded shadow-xl shadow-slate-200"
            />
            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded bg-[#f7c316] px-5 py-4 text-[#061d3b] shadow-xl">
              <Award className="h-8 w-8" />
              <div>
                <p className="text-xl font-black">10+</p>
                <p className="text-[11px] font-extrabold uppercase">Years of Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.65, delay: 0.1 }} className="lg:pl-3">
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
              About Solomax Renewable Energy Ltd
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#061d3b] sm:text-4xl">
              Your Trusted Partner in Solar Energy and Storage Solutions
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
              With vivid experience and wide exposure in solar power generation and energy storage,
              Solomax provides solutions that improve power experience with clean energy for
              Africans. The company was formed from a clear passion to develop solar power
              generation and energy storage solutions.
            </p>
            <p className="mt-4 text-sm font-medium leading-7 text-slate-600">
              Our firm is dedicated to engineering renewable solutions that contribute sustainable
              directions in clean energy generation, with the motive of moving Africa away from
              fossil fuels.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2 text-sm font-bold text-[#061d3b]">
                  <CheckCircle2 className="h-4 w-4 text-[#49a942]" />
                  {service}
                </div>
              ))}
            </div>
            <div className="mt-7">
              <ButtonLink href="#about-us" variant="navy">
                Read More About Us
              </ButtonLink>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.2 }}
            className="grid gap-4 rounded border border-slate-100 bg-[#fbfcff] p-5 shadow-sm"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="flex items-center gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded bg-[#fff4c4] text-[#061d3b]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-[#061d3b]">{stat.value}</p>
                    <p className="text-[12px] font-bold text-slate-500">{stat.label}</p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.78fr_1fr] lg:px-8">
          <motion.div
            {...fadeUp}
            className="rounded border border-slate-200 bg-white p-7 shadow-sm"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
              Our Vision
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#061d3b]">
              Moving Africa into a society powered by sustainable energy.
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
              Solomax is motivated every day to provide solar solutions that improve Africans&apos;
              experience with clean energy opportunities.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="rounded border border-slate-200 bg-white p-7 shadow-sm"
          >
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
              Superior Products
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-[#061d3b]">
              Globally updated solar panels, inverters and storage systems.
            </h2>
            <p className="mt-5 text-sm font-medium leading-7 text-slate-600">
              We are committed to staying updated with global innovations and leading manufacturers
              of solar panels, inverters and solar storage systems. Our assurance is to provide the
              highest and most efficient solar power generation systems at a value customers can
              trust.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-[#f7f9fc] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
                Our Services
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#061d3b] sm:text-4xl">
                Solar Solutions Built for Every Need
              </h2>
            </div>
            <ButtonLink href="#contact" variant="navy">
              Get Started
            </ButtonLink>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Residential Solar", "Clean, reliable power for modern homes.", SolarPanel],
              ["Commercial Systems", "Lower operating costs for businesses.", Building2],
              ["Industrial Projects", "Scalable energy for demanding facilities.", Factory],
              ["Energy Support", "Maintenance, audit and performance care.", Zap],
            ].map(([title, text, Icon], index) => {
              const ServiceIcon = Icon as typeof SolarPanel;
              return (
                <motion.article
                  key={title as string}
                  {...fadeUp}
                  transition={{ duration: 0.55, delay: index * 0.08 }}
                  className="group rounded border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200"
                >
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded bg-[#061d3b] text-[#f7c316] transition group-hover:bg-[#f7c316] group-hover:text-[#061d3b]">
                    <ServiceIcon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-black text-[#061d3b]">{title as string}</h3>
                  <p className="mt-3 text-sm font-medium leading-6 text-slate-600">{text as string}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_0.85fr] lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
              Core Principles
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight text-[#061d3b] sm:text-4xl">
              Built on reliable service, compliance, safety and excellence.
            </h2>
            <div className="mt-7 grid gap-4">
              {principles.map((principle) => (
                <div
                  key={principle}
                  className="flex gap-3 rounded border border-slate-200 bg-[#fbfcff] p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#49a942]" />
                  <p className="text-sm font-semibold leading-6 text-slate-650">{principle}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="relative overflow-hidden rounded bg-[#061d3b] p-8 text-white shadow-xl"
          >
            <div className="absolute inset-0 solar-grid opacity-20" />
            <div className="relative">
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
                Core Competence
              </p>
              <h2 className="mt-3 text-3xl font-black leading-tight">
                Industrial expertise for design, engineering and project delivery.
              </h2>
              <p className="mt-5 text-sm font-medium leading-7 text-white/75">
                Solomax Renewable Energy is made up of experienced industry professionals with
                practical knowledge across design, engineering and project management. We use the
                latest technology and proven methods to boost renewable energy success for clients.
              </p>
              <div className="mt-8 grid gap-3">
                {["Design", "Engineering", "Project Management", "Energy Standards"].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold">
                    <span className="h-2.5 w-2.5 rounded bg-[#f7c316]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
                Our Projects
              </p>
              <h2 className="mt-2 text-3xl font-black text-[#061d3b] sm:text-4xl">
                Some of Our Completed Projects
              </h2>
            </div>
            <ButtonLink href="#projects" variant="navy">
              View All Projects
            </ButtonLink>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                {...fadeUp}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group relative min-h-[210px] overflow-hidden rounded bg-[#061d3b] shadow-lg"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.tone}`} />
                <PlaceholderImage label="Gallery image placeholder" className="absolute inset-0 opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white transition duration-300 group-hover:translate-y-[-4px]">
                  <h3 className="text-sm font-black">{project.title}</h3>
                  <p className="mt-1 flex items-center gap-1 text-[11px] font-bold text-white/75">
                    <MapPin className="h-3 w-3 text-[#f7c316]" />
                    {project.place}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#061d3b] py-16 text-white">
        <div className="absolute inset-0 solar-grid opacity-25" />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:px-8">
          <motion.div {...fadeUp}>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
              Request a Quote
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight sm:text-4xl">
              Ready to switch to clean, reliable and cost-effective solar energy?
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-7 text-white/72">
              Tell Solomax about your property, power needs and project goals. The team will guide
              you toward the right solar solution.
            </p>
          </motion.div>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="rounded border border-white/12 bg-white p-6 text-[#061d3b] shadow-2xl shadow-black/20"
          >
            <div className="grid gap-4">
              <input className="h-12 rounded border border-slate-200 px-4 text-sm font-semibold outline-none transition focus:border-[#f7c316]" placeholder="Full name" />
              <input className="h-12 rounded border border-slate-200 px-4 text-sm font-semibold outline-none transition focus:border-[#f7c316]" placeholder="Email or phone" />
              <select className="h-12 rounded border border-slate-200 px-4 text-sm font-semibold outline-none transition focus:border-[#f7c316]" defaultValue="">
                <option value="" disabled>
                  Project type
                </option>
                <option>Residential solar</option>
                <option>Commercial solar</option>
                <option>Industrial installation</option>
              </select>
              <button className="group inline-flex h-12 items-center justify-center gap-2 rounded bg-[#f7c316] text-sm font-black uppercase text-[#061d3b] transition hover:bg-[#e3ad08]">
                Submit Request
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
