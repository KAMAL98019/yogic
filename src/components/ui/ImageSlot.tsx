import Image from "next/image";
import { LeafIcon } from "../decor/Icons";

type ImageSlotProps = {
  src: string | null;
  alt: string;
  label?: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * Renders a real photo when `src` is provided, otherwise an elegant
 * placeholder in the site's palette so layout/spacing stays final while
 * photography is pending. See `src/lib/media.ts` to wire up real images.
 */
export default function ImageSlot({
  src,
  alt,
  label,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}: ImageSlotProps) {
  return (
    <div className={`relative overflow-hidden bg-ink-raised ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={`object-cover ${imgClassName}`}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-ink-raised via-ink to-ink-card text-gold-soft">
          <LeafIcon className="w-10 h-10 sm:w-12 sm:h-12 opacity-60" />
          {label && (
            <span className="px-4 text-center text-xs sm:text-sm font-medium tracking-wide text-cream-faint">
              {label}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
