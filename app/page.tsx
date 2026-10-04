import About from "@/components/About";
import Contact from "@/components/Contact";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Treatments from "@/components/Treatments";

export const metadata = {
  title:
    "Mais Lumière Esthetic – Kosmetik & Beauty in Graz | OxyGeneo, Gesichtsbehandlungen, Wimpern",
  description:
    "Kosmetikstudio in Graz (Stubenberggasse 8/1): Gesichtsbehandlungen, OxyGeneo, Microneedling, Wimpernverlängerung & Brow Design. Online Termin buchen über Treatwell.",
  keywords:
    "Kosmetik Graz, Kosmetikstudio Graz, Gesichtsbehandlung Graz, OxyGeneo Graz, Wimpernverlängerung Graz, Microneedling Graz, Mais Lumière Esthetic",
  alternates: { canonical: "https://www.mais-lumiere.at" },
  openGraph: {
    title: "Mais Lumière Esthetic – Kosmetik & Beauty Graz",
    description:
      "Refinierte Kosmetik in Graz: OxyGeneo, Gesichtsbehandlungen & Wimpern-Design. Jetzt Termin buchen.",
    type: "website",
    locale: "de_AT",
    siteName: "Mais Lumière Esthetic",
  },
};

export default function HomePage() {
  return (
    <div id="top" className="bg-linen">
      <main>
        <Hero />
        <Treatments />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}
