import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        <MountStaggerReveal staggerMs={80}>
          {/* 1. Hero */}
          <section className="relative border-b border-white/10 overflow-hidden bg-black py-16 md:py-24">
            <div className="absolute inset-0">
              <img
                src="/images/all%20teams.jpeg"
                alt="LAB U all teams"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/80" />
            </div>
            <div className="relative mx-auto max-w-5xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                About LAB U
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                Christ-centered. Purpose-driven. Excellence-focused.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80 md:text-base">
                LAB University Christian Academy is a K–12 private academy in
                Charlotte, NC that operates out of LABCITY Sports Training &
                Event Center. We unite faith, academics, and elite basketball
                development in a disciplined, college-preparatory environment—
                so every student is prepared for the next level, on and off the
                court.
              </p>
            </div>
          </section>

          {/* 2. Mission & Vision */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Mission & Vision
              </p>
              <div className="mt-8 grid gap-10 md:grid-cols-2 md:gap-12">
                <div className="rounded-2xl border border-yellow-500/30 bg-black/50 px-6 py-6 md:px-8 md:py-8">
                  <h2 className="text-lg font-semibold text-yellow-300 md:text-xl">
                    Our Mission
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    To develop scholars, leaders, and athletes through
                    Christ-centered education and elite athletic training—so
                    students are equipped for college, career, and calling.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-black/50 px-6 py-6 md:px-8 md:py-8">
                  <h2 className="text-lg font-semibold text-white md:text-xl">
                    Our Vision
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    To be the leading academy in Charlotte where faith,
                    academics, and athletics come together—preparing young people
                    for excellence in every area of life.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Christ-Centered Foundation */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-14">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/little%20kids.jpeg"
                    alt="LAB U students and community"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Christ-Centered Foundation
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Faith at the heart of everything we do.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                    Biblical values and Christian leadership principles are
                    woven into the daily rhythm of school life—classrooms,
                    practices, team standards, and expectations. We build a
                    culture where character matters as much as performance.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-white/75">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                      Biblical foundation in teaching and discipline
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                      Mentorship and accountability rooted in faith
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                      Community that encourages growth in character and calling
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 4. What Makes LAB U Different */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                What Makes Us Different
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                One academy. Whole-person development.
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Academic + Athletic Under One Roof",
                    text: "Structured college-prep academics and elite basketball development in one place—no compromise."
                  },
                  {
                    title: "Acellus + In-Person Instruction",
                    text: "Flexible, accredited coursework with daily instructor support and accountability."
                  },
                  {
                    title: "LABCITY Partnership",
                    text: "Training at a state-of-the-art facility: arena-style court, Dr. Dish, performance center."
                  },
                  {
                    title: "Character-First Culture",
                    text: "We develop scholars, leaders, and athletes—in that order of priority."
                  },
                  {
                    title: "D-1 Style Environment",
                    text: "Intensity, schedule, and standards that mirror top collegiate programs."
                  },
                  {
                    title: "Full Support Team",
                    text: "Coaches, teachers, tutors, and college advisors around every student."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-white/10 bg-black/60 px-5 py-4"
                  >
                    <h3 className="text-sm font-semibold text-yellow-200/95">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. Academic + Athletic Philosophy */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Our Philosophy
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Scholars. Leaders. Athletes.
              </h2>
              <div className="mt-10 grid gap-10 md:grid-cols-2 md:gap-12">
                <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-yellow-300">
                    Academic Philosophy
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    We believe in rigorous, college-preparatory academics that
                    fit the rhythm of serious students and athletes. The Acellus
                    platform plus in-person oversight ensures every student
                    stays on track—with flexibility for travel and training
                    without sacrificing accountability or outcomes.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-zinc-950/80 p-6 md:p-8">
                  <h3 className="text-lg font-semibold text-yellow-300">
                    Athletic Philosophy
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">
                    Our basketball program is structured to both support and
                    challenge student-athletes while giving them a platform to
                    achieve their goals on and off the court. The atmosphere
                    closely mirrors the intensity and schedule of top D-1
                    collegiate programs—so players are prepared for the next
                    level.
                  </p>
                </div>
              </div>
              <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-xl border border-white/10">
                <img
                  src="/images/action%20shot%202.jpeg"
                  alt="LAB U action on the court"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-medium text-white/95">
                  Training that prepares students for college and beyond.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Strategic Partnerships */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Partnerships
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Strategic Partnerships
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/80">
                LAB U partners with mission-aligned organizations to strengthen
                student development in academics, athletics, faith, and
                leadership.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <article className="overflow-hidden rounded-2xl border border-white/10 bg-black/55">
                  <div className="relative aspect-[16/9] border-b border-white/10">
                    <img
                      src="/images/labcity%20logo.webp"
                      alt="LABCITY Sports Training & Event Center"
                      className="h-full w-full bg-black object-contain object-center p-5"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg font-semibold text-yellow-300">
                      LABCITY Sports Training & Event Center
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      LAB U operates out of LABCITY, providing students with a
                      professional environment that includes arena-level courts,
                      performance training resources, and daily structure that
                      mirrors collegiate expectations.
                    </p>
                  </div>
                </article>

                <article className="overflow-hidden rounded-2xl border border-yellow-500/25 bg-black/55">
                  <div className="relative aspect-[16/9] border-b border-white/10">
                    <img
                      src="/images/have%20life%20church.png"
                      alt="Have Life Church community partnership with LAB U"
                      className="h-full w-full bg-black object-contain object-center p-0 scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-lg font-semibold text-yellow-300">
                      Have Life Church
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/80">
                      LAB U Christian Academy partners with Have Life Church to
                      support the academic, spiritual, and personal development
                      of our students. This relationship reflects our commitment
                      to faith, leadership, and community, providing a strong
                      foundation where students can grow into confident,
                      purpose-driven individuals.
                    </p>
                  </div>
                </article>
              </div>
            </div>
          </section>

          {/* 7. Leadership & Character Development */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-14">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/allhandsin.jpeg"
                    alt="LAB U team and community"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Leadership & Character
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Developing leaders on and off the court.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">
                    Every student-athlete is surrounded by a support team
                    inclusive of experienced coaches, academic teachers, tutors,
                    college advisors, and mentors. We place as much emphasis on
                    academics and college placement as on athletic
                    development—so students pursue their passions both on and
                    off the court.
                  </p>
                  <ul className="mt-5 space-y-2 text-sm text-white/75">
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                      Clear standards and consistent accountability
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                      Mentorship that builds discipline and purpose
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-yellow-400" />
                      Whole-person development: faith, academics, athletics,
                      character
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 8. Admissions CTA */}
          <AdmissionsCTASection />
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}
