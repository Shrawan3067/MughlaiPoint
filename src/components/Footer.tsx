import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { Logo } from "./Logo";
import { WaIcon } from "./WhatsAppButton";
import { PHONE_DISPLAY, getWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
        </div>

        <div>
          <h4 className="mb-3 sm:mb-4 font-display text-base sm:text-lg font-semibold text-white">
            Quick Links
          </h4>
          <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[color:var(--muted-foreground)]">
            {[
              ["Home", "#home"],
              ["Menu", "#menu"],
              ["About", "#about"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-gold">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 sm:mb-4 font-display text-base sm:text-lg font-semibold text-white">
            Contact Us
          </h4>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[color:var(--muted-foreground)]">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
            </li>
            <li>
              <a
                href={getWhatsAppUrl(null)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold"
              >
                <WaIcon className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gold" /> Your City, India
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 sm:mb-4 font-display text-base sm:text-lg font-semibold text-white">
            Follow Us
          </h4>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white"
              style={{
                background:
                  "linear-gradient(135deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)",
              }}
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#1877F2] text-white"
            >
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-[color:var(--muted-foreground)] sm:px-6 sm:py-5 lg:px-8">
          © 2026 Mughlai Point Biryani. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
