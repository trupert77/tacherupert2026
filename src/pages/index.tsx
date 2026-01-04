import Head from "next/head";
import { useEffect, useMemo, useState } from "react";

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export default function WeddingPage() {
  const target = useMemo(() => new Date("2026-09-26T16:30:00"), []);
  const [now, setNow] = useState<Date>(() => new Date());
  const [statusLine, setStatusLine] = useState(
    "Love: ONLINE • Wi-Fi: STABLE • Bennett: RINGS SECURED • Ceremony: PENDING DEPLOYMENT"
  );

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  const diffMs = target.getTime() - now.getTime();
  const totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  const days = Math.floor(totalSeconds / (3600 * 24));
  const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
  const mins = Math.floor((totalSeconds % 3600) / 60);
  const secs = totalSeconds % 60;

  const funLines = [
    "Love.exe ran successfully ✅",
    "Handshake complete 🤝",
    "Bennett approved the guest list 🐶",
    "Ceremony build: STABLE • Reception build: SPICY 🔥",
    "All systems go. Please hydrate.",
  ];

  function runLoveExe() {
    const pick = funLines[Math.floor(Math.random() * funLines.length)];
    setStatusLine(pick);
  }

  return (
    <>
      <Head>
        <title>Travis & Melissa — 09.26.2026</title>
        <meta
          name="description"
          content="Travis & Melissa — September 26, 2026 at Res Les Farms, Michigan. Details, schedule, travel, RSVP."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-[#fbf7f2] text-slate-900">
        {/* Top Nav */}
        <div className="sticky top-0 z-20 border-b border-slate-200/70 bg-[#fbf7f2]/80 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-6 py-3">
            <div className="flex items-center gap-3">
              <div className="font-extrabold tracking-tight">Travis &amp; Melissa</div>
              <span className="hidden rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-800 sm:inline-flex">
                09.26.2026 • Res Les Farms
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-2 text-sm">
              <a className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 hover:border-slate-300" href="#details">
                Details
              </a>
              <a className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 hover:border-slate-300" href="#schedule">
                Schedule
              </a>
              <a className="rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 hover:border-slate-300" href="#travel">
                Travel
              </a>
              <a
                className="rounded-full border border-orange-300 bg-orange-500 px-3 py-1.5 font-semibold text-white hover:bg-orange-600"
                href="#rsvp"
              >
                RSVP
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-5xl px-6 py-10">
          {/* Hero */}
          <header className="overflow-hidden rounded-3xl border border-slate-200 bg-white/70 shadow-sm">
            <div className="grid gap-6 p-6 lg:grid-cols-[1.2fr_.8fr] lg:items-stretch">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">
                    Bookish D.O. + Camera Nerd
                  </span>
                  <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-bold text-green-800">
                    Boujee farm • no chores
                  </span>
                  <span className="rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold text-orange-800">
                    Bennett = Ring Security
                  </span>
                </div>

                <h1 className="mt-4 text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Travis &amp; Melissa
                </h1>

                <p className="mt-3 text-pretty text-lg text-slate-700">
                  <span className="font-semibold">September 26, 2026</span> • Res Les Farms, Michigan
                  <br />
                  <span className="font-semibold">She saves lives.</span> He saves Wi-Fi.
                </p>

                <div className="mt-4 inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-extrabold text-orange-900">
                  Love.exe successfully booted ✅
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#rsvp"
                    className="rounded-full border border-orange-300 bg-orange-500 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-orange-600"
                  >
                    💌 RSVP
                  </a>
                  <a
                    href="#travel"
                    className="rounded-full border border-blue-300 bg-blue-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm hover:bg-blue-700"
                  >
                    🧭 Travel &amp; Stay
                  </a>
                  <a
                    href="#schedule"
                    className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 shadow-sm hover:border-slate-300"
                  >
                    🕒 Schedule
                  </a>
                </div>

                <p className="mt-4 text-xs text-slate-500">
                  Tip: put your images in <code className="rounded bg-slate-100 px-1">/public</code> and reference like{" "}
                  <code className="rounded bg-slate-100 px-1">/bennett.png</code> and{" "}
                  <code className="rounded bg-slate-100 px-1">/hero-farm.jpg</code>.
                </p>
              </div>

              {/* Countdown */}
              <aside className="rounded-2xl border border-dashed border-slate-300 bg-white/70 p-5">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-600">Countdown</p>
                <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  <div className="rounded-xl border border-orange-200 bg-orange-50 p-3 text-center">
                    <div className="text-2xl font-extrabold">{days}</div>
                    <div className="text-xs font-semibold text-slate-600">Days</div>
                  </div>
                  <div className="rounded-xl border border-orange-200 bg-orange-50 p-3 text-center">
                    <div className="text-2xl font-extrabold">{pad2(hours)}</div>
                    <div className="text-xs font-semibold text-slate-600">Hours</div>
                  </div>
                  <div className="rounded-xl border border-orange-200 bg-orange-50 p-3 text-center">
                    <div className="text-2xl font-extrabold">{pad2(mins)}</div>
                    <div className="text-xs font-semibold text-slate-600">Minutes</div>
                  </div>
                  <div className="rounded-xl border border-orange-200 bg-orange-50 p-3 text-center">
                    <div className="text-2xl font-extrabold">{pad2(secs)}</div>
                    <div className="text-xs font-semibold text-slate-600">Seconds</div>
                  </div>
                </div>

                {/* Bennett block */}
                <div className="mt-5 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <img
                    src="/bennett.png"
                    alt="Bennett the long-haired dachshund with bowtie and book stack"
                    className="h-20 w-auto drop-shadow"
                  />
                  <div>
                    <div className="font-bold">Bennett</div>
                    <div className="text-sm text-slate-600">
                      Long-hair dachshund • Ring Security • Treat QA
                    </div>
                  </div>
                </div>
              </aside>
            </div>

            {/* Hero image strip */}
            <div
              className="relative h-52 border-t border-slate-200 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero-farm.jpg')" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#fbf7f2]" />
            </div>
          </header>

          {/* Sections */}
          <section className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6" id="details">
              <h2 className="text-xl font-extrabold">Wedding Details</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>
                  <span className="font-semibold">Date:</span> Saturday, September 26, 2026
                </li>
                <li>
                  <span className="font-semibold">Venue:</span> Res Les Farms, Michigan
                </li>
                <li>
                  <span className="font-semibold">Ceremony:</span> 4:30 PM
                </li>
                <li>
                  <span className="font-semibold">Reception:</span> 5:30 PM (barn + vibes)
                </li>
                <li>
                  <span className="font-semibold">Dress code:</span> Casual-nice (boujee boots welcome)
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/70 p-6" id="travel">
              <h2 className="text-xl font-extrabold">Travel &amp; Stay</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                <li>
                  <span className="font-semibold">Airports:</span> DTW, AZO
                </li>
                <li>
                  <span className="font-semibold">Hotels:</span> Hampton Inn, Holiday Inn Express, local Airbnbs
                </li>
                <li>
                  <span className="font-semibold">Heads up:</span> rideshare may be limited (plan ahead)
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Replace this with your Google Maps venue link.");
                  }}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold hover:border-slate-300"
                >
                  📍 Venue Map
                </a>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Replace this with hotel links or a PDF.");
                  }}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold hover:border-slate-300"
                >
                  🛏️ Hotel Options
                </a>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-6" id="schedule">
            <h2 className="text-2xl font-extrabold">Schedule</h2>
            <p className="mt-2 text-slate-700">Arrive on time. We’re begging. (Lovingly.)</p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["3:30 PM", "Guests arrive"],
                ["4:30 PM", "Ceremony"],
                ["5:00 PM", "Cocktails + photos"],
                ["5:30 PM", "Reception begins"],
                ["6:30 PM", "Dinner"],
                ["8:00 PM", "Speeches + first dance"],
                ["8:30 PM", "Dance floor open"],
                ["11:00 PM", "Bonfire + late-night snacks"],
              ].map(([time, label]) => (
                <li key={time} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="text-sm font-bold text-slate-600">{time}</div>
                  <div className="text-lg font-extrabold">{label}</div>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-6" id="rsvp">
            <h2 className="text-2xl font-extrabold">RSVP</h2>
            <p className="mt-2 text-slate-700">
              Add your RSVP link here (Zola/Joy/The Knot) or embed a Google Form.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Replace with your RSVP URL.");
                }}
                className="rounded-full border border-orange-300 bg-orange-500 px-5 py-2.5 text-sm font-bold text-white hover:bg-orange-600"
              >
                ✅ RSVP Link
              </a>
              <button
                type="button"
                onClick={runLoveExe}
                className="rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold hover:border-slate-300"
              >
                🧠 Run love.exe
              </button>
            </div>
            <p className="mt-4 font-mono text-sm text-slate-700">{statusLine}</p>
          </section>

          <footer className="mt-14 border-t border-slate-200 pt-6 text-sm text-slate-600">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span>Built with Next.js + Netlify.</span>
              <span className="font-semibold">
                #DoctorAndTheDachshund • #FarmButMakeItBoujee • #LoveInFullPassthrough
              </span>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
