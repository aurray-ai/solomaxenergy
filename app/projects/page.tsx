import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const projects = [
  ["Industrial Installation", "Lagos, Nigeria", "/gallery/gallery-1.jpeg"],
  ["Commercial Solar Project", "Abuja, Nigeria", "/gallery/gallery-2.jpeg"],
  ["Factory Installation", "Port Harcourt, Nigeria", "/gallery/gallery-3.jpeg"],
  ["Solar Storage Setup", "Kano, Nigeria", "/gallery/gallery-4.jpeg"],
  ["Panel Maintenance", "Nigeria", "/gallery/gallery-5.jpeg"],
  ["Renewable Energy System", "Nigeria", "/gallery/gallery-6.jpeg"],
];

export default function ProjectsPage() {
  return (
    <main className="bg-white text-[#10233f]">
      <PageHero eyebrow="Projects" title="Completed solar and renewable energy work.">
        Explore Solomax project visuals. Replace these images anytime by updating the files in
        `public/gallery`.
      </PageHero>

      <section className="py-16">
        <div className="mx-auto grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {projects.map(([title, place, src]) => (
            <article key={title} className="group relative min-h-[300px] overflow-hidden rounded bg-[#061d3b] shadow-lg">
              <Image
                src={src}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-lg font-black">{title}</h2>
                <p className="mt-2 flex items-center gap-2 text-sm font-bold text-white/75">
                  <MapPin className="h-4 w-4 text-[#f7c316]" />
                  {place}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
