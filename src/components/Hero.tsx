import { motion } from "motion/react";
import { Soup, Leaf, Bike } from "lucide-react";
import heroImg from "@/assets/hero-biryani.jpg";
import { WhatsAppButton } from "./WhatsAppButton";

const features = [
  { icon: Soup, title: "Authentic", subtitle: "Mughlai Taste" },
  { icon: Leaf, title: "Premium", subtitle: "Ingredients" },
  { icon: Bike, title: "Fast & Safe", subtitle: "Delivery" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Background vignette */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 70% 40%, rgba(200,155,60,0.10), transparent 55%), radial-gradient(ellipse at 20% 90%, rgba(0,0,0,0.6), transparent 60%)",
        }}
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-6 flex items-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
              Authentic Flavors. Royal Experience.
            </span>
            <span className="rotate-45 inline-block h-1.5 w-1.5 bg-gold/70" />
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-[5rem]">
            <span className="text-white">Mughlai Point</span>
            <br />
            <span className="text-gold italic">Biryani</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)] sm:text-lg">
            Experience the rich, royal taste of authentic Mughlai Biryani
            delivered fresh to your doorstep.
          </p>

          <div className="mt-8 flex flex-wrap gap-8 sm:gap-10">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col items-start">
                <div className="mb-2 flex h-10 w-10 items-center justify-center text-gold">
                  <f.icon className="h-7 w-7" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-medium leading-snug text-white/90">
                  {f.title}
                  <br />
                  {f.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <WhatsAppButton size="lg" label="Order on WhatsApp" />
            <p className="mt-3 text-xs text-[color:var(--muted-foreground)]">
              Chat with us on WhatsApp to place your order
            </p>
          </div>
        </motion.div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-square w-full overflow-hidden">
            <img
              src={heroImg}
              alt="Authentic Mughlai chicken biryani in a copper handi"
              width={1280}
              height={1280}
              fetchPriority="high"
              className="h-full w-full object-cover"
            />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 40%, rgba(11,10,8,0.55) 90%)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
