import { motion } from "motion/react";
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
  return (
    <section id="menu" className="relative py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-3 text-gold">
            <span className="h-px w-8 bg-gold/60" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.24em]">
              Our Menu
            </span>
            <span className="h-px w-8 bg-gold/60" />
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold text-white sm:text-5xl">
            Biryani &amp; More
          </h2>
          <p className="mt-3 text-sm text-[color:var(--muted-foreground)] sm:text-base">
            Handcrafted with traditional recipes and the finest ingredients.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              className="card-luxury card-luxury-hover overflow-hidden p-4"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.img}
                  alt={item.name}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[color:var(--muted-foreground)]">
                  {item.desc}
                </p>
                <p className="mt-3 text-lg font-semibold text-gold">
                  {item.price}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
