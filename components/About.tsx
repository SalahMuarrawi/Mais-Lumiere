import { SITE } from "@/lib/data";

const VALUES = [
  {
    icon: "❀",
    title: "Beratung mit Herz",
    text: "Jede Behandlung beginnt mit einer persönlichen Analyse Ihrer Haut – ohne Druck, mit ehrlichen Empfehlungen.",
  },
  {
    icon: "◈",
    title: "Moderne Technologien",
    text: "OxyGeneo, LED-Therapie und Microneedling – wir setzen auf geprüfte, effektive Methoden.",
  },
  {
    icon: "✦",
    title: "Ruhige Atmosphäre",
    text: "Unser Studio in Graz ist bewusst klein gehalten: Zeit für Sie, keine Warteliste, keine Hektik.",
  },
];

export default function About() {
  return (
    <section id="studio" className="bg-[#0f0e0e] py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-light">
            Unser Studio
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl">
            Ein Ort für Ruhe, Pflege &amp; <em className="italic text-gold-light">Lumière</em>
          </h2>
          <p className="mt-6 leading-relaxed text-ink-soft">
            {SITE.name} ist ein kleines, inhabergeführtes Kosmetikstudio im
            Herzen von Graz. Wir verbinden moderne Behandlungsmethoden mit einer
            persönlichen Pflegephilosophie: keine Standardpakete, sondern
            Konzepte, die zu Ihrer Haut, Ihrem Typ und Ihrem Alltag passen.
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Ob OxyGeneo für den Sofort-Glow, eine intensive Gesichtsbehandlung
            oder der perfekte Wimpern-Look – bei uns steht eines immer im
            Mittelpunkt: Sie.
          </p>
          <p className="mt-8 text-sm text-ink-soft">
            Instagram:{" "}
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-gold-light transition-colors hover:text-white"
            >
              @{SITE.instagramName}
            </a>
          </p>
        </div>

        <div className="grid gap-5">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="flex gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6"
            >
              <span className="mt-1 text-2xl text-gold-light">{v.icon}</span>
              <div>
                <h3 className="font-serif text-lg">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                  {v.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
