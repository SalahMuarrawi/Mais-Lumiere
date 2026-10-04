import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mais-lumiere.at"),
  title: {
    default: "Mais Lumière Esthetic | Kosmetikstudio in Graz",
    template: "%s | Mais Lumière Esthetic",
  },
  description:
    "Mais Lumière Esthetic – Ihr Kosmetikstudio in Graz. Gesichtsbehandlungen, OxyGeneo, Aquafacial, Microneedling, BB-Glow, Wimpern & Augenbrauen. Jetzt Termin buchen.",
  keywords: [
    "Kosmetikstudio Graz",
    "Gesichtsbehandlung",
    "OxyGeneo",
    "Aquafacial",
    "Microneedling",
    "BB-Glow",
    "Wimpernverlängerung",
  ],
  openGraph: {
    title: "Mais Lumière Esthetic | Kosmetikstudio in Graz",
    description:
      "The Essence of Refined Beauty – Gesichtsbehandlungen, OxyGeneo & mehr in Graz.",
    type: "website",
    locale: "de_AT",
    siteName: "Mais Lumière Esthetic",
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f1",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
