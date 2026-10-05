"use client";

import { createContext, useContext, useEffect, useMemo, useSyncExternalStore } from "react";

export type Language = "de" | "en" | "ar";

const UI_TRANSLATIONS: Record<string, Record<Exclude<Language, "de">, string>> = {
  "Startseite": { en: "Home", ar: "الرئيسية" },
  "Behandlungen": { en: "Treatments", ar: "العلاجات" },
  "Studio": { en: "Studio", ar: "الاستوديو" },
  "Galerie": { en: "Gallery", ar: "معرض الصور" },
  "Kontakt": { en: "Contact", ar: "اتصل بنا" },
  "Kontakt & Anfahrt": { en: "Contact & Directions", ar: "التواصل والوصول" },
  "Termin buchen": { en: "Book an appointment", ar: "احجزي موعداً" },
  "Jetzt Termin buchen": { en: "Book an appointment", ar: "احجزي موعداً" },
  "Termin bei Mais vereinbaren": { en: "Book an appointment with Mais", ar: "احجزي موعداً مع ميس" },
  "Menü öffnen": { en: "Open menu", ar: "فتح القائمة" },
  "Menü schließen": { en: "Close menu", ar: "إغلاق القائمة" },
  "Alle": { en: "All", ar: "الكل" },
  "Gesicht & Körper": { en: "Face & Body", ar: "الوجه والجسم" },
  "Apparative Anwendungen": { en: "Advanced Treatments", ar: "العلاجات التجميلية المتقدمة" },
  "Wimpern & Lashes": { en: "Lashes", ar: "الرموش" },
  "Brows & Lifting": { en: "Brows & Lifting", ar: "الحواجب والرفع" },
  "Behandlung suchen…": { en: "Search treatments…", ar: "ابحثي عن علاج…" },
  "Behandlungen durchsuchen": { en: "Search treatments", ar: "ابحثي عن العلاجات" },
  "Details & Info ↓": { en: "Details & info ↓", ar: "التفاصيل والمعلومات ↓" },
  "Weniger Details ↑": { en: "Show less ↑", ar: "تفاصيل أقل ↑" },
  "Keine Behandlung gefunden": { en: "No treatments found", ar: "لم يتم العثور على علاجات" },
  "Passen Sie Ihre Suche an oder wählen Sie eine andere Kategorie.": {
    en: "Adjust your search or choose another category.",
    ar: "عدّلي البحث أو اختاري فئة أخرى.",
  },
  "Unsere Behandlungen": { en: "Our Treatments", ar: "علاجاتنا" },
  "Von der klassischen Gesichtsbehandlung bis zur apparativen Anwendung – entdecken Sie unser Leistungsspektrum und vereinbaren Sie Ihren Wunschtermin.": {
    en: "From classic facials to advanced treatments, explore our services and book the appointment that suits you.",
    ar: "من علاجات الوجه الكلاسيكية إلى الإجراءات المتقدمة، اكتشفي خدماتنا واحجزي الموعد المناسب لك.",
  },
  "Termin reservieren": { en: "Book an appointment", ar: "احجزي موعداً" },
  "Termine über Treatwell": { en: "Appointments via Treatwell", ar: "الحجوزات عبر Treatwell" },
  "Bereit für Ihren neuen Glow?": { en: "Ready for your new glow?", ar: "هل أنتِ مستعدة لإشراقة جديدة؟" },
  "flexible Termine, transparente Preise.": {
    en: "Flexible appointments, transparent prices.",
    ar: "مواعيد مرنة وأسعار واضحة.",
  },
  "Ihr Kosmetikstudio in Graz für Gesichtsbehandlungen, OxyGeneo, Wimpern-Design & Beauty – mit Herz und Fachkompetenz.": {
    en: "Your beauty studio in Graz for facials, OxyGeneo, lash design and beauty, delivered with care and expertise.",
    ar: "مركز التجميل الخاص بكِ في غراتس لعلاجات الوجه وOxyGeneo وتصميم الرموش والجمال، بخبرة واهتمام.",
  },
  "Öffnungszeiten": { en: "Opening hours", ar: "ساعات العمل" },
  "Ausschließlich nach Terminvereinbarung": {
    en: "By appointment only",
    ar: "بموعد مسبق فقط",
  },
  "Sprache auswählen": { en: "Choose language", ar: "اختاري اللغة" },
  " oder telefonisch unter ": { en: " or by phone at ", ar: " أو هاتفياً على " },
  "– Ihr Kosmetikstudio in Graz für Gesichtsbehandlungen, OxyGeneo, Wimpern-Design & Beauty – mit Herz und Fachkompetenz.": {
    en: "—your beauty studio in Graz for facials, OxyGeneo, lash design and beauty, delivered with care and expertise.",
    ar: "—مركز تجميل في غراتس لعلاجات الوجه وOxyGeneo وتصميم الرموش والجمال، بخبرة واهتمام.",
  },
  "Kosmetik (Schönheitspflege), ausgenommen Piercen und Tätowieren": {
    en: "Beauty and skincare services, excluding piercing and tattooing",
    ar: "خدمات التجميل والعناية بالبشرة، باستثناء الثقب والوشم",
  },
  "Beauty, Kosmetik, Schönheitspflege": {
    en: "Beauty, cosmetics and skincare",
    ar: "الجمال ومستحضرات التجميل والعناية بالبشرة",
  },
  "Bezirkshauptmannschaft Graz": {
    en: "Graz District Authority",
    ar: "سلطة مقاطعة غراتس",
  },
  "GISA-Zahl: 39027894": { en: "GISA number: 39027894", ar: "رقم GISA: 39027894" },
  "Web": { en: "Website", ar: "الموقع الإلكتروني" },
  "Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir weder bereit noch verpflichtet.": {
    en: "We are neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.",
    ar: "لسنا مستعدين أو ملزمين بالمشاركة في إجراءات تسوية النزاعات أمام هيئة تحكيم للمستهلكين.",
  },
  "Österreichische Datenschutzbehörde": {
    en: "Austrian Data Protection Authority",
    ar: "هيئة حماية البيانات النمساوية",
  },
  "Mais – Inhaberin Mais Lumière Esthetic": {
    en: "Mais – owner of Mais Lumière Esthetic",
    ar: "ميس – مالكة Mais Lumière Esthetic",
  },
  "Sitzungs-Cookies": { en: "session cookies", ar: "ملفات تعريف ارتباط الجلسة" },
  "permanente Cookies": { en: "persistent cookies", ar: "ملفات تعريف الارتباط الدائمة" },
  "Willkommen bei Mais Lumière Esthetic – Ihrem Kosmetikstudio für Gesichtspflege, OxyGeneo und Wimpern-Design. Entspannen Sie sich in ruhiger Atmosphäre und lassen Sie Ihre Haut neu strahlen.": {
    en: "Welcome to Mais Lumière Esthetic, your beauty studio for skincare, OxyGeneo and lash design. Relax in a peaceful setting and let your skin shine.",
    ar: "مرحباً بكِ في Mais Lumière Esthetic، مركزك للعناية بالوجه وOxyGeneo وتصميم الرموش. استرخي في أجواء هادئة ودعي بشرتك تتألق.",
  },
  "Reservieren Sie jetzt Ihre Wunschbehandlung im": {
    en: "Book your preferred treatment at",
    ar: "احجزي علاجك المفضل الآن في",
  },
  "Wimpern-Design & Beauty": { en: "lash design & beauty", ar: "تصميم الرموش والجمال" },
  "Saubere, strahlende Haut nach einer Gesichtsbehandlung": {
    en: "Clean, radiant skin after a facial",
    ar: "بشرة صافية ومشرقة بعد علاج الوجه",
  },
  "Pflegeprodukte und Seren in einer ruhigen Komposition": {
    en: "Skincare products and serums in a calming composition",
    ar: "منتجات عناية وسيرومات بتنسيق هادئ",
  },
  "Beruhigende Massagebehandlung mit cremiger Textur": {
    en: "A soothing massage treatment with a creamy texture",
    ar: "علاج تدليك مهدئ بملمس كريمي",
  },
  "Frau mit glatter, gesunder Haut im Studio-Licht": {
    en: "Woman with smooth, healthy skin in studio lighting",
    ar: "امرأة ببشرة ناعمة وصحية تحت إضاءة المركز",
  },
  "Aromatherapie und Entspannung im Kosmetikstudio": {
    en: "Aromatherapy and relaxation at the beauty studio",
    ar: "العلاج بالروائح والاسترخاء في مركز التجميل",
  },
  "Detail einer Wimpernverlängerung": {
    en: "Lash extension detail",
    ar: "تفاصيل وصلات الرموش",
  },
  "Alle Rechte vorbehalten.": { en: "All rights reserved.", ar: "جميع الحقوق محفوظة." },
  "Impressum": { en: "Legal Notice", ar: "بيانات قانونية" },
  "Datenschutz": { en: "Privacy", ar: "الخصوصية" },
  "Datenschutzerklärung": { en: "Privacy Policy", ar: "سياسة الخصوصية" },
  "Rechtliches": { en: "Legal", ar: "معلومات قانونية" },
  "Anbieter": { en: "Provider", ar: "مقدم الخدمة" },
  "Unternehmensdetails": { en: "Company details", ar: "تفاصيل الشركة" },
  "Zuständige Behörde": { en: "Competent authority", ar: "الجهة المختصة" },
  "Verbraucherstreitbeilegung": { en: "Consumer dispute resolution", ar: "تسوية نزاعات المستهلكين" },
  "Inhaltliche Verantwortung": { en: "Content responsibility", ar: "مسؤولية المحتوى" },
  "Kontaktdaten": { en: "Contact details", ar: "بيانات الاتصال" },
  "Adresse": { en: "Address", ar: "العنوان" },
  "Telefon": { en: "Phone", ar: "الهاتف" },
  "E-Mail": { en: "Email", ar: "البريد الإلكتروني" },
  "Anfahrt": { en: "Directions", ar: "كيفية الوصول" },
  "Jetzt Termin vereinbaren": { en: "Book an appointment", ar: "احجزي موعداً الآن" },
  "Wir freuen uns auf Ihren Besuch. Vereinbaren Sie bequem online Ihren Wunschtermin – wir nehmen uns Zeit für Ihre Haut.": {
    en: "We look forward to welcoming you. Book your appointment online and let us take time to care for your skin.",
    ar: "يسعدنا استقبالكم. احجزي موعدك عبر الإنترنت ودعينا نخصص الوقت للعناية ببشرتك.",
  },
  "gut erreichbar mit öffentlichen Verkehrsmitteln.": {
    en: "easily accessible by public transport.",
    ar: "ويمكن الوصول إليه بسهولة بوسائل النقل العام.",
  },
  "ÜBER MICH & PHILOSOPHIE": { en: "ABOUT ME & PHILOSOPHY", ar: "نبذة عني وفلسفتي" },
  "My name is ": { en: "My name is ", ar: "اسمي " },
  "Willkommen bei Mais Lumière Esthetic – Ihrem exklusiven Kosmetik- und Beauty-Studio im Herzen von Graz. Hier dreht sich alles um Ihre Schönheit, Ihr Wohlbefinden und Ihre Ausstrahlung.": {
    en: "Welcome to Mais Lumière Esthetic, your exclusive beauty studio in the heart of Graz. Everything here is dedicated to your beauty, wellbeing and radiance.",
    ar: "مرحباً بكِ في Mais Lumière Esthetic، مركز التجميل المميز في قلب غراتس. هنا ينصبّ الاهتمام على جمالك وراحتك وإشراقتك.",
  },
  "Mein Ziel ist es, Ihre natürliche Schönheit mit professionellen Behandlungen und modernsten Konzepten zum Strahlen zu bringen. In einer ruhigen, stilvollen Atmosphäre genießen Sie eine persönliche Auszeit vom Alltag – sanft, individuell und wirkungsvoll.": {
    en: "My aim is to bring out your natural beauty with professional treatments and modern techniques. Enjoy a personal, restorative break in a calm and elegant setting.",
    ar: "هدفي إبراز جمالك الطبيعي من خلال علاجات احترافية وأحدث الأساليب. استمتعي بوقت خاص بعيداً عن ضغوط الحياة، في أجواء هادئة وأنيقة.",
  },
  "Gönnen Sie sich eine Pause und erleben Sie Schönheit in neuem Licht!": {
    en: "Take a moment for yourself and experience beauty in a new light!",
    ar: "امنحي نفسكِ استراحة واكتشفي الجمال بنظرة جديدة!",
  },
  "Einblicke in unser Studio": { en: "A glimpse into our studio", ar: "لمحات من مركزنا" },
  "Impressionen unserer Behandlungen und Produkte – echte Momente aus dem Alltag im Studio.": {
    en: "A look at our treatments and products—authentic moments from everyday life at the studio.",
    ar: "لمحات من علاجاتنا ومنتجاتنا ولحظات حقيقية من يوميات المركز.",
  },
  "Mehr auf Instagram →": { en: "More on Instagram →", ar: "المزيد على إنستغرام ←" },
  "Das sagen unsere Kundinnen": { en: "What our clients say", ar: "آراء عميلاتنا" },
  "Ausgewählte Highlights": { en: "Selected highlights", ar: "مختارات مميزة" },
  "Unsere Signature-Behandlungen": { en: "Our signature treatments", ar: "علاجاتنا المميزة" },
  "Vier Favoriten aus unserer Karte – vom OxyGeneo® Glow Facial bis zum Luxus Brow & Lash Lifting. Entdecken Sie alle": {
    en: "Four favourites from our menu—from the OxyGeneo® Glow Facial to luxury brow & lash lifting. Explore all",
    ar: "أربع علاجات مفضلة لدينا، من OxyGeneo® Glow Facial إلى رفع الرموش والحواجب الفاخر. اكتشفي جميع",
  },
  "Behandlungen in unserem vollständigen Leistungskatalog.": {
    en: "treatments in our complete service menu.",
    ar: "العلاجات في قائمة خدماتنا الكاملة.",
  },
  "Alle Behandlungen ansehen": { en: "View all treatments", ar: "عرض جميع العلاجات" },
  "Wir freuen uns auf Ihren Besuch": { en: "We look forward to seeing you", ar: "نتطلع إلى زيارتكم" },
  "Mitten in Graz – perfekt mit öffentlichen Verkehrsmitteln erreichbar.": {
    en: "In the heart of Graz, with excellent public transport connections.",
    ar: "في قلب غراتس، ويسهل الوصول إلينا بوسائل النقل العام.",
  },
  "Österreich": { en: "Austria", ar: "النمسا" },
  "Wimpern färben": { en: "Eyelash tinting", ar: "صبغ الرموش" },
  "treatment-count-one": { en: "treatment", ar: "علاج" },
  "treatment-count-many": { en: "treatments", ar: "علاجات" },
  "Die Essenz von": { en: "The essence of", ar: "جوهر" },
  "refinierter": { en: "refined", ar: "الجمال الراقي" },
  " Schönheit – mitten in Graz.": { en: " beauty—in the heart of Graz.", ar: " – في قلب غراتس." },
  "Strahlende, gepflegte Haut": { en: "Radiant, beautifully cared-for skin", ar: "بشرة مشرقة ومعتنى بها" },
  "Sofort-Lift in 30 Minuten – Sauerstoff, Peeling & LED.": {
    en: "An instant lift in 30 minutes—oxygen, exfoliation & LED.",
    ar: "إشراقة فورية خلال 30 دقيقة: أكسجين وتقشير وضوء LED.",
  },
  "Pure Produkte": { en: "Pure products", ar: "منتجات نقية" },
  "Hochwertige Pflege, abgestimmt auf Ihre Haut.": {
    en: "High-quality skincare tailored to your skin.",
    ar: "عناية عالية الجودة مصممة لتناسب بشرتك.",
  },
  "Individuell": { en: "Personalised", ar: "عناية مخصصة" },
  "Jede Behandlung beginnt mit einer persönlichen Beratung.": {
    en: "Every treatment begins with a personal consultation.",
    ar: "يبدأ كل علاج باستشارة شخصية.",
  },
  "Mehr erfahren": { en: "Learn more", ar: "اكتشفي المزيد" },
  "Ihr Kosmetikstudio in Graz für Gesichtspflege, OxyGeneo und Wimpern-Design. Entspannen Sie sich in ruhiger Atmosphäre und lassen Sie Ihre Haut neu strahlen.": {
    en: "Your beauty studio in Graz for skincare, OxyGeneo and lash design. Relax in a peaceful setting and let your skin shine.",
    ar: "مركز تجميل في غراتس للعناية بالوجه وOxyGeneo وتصميم الرموش. استرخي في أجواء هادئة ودعي بشرتك تتألق من جديد.",
  },
  "Schnelle Tiefenreinigung und Frischekick – ideal für einen klaren Teint bei wenig Zeit.": {
    en: "A quick deep cleanse and refreshing boost for a clear complexion when time is short.",
    ar: "تنظيف عميق وانتعاش سريع لبشرة صافية عندما يكون الوقت محدوداً.",
  },
  "Klassische Gesichtsbehandlung": { en: "Classic Facial", ar: "علاج الوجه الكلاسيكي" },
  "Meine Haut strahlt seit der OxyGeneo-Behandlung – ich komme regelmäßig zurück.": {
    en: "My skin has been glowing since my OxyGeneo treatment—I keep coming back.",
    ar: "أصبحت بشرتي مشرقة منذ علاج OxyGeneo، لذلك أعود بانتظام.",
  },
  "Sehr professionelles, freundliches Team. Die Wimpernverlängerung sieht wunderschön natürlich aus.": {
    en: "A very professional and friendly team. My lash extensions look beautifully natural.",
    ar: "فريق ودود ومحترف للغاية. تبدو وصلات رموشي طبيعية وجميلة.",
  },
  "Das Studio ist wunderschön und man fühlt sich von der ersten Minute an wohlfühlen.": {
    en: "The studio is beautiful, and you feel welcome from the very first moment.",
    ar: "المركز جميل وتشعرين بالراحة والترحيب منذ اللحظة الأولى.",
  },
  "Instagram:": { en: "Instagram:", ar: "إنستغرام:" },
  "Anfahrtskarte:": { en: "Directions map:", ar: "خريطة الوصول:" },
  "Google Maps:": { en: "Google Maps:", ar: "خرائط Google:" },
  "Inhaberin": { en: "Owner", ar: "المالكة" },
  "Geschäftsführung:": { en: "Managing director:", ar: "المديرة:" },
  "Inhaberin / Geschäftsführung:": { en: "Owner / Managing director:", ar: "المالكة / المديرة:" },
  "UID-Nummer:": { en: "VAT number:", ar: "رقم ضريبة القيمة المضافة:" },
  "Gewerbebezeichnung:": { en: "Trade:", ar: "النشاط التجاري:" },
  "Unternehmensgegenstand:": { en: "Business purpose:", ar: "غرض الشركة:" },
  "Gewerbebehörde:": { en: "Trade authority:", ar: "الجهة التجارية:" },
  "Berufsrechtliche Vorschriften:": { en: "Professional regulations:", ar: "اللوائح المهنية:" },
  "Stand: Oktober": { en: "As of October", ar: "آخر تحديث: أكتوبر" },
  " – Diese Erklärung dient der Information und ist keine Rechtsberatung.": {
    en: " – This notice is for information only and is not legal advice.",
    ar: " – هذا البيان للمعلومات فقط ولا يُعد استشارة قانونية.",
  },
  "1. Datenschutz auf einen Blick": { en: "1. Privacy at a glance", ar: "1. نظرة عامة على الخصوصية" },
  "2. Datenerfassung auf dieser Website": { en: "2. Data collection on this website", ar: "2. جمع البيانات على هذا الموقع" },
  "3. Externe Buchungsplattform (Treatwell)": { en: "3. External booking platform (Treatwell)", ar: "3. منصة الحجز الخارجية (Treatwell)" },
  "4. Ihre Rechte": { en: "4. Your rights", ar: "4. حقوقك" },
  "5. Kontakt": { en: "5. Contact", ar: "5. التواصل" },
  "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.": {
    en: "The following information provides a brief overview of what happens to your personal data when you visit this website. Personal data is any information that can identify you personally.",
    ar: "تقدم المعلومات التالية لمحة موجزة عما يحدث لبياناتك الشخصية عند زيارة هذا الموقع. البيانات الشخصية هي كل معلومة يمكن أن تحدد هويتك.",
  },
  "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.": {
    en: "Data on this website is processed by the website operator. You can find the operator's contact details in this website's legal notice.",
    ar: "يتولى مشغل الموقع معالجة البيانات. يمكنك العثور على بيانات الاتصال به في الإشعار القانوني لهذا الموقع.",
  },
  "Diese Website verwendet sogenannte Cookies. Cookies speichern keine Schadstoffe, sondern helfen, das Internet nutzerfreundlicher, sicherer und effizienter zu machen. Ein Cookie ist ein kleiner Dateiablage auf Ihrem Gerät, die so lange bleibt, bis Sie ihn löschen.": {
    en: "This website uses cookies. Cookies help make the internet more user-friendly, secure and efficient. A cookie is a small file stored on your device until you delete it.",
    ar: "يستخدم هذا الموقع ملفات تعريف الارتباط. تساعد هذه الملفات على جعل الإنترنت أسهل وأكثر أماناً وكفاءة. وهي ملفات صغيرة تُخزن على جهازك حتى تحذفها.",
  },
  "Ein Teil der Cookies wird nach dem Beenden Ihrer Browser-Sitzung gelöscht (Sitzungs-Cookies). Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen (permanente Cookies).": {
    en: "Some cookies are deleted when you end your browser session (session cookies). Others remain on your device until you delete them (persistent cookies).",
    ar: "تُحذف بعض ملفات تعريف الارتباط عند إنهاء جلسة المتصفح، بينما تبقى ملفات أخرى على جهازك حتى تحذفها.",
  },
  "Cookies, die zur Durchführung elektronischer Kommunikationsvorgänge oder der Bereitstellung bestimmter, von Ihnen erwünschter Funktionen erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO bzw. § 165 TKG gespeichert. Sie haben das Recht, eine erteilte Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen.": {
    en: "Cookies required for electronic communications or requested functions are stored under Art. 6(1)(f) GDPR and section 165 TKG. You may withdraw any consent at any time with effect for the future.",
    ar: "تُخزن ملفات تعريف الارتباط اللازمة للاتصالات الإلكترونية أو الوظائف المطلوبة استناداً إلى المادة 6(1)(و) من اللائحة العامة لحماية البيانات والمادة 165 من قانون الاتصالات. يمكنك سحب موافقتك في أي وقت بأثر مستقبلي.",
  },
  "Auf dieser Website verweisen wir auf die externe Buchungsplattform Treatwell (treatwell.at), über die Sie Termine buchen können. Beim Klicken auf den Buchungs-Button verlassen Sie diese Website und gelangen auf die Seite des Drittanbieters.": {
    en: "This website links to the external booking platform Treatwell (treatwell.at). When you click the booking button, you leave this website and go to the third-party provider.",
    ar: "يتضمن هذا الموقع رابطاً إلى منصة الحجز الخارجية Treatwell (treatwell.at). عند النقر على زر الحجز، تغادر هذا الموقع وتنتقل إلى موقع الطرف الثالث.",
  },
  "Ab diesem Zeitpunkt gelten die Datenschutzbestimmungen des jeweiligen Anbieters. Wir empfehlen, die dortige Datenschutzerklärung zu lesen, um zu erfahren, welche Daten Treatwell erhebt und wie sie verarbeitet werden.": {
    en: "From that point, the provider's privacy policy applies. We recommend reading it to learn what data Treatwell collects and how it is processed.",
    ar: "من تلك اللحظة تسري سياسة الخصوصية الخاصة بمقدم الخدمة. نوصي بقراءتها لمعرفة البيانات التي تجمعها Treatwell وكيفية معالجتها.",
  },
  "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.": {
    en: "You have the right to request free information about the origin, recipients and purpose of your stored personal data. You may also request that it be corrected or deleted.",
    ar: "يحق لك طلب معلومات مجانية عن مصدر بياناتك الشخصية المخزنة والجهات المستلمة والغرض منها، كما يحق لك طلب تصحيحها أو حذفها.",
  },
  "Daneben haben Sie das Recht auf Datenübertragbarkeit sowie das Recht, sich bei der zuständigen Aufsichtsbehörde (Österreichische Datenschutzbehörde) zu beschweren.": {
    en: "You also have the right to data portability and to lodge a complaint with the competent supervisory authority (the Austrian Data Protection Authority).",
    ar: "ويحق لك أيضاً نقل البيانات وتقديم شكوى إلى السلطة الرقابية المختصة (هيئة حماية البيانات النمساوية).",
  },
  "Bei Fragen zur Erhebung, Verarbeitung und Nutzung Ihrer personenbezogenen Daten wenden Sie sich bitte an:": {
    en: "For questions about the collection, processing or use of your personal data, please contact:",
    ar: "للاستفسارات حول جمع بياناتك الشخصية أو معالجتها أو استخدامها، يرجى التواصل عبر:",
  },
  "My name is": { en: "My name is", ar: "اسمي" },
};

export function translatedTreatment(
  id: string,
  language: Language,
  name: string,
  description?: string,
) {
  if (language === "de") return { name, description: description ?? "" };
  return TREATMENT_TRANSLATIONS[id]?.[language] ?? { name, description: description ?? "" };
}

type TreatmentCopy = { name: string; description: string };
type LocalizedTreatmentCopy = Record<Language, TreatmentCopy>;

const TREATMENT_TRANSLATIONS: Record<string, Omit<LocalizedTreatmentCopy, "de">> = {
  "express-gesichtsreinigung": {
    en: { name: "Express Facial Cleansing", description: "A quick deep cleanse and refreshing boost for a clear complexion when time is short." },
    ar: { name: "تنظيف سريع للوجه", description: "تنظيف عميق وانتعاش سريع لبشرة صافية عندما يكون الوقت محدوداً." },
  },
  "klassische-gesichtsbehandlung": {
    en: { name: "Classic Facial", description: "Complete skincare with gentle extractions, a tailored mask and a relaxing massage." },
    ar: { name: "علاج الوجه الكلاسيكي", description: "عناية متكاملة بالبشرة مع تنظيف لطيف وقناع مناسب وتدليك مريح." },
  },
  "deep-cleansing-akne-gesicht": {
    en: { name: "Deep-Cleansing Acne Facial", description: "Targeted care for inflammation, excess sebum and persistent blemishes." },
    ar: { name: "تنظيف عميق لبشرة الوجه المعرضة لحب الشباب", description: "عناية موجهة للالتهابات وزيادة الدهون والشوائب المستمرة." },
  },
  "deep-cleansing-akne-koerper": {
    en: { name: "Deep-Cleansing Acne Body Treatment", description: "Intensive cleansing and soothing care for blemish-prone areas on the back or décolleté." },
    ar: { name: "تنظيف عميق للجسم المعرض لحب الشباب", description: "تنظيف مكثف وتهدئة للمناطق غير الصافية في الظهر أو أعلى الصدر." },
  },
  "mais-luxe-facial": {
    en: { name: "Mais Luxe Facial", description: "An exclusive luxury ritual with concentrated hydration to support skin renewal." },
    ar: { name: "علاج الوجه الفاخر من ميس", description: "طقس فاخر ومميز بترطيب مركز لدعم تجدد البشرة." },
  },
  "korean-glass-skin-facial": {
    en: { name: "Korean Glass Skin Facial", description: "Inspired by Korean beauty: deeply hydrated, plump skin with a luminous glass-skin glow." },
    ar: { name: "علاج البشرة الزجاجية الكوري", description: "مستوحى من الجمال الكوري لبشرة ممتلئة الترطيب بإشراقة صافية كالزجاج." },
  },
  "enzyme-facial": {
    en: { name: "Enzyme Facial", description: "A biological enzyme peel for sensitive skin that removes dry, rough cells without irritation." },
    ar: { name: "علاج الوجه بالإنزيمات", description: "تقشير إنزيمي حيوي للبشرة الحساسة يزيل الخلايا الخشنة دون تهيج." },
  },
  "fruchtsaeure-peeling-gesicht": {
    en: { name: "Fruit Acid Facial Peel", description: "Cell-renewing acids refine enlarged pores, soften fine lines and even the complexion." },
    ar: { name: "تقشير الوجه بأحماض الفاكهة", description: "أحماض محفزة لتجدد الخلايا تساعد على تنقية المسام وتخفيف الخطوط وتوحيد اللون." },
  },
  "fruchtsaeure-peeling-koerper": {
    en: { name: "Fruit Acid Body Peel", description: "A smoothing peel for silky-soft skin and reduced roughness on the body." },
    ar: { name: "تقشير الجسم بأحماض الفاكهة", description: "تقشير يمنح البشرة نعومة حريرية ويساعد على تقليل خشونة الجسم." },
  },
  "algen-peeling-gesicht": {
    en: { name: "Algae Facial Peel", description: "100% natural algae micro-spicules intensely support skin renewal and rejuvenation." },
    ar: { name: "تقشير الوجه بالطحالب", description: "إبر دقيقة طبيعية 100% من الطحالب تدعم تجدد البشرة ونضارتها بعمق." },
  },
  "algen-peeling-koerper": {
    en: { name: "Algae Body Peel", description: "Natural deep renewal to improve the look of pigmentation, stretch marks and uneven texture." },
    ar: { name: "تقشير الجسم بالطحالب", description: "تجدد طبيعي عميق لتحسين مظهر التصبغات وعلامات التمدد وتفاوت ملمس البشرة." },
  },
  "lymphdrainage-gesichtsmassage": {
    en: { name: "Lymphatic Facial Massage", description: "A gentle decongesting massage to define facial contours and reduce puffiness." },
    ar: { name: "تدليك الوجه لتصريف اللمف", description: "تدليك لطيف لتخفيف الانتفاخ وإبراز تحديد ملامح الوجه." },
  },
  "oxygeneo-glow-facial": {
    en: { name: "OxyGeneo Glow Facial", description: "Supports the skin's natural oxygenation for an immediate fresh, radiant look." },
    ar: { name: "علاج OxyGeneo لإشراقة الوجه", description: "يدعم الأكسجة الطبيعية للبشرة لمظهر منتعش ومشرق فوراً." },
  },
  "gesichtsstraffung": {
    en: { name: "Facial Firming", description: "A focused lifting technique to firm contours and revitalise the skin." },
    ar: { name: "شد الوجه", description: "تقنية رفع مركزة لشد الملامح وتنشيط البشرة." },
  },
  "red-carpet-behandlung": {
    en: { name: "Red Carpet Treatment", description: "A last-minute event-ready boost for a radiant look and visibly smoother skin." },
    ar: { name: "علاج السجادة الحمراء", description: "إشراقة سريعة قبل المناسبات ومظهر أكثر نعومة للبشرة." },
  },
  "anti-aging-behandlung": {
    en: { name: "Anti-Aging Treatment", description: "Revitalising active ingredients support skin firmness and target fine lines." },
    ar: { name: "علاج مضاد لعلامات التقدم في السن", description: "مكونات فعالة منشّطة تدعم تماسك البشرة وتعتني بالخطوط الدقيقة." },
  },
  "haende-spa": {
    en: { name: "Hand Spa", description: "A nourishing wrap and exfoliation for silky-soft, deeply cared-for hands." },
    ar: { name: "سبا اليدين", description: "قناع مغذٍ وتقشير ليدين ناعمتين بعناية مكثفة." },
  },
  "klassische-manikuere": {
    en: { name: "Classic Manicure", description: "Precise nail shaping, gentle cuticle care and a polished finish." },
    ar: { name: "مانيكير كلاسيكي", description: "تشكيل دقيق للأظافر وعناية لطيفة بالجلد المحيط ولمسة نهائية أنيقة." },
  },
  "mais-lumiere-mikrodermabrasion": {
    en: { name: "Mais Lumière Microdermabrasion", description: "A gentle diamond exfoliation removes dead skin cells and supports skin renewal." },
    ar: { name: "تقشير ماسي من Mais Lumière", description: "تقشير ماسي لطيف يزيل الخلايا الميتة ويدعم تجدد البشرة." },
  },
  "hydradermabrasion": {
    en: { name: "Hydradermabrasion", description: "Gentle pore cleansing paired with intensive water-based infusion of active ingredients." },
    ar: { name: "تقشير مائي", description: "تنظيف لطيف للمسام مع إدخال مكثف للمكونات الفعالة بتركيبة مائية." },
  },
  "ml-aquafacial-tiefenreinigung": {
    en: { name: "ML Aquafacial Deep Cleansing", description: "Vortex technology gently flushes sebum and build-up from the pores." },
    ar: { name: "تنظيف عميق بتقنية ML Aquafacial", description: "تقنية الدوامة تنظف المسام بلطف من الدهون والترسبات." },
  },
  "ml-aquafacial-fruchtsaeurepeeling": {
    en: { name: "ML Aquafacial & Fruit Acid Peel", description: "Aquafacial vacuum cleansing combined with fruit acids for extra-clear pores." },
    ar: { name: "ML Aquafacial وتقشير أحماض الفاكهة", description: "تنظيف بالشفط بتقنية Aquafacial مع أحماض الفاكهة لنقاء أعمق للمسام." },
  },
  "ml-aquafacial-microneedling": {
    en: { name: "ML Aquafacial & Microneedling", description: "A powerful pairing of deep pore cleansing and targeted collagen stimulation." },
    ar: { name: "ML Aquafacial والوخز بالإبر الدقيقة", description: "مزيج قوي من تنظيف المسام العميق وتحفيز الكولاجين بشكل موجه." },
  },
  "ml-microneedling-gesicht": {
    en: { name: "ML Facial Microneedling", description: "Ultra-fine needle impulses stimulate the skin's natural collagen and elastin production." },
    ar: { name: "الوخز الدقيق للوجه من ML", description: "نبضات إبر فائقة الدقة تحفز إنتاج الكولاجين والإيلاستين الطبيعي." },
  },
  "ml-microneedling-gesicht-hals": {
    en: { name: "ML Microneedling: Face & Neck", description: "Collagen stimulation for a more even-looking complexion on the face and delicate neck." },
    ar: { name: "الوخز الدقيق للوجه والرقبة من ML", description: "تحفيز الكولاجين لمظهر أكثر تجانساً للوجه ومنطقة الرقبة الحساسة." },
  },
  "ml-microneedling-gesicht-hals-dekollete": {
    en: { name: "ML Microneedling: Face, Neck & Décolleté", description: "A comprehensive firming treatment for the face, neck and décolleté." },
    ar: { name: "الوخز الدقيق للوجه والرقبة وأعلى الصدر من ML", description: "علاج شامل لشد الوجه والرقبة ومنطقة أعلى الصدر." },
  },
  "radiofrequenz-meets-microneedling": {
    en: { name: "Radiofrequency Meets Microneedling", description: "Thermal energy meets microneedling to firm deeper connective tissue layers." },
    ar: { name: "الترددات الراديوية مع الوخز الدقيق", description: "طاقة حرارية مع الوخز الدقيق لشد طبقات أعمق من النسيج الضام." },
  },
  "radiofrequenz-meets-hydrafacial": {
    en: { name: "Radiofrequency Meets Hydrafacial", description: "Thermal firming combined with intense hydration for a visible lifting effect." },
    ar: { name: "الترددات الراديوية مع Hydrafacial", description: "شد حراري مع ترطيب مكثف لإطلالة أكثر رفعاً." },
  },
  "dermapen-meets-hydrafacial": {
    en: { name: "Dermapen Meets Hydrafacial", description: "Enhanced active-ingredient absorption for refined-looking pores and supple skin." },
    ar: { name: "Dermapen مع Hydrafacial", description: "امتصاص معزز للمكونات الفعالة ومسام أكثر صفاءً وبشرة مرنة." },
  },
  "ml-bb-glow-augenringe": {
    en: { name: "ML BB Glow for Dark Circles", description: "Softly brightens dark circles and gives the eye area a fresh, rested look." },
    ar: { name: "ML BB Glow للهالات السوداء", description: "تفتيح لطيف للهالات الداكنة ومظهر مشرق لمنطقة العين." },
  },
  "mais-lumiere-bb-glow-gesicht": {
    en: { name: "Mais Lumière BB Glow Facial", description: "Natural pigments create a more even-looking complexion with a no-makeup look." },
    ar: { name: "BB Glow للوجه من Mais Lumière", description: "أصباغ طبيعية تمنح البشرة مظهراً متجانساً دون مكياج." },
  },
  "ml-bb-glow-gesicht-hals": {
    en: { name: "ML BB Glow: Face & Neck", description: "A seamless, silky glow from face to neck with no visible makeup lines." },
    ar: { name: "ML BB Glow للوجه والرقبة", description: "إشراقة حريرية متناسقة من الوجه إلى الرقبة دون خطوط مكياج ظاهرة." },
  },
  "premium-hautverjuengung-dreiklang": {
    en: { name: "Premium Skin-Rejuvenation Trio", description: "A premium ritual combining exfoliation, microneedling and a nutrient infusion." },
    ar: { name: "الثلاثي الفاخر لتجديد البشرة", description: "طقس فاخر يجمع التقشير والوخز الدقيق وحقن المغذيات." },
  },
  "1-1-klassische-wimpernverlaengerung": {
    en: { name: "Classic 1:1 Lash Extensions", description: "One fine silk lash per natural lash for a subtle mascara effect." },
    ar: { name: "وصلات رموش كلاسيكية 1:1", description: "رمش حريري رفيع لكل رمش طبيعي لمظهر ماسكارا ناعم." },
  },
  "1-1-lash-refill-2-wochen": {
    en: { name: "1:1 Lash Refill: 2 Weeks", description: "Refill and shape refinement to restore a dense look after 14 days." },
    ar: { name: "تعبئة رموش 1:1 بعد أسبوعين", description: "تعبئة وتحسين الشكل لاستعادة الكثافة بعد 14 يوماً." },
  },
  "1-1-lash-refill-3-wochen": {
    en: { name: "1:1 Lash Refill: 3 Weeks", description: "Precise refill of naturally shed lashes after three weeks." },
    ar: { name: "تعبئة رموش 1:1 بعد ثلاثة أسابيع", description: "تعبئة دقيقة للرموش المتساقطة طبيعياً بعد ثلاثة أسابيع." },
  },
  "1-1-lash-refill-4-wochen": {
    en: { name: "1:1 Lash Refill: 4 Weeks", description: "A complete refresh of your 1:1 set after four weeks of wear." },
    ar: { name: "تعبئة رموش 1:1 بعد أربعة أسابيع", description: "تجديد كامل لمجموعة 1:1 بعد أربعة أسابيع من الاستخدام." },
  },
  "volumen-lashextension-2d-5d": {
    en: { name: "2D–5D Volume Lash Extensions", description: "Delicate, handmade lash fans for visibly fuller, denser lashes." },
    ar: { name: "وصلات رموش كثيفة 2D–5D", description: "مراوح رموش يدوية ناعمة لكثافة وامتلاء ملحوظين." },
  },
  "volumen-refill-2-wochen": {
    en: { name: "Volume Refill: 2 Weeks", description: "Fill small gaps and refresh your lash fans after two weeks." },
    ar: { name: "تعبئة الرموش الكثيفة بعد أسبوعين", description: "سد الفراغات الصغيرة وتجديد مراوح الرموش بعد أسبوعين." },
  },
  "volumen-refill-3-wochen": {
    en: { name: "Volume Refill: 3 Weeks", description: "Correct and refill your dense volume set after three weeks." },
    ar: { name: "تعبئة الرموش الكثيفة بعد ثلاثة أسابيع", description: "تصحيح وتعبئة مجموعة الرموش الكثيفة بعد ثلاثة أسابيع." },
  },
  "volumen-refill-4-wochen": {
    en: { name: "Volume Refill: 4 Weeks", description: "A full refill for even, beautifully full volume after four weeks." },
    ar: { name: "تعبئة الرموش الكثيفة بعد أربعة أسابيع", description: "تعبئة كاملة لاستعادة كثافة متجانسة وجميلة بعد أربعة أسابيع." },
  },
  "maxx-mega-volume-lashextension": {
    en: { name: "Maxx Mega Volume Lash Extensions", description: "A dramatic, deep-black look with feather-light ultra fans." },
    ar: { name: "وصلات رموش Maxx Mega Volume", description: "مظهر أسود كثيف ودرامي مع مراوح فائقة الخفة." },
  },
  "maxx-volume-refill-2-wochen": {
    en: { name: "Maxx Volume Refill: 2 Weeks", description: "A quick refill to maintain dramatic volume after two weeks." },
    ar: { name: "تعبئة Maxx Volume بعد أسبوعين", description: "تعبئة سريعة للحفاظ على كثافة لافتة بعد أسبوعين." },
  },
  "maxx-volume-refill-3-wochen": {
    en: { name: "Maxx Volume Refill: 3 Weeks", description: "Intensive care and refill for your mega-volume set after three weeks." },
    ar: { name: "تعبئة Maxx Volume بعد ثلاثة أسابيع", description: "عناية مكثفة وتعبئة لمجموعة الحجم الكبير بعد ثلاثة أسابيع." },
  },
  "maxx-volume-refill-4-wochen": {
    en: { name: "Maxx Volume Refill: 4 Weeks", description: "A complete refresh of the deep-black smoky lash effect after four weeks." },
    ar: { name: "تعبئة Maxx Volume بعد أربعة أسابيع", description: "استعادة كاملة لمظهر الرموش الدخاني الأسود بعد أربعة أسابيع." },
  },
  "wimpern-faerben": {
    en: { name: "Eyelash Tinting", description: "A rich, smudge-resistant tint for dark, glossy lashes without mascara." },
    ar: { name: "صبغ الرموش", description: "صبغة غنية مقاومة للتلطخ لرموش داكنة ولامعة دون ماسكارا." },
  },
  "augenbrauen-faerben": {
    en: { name: "Eyebrow Tinting", description: "A shade tailored to you for brows that look fuller and beautifully balanced." },
    ar: { name: "صبغ الحواجب", description: "لون مناسب لإطلالتك لحواجب تبدو أكثر كثافة وتناسقاً." },
  },
  "augenbrauen-wimpern-faerben": {
    en: { name: "Eyebrow & Eyelash Tinting", description: "The perfect combination for a fresh, expressive look every morning." },
    ar: { name: "صبغ الحواجب والرموش", description: "مزيج مثالي لإطلالة منعشة ومعبرة كل صباح." },
  },
  "augenbrauen-forming": {
    en: { name: "Eyebrow Shaping", description: "Precise tweezing and shaping to complement your natural facial structure." },
    ar: { name: "تشكيل الحواجب", description: "نتف وتشكيل دقيق ينسجم مع بنية الوجه الطبيعية." },
  },
  "ml-koreanisches-brow-lifting": {
    en: { name: "ML Korean Brow Lift & Tint", description: "Lamination sets unruly brow hairs into a fuller, brushed-up shape." },
    ar: { name: "رفع الحواجب الكوري من ML مع صبغ", description: "ترتيب شعيرات الحاجب وتثبيتها لإطلالة ممتلئة ومرفوعة." },
  },
  "ml-koreanisches-lash-lifting": {
    en: { name: "ML Korean Lash Lift & Tint", description: "A gentle lift from the lash root for lasting curl without an eyelash curler." },
    ar: { name: "رفع الرموش الكوري من ML مع صبغ", description: "رفع لطيف من جذور الرموش لمنحها انحناءة تدوم دون أداة تجعيد." },
  },
  "luxus-koreanisches-brow-lash-lifting": {
    en: { name: "Luxury Korean Brow & Lash Lift", description: "A complete brow and lash lift with deep-conditioning keratin care." },
    ar: { name: "رفع فاخر كوري للحواجب والرموش", description: "رفع متكامل للحواجب والرموش مع عناية عميقة بالكيراتين." },
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (german: string) => string;
  treatment: (id: string, name: string, description?: string) => TreatmentCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const LANGUAGE_STORAGE_KEY = "mais-lumiere-language";
const LANGUAGE_CHANGE_EVENT = "mais-lumiere-language-change";

function getStoredLanguage(): Language {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return savedLanguage === "en" || savedLanguage === "ar" ? savedLanguage : "de";
}

function subscribeToLanguage(onChange: () => void) {
  window.addEventListener("storage", onChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onChange);

  return () => {
    window.removeEventListener("storage", onChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onChange);
  };
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore<Language>(
    subscribeToLanguage,
    getStoredLanguage,
    () => "de",
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage: (nextLanguage) => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
        window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
      },
      t: (german) => language === "de" ? german : UI_TRANSLATIONS[german]?.[language] ?? german,
      treatment: (id, name, description = "") =>
        language === "de"
          ? { name, description }
          : TREATMENT_TRANSLATIONS[id]?.[language] ?? { name, description },
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  const options: { id: Language; label: string; name: string }[] = [
    { id: "de", label: "DE", name: "Deutsch" },
    { id: "en", label: "EN", name: "English" },
    { id: "ar", label: "AR", name: "العربية" },
  ];

  return (
    <div className={`flex items-center gap-1 ${className}`} role="group" aria-label={t("Sprache auswählen")}>
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          lang={option.id}
          aria-label={option.name}
          aria-pressed={language === option.id}
          onClick={() => setLanguage(option.id)}
          className={`rounded-full px-2 py-1 text-[11px] font-semibold transition-colors ${
            language === option.id
              ? "bg-[#D4AF37]/15 text-[#D4AF37]"
              : "text-neutral-400 hover:text-white"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
