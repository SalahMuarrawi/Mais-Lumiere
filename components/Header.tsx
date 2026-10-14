"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import BookingButton from "./BookingButton";
import { SITE } from "@/lib/data";
import { LanguageSwitcher, useLanguage } from "@/lib/i18n";

const NAV_LINKS = [
  { href: "/", label: "Startseite" },
  { href: "/behandlungen", label: "Behandlungen" },
  { href: "/#studio", label: "Studio" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-cream/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Mais Lumière Esthetic Logo"
            width={56}
            height={56}
            className="h-11 md:h-14 w-auto object-contain rounded-full drop-shadow-md"
            priority
          />
          <span className="font-serif text-xl md:text-2xl tracking-wider text-ink hidden sm:inline">
            Mais Lumière{" "}
            <span className="text-xs md:text-sm uppercase tracking-widest text-gold">Esthetic</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-ink-soft transition-colors hover:text-gold-light"
            >
              {t(l.label)}
            </Link>
          ))}
          <LanguageSwitcher />
          <BookingButton className="!px-5 !py-2.5" />
        </nav>

        <LanguageSwitcher className="md:hidden" />

        <button
          type="button"
          aria-label={t(open ? "Menü schließen" : "Menü öffnen")}
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

      <AnimatePresence initial={false}>
        {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: "auto", y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden border-t border-white/10 bg-cream px-5 pb-6 pt-3 md:hidden"
        >
          <ul className="space-y-1">
            {NAV_LINKS.map((l, index) => (
              <li key={l.href}>
                <motion.div
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.035 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm text-ink-soft transition-colors hover:text-gold-light"
                  >
                    {t(l.label)}
                  </Link>
                </motion.div>
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
        </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
