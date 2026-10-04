import { GALLERY } from "@/lib/data";

export default function Gallery() {
  return (
    <section id="galerie" className="bg-linen py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-gold-dark">
              Galerie
            </p>
            <h2 className="font-serif text-3xl text-ink sm:text-4xl">
              Einblicke in unser Studio
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              Impressionen unserer Behandlungen und Produkte – echte Momente aus
              dem Alltag im Studio.
            </p>
          </div>
          <a
            href="https://www.instagram.com/more_maislumiere"
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap text-sm text-gold-dark underline underline-offset-4 transition-colors hover:text-ink"
          >
            Mehr auf Instagram →
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {GALLERY.map((img, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className={`h-48 w-full rounded-xl object-cover sm:h-64 ${
                i % 3 === 1 ? "sm:translate-y-6" : ""
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
