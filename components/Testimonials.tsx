"use client";

import { TESTIMONIALS } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Testimonials() {
  const { t: translate } = useLanguage();

  return (
    <section className="bg-linen pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.35em] text-gold-dark">
          {translate("Das sagen unsere Kundinnen")}
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-white/10 bg-[#1f1b19] p-7 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]"
            >
              <div className="mb-4 text-gold-dark" aria-hidden>
                ★★★★★
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-ink">
                „{translate(t.text)}“
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-widest text-ink-soft/70">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
