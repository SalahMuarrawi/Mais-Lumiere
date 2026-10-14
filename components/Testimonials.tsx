"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

export default function Testimonials() {
  const { t: translate } = useLanguage();

  return (
    <section className="bg-linen pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center text-xs uppercase tracking-[0.35em] text-gold"
        >
          {translate("Das sagen unsere Kundinnen")}
        </motion.p>
        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, index) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-sand p-7 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)]"
            >
              <div className="mb-4 text-gold" aria-hidden>
                ★★★★★
              </div>
              <blockquote className="flex-1 text-sm leading-relaxed text-ink">
                „{translate(t.text)}“
              </blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-widest text-ink-soft/70">
                {t.name}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
