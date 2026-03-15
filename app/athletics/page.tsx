import Navbar from "@/components/Navbar";
import AthleticsSection from "@/components/AthleticsSection";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";

export default function AthleticsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col gap-16 md:gap-20">
        <MountStaggerReveal>
        <section className="border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              Athletics
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Elite basketball development modeled after Division-1 programs.
            </h1>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              LAB U Basketball trains student-athletes in a professional
              environment that mirrors college programs—intense practices,
              film, performance training, and a culture of accountability.
            </p>
          </div>
        </section>

        <AthleticsSection />

        <section
          id="teams"
          className="border-y border-white/10 bg-black py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Program structure and teams.
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-3 text-sm text-white/70">
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                <h3 className="text-sm font-semibold text-white">National</h3>
                <p className="mt-2 text-xs">
                  Competes on national circuits with a focus on exposure and
                  college-ready preparation.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                <h3 className="text-sm font-semibold text-white">Regional</h3>
                <p className="mt-2 text-xs">
                  Competes across the Southeast with an emphasis on development
                  and system discipline.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-4">
                <h3 className="text-sm font-semibold text-white">
                  Varsity & JV
                </h3>
                <p className="mt-2 text-xs">
                  Prepares players for higher levels through fundamentals,
                  habits, and leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="training"
          className="bg-zinc-950 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Training system built for long-term development.
                </h2>
                <p className="mt-3 text-sm text-white/70 md:text-base">
                  Daily training blends skill work, team concepts, strength and
                  conditioning, and film—so players grow as complete
                  student-athletes, not just scorers.
                </p>
                <ul className="mt-4 space-y-1.5 text-xs text-white/70">
                  <li>• skill and positional development</li>
                  <li>• strength, speed, and performance training</li>
                  <li>• game preparation, scouting, and film</li>
                  <li>• leadership and culture standards</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 via-black to-black p-5 text-xs text-white/80">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.25em] text-yellow-300">
                  Training Environment
                </p>
                <p className="mt-2">
                  Athletes train in an arena-style court, Dr. Dish shooting
                  lab, and performance center designed to replicate the rhythm
                  and expectations of college basketball.
                </p>
              </div>
            </div>
          </div>
        </section>
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}


