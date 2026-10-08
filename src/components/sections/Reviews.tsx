import { useState, useMemo } from "react";
import { Star, Heart, ExternalLink, CheckCircle2, Globe, Sparkles, Filter } from "lucide-react";

export interface Review {
  id: string;
  name: string;
  profileUrl: string;
  details: string;
  timeAgo: string;
  isNew?: boolean;
  rating: number;
  text?: string;
  likes?: number;
  translatedFrom?: string;
  isRatingOnly?: boolean;
}

export const reviews: Review[] = [
  {
    id: "stzph_fx",
    name: "Stzph_fx",
    profileUrl: "https://www.google.com/maps/contrib/117898006481596393998/reviews?hl=en-GB",
    details: "12 reviews",
    timeAgo: "6 days ago",
    isNew: true,
    rating: 5,
    text: "Great driver!",
    likes: 2,
  },
  {
    id: "hamza",
    name: "Hamza",
    profileUrl: "https://www.google.com/maps/contrib/103704166775105812315/reviews?hl=en-GB",
    details: "Local Guide · 18 reviews · 10 photos",
    timeAgo: "a week ago",
    isNew: true,
    rating: 5,
    text: "Really good driver",
    likes: 2,
  },
  {
    id: "dafne",
    name: "Dafne moiche zuñiga",
    profileUrl: "https://www.google.com/maps/contrib/104519478963765207128/reviews?hl=en-GB",
    details: "4 reviews",
    timeAgo: "2 weeks ago",
    isNew: true,
    rating: 5,
    text: "Very good",
    likes: 2,
  },
  {
    id: "magalie",
    name: "magalie canuel",
    profileUrl: "https://www.google.com/maps/contrib/114993163517139262370/reviews?hl=en-GB",
    details: "5 reviews · 4 photos",
    timeAgo: "a month ago",
    isNew: false,
    rating: 5,
    text: "Super nice, reliable and great price! He brought us everywhere we wanted to go and it was always smooth.",
    likes: 3,
  },
  {
    id: "pre55f",
    name: "Pre55F",
    profileUrl: "https://www.google.com/maps/contrib/110547742444875620893/reviews?hl=en-GB",
    details: "Local Guide · 19 reviews · 19 photos",
    timeAgo: "2 weeks ago",
    isNew: true,
    rating: 5,
    text: "A very pleasant journey from Hirikitya to the airport; we felt safe and well taken care of. There's nothing to complain about.",
    translatedFrom: "German",
    likes: 2,
  },
  {
    id: "lena",
    name: "Lena Bider",
    profileUrl: "https://www.google.com/maps/contrib/115470195515736186496/reviews?hl=en-GB",
    details: "Verified Google Reviewer",
    timeAgo: "4 days ago",
    isNew: true,
    rating: 5,
    isRatingOnly: true,
  },
  {
    id: "liu",
    name: "Liu Jason",
    profileUrl: "https://www.google.com/maps/contrib/114361118563588194441/reviews?hl=en-GB",
    details: "3 reviews · 4 photos",
    timeAgo: "a week ago",
    isNew: true,
    rating: 5,
    isRatingOnly: true,
  },
  {
    id: "romain",
    name: "Romain Richard",
    profileUrl: "https://www.google.com/maps/contrib/116001955845064351075/reviews?hl=en-GB",
    details: "7 reviews",
    timeAgo: "2 weeks ago",
    isNew: true,
    rating: 5,
    isRatingOnly: true,
  },
  {
    id: "harshil",
    name: "Harshil Goda",
    profileUrl: "https://www.google.com/maps/contrib/104990131384836823526/reviews?hl=en-GB",
    details: "5 reviews · 2 photos",
    timeAgo: "2 weeks ago",
    isNew: true,
    rating: 5,
    isRatingOnly: true,
  },
  {
    id: "romesh",
    name: "Romesh Rautela",
    profileUrl: "https://www.google.com/maps/contrib/109754720218244864049/reviews?hl=en-GB",
    details: "Verified Google Reviewer",
    timeAgo: "a month ago",
    isNew: false,
    rating: 5,
    isRatingOnly: true,
  },
];

const avatarColors = [
  "bg-emerald-600",
  "bg-blue-600",
  "bg-indigo-600",
  "bg-purple-600",
  "bg-amber-600",
  "bg-rose-600",
  "bg-teal-600",
  "bg-cyan-600",
  "bg-violet-600",
  "bg-orange-600",
];

function getAvatarBg(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return avatarColors[Math.abs(hash) % avatarColors.length];
}

function GoogleIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"/>
    </svg>
  );
}

export function Reviews() {
  const [filter, setFilter] = useState<"all" | "written" | "rating_only">("all");
  const [sortBy, setSortBy] = useState<"relevant" | "newest" | "highest" | "lowest">("relevant");

  const filteredReviews = useMemo(() => {
    let result = [...reviews];
    if (filter === "written") {
      result = result.filter((r) => !r.isRatingOnly);
    } else if (filter === "rating_only") {
      result = result.filter((r) => r.isRatingOnly);
    }

    if (sortBy === "newest") {
      result.sort((a, b) => (a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1));
    }
    return result;
  }, [filter, sortBy]);

  return (
    <section className="py-16 sm:py-24 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header & Stats Banner */}
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-soft mb-12">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1.5 text-xs font-semibold text-primary">
                <GoogleIcon className="h-4 w-4" />
                <span>Verified Google Reviews</span>
              </div>

              <h2 className="mt-4 font-display text-3xl font-bold text-ink sm:text-4xl tracking-tight">
                TM89 Tours Yala
              </h2>

              <p className="mt-2 text-base text-muted-foreground leading-relaxed">
                Real customer feedback directly from Google Maps. 100% verified five-star ratings for our private taxi and tour services across Sri Lanka.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 border-t lg:border-t-0 lg:border-l border-border pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-4">
                <div className="text-5xl font-extrabold text-ink tracking-tight">5.0</div>
                <div>
                  <div className="flex text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="mt-1 text-xs font-medium text-muted-foreground">
                    Based on 11 Google Reviews
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/contrib/117898006481596393998/reviews?hl=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 transition"
              >
                <GoogleIcon className="h-4 w-4" />
                View on Google Maps
                <ExternalLink className="h-3.5 w-3.5 opacity-80" />
              </a>
            </div>
          </div>

          {/* Controls Bar */}
          <div className="mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                  filter === "all"
                    ? "bg-primary text-white"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-ink"
                }`}
              >
                All Reviews ({reviews.length})
              </button>
              <button
                onClick={() => setFilter("written")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                  filter === "written"
                    ? "bg-primary text-white"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-ink"
                }`}
              >
                Written Reviews ({reviews.filter((r) => !r.isRatingOnly).length})
              </button>
              <button
                onClick={() => setFilter("rating_only")}
                className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition ${
                  filter === "rating_only"
                    ? "bg-primary text-white"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-ink"
                }`}
              >
                5-Star Ratings ({reviews.filter((r) => r.isRatingOnly).length})
              </button>
            </div>

            {/* Sort Selector */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Filter className="w-3.5 h-3.5" />
              <span>Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-card border border-border rounded-lg px-2.5 py-1 text-xs font-semibold text-ink focus:outline-none focus:ring-1 focus:ring-primary"
              >
                <option value="relevant">Most relevant</option>
                <option value="newest">Newest</option>
                <option value="highest">Highest rating</option>
                <option value="lowest">Lowest rating</option>
              </select>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredReviews.map((r) => (
            <figure
              key={r.id}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-soft hover:shadow-md transition group relative overflow-hidden"
            >
              {r.isNew && (
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider">
                    NEW
                  </span>
                </div>
              )}

              <div>
                {/* User Info Header */}
                <div className="flex items-start gap-3.5">
                  <a
                    href={r.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white font-bold text-sm shadow-sm ${getAvatarBg(
                      r.name
                    )} transition hover:opacity-90`}
                  >
                    {r.name.charAt(0).toUpperCase()}
                  </a>

                  <div className="min-w-0 flex-1">
                    <a
                      href={r.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-ink text-sm hover:text-primary transition flex items-center gap-1.5 group-hover:underline"
                    >
                      <span className="truncate">{r.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-70 transition shrink-0" />
                    </a>
                    <div className="text-xs text-muted-foreground truncate">{r.details}</div>
                    <div className="text-[11px] text-muted-foreground/80 mt-0.5">{r.timeAgo}</div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="mt-4 flex items-center gap-1">
                  <div className="flex text-amber-400">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span title="Verified Review">
                    <CheckCircle2 className="h-3.5 w-3.5 text-blue-500 ml-1" />
                  </span>
                </div>

                {/* Review Text */}
                <blockquote className="mt-3 text-sm leading-relaxed text-ink/90">
                  {r.text ? (
                    <span>"{r.text}"</span>
                  ) : (
                    <span className="text-xs italic text-muted-foreground bg-muted/40 px-2.5 py-1 rounded-md inline-block">
                      Left a 5-star rating on Google Maps
                    </span>
                  )}
                </blockquote>

                {/* Translation Info */}
                {r.translatedFrom && (
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-muted-foreground italic bg-muted/30 px-2.5 py-1 rounded-lg">
                    <Globe className="w-3 h-3 text-primary shrink-0" />
                    <span>Translated by Google · See original ({r.translatedFrom})</span>
                  </div>
                )}
              </div>

              {/* Footer / Likes */}
              <div className="mt-5 pt-3 border-t border-border/40 flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Google Review</span>
                </div>

                {r.likes && (
                  <div className="flex items-center gap-1 rounded-full bg-rose-500/10 px-2 py-0.5 text-[11px] font-semibold text-rose-600 border border-rose-500/20">
                    <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
                    <span>{r.likes}</span>
                  </div>
                )}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

