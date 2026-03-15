import Navbar from "@/components/Navbar";
import LeadershipFaithSection from "@/components/LeadershipFaithSection";
import Footer from "@/components/Footer";
import MountStaggerReveal from "@/components/MountStaggerReveal";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="flex flex-col gap-16 md:gap-20">
        <MountStaggerReveal>
        <section className="border-b border-white/10 bg-gradient-to-b from-black via-black to-zinc-950 py-16 md:py-24">
          <div className="mx-auto max-w-5xl px-4 md:px-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
              About LAB U
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
              Christ-centered. Purpose-driven. Excellence-focused.
            </h1>
            <p className="mt-4 text-sm text-white/70 md:text-base">
              LAB University Christian Academy is a K–12 private academy in
              Charlotte, NC that unites faith, academics, and elite basketball
              development within a disciplined, college-preparatory
              environment.
            </p>
          </div>
        </section>
        <LeadershipFaithSection />
        </MountStaggerReveal>
      </main>
      <Footer />
    </div>
  );
}

