export default function CTA() {
  return (
    <section id="cta" className="relative py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-tr from-violet-600/20 via-sky-500/10 to-amber-400/20">
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.12),transparent_40%)]" />
          <div className="relative px-6 py-10 sm:px-10 sm:py-14 grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-white">Start building with NovaRAG today</h3>
              <p className="mt-3 text-slate-200">Try it free for 14 days. No credit card required.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="you@company.com" className="h-11 w-full sm:flex-1 rounded-lg bg-white/10 border border-white/15 px-4 text-white placeholder:text-white/50 outline-none focus:border-white/30" />
              <button className="h-11 shrink-0 rounded-lg bg-white text-slate-900 px-5 font-medium hover:bg-slate-200 transition">Create account</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
