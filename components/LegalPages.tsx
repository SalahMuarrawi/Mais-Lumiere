"use client";

import { Fragment } from "react";
import { LEGAL, SITE } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

const PRIVACY_SECTIONS = [
  {
    title: "1. Datenschutz auf einen Blick",
    body: [
      "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.",
      "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.",
    ],
  },
  {
    title: "2. Datenerfassung auf dieser Website",
    body: [
      "Diese Website verwendet sogenannte Cookies. Cookies speichern keine Schadstoffe, sondern helfen, das Internet nutzerfreundlicher, sicherer und effizienter zu machen. Ein Cookie ist ein kleiner Dateiablage auf Ihrem Gerät, die so lange bleibt, bis Sie ihn löschen.",
      "Ein Teil der Cookies wird nach dem Beenden Ihrer Browser-Sitzung gelöscht (Sitzungs-Cookies). Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen (permanente Cookies).",
      "Cookies, die zur Durchführung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO bzw. § 165 TKG gespeichert. Sie haben das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.",
    ],
  },
  {
    title: "3. Externe Buchungsplattform (Treatwell)",
    body: [
      "Auf dieser Website verweisen wir auf die externe Buchungsplattform Treatwell (treatwell.at), über die Sie Termine buchen können. Beim Klicken auf den Buchungs-Button verlassen Sie diese Website und gelangen auf die Seite des Drittanbieters.",
      "Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Wir empfehlen, die dortige Datenschutzerklärung zu lesen, um zu erfahren, welche Daten Treatwell erhebt und wie sie verarbeitet werden.",
    ],
  },
  {
    title: "4. Ihre Rechte",
    body: [
      "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.",
      "Daneben haben Sie das Recht auf Datenübertragbarkeit sowie das Recht, sich bei der zuständigen Aufsichtsbehörde (Österreichische Datenschutzbehörde) zu beschweren.",
    ],
  },
  {
    title: "5. Kontakt",
    body: [
      `Bei Fragen zur Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an: ${SITE.email} oder telefonisch unter ${SITE.phone}.`,
    ],
  },
];

export function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-linen">
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-dark">{t("Rechtliches")}</p>
        <h1 className="font-serif text-4xl text-ink">{t("Datenschutzerklärung")}</h1>
        <div className="mt-10 space-y-10">
          {PRIVACY_SECTIONS.map((section) => (
            <section key={section.title}>
              <h2 className="font-serif text-lg text-ink">{t(section.title)}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className="mt-3 text-sm leading-relaxed text-ink-soft">
                  {section.title === "5. Kontakt"
                    ? `${t("Bei Fragen zur Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an:")} ${SITE.email}${t(" oder telefonisch unter ")}${SITE.phone}.`
                    : t(paragraph)}
                </p>
              ))}
            </section>
          ))}
          <p className="border-t border-white/10 pt-6 text-xs text-ink-soft/70">
            {t("Stand: Oktober")} {new Date().getFullYear()}{t(" – Diese Erklärung dient der Information und ist keine Rechtsberatung.")}
          </p>
        </div>
      </main>
    </div>
  );
}

export function ImprintContent() {
  const { t } = useLanguage();

  return (
    <div className="bg-linen">
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-dark">{t("Rechtliches")}</p>
        <h1 className="font-serif text-4xl text-ink">{t("Impressum")}</h1>
        <div className="prose-legal mt-10 space-y-8 text-sm leading-relaxed text-ink">
          <div>
            <h2 className="font-serif text-lg text-ink">{t("Anbieter")}</h2>
            <p className="mt-2">
              {LEGAL.imprint.operator}<br />
              {t("Inhaberin / Geschäftsführung:")} {SITE.imprint.owner}<br />
              {SITE.address.street}<br />
              {SITE.address.zip} {SITE.address.city}, {t("Österreich")}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink">{t("Kontakt")}</h2>
            <p className="mt-2">
              {LEGAL.imprint.contact.map((contact, index) => (
                <Fragment key={contact.label}>
                  {index > 0 && <br />}
                  {t(contact.label)}:{" "}
                  <a
                    href={contact.href}
                    {...(contact.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="underline"
                  >
                    {contact.value}
                  </a>
                </Fragment>
              ))}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink">{t("Unternehmensdetails")}</h2>
            <p className="mt-2">
              {t("UID-Nummer:")} {LEGAL.imprint.uid}<br />
              {t(LEGAL.imprint.regNote)}<br />
              {t("Gewerbebezeichnung:")} {t(LEGAL.imprint.trade)}<br />
              {t("Unternehmensgegenstand:")} {t(LEGAL.imprint.purpose)}
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink">{t("Zuständige Behörde")}</h2>
            <p className="mt-2">
              {t("Gewerbebehörde:")} {t(LEGAL.imprint.supervision)}<br />
              {t("Berufsrechtliche Vorschriften:")}{" "}
              <a href={SITE.imprint.professionalRulesUrl} target="_blank" rel="noopener noreferrer" className="underline">
                www.ris.bka.gv.at
              </a>
            </p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink">{t("Verbraucherstreitbeilegung")}</h2>
            <p className="mt-2">{t(LEGAL.imprint.dispute)}</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-ink">{t("Inhaltliche Verantwortung")}</h2>
            <p className="mt-2">{LEGAL.imprint.owner}</p>
          </div>
        </div>
      </main>
    </div>
  );
}
