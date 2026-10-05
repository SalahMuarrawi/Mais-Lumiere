import { HOURS, MAP_EMBED, SITE } from "@/lib/data";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-[#0f0e0e] py-20 text-white sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-light">
            Kontakt & Anfahrt
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl">
            Wir freuen uns auf Ihren Besuch
          </h2>
          <p className="mt-4 text-ink-soft">
            Mitten in Graz – perfekt mit öffentlichen Verkehrsmitteln
            erreichbar.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-8">
            {/* Adresse */}
            <div>
              <h3 className="mb-2 text-xs uppercase tracking-[0.3em] text-gold-light/80">
                Adresse
              </h3>
              <p className="text-lg leading-relaxed">
                {SITE.address.street}
                <br />
                {SITE.address.zip} {SITE.address.city}
                <br />
                Österreich
              </p>
            </div>

            {/* Telefon & E-Mail */}
            <div className="flex flex-col gap-3">
              <a
                href={SITE.phoneHref}
                className="font-serif text-2xl text-white transition-colors hover:text-gold-light"
              >
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="text-sm text-ink-soft transition-colors hover:text-gold-light"
              >
                {SITE.email}
              </a>
            </div>

            {/* Öffnungszeiten */}
            <div>
              <h3 className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-light/80">
                Öffnungszeiten
              </h3>
              <p className="text-lg leading-relaxed">{HOURS}</p>
            </div>

            <div>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-ink-soft transition-colors hover:text-gold-light"
              >
                Instagram: {SITE.instagramName}
              </a>
            </div>
          </div>

          {/* Karte */}
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src={MAP_EMBED}
              title={`Anfahrtskarte: ${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-72 w-full border-0 sm:h-full sm:min-h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
