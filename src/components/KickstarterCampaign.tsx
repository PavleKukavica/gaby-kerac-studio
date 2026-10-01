import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import campaign from "@/assets/hero-kickstarter.jpg";

/* Launch date: two months from the campaign page build (Sep 29, 2026).
   Ask the designer to update this once the real Kickstarter date is fixed. */
const LAUNCH_DATE = new Date("2026-11-29T17:00:00Z");

const addMonths = (d: Date, n: number) => {
  const c = new Date(d);
  c.setMonth(c.getMonth() + n);
  return c;
};

const getRemaining = (target: Date) => {
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());
  if (diff === 0) return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

  let months = 0;
  while (addMonths(now, months + 1) <= target) months += 1;
  const afterMonths = addMonths(now, months);
  const rest = target.getTime() - afterMonths.getTime();

  const totalSec = Math.floor(rest / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;
  return { months, days, hours, minutes, seconds };
};

const pad = (n: number) => String(n).padStart(2, "0");

const SectionLabel = ({ index, title }: { index: string; title: string }) => (
  <div className="flex items-center gap-4 text-[11px] uppercase tracking-luxury text-stone">
    <span>{index}</span>
    <span className="w-8 h-px bg-stone/40" />
    <span>{title}</span>
  </div>
);

const features = [
  ["Smart temperature control", "Natural Merino wool helps regulate temperature while maintaining breathable comfort."],
  ["Water resistant", "The outer surface is designed to help repel light rain and snow for everyday winter wear."],
  ["Breathable Merino wool", "A natural, breathable material selected for warmth, softness, and lasting comfort."],
];

const KickstarterCampaign = () => {
  const [remaining, setRemaining] = useState(() => getRemaining(LAUNCH_DATE));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    const t = setInterval(() => setRemaining(getRemaining(LAUNCH_DATE)), 1000);
    return () => clearInterval(t);
  }, []);

  const units: [string, number][] = [
    ["Months", remaining.months],
    ["Days", remaining.days],
    ["Hours", remaining.hours],
    ["Minutes", remaining.minutes],
    ["Seconds", remaining.seconds],
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { setStatus("error"); setMessage("Please enter your name."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) { setStatus("error"); setMessage("Please enter a valid email address."); return; }

    setStatus("loading");
    setMessage(null);
    const { error } = await supabase.functions.invoke("preorder-signup", {
      body: { name: name.trim(), email: email.trim() },
    });
    if (error) {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
      return;
    }
    setStatus("done");
  };

  return (
    <section id="kickstarter" className="border-t border-border bg-bone">
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 py-24 md:py-32">
        <div className="mb-12 reveal"><SectionLabel index="01" title="Kickstarter Campaign" /></div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
          <div className="md:col-span-6 reveal">
            <div className="img-zoom aspect-[3/4] bg-muted">
              <img src={campaign} alt="The convertible coat — blue hooded caped coat" loading="lazy" className="w-full h-full object-cover object-[center_20%] editorial-img" />
            </div>
          </div>

          <div className="md:col-span-6 md:pl-8 space-y-10 reveal">
            <div className="space-y-6">
              <h2 className="font-display text-4xl md:text-6xl leading-[0.95] text-balance">
                One coat. <em className="text-stone">Many looks.</em>
              </h2>
              <p className="text-base md:text-lg text-stone leading-relaxed">
                A feminine winter coat with interchangeable hoods and sleeves. Change the color of the hood or the sleeves to match your mood and your outfit — a single coat that becomes a dozen.
              </p>
            </div>

            <dl className="space-y-5">
              {features.map(([t, d]) => (
                <div key={t} className="border-b border-border pb-5">
                  <dt className="font-display text-xl md:text-2xl">{t}</dt>
                  <dd className="mt-2 text-sm md:text-base text-stone leading-relaxed">{d}</dd>
                </div>
              ))}
            </dl>

            <div className="border-l border-ink/25 pl-5">
              <p className="text-[10px] uppercase tracking-luxury text-stone">Natural & considered</p>
              <p className="mt-3 text-sm leading-relaxed text-stone">Merino wool is a natural fiber chosen for comfort, performance, and a more considered wardrobe.</p>
            </div>

            {/* Early-bird offer */}
            <div className="border border-ink/20 bg-sand/60 p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-luxury text-stone">Early-bird offer</p>
              <p className="mt-3 font-display text-3xl md:text-4xl">20% off for early backers</p>
              <p className="mt-3 text-sm text-stone leading-relaxed">
                Leave your details to pre-order at the early-bird price before the campaign opens.
              </p>
            </div>

            {/* Countdown */}
            <div>
              <p className="text-[10px] uppercase tracking-luxury text-stone mb-5">Launching in</p>
              <div className="flex gap-6 md:gap-10">
                {units.map(([label, value]) => (
                  <div key={label}>
                    <p className="font-display text-3xl md:text-5xl tabular-nums leading-none">{pad(value)}</p>
                    <p className="mt-2 text-[9px] md:text-[10px] uppercase tracking-editorial text-stone">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sign-up form */}
            <div id="kickstarter-signup">
              {status === "done" ? (
                <div className="border border-ink/20 bg-bone p-8 text-center">
                  <p className="font-display text-2xl md:text-3xl">You're on the list.</p>
                  <p className="mt-3 text-sm text-stone">Thank you — we'll email you the early-bird pre-order link at launch.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="bg-transparent border-b border-border focus:border-ink outline-none py-3 text-sm placeholder:text-stone/50 transition-colors"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      className="bg-transparent border-b border-border focus:border-ink outline-none py-3 text-sm placeholder:text-stone/50 transition-colors"
                    />
                  </div>
                  {status === "error" && message && (
                    <p className="text-xs text-destructive">{message}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex items-center gap-2 bg-ink text-bone px-8 py-3 text-[11px] uppercase tracking-luxury disabled:opacity-50 hover:opacity-90 transition-opacity"
                  >
                    <span>{status === "loading" ? "Sending…" : "Pre-order · 20% early bird"}</span>
                    <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KickstarterCampaign;
