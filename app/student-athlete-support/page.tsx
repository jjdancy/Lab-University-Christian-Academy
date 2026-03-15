import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";

export default function StudentAthleteSupportPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col gap-16 md:gap-20">
        <MountStaggerReveal>
        <section className="border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              Student-Athlete Support
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              A full support system for academic and athletic success.
            </h1>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              Coaches, academic teachers, tutors, college advisors, and mentors
              surround each student-athlete with structure, accountability, and
              guidance.
            </p>
          </div>
        </section>
        {/* Future: dedicated support content based on PRD */}
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}

