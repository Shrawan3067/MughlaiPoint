import { motion } from "motion/react";
import { WaIcon, WhatsAppButton } from "./WhatsAppButton";

export function CtaBanner() {
  return (
    <section id="about" className="px-5 pb-16 sm:px-8 sm:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl overflow-hidden rounded-2xl border p-6 sm:p-8"
        style={{
          background:
            "linear-gradient(135deg, #3a1e10 0%, #2a1408 50%, #3a1e10 100%)",
          borderColor: "rgba(200,155,60,0.35)",
        }}
      >
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full"
              style={{ background: "rgba(200,155,60,0.85)" }}
            >
              <WaIcon className="h-7 w-7 text-[#2a1408]" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                Ready to Order?
              </h3>
              <p className="mt-1 max-w-md text-sm text-white/75">
                Chat with us on WhatsApp and place your order in just a few
                seconds.
              </p>
            </div>
          </div>
          <WhatsAppButton size="lg" label="Order on WhatsApp" />
        </div>
      </motion.div>
    </section>
  );
}
