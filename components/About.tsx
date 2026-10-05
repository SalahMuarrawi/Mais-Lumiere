"use client";

import Image from "next/image";
import { SITE } from "@/lib/data";

export default function About() {
  return (
    <section
      id="studio"
      className="py-24 bg-[#0f0e0e] text-[#e5e5e5] relative overflow-hidden"
    >
      {/* dezenter goldener Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-6rem] h-[24rem] w-[24rem] rounded-full bg-[#d4af37]/[0.08] blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* B) Portrait – mobile oben, desktop rechts */}
        <div className="lg:order-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-3xl border border-[#d4af37]/30 bg-[#141211] shadow-2xl">
            {/* dezenter Platzhalter hinter dem Foto */}
            <div
              aria-hidden
              className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-[#1b1815] via-[#161311] to-[#141211]"
            >
              <span className="select-none text-6xl leading-none text-[#d4af37]/30">
                ✦
              </span>
              <span className="font-serif text-lg italic tracking-wide text-[#d4af37]/40">
                Mais Lumière Esthetic
              </span>
            </div>
            <Image
              src="/images/about-mais.jpg"
              alt="Mais – Inhaberin Mais Lumière Esthetic"
              fill
              priority
              className="relative z-10 object-cover"
            />
          </div>
        </div>

        {/* A) Text */}
        <div className="lg:order-1">
          <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-[#d4af37]/80">
            ÜBER MICH & PHILOSOPHIE
          </p>

          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-5xl">
            My name is <span className="italic text-[#d4af37]">Mais</span>
          </h2>

          {/* feine goldene Akzentlinie */}
          <div
            aria-hidden
            className="mt-6 h-px w-28 bg-gradient-to-r from-[#d4af37]/80 to-transparent"
          />

          <p className="mt-8 leading-[1.9] text-[#d5cabd]">
            Willkommen bei Mais Lumière Esthetic – Ihrem exklusiven Kosmetik- und
            Beauty-Studio im Herzen von Graz. Hier dreht sich alles um Ihre
            Schönheit, Ihr Wohlbefinden und Ihre Ausstrahlung.
          </p>
          <p className="mt-5 leading-[1.9] text-[#d5cabd]">
            Mein Ziel ist es, Ihre natürliche Schönheit mit professionellen
            Behandlungen und modernsten Konzepten zum Strahlen zu bringen. In einer
            ruhigen, stilvollen Atmosphäre genießen Sie eine persönliche Auszeit
            vom Alltag – sanft, individuell und wirkungsvoll.
          </p>
          <p className="mt-5 leading-[1.9] text-[#d5cabd]">
            Gönnen Sie sich eine Pause und erleben Sie Schönheit in neuem Licht!
          </p>

          {/* Standort-Badge */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d4af37]/25 bg-white/[0.04] px-4 py-2 text-sm tracking-wide text-[#e5e5e5]/90">
            📍 Stubenberggasse 8/1, 8010 Graz
          </div>

          {/* dezenter Buchungs-Button */}
          <div className="mt-8">
            <a
              href={SITE.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/60 bg-[#d4af37]/10 px-7 py-3 text-sm font-medium tracking-wide text-[#e8c96a] transition-colors duration-300 hover:bg-[#d4af37] hover:text-[#0f0e0e]"
            >
              Termin bei Mais vereinbaren <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
