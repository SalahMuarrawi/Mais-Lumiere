import Link from "next/link";
import BookingButton from "./BookingButton";
import { HOURS, SITE } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
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
              Ihr Kosmetikstudio in Graz für Gesichtsbehandlungen, OxyGeneo,
              Wimpern-Design &amp; Beauty – mit Herz und Fachkompetenz.
            </p>
            <div className="mt-6">
              <BookingButton />
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.3em] text-gold-light/80">
              Kontakt
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
              Öffnungszeiten
            </h3>
            <ul className="space-y-2 text-sm">
              <li>{HOURS}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-ink-soft/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {SITE.name}, {SITE.address.city} – Alle Rechte vorbehalten.
          </p>
          <nav className="flex gap-6">
            <Link href="/impressum" className="transition-colors hover:text-gold-light">
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="transition-colors hover:text-gold-light"
            >
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
