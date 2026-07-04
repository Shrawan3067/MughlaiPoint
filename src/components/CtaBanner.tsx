import { WaIcon, WhatsAppButton } from "./WhatsAppButton";
import { useMenuSelection } from "@/lib/menu-context";

export function CtaBanner() {
  const { selectedItem } = useMenuSelection();

  return (
    <section id="about" className="px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-2xl border p-4 sm:p-6 lg:p-8"
        style={{
          background:
            "linear-gradient(135deg, #3a1e10 0%, #2a1408 50%, #3a1e10 100%)",
          borderColor: "rgba(200,155,60,0.35)",
        }}
      >
        <div className="flex flex-col items-start justify-between gap-4 sm:gap-6 sm:flex-row sm:items-center">
          <div className="flex items-center gap-4 sm:gap-5">
            <div
              className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full"
              style={{ background: "rgba(200,155,60,0.85)" }}
            >
              <WaIcon className="h-6 w-6 sm:h-7 sm:w-7 text-[#2a1408]" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-semibold text-white">
                Ready to Order?
              </h3>
              <p className="mt-1 max-w-md text-xs sm:text-sm text-white/75">
                Chat with us on WhatsApp and place your order in just a few
                seconds.
              </p>
            </div>
          </div>
          <WhatsAppButton size="lg" label="Order on WhatsApp" selectedItem={selectedItem} />
        </div>
      </div>
    </section>
  );
}
