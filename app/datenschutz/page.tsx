import { SITE } from "@/lib/data";
import { PrivacyContent } from "@/components/LegalPages";

export const metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${SITE.name}, Graz.`,
};

export default function DatenschutzPage() {
  return <PrivacyContent />;
}
