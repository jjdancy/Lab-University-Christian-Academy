import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col">
        <MountStaggerReveal staggerMs={80}>
          {/* 1. Hero */}
          <section className="relative border-b border-white/10 overflow-hidden bg-black py-16 md:py-24">
            <div className="absolute inset-0">
              <img
                src="/images/classroom%202.jpeg"
                alt="LAB U classroom"
                className="h-full w-full object-cover object-center opacity-35"
              />
              <div className="absolute inset-0 bg-black/75" />
            </div>
            <div className="relative mx-auto max-w-5xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Academics
              </p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
                A modern academic model for scholars and athletes.
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">
                LAB University Christian Academy combines the Acellus Learning
                System with in-person instruction to deliver a structured,
                college-prep experience that fits the rhythm of serious
                students—whether they’re focused on academics, athletics, or
                both.
              </p>
            </div>
          </section>

          {/* 2. Why This Model */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Our Approach
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Rigorous academics. Flexible delivery. Real accountability.
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {[
                  {
                    title: "Structured Curriculum",
                    text: "A disciplined, college-prep K–12 curriculum delivered through Acellus—accredited coursework aligned with college expectations."
                  },
                  {
                    title: "In-Person Support",
                    text: "Daily instructor oversight, tutors, and mentors so students stay on track. Progress is monitored; no one falls through the cracks."
                  },
                  {
                    title: "Built for Balance",
                    text: "Morning academics, afternoon electives and training. A schedule that supports both scholars and athletes without compromise."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="rounded-2xl border border-white/10 bg-black/60 px-6 py-5"
                  >
                    <h3 className="text-sm font-semibold text-yellow-200/95">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 3. How the Day Works — with image */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1fr,1.1fr] md:items-center md:gap-14">
                <div className="space-y-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Daily Structure
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    A predictable rhythm for learning and growth.
                  </h2>
                  <div className="space-y-4">
                    <div className="rounded-xl border border-yellow-500/30 bg-zinc-950/80 px-5 py-4">
                      <dt className="text-sm font-semibold text-yellow-300">
                        8:00 AM – 1:00 PM
                      </dt>
                      <dd className="mt-1 text-sm text-white/80">
                        Core academic coursework through Acellus with instructor
                        oversight. Math, science, English, social studies, STEM.
                      </dd>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-zinc-950/80 px-5 py-4">
                      <dt className="text-sm font-semibold text-white">
                        12:30 PM – 3:00 PM
                      </dt>
                      <dd className="mt-1 text-sm text-white/80">
                        Electives, innovation labs, and athletic development.
                        Students transition from classroom to court or
                        specialty programming.
                      </dd>
                    </div>
                  </div>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/classroom.jpeg"
                    alt="Students in class at LAB U"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* 4. Acellus in depth */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-2 md:items-center md:gap-14">
                <div className="rounded-2xl border border-yellow-500/40 bg-black/60 p-6 md:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Learning Platform
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-yellow-200/95 sm:text-2xl">
                    Acellus Learning System
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/85">
                    Video-based instruction, assessments, and progress tracking
                    let students work through accredited coursework at a pace
                    that fits their schedule. LAB U faculty monitor performance,
                    mastery, and pacing so every student remains accountable.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Rigorous academic standards
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Flexible learning schedules
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Personalized pace with oversight
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                      Strong progress monitoring
                    </li>
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                    Flexibility for travel and training. Accountability that
                    never lets up.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    The Acellus platform gives students the ability to maintain
                    demanding training and competition schedules without
                    sacrificing academic progress. In-person instructors,
                    tutors, and mentors ensure lesson completion, study habits,
                    and academic integrity every day.
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Students graduate with a strong academic foundation—ready
                    for college and beyond—while developing as athletes and
                    leaders.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Core subjects + NC Opportunity Scholarship */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Curriculum
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                College-prep coursework across every core subject.
              </h2>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  "Mathematics",
                  "Science",
                  "English",
                  "Social Studies",
                  "STEM & Innovation"
                ].map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-white/20 bg-zinc-950/80 px-4 py-2 text-xs font-medium text-white/90"
                  >
                    {subject}
                  </span>
                ))}
              </div>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/75">
                A rigorous K–12 curriculum aligned with college-preparatory
                expectations, monitored by on-site instructors and tutors so
                every student is ready for the next level.
              </p>
              <div className="mt-8 rounded-2xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 via-black to-black p-6 md:p-8">
                <h3 className="text-sm font-semibold text-yellow-300">
                  NC Opportunity Scholarship
                </h3>
                <p className="mt-2 text-sm text-white/85">
                  LAB University Christian Academy participates in the North
                  Carolina Opportunity Scholarship program, helping eligible
                  families access a premium Christ-centered, college-prep
                  education with financial support.
                </p>
              </div>
            </div>
          </section>

          {/* 6. STEM & Electives — with image and CTA */}
          <section className="border-b border-white/10 bg-zinc-950 py-16 md:py-20">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <div className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center md:gap-14">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                    Beyond the Core
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    STEM focus and afternoon electives.
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-white/80">
                    Students engage with math, science, technology, and
                    engineering content that prepares them for modern careers and
                    college majors—while building problem-solving skills with
                    creativity and discipline.
                  </p>
                  <p className="mt-3 text-sm text-white/75">
                    Afternoon electives include coding, digital media,
                    broadcasting, and basketball-specific modules. Innovation
                    labs and hands-on projects round out the academic experience.
                  </p>
                  <a
                    href="/electives"
                    className="mt-6 inline-block rounded-full border border-yellow-400/60 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 transition-colors hover:bg-yellow-400/10"
                  >
                    Explore Electives
                  </a>
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
                  <img
                    src="/images/little%20kids.jpeg"
                    alt="LAB U students"
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* 7. Support team */}
          <section className="border-b border-white/10 bg-black py-16 md:py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
                Academic Support
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Instructors, tutors, and mentors every step of the way.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
                Although the curriculum is delivered through Acellus, LAB U
                provides in-person academic support and supervision. Students
                receive help from academic instructors, tutors, mentors, and
                learning advisors who monitor lesson completion, performance,
                and study habits—so students remain accountable and successful.
              </p>
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
