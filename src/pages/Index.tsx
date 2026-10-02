import { useEffect, useState } from "react";
import { ArrowRight, Droplets, Leaf, Thermometer, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroKickstarter from "@/assets/kickstarter-hero-clean.jpg";
import KickstarterCampaign from "@/components/KickstarterCampaign";
import SmartMerinoStory from "@/components/SmartMerinoStory";

const LAUNCH_DATE = new Date("2026-11-29T17:00:00Z");

const getCountdown = () => {
  const now = new Date();
  const total = Math.max(0, LAUNCH_DATE.getTime() - now.getTime());
  let months = 0;
  const cursor = new Date(now);
  while (true) {
    const next = new Date(cursor);
    next.setMonth(next.getMonth() + 1);
    if (next > LAUNCH_DATE) break;
    months += 1;
    cursor.setMonth(cursor.getMonth() + 1);
  }
  const rest = Math.max(0, LAUNCH_DATE.getTime() - cursor.getTime());
  const seconds = Math.floor(rest / 1000);
  return {
    Months: months,
    Days: Math.floor(seconds / 86400),
    Hours: Math.floor((seconds % 86400) / 3600),
    Minutes: Math.floor((seconds % 3600) / 60),
    Seconds: seconds % 60,
  };
};

const heroFeatures = [
  { label: "Regulates temperature", icon: Thermometer, href: "#smart-features" },
  { label: "Water resistant", icon: Droplets, href: "#sustainability" },
  { label: "Breathable Merino wool", icon: Wind, href: "#merino-wool" },
  { label: "Natural material", icon: Leaf, href: "#merino-wool" },
];

const Index = () => {
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <section id="home" className="relative min-h-[940px] w-full overflow-hidden bg-hero-navy text-hero-foreground lg:min-h-screen">
        <img src={heroKickstarter} alt="Woman wearing the cobalt Smart Merino coat in a winter landscape" className="absolute inset-0 h-full w-full object-cover object-[58%_center] lg:object-center" />
        <div className="absolute inset-0 bg-hero-shade" />

        <div className="relative z-10 mx-auto flex min-h-[940px] max-w-[1600px] flex-col px-6 pb-10 pt-28 md:px-12 md:pt-32 lg:min-h-screen lg:pb-12">
          <div className="max-w-[620px] animate-fade-up lg:mt-6">
            <p className="text-[11px] font-medium uppercase tracking-luxury text-hero-accent">Launching soon</p>
            <h1 className="mt-5 font-sans text-4xl font-semibold leading-[1.08] md:text-6xl lg:text-7xl">
              The World’s 1st<br />
              <span className="text-hero-accent">Smart Merino Coat.</span>
            </h1>
            <p className="mt-5 text-[10px] font-medium uppercase tracking-luxury text-hero-foreground/85 md:text-xs">Natural comfort. Smarter living.</p>

            <div className="mt-8 grid max-w-[540px] grid-cols-2 gap-5 sm:grid-cols-4">
              {heroFeatures.map(({ label, icon: Icon, href }) => (
                <a key={label} href={href} className="group text-center">
                  <span className="mx-auto flex size-12 items-center justify-center rounded-full border border-hero-accent/80 bg-hero-panel/40 transition-colors group-hover:bg-hero-accent/20"><Icon size={23} strokeWidth={1.5} /></span>
                  <span className="mt-2 block text-[9px] font-semibold uppercase leading-tight text-hero-foreground/90">{label}</span>
                </a>
              ))}
            </div>

            <div className="mt-8 max-w-[550px] rounded-[6px] border border-hero-accent/75 bg-hero-panel/65 p-4 shadow-hero-glow backdrop-blur-md md:p-5">
              <p className="mb-3 text-[10px] font-medium uppercase tracking-luxury">Launching in</p>
              <div className="grid grid-cols-5 divide-x divide-hero-accent/25">
                {Object.entries(countdown).map(([label, value]) => (
                  <div key={label} className="px-1 text-center">
                    <p className="font-display text-2xl tabular-nums md:text-4xl">{String(value).padStart(2, "0")}</p>
                    <p className="mt-1 text-[7px] uppercase md:text-[9px]">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <Button asChild variant="outline" className="mt-5 h-14 rounded-full border-hero-accent bg-hero-panel/70 px-8 text-hero-foreground shadow-hero-glow backdrop-blur-md hover:bg-hero-accent/20 hover:text-hero-foreground">
              <a href="#kickstarter-signup">Coming Soon on Kickstarter <ArrowRight /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-early-bird text-early-bird-foreground">
        <a href="#kickstarter-signup" className="group mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-7 md:px-12 md:py-9">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-luxury">Limited launch offer</p>
            <p className="mt-2 font-display text-3xl md:text-5xl">Pre-Order · 20% Early Bird</p>
          </div>
          <span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-early-bird-foreground/50 transition-transform group-hover:translate-x-1 md:size-16"><ArrowRight /></span>
        </a>
      </section>

      <SmartMerinoStory />
      <KickstarterCampaign />
    </div>
  );
};

export default Index;
