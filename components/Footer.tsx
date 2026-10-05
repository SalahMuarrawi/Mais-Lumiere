"use client";

import Link from "next/link";
import BookingButton from "./BookingButton";
import { HOURS, SITE } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <>
      {/* Pre-Footer CTA – Treatwell */}
      <section
        aria-label={t("Termin reservieren")}
        className="bg-ink-darker py-20 text-white sm:py-28"
      >
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-light">
            {t("Termine über Treatwell")}
          </p>
          <h2 className="font-serif text-3xl leading-tight sm:text-4xl">
            {t("Bereit für Ihren neuen Glow?")}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {t("Reservieren Sie jetzt Ihre Wunschbehandlung im")} {SITE.name} –{" "}
            {t("flexible Termine, transparente Preise.")}
          </p>
          <div className="mt-9 flex justify-center">
            <BookingButton />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-ink-darker text-ink-soft">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <p className="font-serif text-xl text-white">
              Mais Lumière{" "}
              <span className="text-sm uppercase tracking-[0.25em] text-gold-light">
                Esthetic
              </span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed">
              {t("Ihr Kosmetikstudio in Graz für Gesichtsbehandlungen, OxyGeneo, Wimpern-Design & Beauty – mit Herz und Fachkompetenz.")}
            </p>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-light/80">
              {t("Kontakt")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                {SITE.address.street}, {SITE.address.zip} {SITE.address.city}
              </li>
              <li>
                <a
                  href={SITE.phoneHref}
                  className="transition-colors hover:text-gold-light"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-gold-light"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-gold-light"
                >
                  {SITE.instagramName}
                </a>
              </li>
            </ul>
          </div>

          {/* Öffnungszeiten */}
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-light/80">
              {t("Öffnungszeiten")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>{t(HOURS)}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}, {SITE.address.city} – {t("Alle Rechte vorbehalten.")}
          </p>
          <nav className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-gold-light">
              {t("Impressum")}
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-gold-light"
            >
              {t("Datenschutz")}
            </Link>
          </nav>
        </div>
      </div>
      </footer>
    </>
  );
}
