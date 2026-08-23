import {
  Sparkles,
  User,
  Heart,
  Leaf,
  Calendar,
  HeartHandshake,
  Sun,
  Clock,
  Star,
  Award,
  Phone,
} from "lucide-react";
import Reveal from "./Reveal";

function EyebrowIcon({ label, className }: { label: string; className?: string }) {
  const l = label.toLowerCase();
  const props = { className, strokeWidth: 2.25 };

  if (l.includes("founder")) return <User {...props} />;
  if (l.includes("philosophy") || l.includes("healing")) return <Heart {...props} />;
  if (l.includes("health") || l.includes("wellness")) return <Sparkles {...props} />;
  if (l.includes("eight limbs")) return <Leaf {...props} />;
  if (l.includes("21-day") || l.includes("journey")) return <Calendar {...props} />;
  if (l.includes("offer") || l.includes("service")) return <HeartHandshake {...props} />;
  if (l.includes("everyday") || l.includes("living")) return <Sun {...props} />;
  if (l.includes("daily") || l.includes("rhythm")) return <Clock {...props} />;
  if (l.includes("touch") || l.includes("contact")) return <Phone {...props} />;
  if (l.includes("matters") || l.includes("why")) return <Star {...props} />;
  if (l.includes("recognition") || l.includes("award")) return <Award {...props} />;
  return <Sparkles {...props} />;
}

export default function Eyebrow({
  label,
  align = "left",
  className = "",
}: {
  label: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={`flex items-center gap-3 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-soft text-gold">
        <EyebrowIcon label={label} className="h-3 w-3" />
      </span>
      <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase text-gold">
        {label}
      </span>
    </Reveal>
  );
}
