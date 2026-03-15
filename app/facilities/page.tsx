import Navbar from "@/components/Navbar";
import FacilitiesSection from "@/components/FacilitiesSection";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col gap-16 md:gap-20">
        <MountStaggerReveal>
        <section className="border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              Facilities
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Elite facilities built for student-athlete development.
            </h1>
          </div>
        </section>
        <FacilitiesSection />
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}

