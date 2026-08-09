"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Contact", href: "/contact" },
];

function QuoteButton({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/contact"
      onClick={onClick}
      className="group inline-flex h-11 items-center justify-center gap-2 rounded bg-[#f7c316] px-5 text-[11px] font-extrabold uppercase tracking-normal text-[#061d3b] shadow-lg shadow-slate-950/10 transition duration-300 hover:bg-[#e3ad08]"
    >
      Request a Quote
      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Solomax home">
          <Image
            src="/logo.jpeg"
            alt="Solomax Renewable Energy Ltd logo"
            width={64}
            height={64}
            className="h-12 w-12 shrink-0 object-contain sm:h-14 sm:w-14"
            priority
          />
          <div className="min-w-0 leading-none">
            <p className="text-lg font-black uppercase text-[#061d3b] sm:text-xl">Solomax</p>
            <p className="mt-1 max-w-[160px] text-[8px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:max-w-none sm:text-[9px] sm:tracking-[0.28em]">
              Renewable Energy Ltd
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[12px] font-bold text-[#061d3b] transition hover:text-[#f7c316]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <QuoteButton />
        </div>

        <button
          className="flex h-11 w-11 items-center justify-center rounded border border-slate-200 text-[#061d3b] transition hover:border-[#f7c316] hover:bg-[#fff8d7] lg:hidden"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen ? (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-slate-200 bg-white px-4 pb-5 shadow-xl lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-7xl gap-2 pt-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded px-4 py-3 text-sm font-extrabold text-[#061d3b] transition hover:bg-slate-50 hover:text-[#e3ad08]"
                >
                  {item.label}
                </Link>
              ))}
              <QuoteButton onClick={() => setIsMenuOpen(false)} />
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
