import { ArrowRight, BatteryCharging, Check, Clock3, Layers3, Scissors, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import batteryAsset from "@/assets/campaign/addons/battery.png.asset.json";
import scarfAsset from "@/assets/campaign/addons/Sal.png.asset.json";
import glovesAsset from "@/assets/campaign/addons/Rukavica.png.asset.json";
import beltAsset from "@/assets/campaign/addons/kajis.png.asset.json";

const developmentSteps = [
  { stage: "01", title: "Silhouette", text: "The proportions, hood and waist are being refined through sketching, draping and fit studies.", icon: Scissors },
  { stage: "02", title: "Material", text: "Merino options are being evaluated for softness, warmth, breathability and a clean tailored finish.", icon: Layers3 },
  { stage: "03", title: "Smart system", text: "The heating concept and its everyday usability remain in development. Final performance details will follow testing.", icon: BatteryCharging },
  { stage: "04", title: "Wear testing", text: "Future prototypes will be assessed for comfort, movement and practical winter use before production decisions are made.", icon: Clock3 },
];

const addOns = [
  { name: "Extra Battery", price: "+$59", description: "Keep your Smart Merino heating system powered for longer.", image: batteryAsset.url },
  { name: "Gabbys Merino Scarf", price: "+$79", description: "Soft, warm and designed to complement your Smart Merino Coat.", image: scarfAsset.url },
  { name: "Gabbys Merino Gloves", price: "+$49", description: "Premium Merino comfort for your hands on cold winter days.", image: glovesAsset.url },
  { name: "Additional Belt", price: "+$39", description: "Change the silhouette and create another look with an additional belt.", image: beltAsset.url },
];

const CampaignDetails = () => (
  <>
    <section className="border-y border-border bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-semibold uppercase tracking-luxury text-early-bird">The problem</p>
            <h2 className="mt-6 font-display text-5xl leading-none md:text-7xl">Winter changes.<br />Your coat should adapt.</h2>
          </div>
          <div className="space-y-7 text-base leading-relaxed text-stone lg:col-span-5 lg:col-start-8">
            <p>Cold mornings, overheated commutes and sudden weather shifts ask very different things from one garment.</p>
            <p>Gabbys Smart Merino Coat begins with a simple idea: combine the natural intelligence of Merino wool with a refined, adaptable silhouette and carefully developed warming support.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="development" className="scroll-mt-20 bg-hero-navy py-24 text-hero-foreground md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <p className="text-[10px] font-semibold uppercase tracking-luxury text-hero-accent">Development journal</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:items-end">
          <h2 className="font-display text-5xl leading-none md:text-7xl lg:col-span-7">From first line to a coat ready for real life.</h2>
          <p className="text-sm leading-relaxed text-hero-foreground/70 lg:col-span-4 lg:col-start-9">This is an active development process. Images and final specifications will be added as prototypes, testing and production decisions are completed.</p>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-[6px] bg-hero-accent/20 md:grid-cols-2 lg:grid-cols-4">
          {developmentSteps.map(({ stage, title, text, icon: Icon }) => (
            <article key={title} className="bg-hero-panel p-7 md:p-9">
              <div className="flex items-center justify-between text-hero-accent"><Icon size={24} strokeWidth={1.5} /><span className="text-[10px] tracking-luxury">{stage}</span></div>
              <h3 className="mt-12 font-display text-3xl">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-hero-foreground/65">{text}</p>
              <p className="mt-8 inline-flex items-center gap-2 text-[9px] uppercase tracking-luxury text-hero-accent"><Clock3 size={13} /> In development</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section id="add-ons" className="scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-[1500px] px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-luxury text-early-bird">Complete your coat</p>
          <h2 className="mt-6 font-display text-5xl leading-none md:text-7xl">Make your coat yours.</h2>
          <p className="mt-7 text-base leading-relaxed text-stone">Add the pieces that fit your lifestyle. Accessories shown are campaign concepts and may evolve before launch.</p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {addOns.map((item) => (
            <article key={item.name} className="border border-border bg-card">
              <div className="aspect-[4/5] overflow-hidden bg-muted"><img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.025]" /></div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4"><h3 className="font-display text-2xl leading-tight">{item.name}</h3><span className="shrink-0 text-sm font-semibold text-early-bird">{item.price}</span></div>
                <p className="mt-4 text-sm leading-relaxed text-stone">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-6 grid gap-8 border border-early-bird bg-early-bird p-7 text-early-bird-foreground md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div><p className="text-[10px] uppercase tracking-luxury">All four pieces</p><h3 className="mt-3 font-display text-4xl md:text-5xl">Gabbys Winter Bundle</h3><p className="mt-3 text-sm opacity-80">Extra Battery + Merino Scarf + Merino Gloves + Additional Belt</p></div>
          <p className="font-display text-5xl">+$179</p>
        </div>
      </div>
    </section>

    <section className="bg-bone py-24 md:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-12 px-6 md:px-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-5"><p className="text-[10px] font-semibold uppercase tracking-luxury text-early-bird">Built transparently</p><h2 className="mt-6 font-display text-5xl leading-none md:text-6xl">A Kickstarter journey you can follow.</h2></div>
        <div className="space-y-5 lg:col-span-5 lg:col-start-8">
          {["Prototype progress shared as it happens", "Final specifications published after validation", "Production timing communicated clearly", "Backers updated through every major milestone"].map((item) => <p key={item} className="flex gap-4 border-b border-border pb-5 text-sm text-stone"><Check className="shrink-0 text-early-bird" size={18} />{item}</p>)}
        </div>
      </div>
    </section>

    <section className="bg-early-bird py-20 text-early-bird-foreground md:py-28">
      <div className="mx-auto flex max-w-[1500px] flex-col items-start justify-between gap-10 px-6 md:px-12 lg:flex-row lg:items-end">
        <div><Sparkles size={28} /><p className="mt-8 text-[10px] font-semibold uppercase tracking-luxury">Be first in line</p><h2 className="mt-5 max-w-4xl font-display text-5xl leading-none md:text-7xl">Join the Smart Merino Coat story.</h2></div>
        <Button asChild variant="outline" className="h-14 shrink-0 border-early-bird-foreground bg-transparent px-8 text-early-bird-foreground hover:bg-early-bird-foreground hover:text-early-bird"><a href="#kickstarter-signup">Join the waitlist <ArrowRight /></a></Button>
      </div>
    </section>
  </>
);

export default CampaignDetails;
