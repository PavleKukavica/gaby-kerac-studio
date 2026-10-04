import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroAsset from "@/assets/campaign/Hero_V2.png.asset.json";
import SmartMerinoStory from "@/components/SmartMerinoStory";
import CampaignDetails from "@/components/CampaignDetails";
import KickstarterCampaign from "@/components/KickstarterCampaign";

const LAUNCH_DATE = new Date("2026-11-29T17:00:00Z");

const getCountdown = () => {
  const now = new Date();
  const total = Math.max(0, LAUNCH_DATE.getTime() - now.getTime());
  const seconds = Math.floor(total / 1000);
  return {
    Days: Math.floor(seconds / 86400),
    Hours: Math.floor((seconds % 86400) / 3600),
    Minutes: Math.floor((seconds % 3600) / 60),
    Seconds: seconds % 60,
  };
};

const Index = () => {
  const [countdown, setCountdown] = useState(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div>
      <section id="home" className="relative min-h-[760px] overflow-hidden bg-hero-navy text-hero-foreground md:min-h-[820px] lg:min-h-[calc(100vh-32px)]">
        <img src={heroAsset.url} alt="Smart Merino Coat concept in a snowy city" className="absolute inset-0 h-full w-full object-cover object-[62%_center] md:object-center" />
        <div className="absolute inset-0 bg-hero-shade" />
        <div className="relative z-10 mx-auto flex min-h-[760px] max-w-[1600px] flex-col justify-end px-6 pb-12 pt-28 md:min-h-[820px] md:px-12 md:pb-16 lg:min-h-[calc(100vh-32px)] lg:justify-center">
          <div className="max-w-[680px] animate-fade-up">
            <p className="text-[10px] font-semibold uppercase tracking-luxury text-hero-accent">A Kickstarter concept · Launching soon</p>
            <h1 className="mt-6 font-display text-5xl leading-none md:text-7xl lg:text-8xl">Gabbys Smart<br />Merino Coat.</h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-hero-foreground/80 md:text-lg">Natural Merino comfort, an architectural silhouette and smart warmth—being developed transparently for modern winter life.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="h-14 bg-early-bird px-8 text-early-bird-foreground hover:bg-early-bird/90"><a href="#kickstarter-signup">Join the waitlist <ArrowRight /></a></Button>
              <Button asChild variant="outline" className="h-14 border-hero-foreground/50 bg-hero-panel/40 px-8 text-hero-foreground backdrop-blur-sm hover:bg-hero-panel/70 hover:text-hero-foreground"><a href="#our-coat">Discover the coat</a></Button>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-4 border-y border-hero-foreground/25 py-5">
              {Object.entries(countdown).map(([label, value]) => <div key={label} className="text-center"><p className="font-display text-3xl tabular-nums md:text-4xl">{String(value).padStart(2, "0")}</p><p className="mt-1 text-[8px] uppercase tracking-editorial text-hero-foreground/65">{label}</p></div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-early-bird text-early-bird-foreground"><a href="#kickstarter-signup" className="group mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-6 py-7 md:px-12 md:py-9"><div><p className="text-[10px] font-semibold uppercase tracking-luxury">Limited launch offer</p><p className="mt-2 font-display text-3xl md:text-5xl">Pre-Order · 20% Early Bird</p></div><span className="flex size-14 shrink-0 items-center justify-center rounded-full border border-early-bird-foreground/50 transition-transform group-hover:translate-x-1"><ArrowRight /></span></a></section>

      <SmartMerinoStory />
      <CampaignDetails />
      <KickstarterCampaign />
    </div>
  );
};

export default Index;
