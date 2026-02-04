import React from "react";
import Navigation from "./components/Navigation";
import { EVENTS } from "./constants";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fdfbf7] selection:bg-[#d4af37] selection:text-[#1a2e44]">
      <Navigation />

      <main>
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center textured-bg overflow-hidden pt-20"
        >
          <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center">
            <img
              src="/crab.png"
              className="w-2/3 object-contain crab-tint scale-125"
              alt="Baltimore Crab Art"
            />
          </div>

          {/* Dark teal overlay for moody lighting effect */}
          <div className="absolute inset-0 z-[5] bg-gradient-to-br from-[#0a2025]/70 via-[#0d3035]/60 to-[#1a2e44]/70"></div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="mb-8 inline-flex items-center gap-2 bg-[#d4af37] text-[#1a2e44] font-black px-4 py-1.5 uppercase text-xs tracking-[0.25em] rounded shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#1a2e44] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1a2e44]"></span>
              </span>
              Part of Baltimore Tech Week
            </div>

            <h1 className="text-6xl md:text-9xl font-black text-[#fdfbf7] leading-none tracking-tighter mb-6 uppercase">
              Charm City <br /> <span className="text-[#d4af37]">Co-Work</span>
            </h1>

            <div className="space-y-4 mb-12">
              <div className="text-[#fdfbf7] text-3xl md:text-5xl font-black uppercase tracking-tighter italic">
                Feb 24 — Feb 26
              </div>
              <div className="text-[#d4af37] text-sm md:text-lg font-black uppercase tracking-[0.4em]">
                3 Days • 3 Locations • Endless Connections
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                disabled
                className="bg-[#1a2e44]/40 border border-[#fdfbf7]/20 text-[#fdfbf7]/50 px-12 py-5 rounded-full font-black text-xl uppercase tracking-widest shadow-xl cursor-not-allowed flex items-center gap-3"
              >
                Coming Soon...
                <svg
                  className="w-5 h-5 opacity-30"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </section>

        {/* MISSION SECTION */}
        <section id="mission" className="py-24 bg-[#fdfbf7] text-[#1a2e44]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6">
                The <span className="text-[#d4af37]">Mission</span>
              </h2>
              <p className="text-2xl md:text-4xl font-serif italic max-w-3xl mx-auto text-[#1a2e44]/70 leading-snug">
                "To transform the way Baltimore builds by bringing our best
                creators into the same room."
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-10 rounded-[2rem] shadow-xl border-l-8 border-[#d4af37] transform hover:-translate-y-1 transition-transform">
                <h3 className="text-3xl font-black uppercase mb-4">
                  Community First
                </h3>
                <p className="text-lg text-[#1a2e44]/70 leading-relaxed">
                  Baltimore isn't just a place; it's a personality. We believe
                  that the tech community here is at its best when it's
                  physical, loud, and collaborative.
                </p>
              </div>
              <div className="bg-white p-10 rounded-[2rem] shadow-xl border-l-8 border-[#1a2e44] transform hover:-translate-y-1 transition-transform">
                <h3 className="text-3xl font-black uppercase mb-4">
                  City-Wide Impact
                </h3>
                <p className="text-lg text-[#1a2e44]/70 leading-relaxed">
                  Instead of one fixed hub, we move through the neighborhoods
                  that make this city great. From Station North to Fells Point,
                  we're putting tech builders in every corner.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SCHEDULE SECTION */}
        <section id="schedule" className="py-24 bg-[#1a2e44] text-[#fdfbf7]">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none">
                  The <br />{" "}
                  <span className="text-[#d4af37]">Preview Year</span>
                </h2>
              </div>
              <div className="text-right">
                <p className="text-xl md:text-2xl font-serif italic text-[#d4af37] mb-2">
                  3 Days • 3 Locations
                </p>
                <div className="h-2 w-32 bg-[#d4af37] ml-auto"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {EVENTS.map((event, idx) => (
                <div
                  key={idx}
                  className="relative overflow-hidden group bg-[#fdfbf7]/5 border border-[#fdfbf7]/10 p-8 rounded-3xl cursor-default"
                >
                  <div className="text-sm font-black uppercase tracking-widest mb-4 opacity-60">
                    {event.date}
                  </div>

                  {/* Content to be covered */}
                  <div className="blur-sm grayscale opacity-30 select-none pointer-events-none">
                    <h3 className="text-2xl font-black uppercase mb-2 leading-tight">
                      {event.locationName}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-widest mb-6 text-[#d4af37]">
                      {event.neighborhood}
                    </p>
                    <div className="w-12 h-1 bg-[#d4af37] mb-6"></div>
                    <p className="text-sm font-medium leading-relaxed opacity-80">
                      {event.details}
                    </p>
                  </div>

                  {/* Overlay for Coming Soon */}
                  <div className="absolute inset-0 top-16 bg-[#1a2e44]/60 backdrop-blur-sm flex items-center justify-center p-6 text-center">
                    <div className="bg-[#d4af37] text-[#1a2e44] px-4 py-2 rounded font-black uppercase text-xs tracking-[0.2em] transform -rotate-1 shadow-lg">
                      Coming Soon...
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="py-24 bg-[#fdfbf7] text-center border-t border-[#1a2e44]/5">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black uppercase text-[#1a2e44] mb-8">
              The Harbor is <br />{" "}
              <span className="text-[#d4af37]">Waiting.</span>
            </h2>
            <p className="text-2xl text-[#1a2e44]/70 mb-12 font-medium">
              Join the first city-wide co-working crawl in Baltimore history.
            </p>
            <div className="inline-flex items-center gap-4 group text-[#1a2e44]/40 font-black text-xl uppercase tracking-widest border-b-4 border-[#1a2e44]/10 pb-2 cursor-not-allowed">
              Registration Opening Soon
              <svg
                className="w-6 h-6 opacity-20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-[#1a2e44] text-center border-t border-[#fdfbf7]/5">
        <div className="max-w-4xl mx-auto px-4 mb-6">
          <div className="text-[#fdfbf7] font-black text-2xl uppercase tracking-tighter mb-2">
            Charm City <span className="text-[#d4af37]">Co-Work</span>
          </div>
          <p className="text-[#fdfbf7]/40 text-sm font-bold uppercase tracking-[0.2em]">
            Built for the Baltimore Tech Community
          </p>
        </div>
        <div className="text-[#fdfbf7]/20 text-[10px] font-bold uppercase tracking-[0.4em]">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
