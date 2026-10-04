import BookingButton from "./BookingButton";
import { TREATMENTS } from "@/lib/data";

export default function Treatments() {
  return (
    <section id="behandlungen" className="bg-linen py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-dark">
            Behandlungen & Preise
          </p>
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            Für jeden Hauttyp die richtige Behandlung
          </h2>
          <p className="mt-4 text-ink-soft">
            Von der klassischen Gesichtsbehandlung bis zum OxyGeneo-Instant-
            Lift: Alle Preise verstehen sich inkl. Beratung. Ihre Behandlung
            wählen Sie ganz einfach online über Treatwell.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {TREATMENTS.map((group) => (
            <div
              key={group.id}
              id={group.id}
              className="rounded-2xl border border-linen-dark/60 bg-white p-6 shadow-[0_20px_60px_-40px_rgba(28,26,23,0.4)] sm:p-10"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-serif text-2xl text-ink sm:text-3xl">
                    {group.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-ink-soft">
                    {group.intro}
                  </p>
                </div>
                <span className="mt-4 hidden text-4xl text-gold/50 sm:mt-0 sm:block">
                  ✦
                </span>
              </div>

              <ul className="mt-8 divide-y divide-linen-dark/40">
                {group.items.map((item) => (
                  <li
                    key={item.name}
                    className="flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:gap-6"
                  >
                    <div className="flex flex-1 items-baseline gap-3">
                      <span className="font-medium text-ink">{item.name}</span>
                      {item.duration && (
                        <span className="whitespace-nowrap text-xs uppercase tracking-wider text-ink-soft/70">
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <span className="font-serif text-lg text-gold-dark">
                      {item.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 text-center">
          <p className="max-w-md text-sm text-ink-soft">
            Nichts Passendes gefunden? Rufen Sie uns an – wir beraten Sie
            gerne persönlich.
          </p>
          <BookingButton size="lg" label="Termin über Treatwell buchen" />
        </div>
      </div>
    </section>
  );
}
