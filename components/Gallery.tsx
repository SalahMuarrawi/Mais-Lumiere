"use client";

import { motion } from "framer-motion";
import { GALLERY, SITE } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="galerie" className="bg-linen py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold">
              {t("Galerie")}
            </p>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              {t("Einblicke in unser Studio")}
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              {t("Impressionen unserer Behandlungen und Produkte – echte Momente aus dem Alltag im Studio.")}
            </p>
          </div>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap text-sm text-gold underline underline-offset-4 transition-colors hover:text-ink"
          >
            {t("Mehr auf Instagram →")}
          </a>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((img, i) => (
            <motion.figure
              key={img.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.6,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-xl ${
                i % 3 === 1 ? "sm:translate-y-6" : ""
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={t(img.alt)}
                loading="lazy"
                className="h-48 w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105 sm:h-64"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
