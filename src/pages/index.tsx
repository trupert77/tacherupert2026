import Head from 'next/head';

export default function WeddingPage() {
    return (
        <>
            <Head>
                <title>Wedding</title>
                <meta name="description" content="Wedding details" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main className="min-h-screen bg-white text-slate-900">
                <div className="mx-auto max-w-3xl px-6 py-16">
                    <header className="space-y-4">
                        <p className="text-sm font-medium tracking-wide text-slate-600">Save the date</p>
                        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Wedding</h1>
                        <p className="text-pretty text-lg text-slate-700">
                            This page is the fresh starting point for wedding details. Update names, date, location, and
                            all sections below.
                        </p>
                    </header>

                    <section className="mt-12 grid gap-8 sm:grid-cols-2">
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h2 className="text-lg font-semibold">When</h2>
                            <p className="mt-2 text-slate-700">TBD</p>
                        </div>
                        <div className="rounded-2xl border border-slate-200 p-6">
                            <h2 className="text-lg font-semibold">Where</h2>
                            <p className="mt-2 text-slate-700">TBD</p>
                        </div>
                    </section>

                    <section className="mt-12 space-y-3">
                        <h2 className="text-2xl font-semibold">Schedule</h2>
                        <ul className="list-disc space-y-2 pl-5 text-slate-700">
                            <li>Ceremony: TBD</li>
                            <li>Reception: TBD</li>
                        </ul>
                    </section>

                    <section className="mt-12 space-y-3">
                        <h2 className="text-2xl font-semibold">RSVP</h2>
                        <p className="text-slate-700">Add RSVP details or a form when ready.</p>
                    </section>

                    <footer className="mt-16 border-t border-slate-200 pt-6 text-sm text-slate-600">
                        Built with Next.js on Netlify.
                    </footer>
                </div>
            </main>
        </>
    );
}

