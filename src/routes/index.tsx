import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/Menu";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { MenuProvider } from "@/lib/menu-context";
import { useMenuSelection } from "@/lib/menu-context";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Mughlai Point Biryani",
          description:
            "Authentic Mughlai biryani made with premium spices and long grain basmati rice.",
          servesCuisine: ["Mughlai", "Indian", "Biryani"],
          priceRange: "₹₹",
          telephone: "+91 98765 43210",
          address: {
            "@type": "PostalAddress",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <MenuProvider>
      <IndexContent />
    </MenuProvider>
  );
}

function IndexContent() {
  const { selectedItem } = useMenuSelection();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <CtaBanner />
      </main>
      <Footer />

      {/* Sticky mobile WhatsApp */}
      <div className="fixed bottom-4 right-4 z-40 lg:hidden">
        <WhatsAppButton size="md" label="Order" selectedItem={selectedItem} />
      </div>
    </div>
  );
}
