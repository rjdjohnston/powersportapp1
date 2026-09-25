const vehicleTypes = [
  { number: "01", title: "Motorcycles", description: "From cruisers to adventure bikes, every make and model." },
  { number: "02", title: "ATVs & UTVs", description: "Utility, sport, and side-by-side vehicles evaluated with care." },
  { number: "03", title: "Snowmobiles", description: "Confident valuations for seasonal inventory and trade-ins." },
]

const benefits = [
  ["01", "Fast decisions", "Get a wholesale purchase figure in minutes, not days."],
  ["02", "Real commitment", "Every quote is backed by a real dealer-to-dealer buyer."],
  ["03", "Built for dealers", "A streamlined tool designed around your showroom workflow."],
]

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4f4f2] text-[#151617]">
      <div className="bg-[#e3262c] px-6 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white sm:text-right sm:px-10">
        Talk to an appraiser <a className="ml-2 underline underline-offset-4" href="tel:3054842442">305.484.2442</a>
      </div>
      <header className="absolute left-0 right-0 top-8 z-10 border-b border-white/15 bg-[#151617]/90 text-white backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
          <a href="#top" className="flex items-center" aria-label="Powersport Appraisals home">
            <img src="/powersports.png" alt="Powersports Appraisals — Trusted Evaluations" className="h-auto w-[230px] max-w-[52vw]" />
          </a>
          <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.16em] md:flex">
            <a className="text-white/65 transition hover:text-white" href="#about">About</a>
            <a className="text-white/65 transition hover:text-white" href="#why">Why us</a>
            <a className="text-white/65 transition hover:text-white" href="#vehicles">Vehicles</a>
            <a className="border border-[#e3262c] px-5 py-3 text-[#ffffff] transition hover:bg-[#e3262c] hover:text-[#151617]" href="#contact">Get a quote <span className="ml-2">→</span></a>
            <a className="rounded-full border border-white/35 px-5 py-3 text-white transition hover:border-[#ffffff] hover:text-[#ffffff]" href="#dealer-login">Dealer login</a>
          </nav>
          <a className="text-xs font-bold uppercase tracking-widest text-[#ffffff] md:hidden" href="#contact">Quote →</a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[680px] items-end overflow-hidden bg-[#151617] px-6 pb-20 pt-36 text-white lg:min-h-[760px] lg:px-10 lg:pb-28">
        <img src="/powersports-hero.png" alt="Adventure motorcycle on a desert road" className="absolute inset-0 h-full w-full object-cover object-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0d]/95 via-[#111718]/65 to-[#111718]/20" />
        <div className="relative z-[1] mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-16">
          <div>
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#ffffff]"><span className="h-px w-10 bg-[#ffffff]" /> The dealer advantage</p>
            <h1 className="max-w-4xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] sm:text-7xl lg:text-[82px]">Know the value.<br /><em className="font-bold not-italic text-[#ffffff]">Move with confidence.</em></h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-white/72">Fast, accurate wholesale appraisals for powersports dealerships — backed by a real purchase commitment.</p>
            <div className="mt-10 flex flex-wrap items-center gap-5"><a href="#contact" className="bg-[#e3262c] px-7 py-4 text-xs font-bold uppercase tracking-[0.16em] transition hover:bg-[#f04449]">Start an appraisal <span className="ml-5">→</span></a><a href="#about" className="text-xs font-bold uppercase tracking-[0.16em] text-white/80 hover:text-white">Explore our approach <span className="ml-3 text-[#ffffff]">↓</span></a></div>
          </div>
          <aside id="dealer-login" className="rounded-[20px] border border-white/25 border-t-4 border-t-[#e3262c] bg-[#151617]/90 p-7 shadow-2xl backdrop-blur-xl sm:p-8" aria-labelledby="dealer-login-title">
            <div className="flex items-start justify-between gap-4"><div><p className="inline-flex rounded-full border border-[#e3262c]/60 bg-[#e3262c]/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ffffff]">Dealer portal</p><h2 id="dealer-login-title" className="mt-5 font-serif text-3xl text-white">Welcome back.</h2></div><span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e3262c]/50 bg-[#e3262c]/20 text-[#ffffff]" aria-hidden="true">↗</span></div>
            <p className="mt-3 text-sm leading-6 text-white/55">Access your dealer dashboard and appraisal tools.</p>
            <form className="mt-7 space-y-5" action="#dealer-login">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/55" htmlFor="dealer-email">Dealer email<input id="dealer-email" name="email" type="email" autoComplete="email" placeholder="you@dealership.com" className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-white outline-none transition placeholder:text-white/30 focus:border-[#ffffff] focus:ring-2 focus:ring-[#ffffff]/20" /></label>
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-white/55" htmlFor="dealer-password">Password<input id="dealer-password" name="password" type="password" autoComplete="current-password" placeholder="Enter your password" className="mt-2 w-full rounded-lg border border-white/15 bg-white/10 px-4 py-3.5 text-sm font-normal normal-case tracking-normal text-white outline-none transition placeholder:text-white/30 focus:border-[#ffffff] focus:ring-2 focus:ring-[#ffffff]/20" /></label>
              <div className="flex items-center justify-between gap-4 pt-1"><a href="#contact" className="text-xs text-white/55 transition hover:text-white">Need access?</a><button type="submit" className="rounded-full bg-[#e3262c] px-6 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#f04449]">Sign in</button></div>
            </form>
          </aside>
        </div>
        <div className="absolute bottom-8 right-10 hidden text-right text-[10px] uppercase tracking-[0.25em] text-white/45 lg:block">Serving dealers nationwide<br /><span className="text-[#ffffff]">Built on trust since day one</span></div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.7fr_1.3fr] lg:px-10 lg:py-32">
        <div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3262c]">01 / Who we are</p><h2 className="mt-6 max-w-sm font-serif text-4xl leading-tight tracking-tight sm:text-5xl">The number behind your next great deal.</h2></div>
        <div className="max-w-2xl"><p className="text-2xl leading-relaxed text-[#343536]">Powersport Appraisals is a dealer-to-dealer service built to help you make smarter inventory decisions, faster.</p><p className="mt-7 leading-7 text-[#777879]">When a customer brings in a motorcycle, ATV, UTV, trike, or snowmobile, timing matters. We turn the unknown into a clear wholesale figure — so your team can take the next step with confidence.</p><div className="mt-12 grid grid-cols-2 gap-8 border-t border-[#d8d8d5] pt-7 sm:grid-cols-3"><div><strong className="font-serif text-4xl text-[#e3262c]">15+</strong><p className="mt-2 text-xs uppercase tracking-widest text-[#6d6e70]">Years of expertise</p></div><div><strong className="font-serif text-4xl text-[#e3262c]">24h</strong><p className="mt-2 text-xs uppercase tracking-widest text-[#6d6e70]">Purchase follow-up</p></div><div><strong className="font-serif text-4xl text-[#e3262c]">100%</strong><p className="mt-2 text-xs uppercase tracking-widest text-[#6d6e70]">Dealer focused</p></div></div></div>
      </section>

      <section id="why" className="bg-[#151617] px-6 py-24 text-white lg:px-10 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-12 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffffff]">02 / Why dealers choose us</p><h2 className="mt-5 max-w-xl font-serif text-4xl leading-tight sm:text-5xl">Clarity when the showroom is moving fast.</h2></div><p className="max-w-xs text-sm leading-6 text-white/50">A better appraisal is more than a number. It is a faster, more confident way to do business.</p></div><div className="grid divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">{benefits.map(([number, title, description]) => <div className="py-8 md:px-8 md:first:pl-0 md:last:pr-0" key={number}><span className="text-xs text-[#e3262c]">{number}</span><h3 className="mt-12 text-xl font-semibold">{title}</h3><p className="mt-4 max-w-xs text-sm leading-6 text-white/55">{description}</p></div>)}</div></div></section>

      <section id="vehicles" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"><div className="mb-14 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3262c]">03 / What we appraise</p><h2 className="mt-5 font-serif text-4xl sm:text-5xl">Every ride has a story.<br /><span className="text-[#898a8b]">We know how to read it.</span></h2></div><a href="#contact" className="text-xs font-bold uppercase tracking-[0.16em] text-[#e3262c]">See all vehicle types →</a></div><div className="grid gap-4 md:grid-cols-3">{vehicleTypes.map((vehicle) => <article className="group min-h-[260px] border border-[#d8d8d5] bg-white p-7 transition hover:-translate-y-1 hover:border-[#e3262c] hover:shadow-xl" key={vehicle.number}><div className="flex items-start justify-between"><span className="text-xs font-bold text-[#e3262c]">{vehicle.number}</span><span className="text-2xl text-[#e3262c] transition group-hover:translate-x-1">↗</span></div><h3 className="mt-24 font-serif text-3xl">{vehicle.title}</h3><p className="mt-3 text-sm leading-6 text-[#777879]">{vehicle.description}</p></article>)}</div></section>

      <section id="contact" className="relative overflow-hidden bg-[#e3262c] px-6 py-24 text-white lg:px-10 lg:py-28"><div className="absolute -right-8 -top-16 font-serif text-[240px] leading-none text-white/5">PA</div><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd9da]">Ready when you are</p><h2 className="mt-5 max-w-2xl font-serif text-5xl leading-none sm:text-7xl">Put a number<br /><em className="font-bold not-italic text-[#ffd9da]">on the next move.</em></h2></div><a href="tel:3054842442" className="inline-flex shrink-0 items-center gap-5 border border-white/40 px-7 py-5 text-xs font-bold uppercase tracking-[0.16em] transition hover:bg-white hover:text-[#e3262c]">Call 305.484.2442 <span className="text-xl">→</span></a></div></section>
      <footer className="bg-[#151617] px-6 py-8 text-white/45 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-[10px] uppercase tracking-[0.2em] sm:flex-row"><span>© 2025 Powersport Appraisals</span><span>Wholesale values. Real commitment.</span></div></footer>
    </main>
  )
}
