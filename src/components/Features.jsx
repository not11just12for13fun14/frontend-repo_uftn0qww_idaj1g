import { Database, Layers, ShieldCheck, Zap, Workflow, Gauge } from 'lucide-react'

const features = [
  {
    icon: Database,
    title: 'Unified data ingestion',
    desc: 'Drag-and-drop files, connect cloud drives, crawl websites, and stream updates. Chunking, cleaning, and embeddings handled for you.'
  },
  {
    icon: Layers,
    title: 'Custom RAG pipelines',
    desc: 'Compose retrieval chains with rerankers, hyde, multi-vector indexes, and query transforms. Version and A/B test easily.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise guardrails',
    desc: 'PII redaction, access control, prompt hardening, and audit logs ensure safety and compliance by default.'
  },
  {
    icon: Workflow,
    title: 'Orchestration built-in',
    desc: 'Trigger automations from answers, route to tools & functions, and integrate with your stack via webhooks.'
  },
  {
    icon: Gauge,
    title: 'Observability & evals',
    desc: 'Track latency, cost, and quality. Run golden set and human-in-the-loop evaluations on every change.'
  },
  {
    icon: Zap,
    title: 'Fast & scalable',
    desc: 'Sub-100ms retrieval with vector + keyword hybrid search. Horizontally scalable from day one.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 -top-10 h-40 bg-gradient-to-b from-white/10 to-transparent" />
      </div>
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Everything you need to ship AI features</h2>
          <p className="mt-4 text-slate-300">A clean, modern stack designed for teams who want reliable, observable production RAG without the duct tape.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition relative overflow-hidden">
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-tr from-violet-500/20 via-sky-400/20 to-amber-400/20 blur-2xl" />
              <div className="h-10 w-10 rounded-lg bg-white/10 grid place-items-center">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
