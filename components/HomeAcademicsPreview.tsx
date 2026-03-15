export default function HomeAcademicsPreview() {
  return (
    <section className="border-b border-white/10 bg-zinc-950 py-12 md:py-16">
      {/* Text first, centered */}
      <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
          Academics
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          A disciplined, college-prep model for K–12 students.
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-white/70">
          Structured Acellus-powered coursework in the morning, innovation
          electives in the afternoon, and in-person instructor support—whether
          your child is focused on academics, athletics, or both.
        </p>
        <a
          href="/academics"
          className="mt-6 inline-block rounded-full border border-yellow-400/60 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-300 transition-colors hover:bg-yellow-400/10"
        >
          Learn More About Academics
        </a>
      </div>

      {/* Two images in a row below, same size */}
      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-3 px-4 md:mt-12 md:gap-4 md:px-6">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
          <img
            src="/images/classroom%202.jpeg"
            alt="LAB U classroom"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
          <img
            src="/images/little%20kids.jpeg"
            alt="LAB U students — together we shine"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <p className="absolute bottom-3 left-3 text-[0.65rem] font-semibold uppercase tracking-wider text-yellow-200/95">
            Together we shine
          </p>
        </div>
      </div>
    </section>
  );
}
