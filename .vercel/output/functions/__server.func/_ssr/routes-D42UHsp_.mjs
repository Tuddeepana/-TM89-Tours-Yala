import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react, o as Slot } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as Star, u as ShieldCheck } from "../_libs/lucide-react.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { r as cn, t as SiteShell } from "./SiteShell-ByHjhE1r.mjs";
import { t as Fleet } from "./Fleet-Cl7p0zuJ.mjs";
import { t as Reviews } from "./Reviews-DfxxqAsp.mjs";
import { t as BookingForm } from "./BookingForm-DnAetXB_.mjs";
import { t as hero_default } from "./hero-B_TTWBrx.mjs";
import { n as Features, t as About } from "./Features-BrYxMMUo.mjs";
import { t as Contact } from "./Contact-DnomF2Up.mjs";
import { n as Destinations, t as CustomTour } from "./CustomTour-tvNoviAq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-D42UHsp_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative min-h-[100svh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: hero_default,
				alt: "Safari jeep on a misty Yala road at sunrise",
				className: "absolute inset-0 h-full w-full object-cover",
				width: 1920,
				height: 1080,
				fetchPriority: "high"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 gradient-hero" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto grid max-w-7xl gap-10 px-4 pt-32 pb-20 sm:px-6 lg:px-8 lg:grid-cols-12 lg:pt-40",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-7 text-white animate-fade-up",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full glass-dark px-3.5 py-1.5 text-xs font-medium",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-3.5 w-3.5 fill-secondary text-secondary" }), "4.9/5 from 1,247 travellers"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
							children: [
								"Premium Taxi & Tour ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", { className: "hidden sm:block" }),
								"Service in ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-secondary",
									children: "Sri Lanka"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 max-w-xl text-base text-white/85 sm:text-lg",
							children: "Safe · Reliable · Comfortable · 24/7 Service. Airport transfers, custom multi-day tours and Yala safari pickups — booked in 60 seconds on WhatsApp."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-7 flex flex-wrap gap-5 text-sm",
							children: [
								"Fixed transparent pricing",
								"Licensed English-speaking drivers",
								"Fully insured fleet"
							].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 text-white/90",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-secondary" }),
									" ",
									t
								]
							}, t))
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-5 animate-fade-up [animation-delay:120ms]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookingForm, {})
				})]
			})
		]
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var locations = [
	{
		id: "kandy",
		name: "Kandy",
		images: [{
			src: "/kandy1.jpeg",
			alt: "Scenic view of Kandy city and lake in Sri Lanka"
		}, {
			src: "/kandy2.jpeg",
			alt: "Temple of the Sacred Tooth Relic in Kandy"
		}]
	},
	{
		id: "ella",
		name: "Ella",
		images: [{
			src: "/ella1.jpeg",
			alt: "Famous Nine Arch Bridge in Ella, Sri Lanka"
		}, {
			src: "/ella2.jpeg",
			alt: "Beautiful tea plantations and mountains in Ella"
		}]
	},
	{
		id: "sigiriya",
		name: "Sigiriya",
		images: [{
			src: "/sigiriya1.jpeg",
			alt: "Ancient Sigiriya Rock Fortress in Sri Lanka"
		}, {
			src: "/sigirya2.jpeg",
			alt: "Lions paw entrance and ruins at Sigiriya"
		}]
	},
	{
		id: "arugambey",
		name: "Arugambey",
		images: [{
			src: "/arugambey1.jpeg",
			alt: "Surfing at beautiful Arugam Bay beach"
		}, {
			src: "/arugambey2.jpeg",
			alt: "Golden sands and palm trees at Arugam Bay"
		}]
	},
	{
		id: "mirissa",
		name: "Mirissa",
		images: [{
			src: "/miriss1.jpeg",
			alt: "Whale watching in Mirissa ocean waters"
		}, {
			src: "/mirssa2.jpeg",
			alt: "Secret beach and coconut tree hill in Mirissa"
		}]
	},
	{
		id: "yala",
		name: "Yala",
		images: [{
			src: "/yala1.jpeg",
			alt: "Leopard resting on a rock in Yala National Park"
		}, {
			src: "/yala2.jpeg",
			alt: "Elephants and wildlife safari tour in Yala"
		}]
	}
];
function Gallery() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	const [isExpanded, setIsExpanded] = (0, import_react.useState)(false);
	const [isAnimating, setIsAnimating] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (isExpanded) return;
		const interval = setInterval(() => {
			setIsAnimating(true);
			setTimeout(() => {
				setActiveIndex((current) => (current + 1) % locations.length);
				setIsAnimating(false);
			}, 500);
		}, 4e3);
		return () => clearInterval(interval);
	}, [isExpanded]);
	const activeLocation = locations[activeIndex];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-20 md:py-28 bg-white dark:bg-zinc-950 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto px-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center max-w-3xl mx-auto mb-12 md:mb-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50",
						children: ["Discover ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-primary",
							children: "Sri Lanka"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg text-zinc-600 dark:text-zinc-400",
						children: "Explore the beauty of our top destinations. Immerse yourself in the breathtaking landscapes and vibrant culture."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-[400px]",
					children: !isExpanded ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("transition-all duration-500 ease-in-out", isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"),
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center mb-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white inline-flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[2px] bg-primary" }),
										activeLocation.name,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[2px] bg-primary" })
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto",
								children: activeLocation.images.map((img, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden rounded-2xl md:rounded-[2rem] aspect-[4/3] shadow-lg md:shadow-xl bg-zinc-200 dark:bg-zinc-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.src,
										alt: img.alt,
										className: "w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110",
										loading: "lazy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white font-semibold text-xl",
											children: activeLocation.name
										})
									})]
								}, `${activeLocation.id}-${index}`))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex justify-center gap-2 mt-8",
								children: locations.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: () => setActiveIndex(idx),
									className: cn("w-2.5 h-2.5 rounded-full transition-all duration-300", activeIndex === idx ? "bg-primary w-8" : "bg-zinc-300 dark:bg-zinc-700 hover:bg-primary/50"),
									"aria-label": `Go to slide ${idx + 1}`
								}, idx))
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700",
						children: locations.map((location) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "max-w-5xl mx-auto",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-center mb-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white inline-flex items-center gap-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[2px] bg-primary" }),
										location.name,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-8 h-[2px] bg-primary" })
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8",
								children: location.images.map((img, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "group relative overflow-hidden rounded-2xl md:rounded-[2rem] aspect-[4/3] shadow-lg md:shadow-xl bg-zinc-200 dark:bg-zinc-800",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: img.src,
										alt: img.alt,
										className: "w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110",
										loading: "lazy"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-white font-semibold text-xl",
											children: location.name
										})
									})]
								}, `${location.id}-${index}`))
							})]
						}, location.id))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-16 flex justify-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "lg",
						variant: isExpanded ? "outline" : "default",
						className: "rounded-full px-8 text-base h-12 shadow-md hover:shadow-lg transition-all",
						onClick: () => setIsExpanded(!isExpanded),
						children: isExpanded ? "View Less" : "View All Locations"
					})
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteShell, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Destinations, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomTour, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fleet, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reviews, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
//#endregion
export { Home as component };
