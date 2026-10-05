import { LEGAL, SITE } from "@/lib/data";

export const metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${SITE.name}, Graz.`,
};

const SECTIONS = [
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

export default function DatenschutzPage() {
  return (
    <div className="bg-linen">
      <main className="mx-auto max-w-3xl px-5 pb-24 pt-32 sm:px-8 sm:pt-40">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-dark">
          Rechtliches
        </p>
        <h1 className="font-serif text-4xl text-ink">Datenschutzerklärung</h1>

        <div className="mt-10 space-y-10">
          {SECTIONS.map((s) => (
            <section key={s.title}>
              <h2 className="font-serif text-lg text-ink">{s.title}</h2>
              {s.body.map((p, i) => (
                <p
                  key={i}
                  className="mt-3 text-sm leading-relaxed text-ink-soft"
                >
                  {p}
                </p>
              ))}
            </section>
          ))}
          <p className="border-t border-white/10 pt-6 text-xs text-ink-soft/70">
            Stand: Oktober {new Date().getFullYear()} – Diese Erklärung dient
            der Information und ist keine Rechtsberatung.
          </p>
        </div>
      </main>
    </div>
  );
}
