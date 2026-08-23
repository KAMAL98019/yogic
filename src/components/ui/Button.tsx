import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "link";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-soft focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const variants: Record<string, string> = {
  primary:
    "rounded-full px-7 py-3.5 text-sm sm:text-base bg-maroon text-cream hover:bg-maroon-bright shadow-[0_8px_24px_-8px_rgba(125,34,34,0.55)] hover:-translate-y-0.5",
  secondary:
    "rounded-full px-7 py-3.5 text-sm sm:text-base border border-gold-soft text-cream hover:border-gold hover:bg-gold-dim hover:-translate-y-0.5",
  ghost:
    "rounded-full px-7 py-3.5 text-sm sm:text-base border border-cream/25 text-cream hover:bg-cream/10 hover:-translate-y-0.5",
  link:
    "text-xs sm:text-sm tracking-[0.2em] uppercase text-gold border-b border-gold-soft pb-1 hover:border-gold hover:text-cream",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me");
  const cls = `${base} ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} className={cls} target={href.startsWith("tel:") ? undefined : "_blank"} rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
