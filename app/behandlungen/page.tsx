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
import { translatedTreatment, useLanguage } from "@/lib/i18n";

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
  const { language, t: translate } = useLanguage();

  const toggleTreatment = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredTreatments = useMemo(() => {
    const q = search.trim().toLowerCase();
    return TREATMENTS.filter((t) => {
      const matchesCategory = activeCategory === "all" || t.category === activeCategory;
      const name = translatedTreatment(t.id, language, t.name, t.description).name;
      const matchesSearch =
        q.length === 0 ||
        t.name.toLowerCase().includes(q) ||
        name.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, language, search]);

  return (
    <main className="min-h-screen bg-cream text-ink antialiased">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24">
        <header className="mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">{SITE.name} · {SITE.city}</p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-ink sm:text-5xl">{translate("Unsere Behandlungen")}</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-ink-soft/80">
            {translate("Von der klassischen Gesichtsbehandlung bis zur apparativen Anwendung – entdecken Sie unser Leistungsspektrum und vereinbaren Sie Ihren Wunschtermin.")}
          </p>
        </header>

        <div className="relative mb-8 max-w-md">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-mist" aria-hidden="true"><circle cx="11" cy="11" r="7" /><path strokeLinecap="round" d="m20 20-3.5-3.5" /></svg>
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={translate("Behandlung suchen…")}
            aria-label={translate("Behandlungen durchsuchen")}
            className="w-full rounded-full border border-white/10 bg-sand py-3 pl-11 pr-4 text-sm text-ink outline-none transition-colors placeholder:text-mist focus:border-gold"
          />
        </div>

        <div className="mb-8 flex flex-wrap gap-2" role="tablist" aria-label="Behandlungskategorien">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id)}
              aria-pressed={activeCategory === tab.id}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeCategory === tab.id
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-white/10 bg-sand text-ink-soft hover:border-gold/50 hover:text-ink"
              }`}
            >
              {tab.label === "Alle" ? translate("Alle") : translate(tab.label)}
            </button>
          ))}
        </div>

        <p className="mb-6 text-xs uppercase tracking-widest text-mist">
          {filteredTreatments.length}{" "}
          {language === "de"
            ? filteredTreatments.length === 1 ? "Behandlung" : "Behandlungen"
            : translate(filteredTreatments.length === 1 ? "treatment-count-one" : "treatment-count-many")}
        </p>

        {filteredTreatments.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTreatments.map((t) => {
              const localized = translatedTreatment(t.id, language, t.name, t.description);
              return (
              <article
                key={t.id}
                onClick={() => {
                  if (t.description) toggleTreatment(t.id);
                }}
                className="group flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/10 bg-sand transition-colors hover:border-gold/50"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-linen">
                  <img
                    src={t.image}
                    alt={localized.name}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-75 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-[10px] uppercase tracking-widest text-gold">
                    {translate(TREATMENT_CATEGORIES[t.category])}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h2 className="font-serif text-lg font-semibold leading-snug text-ink">{localized.name}</h2>
                  <p className="text-sm font-medium text-gold">{t.price}</p>
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
                        className="mt-3 inline-flex cursor-pointer items-center gap-1 self-start text-xs tracking-wider text-gold-light transition hover:text-gold"
                      >
                        {translate(expandedId === t.id ? "Weniger Details ↑" : "Details & Info ↓")}
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
                          className="mt-3 overflow-hidden border-t border-white/10 pt-3 text-xs leading-relaxed text-ink-soft"
                        >
                          <p>{localized.description}</p>
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
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-gold/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-wide text-gold transition-colors hover:bg-gold hover:text-cream"
                  >
                    Termin buchen
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-3.5 w-3.5" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" /></svg>
                  </a>
                </div>
              </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 bg-sand/70 p-12 text-center">
            <p className="text-lg font-medium text-ink">{translate("Keine Behandlung gefunden")}</p>
            <p className="mt-2 text-sm text-ink-soft">{translate("Passen Sie Ihre Suche an oder wählen Sie eine andere Kategorie.")}</p>
          </div>
        )}
      </div>
    </main>
  );
}