import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] overflow-hidden">
      {/* Background gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full opacity-30 blur-3xl bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-violet-500 via-sky-400 via-40% to-amber-400"></div>
      </div>

      {/* Spline scene */}
      <div className="relative z-10 h-[60vh] sm:h-[70vh]">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-6 -mt-10">
        <div className="text-center">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
            AI SaaS Platform • Data ingestion • Custom RAG • Evaluations
          </span>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight text-white">
            Launch your AI knowledge engine in minutes
          </h1>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Ingest docs, build private knowledge graphs, and ship production RAG with guardrails,
            evals, and analytics — no infra headaches.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="#cta" className="inline-flex h-11 items-center justify-center rounded-lg bg-white text-slate-900 px-5 font-medium hover:bg-slate-200 transition">
              Start free trial
            </a>
            <a href="#how" className="inline-flex h-11 items-center justify-center rounded-lg border border-white/20 text-white px-5 font-medium hover:border-white/40 transition">
              See how it works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
