import BookingButton from "./BookingButton";
import { SITE } from "@/lib/data";

const FEATURES = [
  {
    icon: "✦",
    title: "OxyGeneo®",
    text: "Sofort-Lift in 30 Minuten – Sauerstoff, Peeling & LED.",
  },
  {
    icon: "❀",
    title: "Pure Produkte",
    text: "Hochwertige Pflege, abgestimmt auf Ihre Haut.",
  },
  {
    icon: "◈",
    title: "Individuell",
    text: "Jede Behandlung beginnt mit einer persönlichen Beratung.",
  },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-ink pb-20 pt-32 sm:pt-40"
    >
      <img
        src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=2000&q=80&auto=format&fit=crop"
        alt="Strahlende, gepflegte Haut"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-gold-light">
          <span className="h-px w-10 bg-gold/70" />
          Graz · Stubenberggasse 8
        </p>

        <h1 className="max-w-3xl font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
          Die Essenz von{" "}
          <em className="italic text-gold-light">refinierter</em> Schönheit –
          mitten in Graz.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
          Willkommen bei {SITE.name} – Ihrem Kosmetikstudio für Gesichtspflege,
          OxyGeneo und Wimpern-Design. Entspannen Sie sich in ruhiger
          Atmosphäre und lassen Sie Ihre Haut neu strahlen.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
          <BookingButton size="lg" />
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-4 text-sm uppercase tracking-[0.15em] text-white transition-colors hover:border-gold-light hover:text-gold-light"
          >
            {SITE.phone}
          </a>
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-10 sm:grid-cols-3">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex gap-4">
              <span className="mt-1 text-xl text-gold-light">{f.icon}</span>
              <div>
                <h3 className="font-serif text-base text-white">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {f.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
