import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LEGAL, SITE } from "@/lib/data";

export const metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${SITE.name}, Graz.`,
};

export default function ImpressumPage() {
  return (
    <div className="bg-linen">
      <Header />
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-dark">
          Rechtliches
        </p>
        <h1 className="font-serif text-4xl text-ink">Impressum</h1>

        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-ink">
          <div>
            <h2 className="font-serif text-lg text-ink">Anbieter</h2>
            <p className="mt-2">
              {SITE.name}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}, Österreich
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg text-ink">Kontakt</h2>
            <p className="mt-2">
              Telefon:{" "}
              <a href={SITE.phoneHref} className="underline">
                {SITE.phone}
              </a>
              <br />
              E-Mail:{" "}
              <a href={`mailto:${SITE.email}`} className="underline">
                {SITE.email}
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg text-ink">Unternehmensdetails</h2>
            <p className="mt-2">
              {LEGAL.imprint.operator}
              <br />
              {LEGAL.imprint.uid}
              <br />
              Gewerbe: {LEGAL.imprint.trade}
              <br />
              {LEGAL.imprint.regNote}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg text-ink">
              Zuständige Aufsichtsbehörde
            </h2>
            <p className="mt-2">{LEGAL.imprint.supervision}</p>
          </div>

          <div>
            <h2 className="font-serif text-lg text-ink">
              Verbraucherstreitbeilegung
            </h2>
            <p className="mt-2">{LEGAL.imprint.dispute}</p>
          </div>

          <div>
            <h2 className="font-serif text-lg text-ink">Inhaltliche Verantwortung</h2>
            <p className="mt-2">{LEGAL.imprint.owner}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
