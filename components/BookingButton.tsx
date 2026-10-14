"use client";

import Link from "next/link";
import { SITE } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";

type BookingButtonProps = {
  variant?: "solid" | "light" | "ghost";
  size?: "md" | "lg";
  label?: string;
  className?: string;
};

const styles: Record<string, string> = {
  solid:
    "bg-gold text-cream hover:bg-gold-dark shadow-[0_10px_30px_-10px_rgba(212,175,55,0.45)]",
  light:
    "bg-ink text-cream hover:bg-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)]",
  ghost:
    "border border-white/60 text-white hover:bg-white hover:text-cream",
};

export default function BookingButton({
  variant = "solid",
  size = "md",
  label,
  className = "",
}: BookingButtonProps) {
  const { t } = useLanguage();
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-base tracking-[0.18em]"
      : "px-6 py-3 text-sm tracking-[0.15em]";

  return (
    <a
      href={SITE.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase transition-[color,background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-light ${sizeClasses} ${styles[variant]} ${className}`}
    >
      {t(label ?? "Termin buchen")}
      <span aria-hidden className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none">
        →
      </span>
    </a>
  );
}

export function BookingLink({ className = "" }: { className?: string }) {
  const { t } = useLanguage();
  return (
    <Link href={SITE.bookingUrl} className={className} target="_blank" rel="noopener noreferrer">
      {t("Termin buchen")}
    </Link>
  );
}
