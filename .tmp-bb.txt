import Link from "next/link";
import { SITE } from "@/lib/data";

type BookingButtonProps = {
  variant?: "solid" | "light" | "ghost";
  size?: "md" | "lg";
  label?: string;
  className?: string;
};

const styles: Record<string, string> = {
  solid:
    "bg-gold text-white hover:bg-gold-dark shadow-[0_10px_30px_-10px_rgba(176,141,87,0.7)]",
  light:
    "bg-white text-ink hover:bg-linen shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)]",
  ghost:
    "border border-white/60 text-white hover:bg-white hover:text-ink",
};

export default function BookingButton({
  variant = "solid",
  size = "md",
  label = "Termin buchen",
  className = "",
}: BookingButtonProps) {
  const sizeClasses =
    size === "lg"
      ? "px-8 py-4 text-base tracking-[0.18em]"
      : "px-6 py-3 text-sm tracking-[0.15em]";

  return (
    <a
      href={SITE.bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium uppercase transition-colors duration-300 ${sizeClasses} ${styles[variant]} ${className}`}
    >
      {label}
      <span aria-hidden className="text-base leading-none">
        →
      </span>
    </a>
  );
}

export function BookingLink({ className = "" }: { className?: string }) {
  return (
    <Link href={SITE.bookingUrl} className={className} target="_blank" rel="noopener noreferrer">
      Termin buchen
    </Link>
  );
}
