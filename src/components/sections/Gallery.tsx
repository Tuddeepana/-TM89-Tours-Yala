import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const locations = [
  {
    id: "kandy",
    name: "Kandy",
    images: [
      { src: "/kandy1.jpeg", alt: "Scenic view of Kandy city and lake in Sri Lanka" },
      { src: "/kandy2.jpeg", alt: "Temple of the Sacred Tooth Relic in Kandy" },
    ],
  },
  {
    id: "ella",
    name: "Ella",
    images: [
      { src: "/ella1.jpeg", alt: "Famous Nine Arch Bridge in Ella, Sri Lanka" },
      { src: "/ella2.jpeg", alt: "Beautiful tea plantations and mountains in Ella" },
    ],
  },
  {
    id: "sigiriya",
    name: "Sigiriya",
    images: [
      { src: "/sigiriya1.jpeg", alt: "Ancient Sigiriya Rock Fortress in Sri Lanka" },
      { src: "/sigirya2.jpeg", alt: "Lions paw entrance and ruins at Sigiriya" },
    ],
  },
  {
    id: "arugambey",
    name: "Arugambey",
    images: [
      { src: "/arugambey1.jpeg", alt: "Surfing at beautiful Arugam Bay beach" },
      { src: "/arugambey2.jpeg", alt: "Golden sands and palm trees at Arugam Bay" },
    ],
  },
  {
    id: "mirissa",
    name: "Mirissa",
    images: [
      { src: "/miriss1.jpeg", alt: "Whale watching in Mirissa ocean waters" },
      { src: "/mirssa2.jpeg", alt: "Secret beach and coconut tree hill in Mirissa" },
    ],
  },
  {
    id: "yala",
    name: "Yala",
    images: [
      { src: "/yala1.jpeg", alt: "Leopard resting on a rock in Yala National Park" },
      { src: "/yala2.jpeg", alt: "Elephants and wildlife safari tour in Yala" },
    ],
  },
];

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isExpanded) return; // Stop auto-play when viewing all

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((current) => (current + 1) % locations.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out
    }, 4000); // Change location every 4 seconds

    return () => clearInterval(interval);
  }, [isExpanded]);

  const activeLocation = locations[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-zinc-900 dark:text-zinc-50">
            Discover <span className="text-primary">Sri Lanka</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Explore the beauty of our top destinations. Immerse yourself in the
            breathtaking landscapes and vibrant culture.
          </p>
        </div>

        <div className="relative min-h-[400px]">
          {!isExpanded ? (
            // Single Auto-playing Location View
            <div
              className={cn(
                "transition-all duration-500 ease-in-out",
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              )}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white inline-flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-primary"></span>
                  {activeLocation.name}
                  <span className="w-8 h-[2px] bg-primary"></span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
                {activeLocation.images.map((img, index) => (
                  <div
                    key={`${activeLocation.id}-${index}`}
                    className="group relative overflow-hidden rounded-2xl md:rounded-[2rem] aspect-[4/3] shadow-lg md:shadow-xl bg-zinc-200 dark:bg-zinc-800"
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <span className="text-white font-semibold text-xl">
                        {activeLocation.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {locations.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-300",
                      activeIndex === idx ? "bg-primary w-8" : "bg-zinc-300 dark:bg-zinc-700 hover:bg-primary/50"
                    )}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ) : (
            // Expanded Grid View (All Locations)
            <div className="space-y-16 animate-in fade-in slide-in-from-bottom-8 duration-700">
              {locations.map((location) => (
                <div key={location.id} className="max-w-5xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-white inline-flex items-center gap-3">
                      <span className="w-8 h-[2px] bg-primary"></span>
                      {location.name}
                      <span className="w-8 h-[2px] bg-primary"></span>
                    </h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {location.images.map((img, index) => (
                      <div
                        key={`${location.id}-${index}`}
                        className="group relative overflow-hidden rounded-2xl md:rounded-[2rem] aspect-[4/3] shadow-lg md:shadow-xl bg-zinc-200 dark:bg-zinc-800"
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <span className="text-white font-semibold text-xl">
                            {location.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* View More / View Less Button */}
        <div className="mt-16 flex justify-center">
          <Button
            size="lg"
            variant={isExpanded ? "outline" : "default"}
            className="rounded-full px-8 text-base h-12 shadow-md hover:shadow-lg transition-all"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? "View Less" : "View All Locations"}
          </Button>
        </div>
      </div>
    </section>
  );
}
