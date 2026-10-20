import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/buchen",
        destination:
          "https://buchung.treatwell.at/ort/mais-lumiere-esthetic-e-u/?utm_source=widget&utm_medium=partners&utm_campaign=website_sharing",
        permanent: true,
      },
      {
        source: "/about-1",
        destination: "/#galerie",
        permanent: true,
      },
      {
        source: "/blank",
        destination: "/#studio",
        permanent: true,
      },
      {
        source: "/services-3",
        destination: "/behandlungen",
        permanent: true,
      },
      {
        source: "/karte",
        destination: "/kontakt",
        permanent: true,
      },
      {
        source: "/service-page/:slug*",
        destination: "/behandlungen",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
