export default function HomeLeadershipPreview() {
  return (
    <section
      id="admissions"
      className="relative border-b border-white/10 overflow-hidden py-20 md:py-28"
      aria-labelledby="admissions-heading"
    >
      {/* Full-width background: little kids.jpeg */}
      <div className="absolute inset-0">
        <img
          src="/images/allhandsin.jpeg"
          alt="LAB U community"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Admissions content */}
      <div className="relative mx-auto max-w-2xl px-4 text-center md:px-6">
        <div className="rounded-2xl border border-white/15 bg-black/70 px-6 py-8 backdrop-blur-sm md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
            Admissions
          </p>
          <h2
            id="admissions-heading"
            className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl"
          >
            Ready to enroll at LAB University Christian Academy?
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            We are now accepting applications for the 2026–27 school year for
            grades K–12. Take the
            next step toward a Christ-centered, college-prep education.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href="/admissions"
              className="rounded-full bg-yellow-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-yellow-300"
            >
              Apply Now
            </a>
            <a
              href="/admissions#tour"
              className="rounded-full border border-white/30 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-colors hover:bg-white/10"
            >
              Schedule a Tour
            </a>
          </div>
          <p className="mt-4 text-xs text-white/60">
            Seats are limited. Early applications are strongly encouraged.
          </p>
        </div>
      </div>
    </section>
  );
}
