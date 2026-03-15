export default function HomeFacilitiesPreview() {
  return (
    <section className="border-b border-white/10 bg-black py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-8 text-center md:mb-10">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-yellow-400/90">
            Facilities
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            A professional training environment at LABCITY.
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-sm text-white/70">
            Arena-style court, Dr. Dish shooting lab, performance center, and
            academic learning spaces—for athletics and classroom learning.
          </p>
          <a
            href="/facilities"
            className="mt-5 inline-block rounded-full bg-yellow-400 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-colors hover:bg-yellow-300"
          >
            Explore Our Facilities
          </a>
        </div>

        {/* Facility images: gym + gym 2 + Dr. Dish */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
            <img
              src="/images/gym%20facity.png"
              alt="LAB U gym and training facility"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-3 left-3 text-[0.7rem] font-semibold uppercase tracking-wider text-yellow-200/95">
              Training facility
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10">
            <img
              src="/images/area.jpg"
              alt="Arena-style court at LABCITY"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-3 left-3 text-[0.7rem] font-semibold uppercase tracking-wider text-yellow-200/95">
              Arena-style court
            </p>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-yellow-500/20">
            <img
              src="/images/dr%20dish.png"
              alt="Dr. Dish shooting lab at LABCITY"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <p className="absolute bottom-3 left-3 text-[0.7rem] font-semibold uppercase tracking-wider text-yellow-200/95">
              Dr. Dish shooting lab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
