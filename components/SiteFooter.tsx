import Link from "next/link";
import { Mail, MapPin, Phone, SolarPanel } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#04152c] text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.1fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded bg-[#f7c316] text-[#061d3b]">
              <SolarPanel className="h-6 w-6" />
            </span>
            <div>
              <p className="text-lg font-black uppercase">Solomax</p>
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/55">
                Renewable Energy Ltd
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm font-medium leading-7 text-white/65">
            Clean, safe, reliable and affordable renewable energy solutions for homes, businesses
            and industrial projects across Nigeria.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-[#f7c316]">Quick Links</h3>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-white/70">
            <Link href="/about-us" className="transition hover:text-[#f7c316]">About Us</Link>
            <Link href="/services" className="transition hover:text-[#f7c316]">Services</Link>
            <Link href="/projects" className="transition hover:text-[#f7c316]">Projects</Link>
            <Link href="/contact" className="transition hover:text-[#f7c316]">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase text-[#f7c316]">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm font-semibold text-white/70">
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-[#f7c316]" /> +234 000 000 0000</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-[#f7c316]" /> info@solomaxenergy.com</p>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[#f7c316]" /> Nigeria</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-semibold text-white/45">
        Copyright 2026 Solomax Renewable Energy Ltd. All rights reserved.
      </div>
    </footer>
  );
}
