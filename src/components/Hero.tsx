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
      <div className="absolute bottom-0 left-1/2 h-[600px] w-[1200px] -translate-x-1/2 rounded-full bg-gradient-to-br from-pink-300/40 via-purple-400/50 to-blue-500/40 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        {/* Overline */}
        <div className="mb-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Customer Feedback & Feature Request Tool
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
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

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-3">
          {/* Customer Avatars */}
          <div className="flex -space-x-2">
            {customers.map((customer, index) => (
              <div
                key={index}
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-background ${customer.bg} text-sm font-semibold text-white`}
              >
                {customer.name.charAt(0)}
              </div>
            ))}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium">loved by 300+ customers</span>
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
