import BookingButton from "./BookingButton";
import {
  SITE,
  TREATMENT_CATEGORIES,
  TREATMENT_CATEGORY_ORDER,
  TREATMENTS,
} from "@/lib/data";
import type { Treatment } from "@/lib/data";

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_8px_24px_-16px_rgba(43,33,25,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-18px_rgba(43,33,25,0.55)]">
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
        <div className="mt-auto pt-4">
          <BookingButton variant="solid" className="w-full" />
        </div>
      </div>
    </article>
  );
}

export default function Treatments() {
  return (
    <section id="behandlungen" className="relative overflow-hidden bg-white py-20 sm:py-28">
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
        <header className="max-w-2xl">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-gold-dark">
            Behandlungen &amp; Preise
          </p>
          <h2 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Unsere Behandlungen
          </h2>
          <p className="mt-6 font-light leading-relaxed text-ink-soft">
            Vom klassischen Facial bis zur apparativen Spezialbehandlung – wählen Sie aus{" "}
            {TREATMENTS.length} Leistungen und finden Sie Ihre persönliche Wohlfühloase. Jeder Termin wird individuell nach Vereinbarung geplant.
          </p>
        </header>

        {/* Kategorien */}
        <div className="mt-16 space-y-16">
          {TREATMENT_CATEGORY_ORDER.map((category) => {
            const items = TREATMENTS.filter((t) => t.category === category);
            if (items.length === 0) return null;

            return (
              <div key={category}>
                <div className="mb-8 flex items-end justify-between gap-4 border-b border-ink/10 pb-4">
                  <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                    {TREATMENT_CATEGORIES[category]}
                  </h3>
                  <span className="text-xs uppercase tracking-[0.25em] text-ink-soft/70">
                    {items.length} Leistungen
                  </span>
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((treatment) => (
                    <TreatmentCard key={treatment.id} treatment={treatment} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Abschluss */}
        <div className="mt-20 flex flex-col items-center gap-6 border-t border-ink/10 pt-12 text-center">
          <p className="max-w-xl font-light leading-relaxed text-ink-soft">
            Alle Termine vergeben wir ausschließlich nach Vereinbarung – online über Treatwell
            oder telefonisch unter {SITE.phone}.
          </p>
          <BookingButton size="lg" label="Termin auf Treatwell buchen" />
        </div>
      </div>
    </section>
  );
}
