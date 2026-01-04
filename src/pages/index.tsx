
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fbf7f2] text-gray-900">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center bg-cover bg-center" 
        style={{ backgroundImage: "url('/hero-farm.jpg')" }}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-extrabold text-white mb-4">Travis & Melissa</h1>
          <p className="text-xl font-semibold text-white/90">
            September 26, 2026 • Res Les Farms, Michigan
          </p>
          <p className="text-lg mt-3 text-white italic">
            She saves lives. He saves Wi-Fi.
          </p>
          {/* Bennett PNG */}
          <div className="flex justify-center mt-6">
            <img 
              src="/bennett.png" 
              alt="Bennett the fit long-hair dachshund with bowtie and bookstack"
              className="w-48 drop-shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* STORY */}
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Story</h2>
        <p className="text-center text-gray-700 mb-8">
          A love story that compiled perfectly in Hawaii and launches officially at a boujee barn.
        </p>
      </div>

      {/* DETAILS + NERD STUFF */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6 pb-16">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-3">Wedding Details</h3>
          <ul className="space-y-2 text-gray-600">
            <li><strong>Date:</strong> Saturday, September 26, 2026</li>
            <li><strong>Venue:</strong> Res Les Farms, Michigan</li>
            <li><strong>Ceremony:</strong> 4:30 PM</li>
            <li><strong>Reception:</strong> 5:30 PM in the barn</li>
            <li><strong>Dress Code:</strong> Casual-nice (boujee boots welcome)</li>
          </ul>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold mb-3">Travel & Stay</h3>
          <ul className="space-y-2 text-gray-600">
            <li>✈️ Airports: DTW, AZO</li>
            <li>🛏 Hotels: Hampton Inn, Holiday Inn, Local Airbnbs</li>
            <li>🚗 Rural venue, rideshare is a “maybe,” plan ahead</li>
          </ul>
          <div className="flex gap-3 flex-wrap mt-5">
            <button className="px-4 py-2 bg-orange-500 text-white font-bold rounded-full shadow-md hover:scale-105">
              📍 View Map
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white font-bold rounded-full shadow-md hover:scale-105">
              🎧 Request a Song
            </button>
          </div>
        </div>
      </div>

      {/* NERD BANNER */}
      <div className="max-w-5xl mx-auto bg-white/80 border border-dashed border-gray-300 rounded-2xl shadow-lg p-6 text-center mb-20 mx-6">
        <h3 className="text-xl font-extrabold text-gray-800 mb-2">System Status</h3>
        <p className="font-mono text-sm text-gray-600">
          Love: ONLINE • Wi-Fi: STABLE • Bennett: RINGS SECURED • Ceremony: PENDING DEPLOYMENT
        </p>
      </div>

      {/* FOOTER */}
      <footer className="text-center py-8 text-gray-600 border-t border-gray-300">
        <p>#FarmButMakeItBoujee • #DoctorAndTheDachshund • #LoveInFullPassthrough</p>
        <p className="mt-2 text-sm">Res Les Farms, Michigan</p>
      </footer>
    </div>
  );
}
