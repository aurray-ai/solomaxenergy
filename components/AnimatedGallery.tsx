"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const galleryImages = [
  { src: "/gallery/gallery-1.jpeg", title: "Solar Installation" },
  { src: "/gallery/gallery-2.jpeg", title: "Energy Storage" },
  { src: "/gallery/gallery-3.jpeg", title: "Panel Setup" },
  { src: "/gallery/gallery-4.jpeg", title: "Site Inspection" },
  { src: "/gallery/gallery-5.jpeg", title: "Project Delivery" },
  { src: "/gallery/gallery-6.jpeg", title: "Renewable Systems" },
];

export function AnimatedGallery() {
  return (
    <section className="overflow-hidden bg-[#061d3b] py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#f7c316]">
              Project Gallery
            </p>
            <h2 className="mt-2 text-3xl font-black leading-tight sm:text-4xl">
              Solomax work in motion
            </h2>
          </div>
          <a
            href="/projects"
            className="group inline-flex h-11 items-center justify-center gap-2 rounded bg-[#f7c316] px-5 text-[11px] font-black uppercase text-[#061d3b] transition hover:bg-[#e3ad08]"
          >
            View Gallery
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex min-w-max gap-5 px-5"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {[...galleryImages, ...galleryImages].map((image, index) => (
            <article
              key={`${image.src}-${index}`}
              className="group relative h-72 w-[260px] shrink-0 overflow-hidden rounded border border-white/10 bg-white/10 shadow-xl sm:w-[340px]"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 260px, 340px"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <h3 className="absolute bottom-5 left-5 text-sm font-black">{image.title}</h3>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
