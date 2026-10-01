import { useState } from "react";
import { ArrowDown, Droplets, Leaf, Thermometer, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import newYorkAsset from "@/assets/campaign/new-york-coats.png.asset.json";
import bostonAsset from "@/assets/campaign/boston-coat.png.asset.json";
import technologyAsset from "@/assets/campaign/merino-technology.png.asset.json";
import natureAsset from "@/assets/campaign/natures-smart-fiber.png.asset.json";
import fiberAsset from "@/assets/campaign/merino-fibers.png.asset.json";
import waterAsset from "@/assets/campaign/water-resistant.png.asset.json";
import temperatureAsset from "@/assets/campaign/temperature-control.gif.asset.json";

const features = [
  {
    title: "Temperature control",
    text: "Merino fibers are designed to help release excess heat when you’re warm and retain warmth when temperatures fall.",
    icon: Thermometer,
  },
  {
    title: "Water resistance",
    text: "The outer surface is designed to help light rain and snow bead away during everyday winter wear.",
    icon: Droplets,
  },
  {
    title: "Natural breathability",
    text: "A breathable Merino construction helps moisture move away from the body for balanced, lasting comfort.",
    icon: Wind,
  },
];

const hotspots = [
  { label: "Protective hood", position: "left-[48%] top-[18%]" },
  { label: "Adjustable waist", position: "left-[49%] top-[49%]" },
  { label: "Weather-ready surface", position: "left-[61%] top-[39%]" },
  { label: "Breathable construction", position: "left-[44%] top-[70%]" },
];

const SmartMerinoStory = () => {
  const [activeHotspot, setActiveHotspot] = useState(0);

  return (
    <div className="bg-background text-foreground">
      <section id="our-coat" className="scroll-mt-20 bg-hero-navy text-hero-foreground">
        <div className="mx-auto grid max-w-[1600px] lg:grid-cols-2">
          <div className="flex flex-col justify-center px-6 py-20 md:px-12 md:py-28 lg:px-20">
            <p className="text-[10px] font-semibold uppercase tracking-luxury text-hero-accent">The idea</p>
            <h2 className="mt-7 max-w-xl font-display text-5xl leading-none md:text-7xl">One coat.<br />More possibilities.</h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-hero-foreground/70 md:text-lg">
              A refined winter coat made for changing cities, changing weather and changing ways of wearing it. Smart function is built into a clear, feminine silhouette.
            </p>
            <Button asChild variant="outline" className="mt-10 w-fit border-hero-accent bg-transparent text-hero-foreground hover:bg-hero-accent/15 hover:text-hero-foreground">
              <a href="#smart-features">Explore the coat <ArrowDown /></a>
            </Button>
          </div>
          <figure className="relative min-h-[520px] overflow-hidden lg:min-h-[760px]">
            <img src={newYorkAsset.url} alt="Three women wearing cobalt, mustard and ivory Smart Merino coats in New York" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <figcaption className="absolute bottom-6 left-6 text-[10px] font-medium uppercase tracking-luxury text-hero-foreground md:bottom-10 md:left-10">One design · Three expressions</figcaption>
          </figure>
        </div>
      </section>

      <section id="smart-features" className="scroll-mt-20 px-6 py-24 md:px-12 md:py-32">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-[10px] font-semibold uppercase tracking-luxury text-early-bird">Smart features</p>
              <h2 className="mt-6 max-w-3xl font-display text-5xl leading-none md:text-7xl">Nature does the intelligent work.</h2>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-stone lg:col-span-4 lg:col-start-9">Merino wool naturally adapts to the body. Thoughtful construction turns those qualities into comfort you can feel from morning to night.</p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[6px] border border-border bg-border md:grid-cols-3">
            {features.map(({ title, text, icon: Icon }) => (
              <article key={title} className="bg-background p-7 md:p-9">
                <Icon className="text-early-bird" size={26} strokeWidth={1.5} />
                <h3 className="mt-10 font-display text-3xl">{title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone">{text}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <figure className="overflow-hidden rounded-[6px] bg-muted">
              <img src={technologyAsset.url} alt="Technical visualization of Merino fibers managing warmth, airflow and moisture" loading="lazy" className="h-full min-h-[440px] w-full object-cover" />
            </figure>
            <figure className="overflow-hidden rounded-[6px] bg-hero-navy">
              <img src={temperatureAsset.url} alt="Animation showing Merino fibers releasing heat and retaining warmth" loading="lazy" className="h-full min-h-[440px] w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      <section className="bg-bone py-24 md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-[6px] bg-muted">
                <img src={bostonAsset.url} alt="Woman wearing the cobalt Smart Merino coat on the Boston waterfront" loading="lazy" className="aspect-[4/5] w-full object-cover object-center" />
                {hotspots.map((hotspot, index) => (
                  <Button
                    key={hotspot.label}
                    type="button"
                    variant="outline"
                    size="icon"
                    aria-label={hotspot.label}
                    aria-pressed={activeHotspot === index}
                    onClick={() => setActiveHotspot(index)}
                    className={`absolute ${hotspot.position} size-8 rounded-full border-hero-foreground bg-hero-navy/70 text-hero-foreground shadow-hero-glow hover:bg-early-bird hover:text-hero-foreground md:size-10`}
                  >
                    <span aria-hidden="true">{activeHotspot === index ? "−" : "+"}</span>
                  </Button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="text-[10px] font-semibold uppercase tracking-luxury text-early-bird">The coat</p>
              <h2 className="mt-6 font-display text-5xl leading-none md:text-6xl">Designed around real winter days.</h2>
              <div className="mt-10 border-l-2 border-early-bird pl-6">
                <p className="text-[10px] uppercase tracking-luxury text-stone">0{activeHotspot + 1}</p>
                <h3 className="mt-3 font-display text-3xl">{hotspots[activeHotspot].label}</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone">Every detail balances protection, movement and a clean architectural line—without making the coat feel technical.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="merino-wool" className="scroll-mt-20 bg-hero-navy py-24 text-hero-foreground md:py-32">
        <div className="mx-auto max-w-[1500px] px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-2">
            <figure className="relative min-h-[500px] overflow-hidden rounded-[6px] md:min-h-[680px]">
              <img src={fiberAsset.url} alt="Close view of natural Merino wool fibers" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-hero-panel/80 p-7 backdrop-blur-sm md:p-10">
                <Leaf className="text-hero-accent" strokeWidth={1.5} />
                <h2 className="mt-5 font-display text-4xl md:text-5xl">Merino wool</h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-hero-foreground/70">A natural fiber chosen for softness, warmth and breathability—designed to keep the experience comfortable, not bulky.</p>
              </figcaption>
            </figure>
            <figure className="relative min-h-[500px] overflow-hidden rounded-[6px] md:min-h-[680px]">
              <img src={natureAsset.url} alt="Smart Merino coat beside a technical visualization of natural wool fibers" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            </figure>
          </div>
        </div>
      </section>

      <section id="sustainability" className="scroll-mt-20 py-24 md:py-32">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 md:px-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <p className="text-[10px] font-semibold uppercase tracking-luxury text-early-bird">Made with intention</p>
            <h2 className="mt-6 font-display text-5xl leading-none md:text-6xl">Less excess.<br />More purpose.</h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-stone">One adaptable coat is designed to support more outfits and more seasons. Natural Merino and considered construction put comfort, versatility and longevity first.</p>
          </div>
          <figure className="overflow-hidden rounded-[6px] bg-muted lg:col-span-7 lg:col-start-6">
            <img src={waterAsset.url} alt="Water droplets beading on cobalt coat fabric" loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </figure>
        </div>
      </section>
    </div>
  );
};

export default SmartMerinoStory;
