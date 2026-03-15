export default function HomeAthleticsPreview() {
  return (
    <section className="border-b border-white/10 bg-black py-16 md:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:flex-row md:items-center md:gap-14 md:px-6">
        {/* Left: three team images stacked — larger */}
        <div className="flex w-full shrink-0 flex-col gap-3 md:w-[360px]">
          <div className="relative h-48 overflow-hidden rounded-xl border border-yellow-500/30 md:h-[160px]">
            <img
              src="/images/national%20team%202.jpeg"
              alt="LAB U National Team"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[0.7rem] font-semibold uppercase tracking-wider text-yellow-300">
              National
            </span>
          </div>
          <div className="relative h-48 overflow-hidden rounded-xl border border-white/15 md:h-[160px]">
            <img
              src="/images/regonial%20team.jpeg"
              alt="LAB U Regional Team"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[0.7rem] font-semibold uppercase tracking-wider text-white/90">
              Regional
            </span>
          </div>
          <div className="relative h-48 overflow-hidden rounded-xl border border-white/15 md:h-[160px]">
            <img
              src="/images/varsity%20team.jpeg"
              alt="LAB U Varsity Team"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <span className="absolute bottom-3 left-3 text-[0.7rem] font-semibold uppercase tracking-wider text-white/90">
              Varsity
            </span>
          </div>
        </div>
        {/* Right: text content — larger typography */}
        <div className="flex-1 space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
            Athletics
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl md:text-[2.75rem]">
            Division-1 style basketball, built on faith and discipline.
          </h2>
          <p className="text-base leading-relaxed text-white/70 md:text-lg">
            National and regional teams, varsity competition, and a daily
            training environment that mirrors collegiate standards prepare
            players for the next level—on and off the court.
          </p>
          <a
            href="/athletics"
            className="inline-flex text-sm font-semibold uppercase tracking-[0.25em] text-yellow-300 underline-offset-4 hover:underline"
          >
            Learn More About Athletics
          </a>
        </div>
      </div>
    </section>
  );
}
