import { UploadCloud, Cog, SearchCheck } from 'lucide-react'

export default function HowItWorks() {
  return (
    <section id="how" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white">From raw data to trusted answers</h2>
            <p className="mt-4 text-slate-300">Bring your knowledge, we do the heavy lifting: smart chunking, hybrid indexes, and evaluators tuned for your domain.</p>

            <ol className="mt-8 space-y-6">
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center flex-shrink-0">
                  <UploadCloud className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Ingest</h3>
                  <p className="text-slate-300/90">Files, URLs, drives, databases. Auto-ETL with cleaners, deduping, and embeddings.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center flex-shrink-0">
                  <Cog className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Compose</h3>
                  <p className="text-slate-300/90">Build RAG chains with reranking, multi-hop, and function calling — all versioned.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center flex-shrink-0">
                  <SearchCheck className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-medium">Evaluate</h3>
                  <p className="text-slate-300/90">Ship with confidence using golden sets, spot checks, and real-time analytics.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-violet-500/20 via-sky-400/10 to-amber-400/20 blur-2xl" />
            <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="aspect-video rounded-lg border border-white/10 bg-slate-900/80 grid place-items-center text-slate-300">
                <span className="text-sm">[ Demo screenshot placeholder ]</span>
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 text-xs text-slate-300">
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-white font-medium">+16</div>
                  Sources
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-white font-medium">98.4%</div>
                  Coverage
                </div>
                <div className="rounded-lg border border-white/10 bg-white/5 p-3">
                  <div className="text-white font-medium">&lt; 120ms</div>
                  Retrieval
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
