export const SITE = {
  name: "Mais Lumière Esthetic",
  tagline: "The Essence of Refined Beauty",
  city: "Graz",
  address: {
    street: "Stubenberggasse 8/1",
    zip: "8010",
    city: "Graz",
    country: "Österreich",
  },
  phone: "+43 664 5732892",
  phoneHref: "tel:+436645732892",
  email: "maislumiere@gmail.com",
  /** Treatwell-Buchungslink – gilt für ALLE Buchungs-Buttons */
  bookingUrl:
    "https://buchung.treatwell.at/ort/mais-lumiere-esthetic-e-u/?utm_source=widget&utm_medium=partners&utm_campaign=website_sharing",
  instagramName: "@mais_lumiere_esthetic",
  instagram:
    "https://www.instagram.com/mais_lumiere_esthetic?utm_source=qr",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Stubenberggasse%208%2F1%2C%208010%20Graz",
  hours: "Ausschließlich nach Terminvereinbarung",
  imprint: {
    operator: "Mais Lumière Esthetic (Einzelunternehmen)",
    owner: "Mais Lumière Esthetic",
    regNote:
      "Einzelunternehmen, Österreich. Handelsregister- und Firmenbuchnummer auf Anfrage – bitte vor Veröffentlichung prüfen und ergänzen.",
    uid: "UID-Nummer auf Anfrage – bitte vor Veröffentlichung prüfen und ergänzen.",
    trade:
      "Kosmetik und Schönheitspflege – Gewerbeanmeldung bitte vor Veröffentlichung prüfen und ergänzen.",
    supervision:
      "Zuständige Aufsichtsbehörde bitte vor Veröffentlichung prüfen und ergänzen.",
    dispute:
      "Angaben zur Verbraucherstreitbeilegung bitte vor Veröffentlichung prüfen und ergänzen.",
  },
};

export type TreatmentCategory =
  | "facial-body"
  | "apparative"
  | "lashes"
  | "brows-lifting";

/** Standard-Platzhalterbild für alle Behandlungs-Karten */
const PLACEHOLDER_IMAGE = "/images/placeholder-treatment.jpg";

export interface Treatment {
  id: string;
  name: string;
  price: string;
  category: TreatmentCategory;
  image: string;
}

export const TREATMENT_CATEGORIES: Record<TreatmentCategory, string> = {
  "facial-body": "Gesicht & Körper",
  apparative: "Apparative Anwendungen",
  lashes: "Wimpern & Lashes",
  "brows-lifting": "Brows & Lifting",
};

export const TREATMENT_CATEGORY_ORDER: TreatmentCategory[] = [
  "facial-body",
  "apparative",
  "lashes",
  "brows-lifting",
];

export const TREATMENTS: Treatment[] = [
  // Gesichts- & Körperbehandlungen
  { id: "express-gesichtsreinigung", name: "Express Gesichtsreinigung", price: "75,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "klassische-gesichtsbehandlung", name: "Klassische Gesichtsbehandlung", price: "90,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "deep-cleansing-akne-behandlung-gesicht", name: "Deep Cleansing Akne-Behandlung Gesicht", price: "125,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "deep-cleansing-akne-behandlung-koerper", name: "Deep Cleansing Akne-Behandlung Körper", price: "175,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "mais-luxe-facial-gesichtsreinigung", name: "Mais Luxe Facial Gesichtsreinigung", price: "150,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "korean-glass-skin-facial", name: "Korean Glass Skin Facial", price: "199,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "enzyme-facial", name: "Enzyme Facial", price: "75,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "fruchtsaeure-peeling-gesicht", name: "Fruchtsäure Peeling Gesicht", price: "80,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "fruchtsaeure-peeling-koerper", name: "Fruchtsäure Peeling Körper", price: "120,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "algen-peeling-gesicht", name: "Algen Peeling Gesicht", price: "110,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "algen-peeling-koerper", name: "Algen Peeling Körper", price: "160,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "lymphdrainage-gesichtsmassage", name: "Lymphdrainage Gesichtsmassage", price: "65,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "oxygeneo-glow-facial", name: "OxyGeneo Glow Facial", price: "135,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "gesichtsstraffung", name: "Gesichtsstraffung", price: "135,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "red-carpet-behandlung", name: "Red Carpet Behandlung", price: "140,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "anti-aging-behandlung", name: "Anti-Aging-Behandlung", price: "135,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "haende-spa", name: "Hände Spa", price: "75,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  { id: "klassische-manikuer", name: "Klassische Maniküre", price: "40,00 €", category: "facial-body", image: PLACEHOLDER_IMAGE },
  // Apparative Kosmetik & Specials
  { id: "mais-lumiere-mikrodermabrasion", name: "Mais Lumière Mikrodermabrasion", price: "80,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "hydradermabrasion", name: "Hydradermabrasion", price: "145,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "ml-aquafacial-tiefenreinigung", name: "ML Aquafacial & Tiefenreinigung", price: "150,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "ml-aquafacial-fruchtsaeurepeeling", name: "ML Aquafacial & Fruchtsäurepeeling", price: "190,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "ml-aquafacial-microneedling", name: "ML Aquafacial & Microneedling", price: "245,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "ml-microneedling-gesicht", name: "ML Microneedling Gesicht", price: "145,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "ml-microneedling-gesicht-hals", name: "ML Microneedling Gesicht & Hals", price: "190,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "ml-microneedling-gesicht-hals-dekollete", name: "ML Microneedling Gesicht, Hals & Dekolleté", price: "240,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "radiofrequenz-meets-microneedling", name: "Radiofrequenz meets Microneedling", price: "195,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "radiofrequenz-meets-hydrafacial", name: "Radiofrequenz meets Hydrafacial", price: "200,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "dermapen-meets-hydrafacial", name: "Dermapen meets Hydrafacial", price: "260,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "ml-bb-glow-augenringe", name: "ML BB Glow Augenringe", price: "75,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "mais-lumiere-bb-glow-gesicht", name: "Mais Lumière BB Glow Gesicht", price: "150,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "ml-bb-glow-gesicht-hals", name: "ML BB Glow Gesicht & Hals", price: "190,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  { id: "premium-hautverjuengung-dreiklang", name: "Premium-Hautverjüngung Dreiklang", price: "310,00 €", category: "apparative", image: PLACEHOLDER_IMAGE },
  // Wimpernverlängerung
  { id: "wimpernverlaengerung-1-1-klassisch", name: "1:1 Klassische Wimpernverlängerung", price: "150,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "wimpernverlaengerung-refill-2-wochen", name: "1:1 Lash Refill nach 2 Wochen", price: "60,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "wimpernverlaengerung-refill-3-wochen", name: "1:1 Lash Refill nach 3 Wochen", price: "70,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "wimpernverlaengerung-refill-4-wochen", name: "1:1 Lash Refill nach 4 Wochen", price: "80,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "volumen-lashextension-2d-5d", name: "Volumen Lashextension 2D–5D", price: "180,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "volumen-refill-2-wochen", name: "2D–5D Volumen Refill nach 2 Wochen", price: "70,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "volumen-refill-3-wochen", name: "2D–5D Volumen Refill nach 3 Wochen", price: "80,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "volumen-refill-4-wochen", name: "2D–5D Volumen Refill nach 4 Wochen", price: "90,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "maxx-mega-volume-lashextension", name: "Maxx Mega Volume Lashextension", price: "195,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "maxx-volume-refill-2-wochen", name: "Maxx Volume Refill nach 2 Wochen", price: "75,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "maxx-volume-refill-3-wochen", name: "Maxx Volume Refill nach 3 Wochen", price: "85,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  { id: "maxx-volume-refill-4-wochen", name: "Maxx Volume Refill nach 4 Wochen", price: "95,00 €", category: "lashes", image: PLACEHOLDER_IMAGE },
  // Lash & Brow Styling & Lifting
  { id: "wimpern-faerben", name: "Wimpern färben", price: "20,00 €", category: "brows-lifting", image: PLACEHOLDER_IMAGE },
  { id: "augenbrauen-faerben", name: "Augenbrauen färben", price: "20,00 €", category: "brows-lifting", image: PLACEHOLDER_IMAGE },
  { id: "augenbrauen-wimpern-faerben", name: "Augenbrauen & Wimpern färben", price: "35,00 €", category: "brows-lifting", image: PLACEHOLDER_IMAGE },
  { id: "augenbrauen-forming", name: "Augenbrauen Forming", price: "35,00 €", category: "brows-lifting", image: PLACEHOLDER_IMAGE },
  { id: "ml-koreanisches-brow-lifting-faerben", name: "ML Koreanisches Brow Lifting inkl. Färben", price: "80,00 €", category: "brows-lifting", image: PLACEHOLDER_IMAGE },
  { id: "ml-koreanisches-lash-lifting-faerben", name: "ML Koreanisches Lash Lifting inkl. Färben", price: "80,00 €", category: "brows-lifting", image: PLACEHOLDER_IMAGE },
  { id: "luxus-brow-lash-lifting", name: "Luxus Koreanisches Brow & Lash Lifting", price: "140,00 €", category: "brows-lifting", image: PLACEHOLDER_IMAGE },
];

export const GALLERY = [
  {
    alt: "Saubere, strahlende Haut nach einer Gesichtsbehandlung",
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1200&q=80&auto=format&fit=crop",
  },
  {
    alt: "Pflegeprodukte und Seren in einer ruhigen Komposition",
    src: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&q=80&auto=format&fit=crop",
  },
  {
    alt: "Beruhigende Massagebehandlung mit cremiger Textur",
    src: "https://images.unsplash.com/photo-1519823541166-386545d316f0?w=1200&q=80&auto=format&fit=crop",
  },
  {
    alt: "Frau mit glatter, gesunder Haut im Studio-Licht",
    src: "https://images.unsplash.com/photo-1487412720507-e7ab3e6476f3?w=1200&q=80&auto=format&fit=crop",
  },
  {
    alt: "Aromatherapie und Entspannung im Kosmetikstudio",
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80&auto=format&fit=crop",
  },
  {
    alt: "Detail einer Wimpernverlängerung",
    src: "https://images.unsplash.com/photo-1583000899526-8ca013543b36?w=1200&q=80&auto=format&fit=crop",
  },
];

export const TESTIMONIALS = [
  {
    name: "S. K.",
    text: "Meine Haut strahlt seit der OxyGeneo-Behandlung – ich komme regelmäßig zurück.",
  },
  {
    name: "M. L.",
    text: "Sehr professionelles, freundliches Team. Die Wimpernverlängerung sieht wunderschön natürlich aus.",
  },
  {
    name: "A. R.",
    text: "Das Studio ist wunderschön und man fühlt sich von der ersten Minute an wohlfühlen.",
  },
];

export const NAV = [
  { label: "Start", href: "/" },
  { label: "Behandlungen & Preise", href: "/#behandlungen" },
  { label: "Über uns", href: "/#studio" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Kontakt & Anfahrt", href: "/#kontakt" },
  { label: "Termin buchen", href: SITE.bookingUrl, external: true, cta: true },
];

export const HOURS = SITE.hours;

export const MAP_EMBED =
  "https://www.google.com/maps?q=Stubenberggasse%208%2F1%2C%208020%20Graz&output=embed";

export const LEGAL = {
  imprint: {
    operator: SITE.imprint.operator,
    owner: SITE.imprint.owner,
    address: `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`,
    contact: [
      { label: "Telefon", value: SITE.phone, href: SITE.phoneHref },
      { label: "E-Mail", value: SITE.email, href: `mailto:${SITE.email}` },
      { label: "Web", value: "www.mais-lumiere.at", href: "https://www.mais-lumiere.at" },
    ],
    regNote: SITE.imprint.regNote,
    uid: SITE.imprint.uid,
    trade: SITE.imprint.trade,
    supervision: SITE.imprint.supervision,
    dispute: SITE.imprint.dispute,
  },
  privacy: {
    controller: SITE.imprint.operator,
    address: `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`,
    email: SITE.email,
    phone: SITE.phone,
  },
};
