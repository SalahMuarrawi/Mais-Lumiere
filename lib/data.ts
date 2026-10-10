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
  website: "https://www.mais-lumiere.at",
  /** Treatwell-Buchungslink – gilt für ALLE Buchungs-Buttons */
  bookingUrl:
    "https://buchung.treatwell.at/ort/mais-lumiere-esthetic-e-u/?utm_source=widget&utm_medium=partners&utm_campaign=website_sharing",
  instagramName: "@mais_lumiere_esthetic",
  instagram:
    "https://www.instagram.com/mais_lumiere_esthetic?utm_source=qr",
  socialMedia: [
    {
      name: "Instagram",
      handle: "@mais_lumiere_esthetic",
      url: "https://www.instagram.com/mais_lumiere_esthetic?utm_source=qr",
    },
    {
      name: "TikTok",
      handle: "@mais.lumiere.esthetic",
      url: "https://www.tiktok.com/@mais.lumiere.esthetic",
    },
    {
      name: "Facebook",
      handle: "Mais Lumière Esthetic",
      url: "https://www.facebook.com/Maislumiereesthetic/",
    },
  ],
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Stubenberggasse%208%2F1%2C%208010%20Graz",
  hours: "Ausschließlich nach Terminvereinbarung",
  imprint: {
    /** Registrierte Firmenbezeichnung (GISA) */
    operator: "Mais Lumiere Esthetic e.U.",
    owner: "Mais Abou Dan",
    regNote: "GISA-Zahl: 39027894",
    uid: "ATU 82945903",
    trade: "Kosmetik (Schönheitspflege), ausgenommen Piercen und Tätowieren",
    purpose: "Beauty, Kosmetik, Schönheitspflege",
    supervision: "Bezirkshauptmannschaft Graz",
    professionalRulesUrl: "https://www.ris.bka.gv.at",
    dispute:
      "Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir weder bereit noch verpflichtet.",
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
  description?: string;
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
  // ==========================================
  // 1. GESICHTS- & KÖRPERBEHANDLUNGEN (18)
  // ==========================================
  {
    id: "express-gesichtsreinigung",
    name: "Express Gesichtsreinigung",
    price: "75,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/37072271/pexels-photo-37072271.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Schnelle Tiefenreinigung und Frischekick – ideal für einen klaren Teint bei wenig Zeit."
  },
  {
    id: "klassische-gesichtsbehandlung",
    name: "Klassische Gesichtsbehandlung",
    price: "90,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/6663374/pexels-photo-6663374.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Umfassende Pflege mit sanfter Ausreinigung, abgestimmter Maske und entspannender Massage."
  },
  {
    id: "deep-cleansing-akne-gesicht",
    name: "Deep Cleansing Akne-Behandlung Gesicht",
    price: "125,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/39589551/pexels-photo-39589551.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Gezielte Kläreinheit gegen Entzündungen, Talgüberproduktion und hartnäckige Unreinheiten."
  },
  {
    id: "deep-cleansing-akne-koerper",
    name: "Deep Cleansing Akne-Behandlung Körper",
    price: "175,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/16131212/pexels-photo-16131212.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Intensive Ausreinigung und Beruhigung für unreine Hautpartien an Rücken oder Dekolleté."
  },
  {
    id: "mais-luxe-facial",
    name: "Mais Luxe Facial Gesichtsreinigung",
    price: "150,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/12556701/pexels-photo-12556701.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Exklusives Luxus-Verwöhnritual mit hochkonzentrierter Feuchtigkeit für maximale Zellregeneration."
  },
  {
    id: "korean-glass-skin-facial",
    name: "Korean Glass Skin Facial",
    price: "199,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/30793292/pexels-photo-30793292.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Inspiriert von koreanischer Ästhetik: Verleiht pralle Feuchtigkeit und den perfekten Glashaut-Glow."
  },
  {
    id: "enzyme-facial",
    name: "Enzyme Facial",
    price: "75,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/22589363/pexels-photo-22589363.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Biologisches Enzympeeling für empfindliche Haut – löst Verhornungen ganz ohne Reizung."
  },
  {
    id: "fruchtsaeure-peeling-gesicht",
    name: "Fruchtsäure Peeling Gesicht",
    price: "80,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/10192208/pexels-photo-10192208.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Zellaktivierende Säuren verfeinern vergrößerte Poren, mildern Fältchen und gleichen den Teint aus."
  },
  {
    id: "fruchtsaeure-peeling-koerper",
    name: "Fruchtsäure Peeling Körper",
    price: "120,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/6731460/pexels-photo-6731460.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Glättende Peelingbehandlung für samtweiche Haut und Minderung von Verhornungen am Körper."
  },
  {
    id: "algen-peeling-gesicht",
    name: "Algen Peeling Gesicht",
    price: "110,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/14996838/pexels-photo-14996838.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "100 % natürliche Mikronadeln aus Algen kurbeln die Zellerneuerung und Hautverjüngung intensiv an."
  },
  {
    id: "algen-peeling-koerper",
    name: "Algen Peeling Körper",
    price: "160,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/10976267/pexels-photo-10976267.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Natürliche Tiefenregeneration gegen Hyperpigmentierung, Dehnungsstreifen und Unebenheiten."
  },
  {
    id: "lymphdrainage-gesichtsmassage",
    name: "Lymphdrainage Gesichtsmassage",
    price: "65,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/25642678/pexels-photo-25642678.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sanft entstauende Massagetechnik zur Definition der Gesichtskonturen und Milderung von Schwellungen."
  },
  {
    id: "oxygeneo-glow-facial",
    name: "OxyGeneo Glow Facial",
    price: "135,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/37033485/pexels-photo-37033485.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Aktiviert die natürliche Sauerstoffzufuhr der Haut von innen für sofortige Frische und Leuchtkraft."
  },
  {
    id: "gesichtsstraffung",
    name: "Gesichtsstraffung",
    price: "135,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/7581081/pexels-photo-7581081.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Fokussierte Lifting-Technik zur Straffung erschlaffter Konturen und Vitalisierung des Gewebes."
  },
  {
    id: "red-carpet-behandlung",
    name: "Red Carpet Behandlung",
    price: "140,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/37229294/pexels-photo-37229294.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Der ultimative Sofort-Effekt vor Events: Maximale Ausstrahlung und sichtbare Faltenglättung."
  },
  {
    id: "anti-aging-behandlung",
    name: "Anti-Aging-Behandlung",
    price: "135,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/7582555/pexels-photo-7582555.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Reaktivierende Wirkstoffcocktails stärken die Spannkraft und mindern gezielt Linien."
  },
  {
    id: "haende-spa",
    name: "Hände Spa",
    price: "75,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/6187265/pexels-photo-6187265.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Verwöhnende Nährstoffpackung und Peeling für samtweiche, intensiv gepflegte Hände."
  },
  {
    id: "klassische-manikuere",
    name: "Klassische Maniküre",
    price: "40,00 €",
    category: "facial-body",
    image: "https://images.pexels.com/photos/6135681/pexels-photo-6135681.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Präzises Formen der Nägel, schonende Nagelhautpflege und ein makelloses Finish."
  },

  // ==========================================
  // 2. APPARATIVE KOSMETIK & SPECIALS (15)
  // ==========================================
  {
    id: "mais-lumiere-mikrodermabrasion",
    name: "Mais Lumière Mikrodermabrasion",
    price: "80,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/20683632/pexels-photo-20683632.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sanfter Diamantschliff trägt verhornte Zellen ab und regt die Zellerneuerung fühlbar an."
  },
  {
    id: "hydradermabrasion",
    name: "Hydradermabrasion",
    price: "145,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/7789655/pexels-photo-7789655.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Schonende Porenreinigung kombiniert mit intensiver Wirkstoff-Einschleusung auf Wasserbasis."
  },
  {
    id: "ml-aquafacial-tiefenreinigung",
    name: "ML Aquafacial & Tiefenreinigung",
    price: "150,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/5042622/pexels-photo-5042622.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Vortex-Technologie spült Talg und Ablagerungen schmerzfrei aus den Poren."
  },
  {
    id: "ml-aquafacial-fruchtsaeurepeeling",
    name: "ML Aquafacial & Fruchtsäurepeeling",
    price: "190,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/10192208/pexels-photo-10192208.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Das Aquafacial-Vakuum ergänzt um Fruchtsäure – für besonders porentiefe Klarheit."
  },
  {
    id: "ml-aquafacial-microneedling",
    name: "ML Aquafacial & Microneedling",
    price: "245,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/36497922/pexels-photo-36497922.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Power-Duo: Porentiefe Reinigung trifft auf gezielte Kollagenanregung per Mikronadeln."
  },
  {
    id: "ml-microneedling-gesicht",
    name: "ML Microneedling Gesicht",
    price: "145,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/14438367/pexels-photo-14438367.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Ultrafeine Nadelimpulse aktivieren die körpereigene Kollagen- und Elastinbildung spürbar."
  },
  {
    id: "ml-microneedling-gesicht-hals",
    name: "ML Microneedling Gesicht & Hals",
    price: "190,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/39589562/pexels-photo-39589562.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Kollagenstimulation für ein ebenmäßiges Hautbild im Gesicht und am sensiblen Halsbereich."
  },
  {
    id: "ml-microneedling-gesicht-hals-dekollete",
    name: "ML Microneedling Gesicht, Hals & Dekolleté",
    price: "240,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/8624596/pexels-photo-8624596.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Das Rundum-Straffungspaket für Gesicht, Hals und ein jugendliches Dekolleté."
  },
  {
    id: "radiofrequenz-meets-microneedling",
    name: "Radiofrequenz meets Microneedling",
    price: "195,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/4586750/pexels-photo-4586750.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Wärmeenergie trifft Needling – strafft tiefe Bindegewebsschichten nachhaltig."
  },
  {
    id: "radiofrequenz-meets-hydrafacial",
    name: "Radiofrequenz meets Hydrafacial",
    price: "200,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/36930299/pexels-photo-36930299.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Thermische Festigung kombiniert mit maximaler Durchfeuchtung für sichtbaren Lifting-Effekt."
  },
  {
    id: "dermapen-meets-hydrafacial",
    name: "Dermapen meets Hydrafacial",
    price: "260,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/5069429/pexels-photo-5069429.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Maximale Wirkstoffaufnahme: Feine Poren und straffe Elastizität in einer Sitzung."
  },
  {
    id: "ml-bb-glow-augenringe",
    name: "ML BB Glow Augenringe",
    price: "75,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/7290707/pexels-photo-7290707.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Hellt dunkle Schatten sanft auf und schenkt der Augenpartie ein waches Strahlen."
  },
  {
    id: "mais-lumiere-bb-glow-gesicht",
    name: "Mais Lumière BB Glow Gesicht",
    price: "150,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/7290736/pexels-photo-7290736.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Natürliche Farbpigmente sorgen für einen dauerhaft ebenmäßigen No-Makeup-Look."
  },
  {
    id: "ml-bb-glow-gesicht-hals",
    name: "ML BB Glow Gesicht & Hals",
    price: "190,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/37033381/pexels-photo-37033381.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Nahtloser, seidiger Glow vom Gesicht bis zum Hals – ohne Make-up-Ränder."
  },
  {
    id: "premium-hautverjuengung-dreiklang",
    name: "Premium-Hautverjüngung Dreiklang",
    price: "310,00 €",
    category: "apparative",
    image: "https://images.pexels.com/photos/3985332/pexels-photo-3985332.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Das Premium-Ritual aus Peeling, Needling und Nährstoff-Infusion für höchste Ansprüche."
  },

  // ==========================================
  // 3. WIMPERNVERLÄNGERUNG (12)
  // ==========================================
  {
    id: "1-1-klassische-wimpernverlaengerung",
    name: "1:1 Klassische Wimpernverlängerung",
    price: "150,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/5128218/pexels-photo-5128218.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Eine feine Seidenwimper pro Naturwimper – für einen natürlichen Mascara-Look."
  },
  {
    id: "1-1-lash-refill-2-wochen",
    name: "1:1 Lash Refill nach 2 Wochen",
    price: "60,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/36930354/pexels-photo-36930354.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Auffüllung und Formperfektionierung für dichten Sitz nach 14 Tagen."
  },
  {
    id: "1-1-lash-refill-3-wochen",
    name: "1:1 Lash Refill nach 3 Wochen",
    price: "70,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/33723106/pexels-photo-33723106.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Präzises Auffüllen ausgefallener Wimpern nach 3 Wochen."
  },
  {
    id: "1-1-lash-refill-4-wochen",
    name: "1:1 Lash Refill nach 4 Wochen",
    price: "80,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/29877726/pexels-photo-29877726.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Komplette Auffrischung des 1:1 Sets nach vier Wochen Tragezeit."
  },
  {
    id: "volumen-lashextension-2d-5d",
    name: "Volumen Lashextension 2D–5D",
    price: "180,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/35013077/pexels-photo-35013077.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Zarte, handgefächerte Wimpernbüschel für sichtbar mehr Fülle und Dichte."
  },
  {
    id: "volumen-refill-2-wochen",
    name: "2D–5D Volumen Refill nach 2 Wochen",
    price: "70,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/34930118/pexels-photo-34930118.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Schließen kleiner Lücken und Auffrischen der Fächer nach 2 Wochen."
  },
  {
    id: "volumen-refill-3-wochen",
    name: "2D–5D Volumen Refill nach 3 Wochen",
    price: "80,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/38194465/pexels-photo-38194465.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Korrektur und Auffüllung des dichten Fächervolumens nach 3 Wochen."
  },
  {
    id: "volumen-refill-4-wochen",
    name: "2D–5D Volumen Refill nach 4 Wochen",
    price: "90,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/5128234/pexels-photo-5128234.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Großer Refill für volles, gleichmäßiges Volumen nach 4 Wochen."
  },
  {
    id: "maxx-mega-volume-lashextension",
    name: "Maxx Mega Volume Lashextension",
    price: "195,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/5128233/pexels-photo-5128233.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Dramatisch dichter, tiefschwarzer Look mit federleichten Ultra-Fächern."
  },
  {
    id: "maxx-volume-refill-2-wochen",
    name: "Maxx Volume Refill nach 2 Wochen",
    price: "75,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/33637609/pexels-photo-33637609.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Schnelle Nachfüllung für permanent extremes Volumen nach 2 Wochen."
  },
  {
    id: "maxx-volume-refill-3-wochen",
    name: "Maxx Volume Refill nach 3 Wochen",
    price: "85,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/7755531/pexels-photo-7755531.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Intensive Pflege und Auffüllung des Mega-Volumen-Sets nach 3 Wochen."
  },
  {
    id: "maxx-volume-refill-4-wochen",
    name: "Maxx Volume Refill nach 4 Wochen",
    price: "95,00 €",
    category: "lashes",
    image: "https://images.pexels.com/photos/38194460/pexels-photo-38194460.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Vollständige Wiederherstellung des tiefschwarzen Smokey-Lash-Effekts nach 4 Wochen."
  },

  // ==========================================
  // 4. LASH & BROW STYLING & LIFTING (7)
  // ==========================================
  {
    id: "wimpern-faerben",
    name: "Wimpern färben",
    price: "20,00 €",
    category: "brows-lifting",
    image: "https://images.pexels.com/photos/5128222/pexels-photo-5128222.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Intensive, wischfeste Tönung für dunkle, glänzende Wimpern ohne Mascara."
  },
  {
    id: "augenbrauen-faerben",
    name: "Augenbrauen färben",
    price: "20,00 €",
    category: "brows-lifting",
    image: "https://images.pexels.com/photos/5178001/pexels-photo-5178001.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Farbnuancierung passend zum Typ für optisch dichtere, harmonische Brauen."
  },
  {
    id: "augenbrauen-wimpern-faerben",
    name: "Augenbrauen & Wimpern färben",
    price: "35,00 €",
    category: "brows-lifting",
    image: "https://images.pexels.com/photos/6135621/pexels-photo-6135621.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Das perfekte Kombi-Duo für einen frischen, ausdrucksstarken Blick jeden Morgen."
  },
  {
    id: "augenbrauen-forming",
    name: "Augenbrauen Forming",
    price: "35,00 €",
    category: "brows-lifting",
    image: "https://images.pexels.com/photos/33607397/pexels-photo-33607397.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Präzises Zupfen und Formen entlang der natürlichen Knochenstruktur des Gesichts."
  },
  {
    id: "ml-koreanisches-brow-lifting",
    name: "ML Koreanisches Brow Lifting inkl. Färben",
    price: "80,00 €",
    category: "brows-lifting",
    image: "https://images.pexels.com/photos/33607399/pexels-photo-33607399.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Laminierung bringt widerspenstige Brauenhaare dauerhaft in volle, buschige Form."
  },
  {
    id: "ml-koreanisches-lash-lifting",
    name: "ML Koreanisches Lash Lifting inkl. Färben",
    price: "80,00 €",
    category: "brows-lifting",
    image: "https://images.pexels.com/photos/8092594/pexels-photo-8092594.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Sanfte Dauerwelle direkt am Wimpernansatz – maximaler Schwung ganz ohne Wimpernzange."
  },
  {
    id: "luxus-koreanisches-brow-lash-lifting",
    name: "Luxus Koreanisches Brow & Lash Lifting",
    price: "140,00 €",
    category: "brows-lifting",
    image: "https://images.pexels.com/photos/15046690/pexels-photo-15046690.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Das Rundum-Lifting für Wimpern und Brauen inkl. Tiefenpflege mit Keratin."
  }
];

export const GALLERY = [
  {
    alt: "Saubere, strahlende Haut nach einer Gesichtsbehandlung",
    src: "/images/WhatsApp Image 2026-04-12 at 23.51.26.jpeg",
  },
  {
    alt: "Pflegeprodukte und Seren in einer ruhigen Komposition",
    src: "/images/WhatsApp Image 2026-04-13 at 00.07.53.jpeg",
  },
  {
    alt: "Beruhigende Massagebehandlung mit cremiger Textur",
    src: "/images/WhatsApp Image 2026-04-15 at 17.59.06.jpeg",
  },
  {
    alt: "Frau mit glatter, gesunder Haut im Studio-Licht",
    src: "/images/WhatsApp Image 2026-04-15 at 18.09.17.jpeg",
  },
  {
    alt: "Aromatherapie und Entspannung im Kosmetikstudio",
    src: "/images/WhatsApp Image 2026-04-15 at 18.05.08 (1).jpeg"
  },
  {
    alt: "Detail einer Wimpernverlängerung",
    src: "/images/Bildschirmfoto 2026-04-25 um 23.57.06.png",
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
  "https://www.google.com/maps?q=Stubenberggasse%208%2F1%2C%208010%20Graz&output=embed";

export const LEGAL = {
  imprint: {
    operator: SITE.imprint.operator,
    owner: SITE.imprint.owner,
    address: `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`,
    contact: [
      { label: "Telefon", value: SITE.phone, href: SITE.phoneHref },
      { label: "E-Mail", value: SITE.email, href: `mailto:${SITE.email}` },
      { label: "Web", value: SITE.website.replace(/^https?:\/\//, ""), href: SITE.website },
    ],
    regNote: SITE.imprint.regNote,
    uid: SITE.imprint.uid,
    trade: SITE.imprint.trade,
    purpose: SITE.imprint.purpose,
    supervision: SITE.imprint.supervision,
    professionalRulesUrl: SITE.imprint.professionalRulesUrl,
    dispute: SITE.imprint.dispute,
  },
  privacy: {
    controller: SITE.imprint.operator,
    address: `${SITE.address.street}, ${SITE.address.zip} ${SITE.address.city}`,
    email: SITE.email,
    phone: SITE.phone,
  },
};
