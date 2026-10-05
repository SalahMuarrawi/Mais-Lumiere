import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
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
  themeColor: "#0F0E0E",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Jost:wght@300;400;500;600&display=swap"
        />
      </head>
      <body className="min-h-screen bg-cream font-sans text-ink antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
