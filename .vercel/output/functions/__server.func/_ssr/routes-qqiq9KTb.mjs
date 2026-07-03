import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { n as useMenuSelection } from "./menu-context-CGXQ0n5N.mjs";
import { a as MapPin, c as Facebook, i as Menu, l as Bike, n as Soup, o as Leaf, r as Phone, s as Instagram, t as X } from "../_libs/lucide-react.mjs";
import { t as motion } from "../_libs/motion.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-qqiq9KTb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex items-center gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			width: "44",
			height: "52",
			viewBox: "0 0 44 52",
			fill: "none",
			"aria-hidden": "true",
			className: "shrink-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22 4 L22 8",
					stroke: "#C89B3C",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "22",
					cy: "3",
					r: "1.2",
					fill: "#C89B3C"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M6 22 C 6 13, 13 8, 22 8 C 31 8, 38 13, 38 22 L 38 24 L 6 24 Z",
					stroke: "#C89B3C",
					strokeWidth: "1.5",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
					x: "8",
					y: "24",
					width: "28",
					height: "22",
					stroke: "#C89B3C",
					strokeWidth: "1.5",
					fill: "none"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M22 30 C 20 33, 20 36, 22 38 C 24 36, 24 33, 22 30 Z",
					fill: "#C89B3C"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M18 46 L26 46",
					stroke: "#C89B3C",
					strokeWidth: "1.5",
					strokeLinecap: "round"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col leading-tight",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-[10px] font-medium tracking-[0.22em] text-gold",
				children: "MUGHALAI POINT"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl font-bold tracking-wide text-gold",
				children: "BIRYANI"
			})]
		})]
	});
}
var PHONE_NUMBER = "918360705978";
var PHONE_DISPLAY = "+91 83607 05978";
function getWhatsAppUrl(selectedItem) {
	const baseUrl = `https://wa.me/${PHONE_NUMBER}`;
	const defaultMessage = "Hi Mughlai Point Biryani, I want to place an order.";
	if (selectedItem) return `${baseUrl}?text=${`Hi Mughlai Point Biryani, I want ${encodeURIComponent(selectedItem)}`}`;
	return `${baseUrl}?text=${encodeURIComponent(defaultMessage)}`;
}
var WHATSAPP_URL = getWhatsAppUrl(null);
function WaIcon({ className = "h-5 w-5" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
		viewBox: "0 0 24 24",
		fill: "currentColor",
		className,
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.174.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.019-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 2C6.477 2 2 6.477 2 12c0 1.86.508 3.6 1.393 5.096L2 22l5.03-1.32A9.955 9.955 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" })
	});
}
function WhatsAppButton({ size = "md", label = "Order on WhatsApp", className = "", selectedItem = null }) {
	const sizes = {
		sm: "px-4 py-2 text-xs",
		md: "px-5 py-2.5 text-sm",
		lg: "px-7 py-4 text-sm sm:text-base"
	};
	const iconSize = size === "lg" ? "h-5 w-5 sm:h-6 sm:w-6" : "h-4 w-4 sm:h-5 sm:w-5";
	const whatsappUrl = getWhatsAppUrl(selectedItem);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
		href: whatsappUrl,
		target: "_blank",
		rel: "noopener noreferrer",
		whileHover: { scale: 1.03 },
		whileTap: { scale: .97 },
		className: `inline-flex items-center justify-center gap-2.5 rounded-full font-semibold uppercase tracking-wider text-white shadow-lg shadow-emerald-900/40 transition-colors ${sizes[size]} ${className}`,
		style: { backgroundColor: "var(--whatsapp)" },
		onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "var(--whatsapp-hover)",
		onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "var(--whatsapp)",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaIcon, { className: iconSize }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label })]
	});
}
var links = [
	{
		label: "Home",
		href: "#home"
	},
	{
		label: "Menu",
		href: "#menu"
	},
	{
		label: "About Us",
		href: "#about"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Navbar() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("#home");
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 20);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "backdrop-blur-xl bg-background/80 border-b border-border" : "bg-transparent"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 sm:py-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#home",
					"aria-label": "Mughlai Point Biryani home",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-9 lg:flex",
					"aria-label": "Primary",
					children: links.map((l) => {
						const isActive = active === l.href;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: l.href,
							onClick: () => setActive(l.href),
							className: `relative text-sm font-medium transition-colors ${isActive ? "text-white" : "text-white/80 hover:text-white"}`,
							children: [l.label, isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute -bottom-1.5 left-1/2 h-[2px] w-6 -translate-x-1/2 rounded-full bg-gold" })]
						}, l.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, { size: "md" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "lg:hidden text-white p-2",
					onClick: () => setOpen((v) => !v),
					"aria-label": "Toggle menu",
					"aria-expanded": open,
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-6 w-6" })
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "lg:hidden border-t border-border bg-background/95 backdrop-blur-xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4",
				children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: l.href,
					onClick: () => {
						setActive(l.href);
						setOpen(false);
					},
					className: "rounded-lg px-3 py-3 text-sm font-medium text-white/90 hover:bg-white/5",
					children: l.label
				}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pt-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
						size: "md",
						className: "w-full"
					})
				})]
			})
		})]
	});
}
var hero_biryani_default = "/assets/hero-biryani-Buj-14yh.jpg";
var features = [
	{
		icon: Soup,
		title: "Authentic",
		subtitle: "Mughlai Taste"
	},
	{
		icon: Leaf,
		title: "Premium",
		subtitle: "Ingredients"
	},
	{
		icon: Bike,
		title: "Fast & Safe",
		subtitle: "Delivery"
	}
];
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			style: { background: "radial-gradient(ellipse at 70% 40%, rgba(200,155,60,0.10), transparent 55%), radial-gradient(ellipse at 20% 90%, rgba(0,0,0,0.6), transparent 60%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					x: -30
				},
				animate: {
					opacity: 1,
					x: 0
				},
				transition: {
					duration: .7,
					ease: "easeOut"
				},
				className: "relative z-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center gap-3 text-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold uppercase tracking-[0.24em]",
								children: "Authentic Flavors. Royal Experience."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rotate-45 inline-block h-1.5 w-1.5 bg-gold/70" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-[5rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white",
								children: "Mughlai Point"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold italic",
								children: "Biryani"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-md text-base leading-relaxed text-[color:var(--muted-foreground)] sm:text-lg",
						children: "Experience the rich, royal taste of authentic Mughlai Biryani delivered fresh to your doorstep."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 flex flex-wrap gap-8 sm:gap-10",
						children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-2 flex h-10 w-10 items-center justify-center text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
									className: "h-7 w-7",
									strokeWidth: 1.5
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-xs font-medium leading-snug text-white/90",
								children: [
									f.title,
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									f.subtitle
								]
							})]
						}, f.title))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
							size: "lg",
							label: "Order on WhatsApp"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-xs text-[color:var(--muted-foreground)]",
							children: "Chat with us on WhatsApp to place your order"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				initial: {
					opacity: 0,
					scale: .94
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				transition: {
					duration: .9,
					ease: "easeOut"
				},
				className: "relative",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-square w-full overflow-hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_biryani_default,
						alt: "Authentic Mughlai chicken biryani in a copper handi",
						width: 1280,
						height: 1280,
						fetchPriority: "high",
						className: "h-full w-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0",
						style: { background: "radial-gradient(ellipse at center, transparent 40%, rgba(11,10,8,0.55) 90%)" }
					})]
				})
			})]
		})]
	});
}
var items = [
	{
		name: "Chicken Biryani",
		desc: "Aromatic basmati rice cooked with tender chicken and royal Mughlai spices.",
		price: "₹249",
		img: "/assets/chicken-biryani-BZ87swsK.jpg"
	},
	{
		name: "Mutton Biryani",
		desc: "Flavorful mutton pieces cooked slow with basmati rice and rich spices.",
		price: "₹349",
		img: "/assets/mutton-biryani-zHOkBirA.jpg"
	},
	{
		name: "Veg Biryani",
		desc: "A delightful blend of vegetables, fragrant rice and traditional Mughlai spices.",
		price: "₹199",
		img: "/assets/veg-biryani-DA5OB4K0.jpg"
	},
	{
		name: "Chicken Kebab (6pcs)",
		desc: "Juicy and smoky chicken kebabs marinated in authentic spices.",
		price: "₹179",
		img: "/assets/chicken-kebab-BTNhZATT.jpg"
	},
	{
		name: "Raita",
		desc: "Cooling yogurt with fresh cucumber, onion & spices.",
		price: "₹59",
		img: "/assets/raita-C_wwzylU.jpg"
	},
	{
		name: "Salad",
		desc: "Fresh salad with onion, cucumber, carrot & lemon.",
		price: "₹49",
		img: "/assets/salad-tRRqXUyi.jpg"
	},
	{
		name: "Gulab Jamun (2pcs)",
		desc: "Soft, sweet & juicy gulab jamun to complete your meal.",
		price: "₹69",
		img: "/assets/gulab-jamun-Dr9paTDh.jpg"
	},
	{
		name: "Soft Drink (250ml)",
		desc: "Refreshing soft drink to pair with your meal.",
		price: "₹49",
		img: "/assets/soft-drink-De6S0Kui.jpg"
	}
];
function MenuSection() {
	const { selectedItem, setSelectedItem } = useMenuSelection();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "menu",
		className: "relative py-16 sm:py-20 lg:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				initial: {
					opacity: 0,
					y: 20
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				transition: { duration: .6 },
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-3 text-gold",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/60" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] font-semibold uppercase tracking-[0.24em]",
								children: "Our Menu"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-8 bg-gold/60" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-display text-4xl font-bold text-white sm:text-5xl",
						children: "Biryani & More"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-[color:var(--muted-foreground)] sm:text-base",
						children: "Handcrafted with traditional recipes and the finest ingredients."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: i % 4 * .06
					},
					onClick: () => setSelectedItem(item.name),
					className: `card-luxury card-luxury-hover overflow-hidden p-4 cursor-pointer transition-all ${selectedItem === item.name ? "ring-2 ring-gold ring-offset-2 ring-offset-[#0B0A08]" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: item.img,
							alt: item.name,
							width: 640,
							height: 640,
							loading: "lazy",
							className: "aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-lg font-semibold text-white",
								children: item.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-xs leading-relaxed text-[color:var(--muted-foreground)]",
								children: item.desc
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-lg font-semibold text-gold",
								children: item.price
							})
						]
					})]
				}, item.name))
			})]
		})
	});
}
function CtaBanner() {
	const { selectedItem } = useMenuSelection();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "px-5 pb-16 sm:px-8 sm:pb-20",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				opacity: 0,
				y: 20
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			transition: { duration: .6 },
			className: "mx-auto max-w-7xl overflow-hidden rounded-2xl border p-6 sm:p-8",
			style: {
				background: "linear-gradient(135deg, #3a1e10 0%, #2a1408 50%, #3a1e10 100%)",
				borderColor: "rgba(200,155,60,0.35)"
			},
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-14 w-14 shrink-0 items-center justify-center rounded-full",
						style: { background: "rgba(200,155,60,0.85)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaIcon, { className: "h-7 w-7 text-[#2a1408]" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl font-semibold text-white sm:text-3xl",
						children: "Ready to Order?"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-md text-sm text-white/75",
						children: "Chat with us on WhatsApp and place your order in just a few seconds."
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
					size: "lg",
					label: "Order on WhatsApp",
					selectedItem
				})]
			})
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		id: "contact",
		className: "border-t border-border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-14 sm:px-8 md:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}) }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-4 font-display text-lg font-semibold text-white",
					children: "Quick Links"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2 text-sm text-[color:var(--muted-foreground)]",
					children: [
						["Home", "#home"],
						["Menu", "#menu"],
						["About", "#about"],
						["Contact", "#contact"]
					].map(([l, h]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: h,
						className: "transition-colors hover:text-gold",
						children: l
					}) }, h))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-4 font-display text-lg font-semibold text-white",
					children: "Contact Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "space-y-3 text-sm text-[color:var(--muted-foreground)]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "h-4 w-4 text-gold" }),
								" ",
								PHONE_DISPLAY
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: WHATSAPP_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "flex items-center gap-2 transition-colors hover:text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WaIcon, { className: "h-4 w-4 text-gold" }),
								" ",
								PHONE_DISPLAY
							]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }), " Your City, India"]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "mb-4 font-display text-lg font-semibold text-white",
					children: "Follow Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						"aria-label": "Instagram",
						className: "flex h-10 w-10 items-center justify-center rounded-lg text-white transition-transform hover:scale-105",
						style: { background: "linear-gradient(135deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)" },
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#",
						"aria-label": "Facebook",
						className: "flex h-10 w-10 items-center justify-center rounded-lg bg-[#1877F2] text-white transition-transform hover:scale-105",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, { className: "h-5 w-5" })
					})]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mx-auto max-w-7xl px-5 py-5 text-center text-xs text-[color:var(--muted-foreground)] sm:px-8",
				children: "© 2026 Mughlai Point Biryani. All Rights Reserved."
			})
		})]
	});
}
function Index() {
	const { selectedItem } = useMenuSelection();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MenuSection, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CtaBanner, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "fixed bottom-4 right-4 z-40 lg:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {
					size: "md",
					label: "Order",
					selectedItem
				})
			})
		]
	});
}
//#endregion
export { Index as component };
