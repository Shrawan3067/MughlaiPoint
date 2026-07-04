import { useMenuSelection } from "@/lib/menu-context";
import chicken from "@/assets/chicken-biryani.jpg";
import mutton from "@/assets/mutton-biryani.jpg";
import veg from "@/assets/veg-biryani.jpg";
import kebab from "@/assets/chicken-kebab.jpg";
import raita from "@/assets/raita.jpg";
import salad from "@/assets/salad.jpg";
import gulab from "@/assets/gulab-jamun.jpg";
import drink from "@/assets/soft-drink.jpg";

type Item = {
  name: string;
  desc: string;
  price: string;
  img: string;
};

const items: Item[] = [
  {
    name: "Chicken Biryani",
    desc: "Aromatic basmati rice cooked with tender chicken and royal Mughlai spices.",
    price: "₹249",
    img: chicken,
  },
  {
    name: "Mutton Biryani",
    desc: "Flavorful mutton pieces cooked slow with basmati rice and rich spices.",
    price: "₹349",
    img: mutton,
  },
  {
    name: "Veg Biryani",
    desc: "A delightful blend of vegetables, fragrant rice and traditional Mughlai spices.",
    price: "₹199",
    img: veg,
  },
  {
    name: "Chicken Kebab (6pcs)",
    desc: "Juicy and smoky chicken kebabs marinated in authentic spices.",
    price: "₹179",
    img: kebab,
  },
  {
    name: "Raita",
    desc: "Cooling yogurt with fresh cucumber, onion & spices.",
    price: "₹59",
    img: raita,
  },
  {
    name: "Salad",
    desc: "Fresh salad with onion, cucumber, carrot & lemon.",
    price: "₹49",
    img: salad,
  },
  {
    name: "Gulab Jamun (2pcs)",
    desc: "Soft, sweet & juicy gulab jamun to complete your meal.",
    price: "₹69",
    img: gulab,
  },
  {
    name: "Soft Drink (250ml)",
    desc: "Refreshing soft drink to pair with your meal.",
    price: "₹49",
    img: drink,
  },
];

export function MenuSection() {
  const { selectedItem, setSelectedItem } = useMenuSelection();

  return (
    <section id="menu" className="relative py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
              Our Menu
            </span>
            <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="mt-4 font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Biryani &amp; More
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted-foreground)] sm:text-base">
            Handcrafted with traditional recipes and the finest ingredients.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <article
              key={item.name}
              onClick={() => setSelectedItem(item.name)}
              className={`card-luxury card-luxury-hover overflow-hidden p-3 sm:p-4 cursor-pointer transition-all ${
                selectedItem === item.name
                  ? "ring-2 ring-gold ring-offset-2 ring-offset-[#0B0A08]"
                  : ""
              }`}
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="mt-3 sm:mt-4 text-center">
                <h3 className="font-display text-base sm:text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted-foreground)]">
                  {item.desc}
                </p>
                <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-gold">
                  {item.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
