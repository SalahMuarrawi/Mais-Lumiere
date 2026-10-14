"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="studio"
      className="relative overflow-hidden bg-cream py-24 text-ink"
    >
      {/* dezenter goldener Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-gold/[0.08] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* B) Portrait – mobile oben, desktop rechts */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -4 }}
          className="group lg:order-2"
        >
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-gold/30 bg-linen shadow-2xl">
            {/* dezenter Platzhalter hinter dem Foto */}
            <div
              aria-hidden
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-sand via-linen to-cream"
            >
              <span className="select-none text-6xl leading-none text-gold/30">
                ✦
              </span>
              <span className="font-serif text-lg italic tracking-wide text-gold/40">
                Mais Lumière Esthetic
              </span>
            </div>
            <Image
              src="/images/about-mais.jpg"
              alt={t("Mais – Inhaberin Mais Lumière Esthetic")}
              fill
              priority
              className="relative z-10 object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* A) Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="lg:order-1"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold/80">
            {t("ÜBER MICH & PHILOSOPHIE")}
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            {t("My name is ")}<span className="italic text-gold">Mais</span>
          </h2>

          {/* feine goldene Akzentlinie */}
          <div
            aria-hidden
            className="mt-6 h-px w-28 bg-gradient-to-r from-gold/80 to-transparent"
          />

          <p className="mt-8 leading-[1.9] text-ink-soft">
            {t("Willkommen bei Mais Lumière Esthetic – Ihrem exklusiven Kosmetik- und Beauty-Studio im Herzen von Graz. Hier dreht sich alles um Ihre Schönheit, Ihr Wohlbefinden und Ihre Ausstrahlung.")}
          </p>
          <p className="mt-5 leading-[1.9] text-ink-soft">
            {t("Mein Ziel ist es, Ihre natürliche Schönheit mit professionellen Behandlungen und modernsten Konzepten zum Strahlen zu bringen. In einer ruhigen, stilvollen Atmosphäre genießen Sie eine persönliche Auszeit vom Alltag – sanft, individuell und wirkungsvoll.")}
          </p>
          <p className="mt-5 leading-[1.9] text-ink-soft">
            {t("Gönnen Sie sich eine Pause und erleben Sie Schönheit in neuem Licht!")}
          </p>

          {/* Standort-Badge */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/25 bg-white/[0.04] px-4 py-2 text-sm tracking-wide text-ink/90">
            📍 Stubenberggasse 8/1, 8010 Graz
          </div>

          {/* dezenter Buchungs-Button */}
          <div className="mt-8">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-gold/10 px-7 py-3 text-sm font-medium tracking-wide text-gold-light transition-colors duration-300 hover:bg-gold hover:text-cream"
            >
              {t("Termin bei Mais vereinbaren")} <span aria-hidden>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
