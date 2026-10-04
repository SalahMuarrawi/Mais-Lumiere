"use client";

import { SITE } from "@/lib/data";

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=Stubenberggasse%208%2F1,%208010%20Graz&output=embed";

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#0F0E0E] text-neutral-200 antialiased">
      <div className="mx-auto max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-32 lg:pb-24">
        <header className="mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#D4AF37]">{SITE.name} · {SITE.city}</p>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl">Kontakt &amp; Anfahrt</h1>
          <p className="mt-5 max-w-2xl leading-relaxed text-neutral-200/70">
            Wir freuen uns auf Ihren Besuch. Vereinbaren Sie bequem online Ihren Wunschtermin – wir nehmen uns Zeit für Ihre Haut.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <section className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-white">Kontaktdaten</h2>

            <ul className="mt-7 space-y-6">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg></span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-neutral-500">Adresse</p>
                  <a href={SITE.mapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block font-medium text-white transition-colors hover:text-[#D4AF37]">{SITE.address.street}, {SITE.address.zip} {SITE.address.city}</a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg></span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-neutral-500">Telefon</p>
                  <a href={SITE.phoneHref} className="mt-1 block font-medium text-white transition-colors hover:text-[#D4AF37]">{SITE.phone}</a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" /></svg></span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-neutral-500">E-Mail</p>
                  <a href={`mailto:${SITE.email}`} className="mt-1 block break-all font-medium text-white transition-colors hover:text-[#D4AF37]">{SITE.email}</a>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]"><svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" /></svg></span>
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-neutral-500">Öffnungszeiten</p>
                  <p className="mt-1 font-medium text-white">{SITE.hours}</p>
                </div>
              </li>
            </ul>

            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-neutral-950 transition-colors hover:bg-amber-300 sm:w-auto"
            >
              Jetzt Termin vereinbaren
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-4 w-4" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" /></svg>
            </a>
          </section>

          <section className="flex flex-col overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60">
            <div className="border-b border-neutral-800 px-6 py-5 sm:px-8">
              <h2 className="text-xl font-semibold text-white">Anfahrt</h2>
              <p className="mt-1 text-sm text-neutral-400">{SITE.address.street}, {SITE.address.zip} {SITE.address.city} – gut erreichbar mit öffentlichen Verkehrsmitteln.</p>
            </div>
            <iframe
              title={`Google Maps: ${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`}
              src={MAPS_EMBED_URL}
              className="min-h-[360px] w-full flex-1 border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </section>
        </div>
      </div>
    </main>
  );
}