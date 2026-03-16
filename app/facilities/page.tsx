import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        <MountStaggerReveal staggerMs={80}>
          {/* 1. Hero with facility image */}
          <section className="relative border-b border-white/10 overflow-hidden bg-black py-16 md:py-24">
            <div className="absolute inset-0">
              <img
                src="/images/gym%20facity.png"
                alt="LAB U training facility at LABCITY"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/40" />
            </div>
            <div className="relative mx-auto max-w-5xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Facilities
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Elite facilities built for student-athlete development.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90 md:text-base">
                In partnership with LABCITY Sports Training & Event Center, LAB U
                provides a professional training environment—arena-style court, Dr. Dish
                shooting lab, performance center, and academic spaces—designed to
                prepare students for the next level.
              </p>
            </div>
          </section>

          {/* 2. LABCITY overview */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                LABCITY Partnership
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                A professional environment that mirrors D-1 expectations.
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
                LAB University Christian Academy operates in partnership with the
                LABCITY Sports Training & Event Center. Students train in facilities
                designed to support elite basketball development, performance
                training, skill specialization, and leadership—with the structure
                and expectations of Division-1 collegiate programs. The entire
                environment is a professional training atmosphere: discipline,
                preparation, and measurable growth are reinforced so student-athletes
                learn to operate at the standard expected at the college level and
                beyond—on the court, in the weight room, and in the classroom.
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  "Elite basketball development",
                  "Athletic performance training",
                  "Skill specialization",
                  "Leadership and discipline",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 3. Arena-style court */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center md:gap-14">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/area.jpg"
                    alt="Arena-style basketball court at LABCITY"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Centerpiece
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Arena-style basketball court
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    The primary training and competition venue is a professional
                    arena-style court with full regulation dimensions, scoreboard,
                    and spectator seating. Team practices, scrimmages, and games
                    take place here—so athletes prepare for the intensity of
                    college-level competition.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Full regulation court, game-ready environment
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Scoreboard and game atmosphere
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Spectator seating
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Dr. Dish shooting lab */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Shooting development
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Dr. Dish shooting lab
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    A dedicated shooting room equipped with Dr. Dish machines
                    supports high-volume, repetition-based development. Students
                    complete hundreds of game-repetition shots per session with
                    immediate feedback for form correction and consistency.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Shooting consistency and form correction
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Performance tracking
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-yellow-500/20">
                  <img
                    src="/images/dr%20dish.png"
                    alt="Dr. Dish shooting lab at LABCITY"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* 5. Performance training center + weight room video */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center md:gap-14">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/gym%20facity2.png"
                    alt="Performance training at LABCITY"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Strength & conditioning
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Performance training center
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Student-athletes have access to a performance training
                    environment focused on strength, speed, explosiveness, and
                    injury prevention. Programs include strength training,
                    agility drills, conditioning, and recovery work—so athletes
                    build the physical foundation required at the college level.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Strength, agility, conditioning
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Mobility and recovery
                    </li>
                  </ul>
                </div>
              </div>
              <p className="mt-8 text-sm font-semibold text-yellow-200/95">
                Weight room in action
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black">
                <video
                  className="aspect-video w-full object-cover"
                  src="/videos/workout.mp4"
                  controls
                  playsInline
                  muted
                  loop
                  aria-label="LAB U weight room and performance training"
                />
              </div>
            </div>
          </section>

          {/* 6. Academic learning spaces */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Academics on site
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Academic learning spaces
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    LAB U provides structured learning rooms and quiet study areas
                    where students complete Acellus coursework with teacher support.
                    These spaces ensure focus, accountability, and high academic
                    standards alongside athletic development.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Structured learning rooms
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Teacher supervision and support
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Quiet study areas
                    </li>
                  </ul>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/classroom.jpeg"
                    alt="Academic learning at LAB U"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          <AdmissionsCTASection />
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}
