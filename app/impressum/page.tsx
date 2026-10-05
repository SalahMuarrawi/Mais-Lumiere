import { SITE } from "@/lib/data";
import { ImprintContent } from "@/components/LegalPages";

export const metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${SITE.name}, Graz.`,
};

export default function ImpressumPage() {
  return <ImprintContent />;
}
