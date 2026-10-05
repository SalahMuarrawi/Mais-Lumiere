"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  SITE,
  TREATMENTS,
  TREATMENT_CATEGORIES,
  TREATMENT_CATEGORY_ORDER,
} from "@/lib/data";
import type { TreatmentCategory } from "@/lib/data";

type CategoryFilter = TreatmentCategory | "all";

const TABS: { id: CategoryFilter; label: string }[] = [
  { id: "all", label: "Alle" },
  ...TREATMENT_CATEGORY_ORDER.map((c) => ({
    id: c as CategoryFilter,
    label: TREATMENT_CATEGORIES[c],
  })),
];

export default function BehandlungenPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleTreatment = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredTreatments = useMemo(() => {
    const q = search.trim().toLowerCase();
    return TREATMENTS.filter((t) => {
      const matchesCategory = activeCategory === "all" || t.category === activeCategory;
      const matchesSearch = q.length === 0 || t.name.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#0F0E0E] text-neutral-200 antialiased">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24">
        <header className="mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">{SITE.name} · {SITE.city}</p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">Unsere Behandlungen</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-neutral-200/70">
            Von der klassischen Gesichtsbehandlung bis zur apparativen Anwendung – entdecken Sie unser Leistungsspektrum und vereinbaren Sie Ihren Wunschtermin.
          </p>
        </header>

        <div className="relative mb-8 max-w-md">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-500" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="m20 20-3.5-3.5" /></svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Behandlung suchen…"
            aria-label="Behandlungen durchsuchen"
            className="w-full rounded-full border border-neutral-800 bg-neutral-900/60 py-3 pl-11 pr-4 text-sm text-white outline-none transition-colors placeholder:text-neutral-500 focus:border-[#D4AF37]"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Behandlungskategorien">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveCategory(t.id)}
              aria-pressed={activeCategory === t.id}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === t.id
                  ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                  : "border-neutral-800 bg-neutral-900/60 text-neutral-300 hover:border-[#D4AF37]/50 hover:text-white"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <p className="mb-6 text-xs uppercase tracking-widest text-neutral-500">
          {filteredTreatments.length} {filteredTreatments.length === 1 ? "Behandlung" : "Behandlungen"}
        </p>

        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTreatments.map((t) => (
              <article
                key={t.id}
                onClick={() => {
                  if (t.description) toggleTreatment(t.id);
                }}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 transition-colors hover:border-[#D4AF37]/50"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-800/60">
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-neutral-950/80 px-3 py-1 text-[10px] uppercase tracking-widest text-[#D4AF37]">
                    {TREATMENT_CATEGORIES[t.category]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h2 className="font-serif text-lg font-semibold leading-snug text-white">{t.name}</h2>
                  <p className="text-sm font-medium text-[#D4AF37]">{t.price}</p>
                  {t.description && (
                    <>
                      <button
                        type="button"
                        aria-expanded={expandedId === t.id}
                        aria-controls={`treatment-details-${t.id}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleTreatment(t.id);
                        }}
                        className="mt-3 inline-flex cursor-pointer items-center gap-1 self-start text-xs tracking-wider text-amber-400 transition hover:text-amber-300"
                      >
                        {expandedId === t.id ? "Weniger Details ↑" : "Details & Info ↓"}
                      </button>
                      <AnimatePresence initial={false}>
                        {expandedId === t.id && (
                        <motion.div
                          id={`treatment-details-${t.id}`}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          onClick={(e) => e.stopPropagation()}
                          className="mt-3 overflow-hidden border-t border-neutral-800 pt-3 text-xs leading-relaxed text-neutral-300"
                        >
                          <p>{t.description}</p>
                        </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  )}
                  <a
                    href={SITE.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#D4AF37]/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-[#D4AF37] transition-colors hover:bg-[#D4AF37] hover:text-neutral-950"
                  >
                    Termin buchen
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" /></svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-neutral-800 bg-neutral-900/40 p-12 text-center">
            <p className="text-lg font-medium text-white">Keine Behandlung gefunden</p>
            <p className="mt-2 text-sm text-neutral-400">Passen Sie Ihre Suche an oder wählen Sie eine andere Kategorie.</p>
          </div>
        )}
      </div>
    </main>
  );
}