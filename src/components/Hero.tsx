import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { Star } from "lucide-react";

const Hero = () => {
  // Mock customer avatars using initials
  const customers = [
    { name: "User 1", bg: "bg-orange-400" },
    { name: "User 2", bg: "bg-red-400" },
    { name: "User 3", bg: "bg-pink-400" },
    { name: "User 4", bg: "bg-green-400" },
    { name: "User 5", bg: "bg-yellow-400" },
  ];

  return (
    <div className="relative min-h-[calc(100vh-80px)] w-full overflow-hidden">
      {/* Gradient Blob Background */}
      <div className="absolute bottom-0 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#e6575e]/40 via-[#f88a8f]/50 to-[#e6575e]/40 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        {/* Overline */}
        <div className="mb-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Customer Feedback & Feature Request Tool
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 font-inter text-[32px] leading-[40px] tracking-[0.352px] text-[#101828] max-sm:text-[32px] max-sm:leading-[40px] max-md:text-[40px] max-md:leading-[48px] md:text-[48px] md:leading-[60px]">
          Central hub to collect
          <br />
          feedback & announce
          <br />
          product updates
        </h1>

        {/* Subheading */}
        <p className="mb-10 text-lg text-muted-foreground md:text-xl">
          Supahub your all-in-one solution for customer feedback management
          <br />
          and feature request prioritization.
        </p>

        {/* CTA Buttons */}
        <div className="mb-16 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button variant="hero" size="lg" className="rounded-full">
            <Sparkles className="h-5 w-5" />
            Sign up for free
          </Button>
          <Button variant="outline" size="lg" className="rounded-full">
            See Supahub Demo
          </Button>
        </div>

        {/* Product Showcase Cards */}
        <div className="relative mx-auto flex max-w-7xl items-center justify-center gap-6 px-4 max-lg:flex-col">
          {/* Changelog Card */}
          <div className="w-full max-w-[280px] rounded-xl border border-border/50 bg-background/95 p-6 shadow-lg backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
            </div>
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-primary">
              Changelog
            </h3>
            <div className="space-y-3">
              <div className="text-xs text-muted-foreground">JAN '23</div>
              <p className="text-sm font-medium">Intercom Integration with glimps</p>
            </div>
          </div>

          {/* Feedback Portal Card */}
          <div className="w-full max-w-[400px] rounded-xl border border-border/50 bg-background/95 p-6 shadow-lg backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
            </div>
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-primary">
              Feedback Portal
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3">
                <div className="flex flex-col items-center rounded-md bg-muted px-2 py-1">
                  <span className="text-xs text-muted-foreground">▲</span>
                  <span className="text-sm font-semibold">786</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Create posts from Slack</p>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted" />
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3">
                <div className="flex flex-col items-center rounded-md bg-muted px-2 py-1">
                  <span className="text-xs text-muted-foreground">▲</span>
                  <span className="text-sm font-semibold">214</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Merge duplicate posts</p>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted" />
                </div>
              </div>
            </div>
          </div>

          {/* Roadmap Card */}
          <div className="w-full max-w-[320px] rounded-xl border border-border/50 bg-background/95 p-6 shadow-lg backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
              </div>
            </div>
            <h3 className="mb-4 text-center text-sm font-semibold uppercase tracking-wider text-primary">
              Roadmap
            </h3>
            <div className="space-y-2 text-xs">
              <div className="grid grid-cols-4 gap-2 border-b border-border pb-2 font-semibold uppercase text-muted-foreground">
                <span>Impact</span>
                <span>Effort</span>
                <span className="col-span-2">Score</span>
              </div>
              <div className="grid grid-cols-4 items-center gap-2 rounded-md bg-background/50 p-2">
                <span className="font-semibold">129</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="col-span-2 rounded-full bg-foreground px-2 py-1 text-center text-xs font-semibold text-background">
                  750
                </span>
              </div>
              <div className="grid grid-cols-4 items-center gap-2 rounded-md bg-background/50 p-2">
                <span className="font-semibold">96</span>
                <div className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="h-3 w-3 text-muted-foreground" />
                </div>
                <span className="col-span-2 rounded-full bg-foreground px-2 py-1 text-center text-xs font-semibold text-background">
                  396
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section hint (decorative) */}
      <div className="absolute bottom-20 left-1/2 w-full max-w-2xl -translate-x-1/2">
        <div className="h-32 rounded-t-3xl bg-white/80 backdrop-blur-sm" />
      </div>
    </div>
  );
};

export default Hero;
