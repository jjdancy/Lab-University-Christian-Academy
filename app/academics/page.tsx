import Navbar from "@/components/Navbar";
import AcademicsSection from "@/components/AcademicsSection";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col gap-16 md:gap-20">
        <MountStaggerReveal>
        <section className="border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              Academics
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              A modern academic model for student-athletes.
            </h1>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              LAB University Christian Academy combines the Acellus learning
              system with in-person instruction to deliver a structured,
              college-prep experience that fits the rhythm of elite
              student-athletes.
            </p>
          </div>
        </section>

        <AcademicsSection />

        <section
          id="stem"
          className="border-y border-white/10 bg-black py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  STEM-focused coursework that builds real-world skills.
                </h2>
                <p className="mt-3 text-sm text-white/70 md:text-base">
                  Students engage with math, science, technology, and
                  engineering content that prepares them for modern careers and
                  college majors—while learning to solve problems with
                  creativity and discipline.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-zinc-950/80 p-5 text-xs text-white/70">
                <p>Sample STEM electives and modules may include:</p>
                <ul className="mt-3 space-y-1.5">
                  <li>• coding and computer science foundations</li>
                  <li>• digital media and content creation</li>
                  <li>• data and analytics in sports</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="acellus"
          className="bg-zinc-950 py-16 md:py-20"
        >
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:items-center">
              <div className="rounded-3xl border border-yellow-500/40 bg-gradient-to-br from-yellow-500/10 via-black to-black p-5 text-xs text-white/80">
                <h2 className="text-sm font-semibold text-yellow-300">
                  Acellus Learning System
                </h2>
                <p className="mt-2">
                  Video-based instruction, assessments, and progress tracking
                  allow students to work through accredited coursework while
                  instructors monitor performance, mastery, and pacing.
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Flexible delivery. Serious accountability.
                </h2>
                <p className="mt-3 text-sm text-white/70 md:text-base">
                  The Acellus platform gives student-athletes flexibility for
                  travel and training, while LAB U faculty ensure students stay
                  on track through daily supervision, tutoring, and progress
                  reviews.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="schedule"
          className="border-t border-white/10 bg-black py-16 md:py-20"
        >
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Daily academic rhythm.
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-base">
              A predictable, disciplined schedule helps student-athletes manage
              their time and energy.
            </p>
            <dl className="mt-6 space-y-3 text-sm text-white/80">
              <div className="flex flex-col justify-between gap-1 md:flex-row">
                <dt className="font-semibold">8:00 AM – 1:00 PM</dt>
                <dd className="text-white/70">
                  Core academic coursework through Acellus with instructor
                  oversight.
                </dd>
              </div>
              <div className="flex flex-col justify-between gap-1 md:flex-row">
                <dt className="font-semibold">12:30 PM – 3:00 PM</dt>
                <dd className="text-white/70">
                  Electives, innovation labs, and athletic development.
                </dd>
              </div>
            </dl>
          </div>
        </section>
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}


