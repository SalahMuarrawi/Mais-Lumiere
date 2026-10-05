import { Fragment } from "react";
import { LEGAL, SITE } from "@/lib/data";

export const metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${SITE.name}, Graz.`,
};

export default function ImpressumPage() {
  return (
    <div className="bg-linen">
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-dark">
          Rechtliches
        </p>
        <h1 className="font-serif text-4xl text-ink">Impressum</h1>

        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-ink">
          <div>
            <h2 className="font-serif text-lg text-ink">Anbieter</h2>
            <p className="mt-2">
              {LEGAL.imprint.operator}
              <br />
              Inhaberin / Geschäftsführung: {SITE.imprint.owner}
              <br />
              {SITE.address.street}
              <br />
              {SITE.address.zip} {SITE.address.city}, Österreich
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg text-ink">Kontakt</h2>
            <p className="mt-2">
              {LEGAL.imprint.contact.map((c, i) => (
                <Fragment key={c.label}>
                  {i > 0 && <br />}
                  {c.label}:{" "}
                  <a
                    href={c.href}
                    {...(c.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="underline"
                  >
                    {c.value}
                  </a>
                </Fragment>
              ))}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg text-ink">Unternehmensdetails</h2>
            <p className="mt-2">
              UID-Nummer: {LEGAL.imprint.uid}
              <br />
              {LEGAL.imprint.regNote}
              <br />
              Gewerbebezeichnung: {LEGAL.imprint.trade}
              <br />
              Unternehmensgegenstand: {LEGAL.imprint.purpose}
            </p>
          </div>

          <div>
            <h2 className="font-serif text-lg text-ink">Zuständige Behörde</h2>
            <p className="mt-2">
              Gewerbebehörde: {LEGAL.imprint.supervision}
              <br />
              Berufsrechtliche Vorschriften:{" "}
              <a
                href={SITE.imprint.professionalRulesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                www.ris.bka.gv.at
              </a>
            </p>
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
    </div>
  );
}
