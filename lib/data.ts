export const SITE = {
  name: "Mais Lumière Esthetic",
  tagline: "The Essence of Refined Beauty",
  city: "Graz",
  address: {
    street: "Stubenberggasse 8/1",
    zip: "8020",
    city: "Graz",
    country: "Österreich",
  },
  phone: "+43 660 57 11 721",
  phoneHref: "tel:+436605711721",
  email: "maislumiere.esthetic@gmail.com",
  bookingUrl:
    "https://www.treatwell.at/more/more-mais-lumiere-esthetic-421918?locale=de_DE",
  instagram: "https://www.instagram.com/more_maislumiere",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Stubenberggasse%208%2F1%20Graz",
  hours: [
    { days: "Montag – Freitag", time: "10:00 – 18:00" },
    { days: "Samstag", time: "nach Vereinbarung" },
    { days: "Sonntag", time: "geschlossen" },
  ],
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

export type Treatment = {
  name: string;
  price: string;
  duration?: string;
  desc: string;
};

export type TreatmentGroup = {
  id: string;
  title: string;
  intro: string;
  items: Treatment[];
};

export const TREATMENTS: TreatmentGroup[] = [
  {
    id: "oxygeneo",
    title: "OxyGeneo – Die Wunderbehandlung",
    intro:
      "Der 3-in-1-Instant-Lift mit Fruchtsäure- und LED-Therapie: Reinigen, Sauerstoff-Glow und Straffung in nur 30 Minuten.",
    items: [
      {
        name: "OxyGeneo – Instant Lifting",
        price: "ab €75",
        duration: "30 Min.",
        desc: "Reinigung + Sauerstoff-Peeling + LED-Gesichtslifting – der Sofort-Glow.",
      },
    ],
  },
  {
    id: "gesichtspflege",
    title: "Gesichtspflege & Gesichtsbehandlungen",
    intro:
      "Individuelle Pflege für jeden Hauttyp – von der sanften Reinigung bis zum Anti-Aging-Programm mit Massage.",
    items: [
      {
        name: "Basic Gesichtsbehandlung",
        price: "€70 – €90",
        duration: "60 Min.",
        desc: "Reinigung, Peeling, Maske & Feuchtigkeitspflege – ideal für die Wocheneinkehr.",
      },
      {
        name: "Intensive Gesichtsbehandlung",
        price: "€95 – €115",
        duration: "75 Min.",
        desc: "Tiefe Pflege mit Serum, Ampulle und Massage gegen Fältchen und Anspannung.",
      },
      {
        name: "Anti-Aging Gesichtspflege",
        price: "€110 – €130",
        duration: "90 Min.",
        desc: "Liftende Massage, Kollagen-Booster & Lymphdrainage für frische, straffe Haut.",
      },
      {
        name: "Beruhigungspaket",
        price: "€75",
        duration: "45 Min.",
        desc: "Sanfte Pflege für empfindliche Haut – mit beruhigender Massage.",
      },
    ],
  },
  {
    id: "spezial",
    title: "Spezialbehandlungen",
    intro:
      "Zielgerichtete Anwendungen mit sichtbarem Ergebnis – vom Aqua-Peeling bis zur Microneedling-Kur.",
    items: [
      {
        name: "Aquafacial",
        price: "€105",
        duration: "60 Min.",
        desc: "Doppeltes Peeling mit Hyaluron-Booster für sofort glattere, strahlendere Haut.",
      },
      {
        name: "Microneedling",
        price: "€130",
        duration: "75 Min.",
        desc: "Kollagen-Boost für feine Linien, Poren und Narben – sichtbare Hauterneuerung.",
      },
      {
        name: "BB Glow – Make-up Effekt",
        price: "€120",
        duration: "75 Min.",
        desc: "Langanhaltender Teint mit sofortigem Glow – wie ein perfekter Make-up-Look, nur natürlicher.",
      },
      {
        name: "Kopfhaut-Behandlung",
        price: "€45",
        duration: "30 Min.",
        desc: "Beruhigende Pflege für Kopfhaut und Haaransatz – für ein frisches, gepflegtes Finish.",
      },
      {
        name: "Glow-Facial / Sofort-Glow",
        price: "€85",
        duration: "45 Min.",
        desc: "Schnelle Intensivpflege mit Glow-Finish – perfekt vor besonderen Anlässen.",
      },
    ],
  },
  {
    id: "wimpern",
    title: "Wimpern & Augenbrauen",
    intro:
      "Gepflegte Blicke mit modernen, natürlichen Techniken – von der Verlängerung bis zur Brauencoaching-Feinzeichnung.",
    items: [
      {
        name: "Wimpernverlängerung",
        price: "€85 – €110",
        duration: "90 Min.",
        desc: "Voluminöse oder natürliche Wimpern – individuell an Ihren Wimpernkranz angepasst.",
      },
      {
        name: "Wimpernlift & Tinting",
        price: "€65",
        duration: "60 Min.",
        desc: "Natürliche Wimpern, sichtbar gestylt und abgetönt – ohne Extensions.",
      },
      {
        name: "Brow Lamination",
        price: "€55",
        duration: "45 Min.",
        desc: "Gepflegte, strukturierte Augenbrauen mit modernem Lamination-Verfahren.",
      },
      {
        name: "Brow Design & Color",
        price: "€40 – €55",
        duration: "30 Min.",
        desc: "Feine Formung, Färbung & Coating für den perfekten Brauen-Blick.",
      },
      {
        name: "Wimpern & Brauen-Paket",
        price: "€120",
        duration: "120 Min.",
        desc: "Wimpernverlängerung + Brow Design – der komplette Augen-Look in einem Termin.",
      },
    ],
  },
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
