import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

type Person = {
  name: string;
  role: string;
  note: string;
  emoji?: string;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

function useCountdown(targetDate: Date) {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diffMs = Math.max(0, targetDate.getTime() - now.getTime());
  const totalSeconds = Math.floor(diffMs / 1000);

  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  return { days, hours, mins, secs };
}

export default function WeddingPage() {
  const target = useMemo(() => new Date("2026-09-26T16:30:00"), []);
  const cd = useCountdown(target);

  const weddingParty: Person[] = [
    { name: "Jenna", role: "The (very) real MVP", note: "Vibes curator", emoji: "🫶" },
    { name: "Katie", role: "Bridesmaid", note: "Always prepared", emoji: "✨" },
    { name: "Brian", role: "(Fake) Best Man", note: "Professional instigator", emoji: "😈" },
    { name: "Mark", role: "Groomsman", note: "Snack logistics", emoji: "🍟" },
    { name: "Brian 2", role: "Groomsman", note: "Backup Brian", emoji: "🧠" },
    { name: "Derek", role: "Groomsman", note: "Dance floor threat", emoji: "🕺" },
  ];

  return (
    <>
      <Head>
        <title>Travis & Melissa — 09.26.2026</title>
        <meta
          name="description"
          content="Travis & Melissa — September 26, 2026 at Res Les Farms, Michigan. Details, schedule, wedding party, travel, RSVP."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-[#f6efe6] text-slate-900">
        {/* Page background: soft watercolor + paper */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 opacity-60">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_10%,rgba(255,200,130,.35),transparent_45%),radial-gradient(circle_at_85%_20%,rgba(120,190,255,.28),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(170,230,170,.28),transparent_55%)]" />
          </div>

          <div className="relative mx-auto max-w-5xl px-5 py-8 sm:px-6 sm:py-12">
            {/* HERO BANNER */}
            <section className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/70 shadow-sm">
              <div className="relative">
                <div
                  className="h-52 sm:h-64 bg-cover bg-center"
                  style={{ backgroundImage: "url('/hero-banner.jpg')" }}
                />
                {/* banner overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-[#f6efe6]" />

                {/* Title plaque */}
                <div className="absolute left-1/2 top-6 w-[92%] max-w-3xl -translate-x-1/2 rounded-2xl border border-white/25 bg-black/30 px-5 py-4 text-center text-white backdrop-blur sm:top-7">
                  <h1 className="text-balance font-extrabold tracking-tight text-3xl sm:text-5xl">
                    Travis &amp; Melissa
                  </h1>
                  <p className="mt-1 text-sm sm:text-base text-white/90">
                    She saves lives. He saves Wi-Fi. Together? Unstoppable.
                  </p>

                  {/* Countdown bar */}
                  <div className="mt-3 rounded-xl border border-white/25 bg-black/25 px-3 py-2 text-xs sm:text-sm">
                    <span className="mr-2 text-white/80">Forever starts in:</span>
                    <span className="font-bold">
                      {cd.days} Days&nbsp; {pad2(cd.hours)} Hours&nbsp; {pad2(cd.mins)} Minutes&nbsp;{" "}
                      {pad2(cd.secs)} Seconds
                    </span>
                  </div>
                </div>
              </div>

              {/* Paper Nav */}
              <nav className="border-t border-slate-200 bg-white/75 px-4 py-3">
                <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-semibold text-slate-700">
                  {[
                    ["Home", "#home"],
                    ["Wedding Details", "#details"],
                    ["Schedule", "#schedule"],
                    ["Wedding Party", "#party"],
                    ["Travel & Stay", "#travel"],
                    ["Registry", "#registry"],
                    ["Things to Do", "#todo"],
                    ["FAQs", "#faqs"],
                  ].map(([label, href]) => (
                    <li key={label}>
                      <a className="hover:text-slate-900" href={href}>
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </section>

            {/* Love.exe ribbon */}
            <div className="mt-7 flex justify-center" id="home">
              <div className="rounded-full border border-slate-200 bg-white/75 px-5 py-2 text-sm font-extrabold text-slate-800 shadow-sm">
                Love.exe successfully booted.
              </div>
            </div>

            {/* ABOUT / BIOS */}
            <section className="mt-7 grid gap-6 md:grid-cols-[1fr_1.15fr]">
              {/* left illustration placeholder */}
              <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="/bennett.png"
                    alt="Bennett the long-hair dachshund"
                    className="h-24 w-auto drop-shadow"
                  />
                  <div>
                    <p className="text-sm font-bold text-slate-700">Featuring:</p>
                    <h2 className="text-2xl font-extrabold">Bennett</h2>
                    <p className="text-sm text-slate-700">
                      Long-hair dachshund • Ring Security • Treat QA
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-bold text-slate-700">Quick vibe check</p>
                    <p className="mt-1 text-slate-700">
                      We are <span className="font-semibold">not farmers</span>. It’s just a boujee farm.
                      We’re here for the aesthetic and the snacks.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-4">
                    <p className="text-sm font-bold text-slate-700">System Status</p>
                    <p className="mt-1 font-mono text-sm text-slate-700">
                      Love: ONLINE • Wi-Fi: STABLE • Bennett: MONITORING
                    </p>
                  </div>
                </div>
              </div>

              {/* right bios */}
              <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm">
                <div className="space-y-7">
                  <div>
                    <h3 className="text-3xl font-extrabold">
                      Melissa <span className="text-slate-500">D.O.</span>
                    </h3>
                    <p className="mt-1 text-slate-700 font-semibold">
                      Board-certified badass in a white coat 🩺
                    </p>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                      <li>Top doc by day, bookworm by night 📚</li>
                      <li>Begnisc + heart-healer ❤️</li>
                      <li>Pocket full of snacks. IYKYK 🍪</li>
                    </ul>
                  </div>

                  <div className="border-t border-slate-200 pt-6">
                    <h3 className="text-3xl font-extrabold">
                      Travis{" "}
                      <span className="text-slate-500 text-xl">
                        the CEO (Chief Ethernet Officer)
                      </span>
                    </h3>
                    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                      <li>Marketing brain + camera nerd + “IT guy?” 📸🧠</li>
                      <li>Cable management survivor 🧵</li>
                      <li>Recovery made requires pizza + IPA 🍕🍺</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* DETAILS + SCHEDULE */}
            <section className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm" id="details">
                <h2 className="text-2xl font-extrabold">Wedding Details</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-bold text-slate-700">When</p>
                    <p className="mt-1 text-slate-700">Saturday, September 26, 2026</p>
                    <p className="mt-1 text-slate-700">Ceremony: 4:30 PM</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <p className="text-sm font-bold text-slate-700">Where</p>
                    <p className="mt-1 text-slate-700">Res Les Farms, Michigan</p>
                    <p className="mt-1 text-slate-700">Boujee farm. Zero chores.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm" id="schedule">
                <h2 className="text-2xl font-extrabold">Schedule of Events</h2>
                <p className="mt-2 text-slate-700 font-semibold">
                  If you arrive on time, we’re amazed (and very grateful).
                </p>

                <ul className="mt-4 space-y-3">
                  {[
                    ["3:30 PM", "Guests arrive"],
                    ["4:30 PM", "Ceremony"],
                    ["5:00 PM", "Cocktails + photos"],
                    ["5:30 PM", "Reception begins"],
                    ["11:00 PM", "Bonfire + late-night snacks"],
                  ].map(([time, label]) => (
                    <li key={time} className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4">
                      <span className="text-sm font-bold text-slate-600">{time}</span>
                      <span className="font-extrabold">{label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* WEDDING PARTY */}
            <section className="mt-8 rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm" id="party">
              <h2 className="text-2xl font-extrabold">Wedding Party</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {weddingParty.map((p) => (
                  <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center justify-between">
                      <div className="font-extrabold text-lg">{p.name}</div>
                      <div className="text-lg">{p.emoji ?? "✨"}</div>
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-600">{p.role}</div>
                    <div className="mt-2 text-slate-700">{p.note}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* TRAVEL / REGISTRY / TODO / FAQ placeholders */}
            <section className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm" id="travel">
                <h2 className="text-2xl font-extrabold">Travel &amp; Stay</h2>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                  <li>Airports: DTW, AZO</li>
                  <li>Hotels + Airbnbs nearby</li>
                  <li>Rideshare may be limited — plan ahead</li>
                </ul>
              </div>

              <div className="rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm" id="registry">
                <h2 className="text-2xl font-extrabold">Registry</h2>
                <p className="mt-2 text-slate-700">
                  Add links here (Zola/Amazon/Honeymoon fund).
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white hover:bg-orange-600" href="#">
                    🎁 Registry
                  </a>
                  <a className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold hover:border-slate-300" href="#">
                    🌺 Honeymoon Fund
                  </a>
                </div>
              </div>
            </section>

            <section className="mt-8 rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm" id="todo">
              <h2 className="text-2xl font-extrabold">Things to Do</h2>
              <p className="mt-2 text-slate-700">
                Add your local favorites: coffee, breweries, hikes, “do not miss” food.
              </p>
            </section>

            <section className="mt-8 rounded-[28px] border border-slate-200 bg-white/70 p-6 shadow-sm" id="faqs">
              <h2 className="text-2xl font-extrabold">FAQs</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li><span className="font-semibold">Are we farmers?</span> No. This is aesthetic farming.</li>
                <li><span className="font-semibold">Dress code?</span> Casual-nice. Comfortable shoes.</li>
                <li><span className="font-semibold">Will there be a bonfire?</span> Yes.</li>
              </ul>
            </section>

            {/* Footer */}
            <footer className="mt-10 rounded-[28px] border border-slate-200 bg-white/70 p-6 text-center text-sm text-slate-700 shadow-sm">
              <div className="flex flex-wrap items-center justify-center gap-3 font-extrabold">
                <span className="rounded-full bg-orange-500 px-4 py-2 text-white">#DoctorAndTheDachshund</span>
                <span className="rounded-full bg-slate-800 px-4 py-2 text-white">#FarmToForever</span>
              </div>
              <div className="mt-4 text-slate-600">📍 Res Les Farms, Michigan</div>
              <div className="mt-1 text-slate-600">✉️ wedding@travismelissa.com</div>
            </footer>
          </div>
        </div>
      </main>
    </>
  );
}
