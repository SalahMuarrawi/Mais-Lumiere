"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TREATMENTS, TREATMENT_CATEGORIES } from "@/lib/data";
import type { Treatment } from "@/lib/data";

const HIGHLIGHT_IDS = [
  "oxygeneo-glow-facial",
  "korean-glass-skin-facial",
  "ml-microneedling-gesicht",
  "luxus-koreanisches-brow-lash-lifting",
] as const;

function TreatmentCard({ treatment, index }: { treatment: Treatment; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#1f1b19] shadow-[0_8px_24px_-16px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.75)]"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-linen">
        <img
          src={treatment.image}
          alt={treatment.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg leading-snug text-ink">{treatment.name}</h3>
          <p className="mt-0.5 whitespace-nowrap font-medium tracking-wide text-gold-dark">
            {treatment.price}
          </p>
        </div>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-ink-soft/70">
          {TREATMENT_CATEGORIES[treatment.category]}
        </p>
        <Link
          href="/behandlungen"
          aria-label={`Mehr über ${treatment.name}`}
          className="mt-auto inline-flex items-center gap-2 pt-4 text-xs uppercase tracking-[0.2em] text-gold-dark transition-colors hover:text-gold"
        >
          Mehr erfahren <span aria-hidden>→</span>
        </Link>
      </div>
    </motion.article>
  );
}

export default function Treatments() {
  const highlights = TREATMENTS.filter((t) => (HIGHLIGHT_IDS as readonly string[]).includes(t.id));

  return (
    <section id="behandlungen" className="relative overflow-hidden bg-linen py-20 sm:py-28">
      {/* Hintergrund-Muster */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(176,141,87,0.25) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/* Section Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold-dark">
            Ausgewählte Highlights
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Unsere Signature-Behandlungen
          </h2>
          <p className="mt-6 font-light leading-relaxed text-ink-soft">
            Vier Favoriten aus unserer Karte – vom OxyGeneo® Glow Facial bis zum Luxus Brow &amp; Lash
            Lifting. Entdecken Sie alle {TREATMENTS.length} Behandlungen in unserem vollständigen
            Leistungskatalog.
          </p>
        </motion.header>

        {/* Highlights */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((treatment, index) => (
            <TreatmentCard key={treatment.id} treatment={treatment} index={index} />
          ))}
        </div>

        {/* Abschluss */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 flex justify-center border-t border-ink/10 pt-12"
        >
          <Link
            href="/behandlungen"
            className="group inline-flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-gold-dark transition-colors hover:text-gold"
          >
            Alle {TREATMENTS.length} Behandlungen ansehen
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
