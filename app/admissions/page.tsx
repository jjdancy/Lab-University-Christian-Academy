import Navbar from "@/components/Navbar";
import AdmissionsCTASection from "@/components/AdmissionsCTASection";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col gap-16 md:gap-20">
        <MountStaggerReveal>
        <section className="border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              Admissions
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Enrollment for the 2026–27 school year is now open.
            </h1>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              Learn more about K–12 admissions, scholarships, and how to apply
              to LAB University Christian Academy.
            </p>
          </div>
        </section>
        <AdmissionsCTASection />
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}

