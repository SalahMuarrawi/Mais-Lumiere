"use client";

import { useState } from "react";
import Link from "next/link";
import BookingButton from "./BookingButton";
import { SITE } from "@/lib/data";

const NAV_LINKS = [
  { href: "#behandlungen", label: "Behandlungen" },
  { href: "#studio", label: "Studio" },
  { href: "#galerie", label: "Galerie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href="#top" className="group flex items-baseline gap-2">
          <span className="font-serif text-lg tracking-wide text-white sm:text-xl">
            Mais Lumière
          </span>
          <span className="text-[11px] uppercase tracking-[0.3em] text-gold-light">
            Esthetic
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-gold-light"
            >
              {l.label}
            </Link>
          ))}
          <BookingButton className="!px-5 !py-2.5" />
        </nav>

        <button
          type="button"
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-px w-6 bg-white transition-transform ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-6 bg-white transition-transform ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-ink px-5 pb-6 pt-3 md:hidden">
          <ul className="space-y-1">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-ink-soft transition-colors hover:text-gold-light"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <BookingButton className="w-full" />
          </div>
          <p className="mt-4 text-xs text-ink-soft/70">
            {SITE.address.street}, {SITE.address.zip} {SITE.address.city} ·{" "}
            <a href={SITE.phoneHref} className="underline">
              {SITE.phone}
            </a>
          </p>
        </nav>
      )}
    </header>
  );
}
