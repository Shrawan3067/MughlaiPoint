import { motion } from "motion/react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

function WaIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.86.508 3.6 1.393 5.096L2 22l5.03-1.32A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
    </svg>
  );
}

export function WhatsAppButton({
  size = "md",
  label = "Order on WhatsApp",
  className = "",
  selectedItem = null,
}: {
  size?: "sm" | "md" | "lg";
  label?: string;
  className?: string;
  selectedItem?: string | null;
}) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-4 text-sm sm:text-base",
  } as const;
  const iconSize = size === "lg" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-4 w-4 sm:h-5 sm:w-5";
  const whatsappUrl = getWhatsAppUrl(selectedItem);

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase tracking-wider text-white shadow-lg shadow-emerald-900/40 transition-colors ${sizes[size]} ${className}`}
      style={{ backgroundColor: "var(--whatsapp)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--whatsapp-hover)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.backgroundColor = "var(--whatsapp)")
      }
    >
      <WaIcon className={iconSize} />
      <span>{label}</span>
    </motion.a>
  );
}

export { WaIcon };
