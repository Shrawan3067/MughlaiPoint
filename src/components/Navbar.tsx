import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { WhatsAppButton } from "./WhatsAppButton";

const links = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5">
        <a href="#home" aria-label="Mughlai Point Biryani home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-6 sm:gap-8 lg:flex" aria-label="Primary">
          {links.map((l) => {
            const isActive = active === l.href;
            return (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setActive(l.href)}
                className={`relative text-xs sm:text-sm font-medium ${
                  isActive ? "text-white" : "text-white/80 hover:text-white"
                }`}
              >
                {l.label}
                {isActive && (
                  <span className="absolute -bottom-1.5 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-gold" />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <WhatsAppButton size="md" />
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-5 sm:py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => {
                  setActive(l.href);
                  setOpen(false);
                }}
                className="rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <div className="pt-2">
              <WhatsAppButton size="md" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
