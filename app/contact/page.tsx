import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";

export default function ContactPage() {
  return (
    <main className="bg-white text-[#10233f]">
      <PageHero eyebrow="Contact Us" title="Request a solar energy quote from Solomax.">
        Share your property, power needs and project goals. Solomax can help recommend the right
        renewable energy solution.
      </PageHero>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1fr] lg:px-8">
          <div className="rounded bg-[#061d3b] p-8 text-white">
            <h2 className="text-2xl font-black">Get in touch</h2>
            <p className="mt-4 text-sm font-medium leading-7 text-white/70">
              Replace these contact details with the official Solomax phone, email and address when
              ready.
            </p>
            <div className="mt-8 grid gap-5 text-sm font-bold text-white/75">
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-[#f7c316]" /> +234 000 000 0000</p>
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-[#f7c316]" /> info@solomaxenergy.com</p>
              <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-[#f7c316]" /> Nigeria</p>
            </div>
          </div>

          <form className="grid gap-4 rounded border border-slate-200 bg-[#fbfcff] p-6 shadow-sm">
            <input className="h-12 rounded border border-slate-200 px-4 text-sm font-semibold outline-none transition focus:border-[#f7c316]" placeholder="Full name" />
            <input className="h-12 rounded border border-slate-200 px-4 text-sm font-semibold outline-none transition focus:border-[#f7c316]" placeholder="Email address" />
            <input className="h-12 rounded border border-slate-200 px-4 text-sm font-semibold outline-none transition focus:border-[#f7c316]" placeholder="Phone number" />
            <select className="h-12 rounded border border-slate-200 px-4 text-sm font-semibold outline-none transition focus:border-[#f7c316]" defaultValue="">
              <option value="" disabled>Project type</option>
              <option>Residential solar</option>
              <option>Commercial solar</option>
              <option>Industrial installation</option>
              <option>Energy storage</option>
            </select>
            <textarea className="min-h-36 rounded border border-slate-200 px-4 py-3 text-sm font-semibold outline-none transition focus:border-[#f7c316]" placeholder="Tell us about your project" />
            <button className="h-12 rounded bg-[#f7c316] text-sm font-black uppercase text-[#061d3b] transition hover:bg-[#e3ad08]">
              Submit Request
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
