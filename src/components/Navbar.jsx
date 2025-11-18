import { Menu, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 bg-slate-900/80 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-violet-500 via-fuchsia-500 to-amber-400 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-slate-900 grid place-items-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
          </div>
          <span className="text-white font-semibold tracking-tight">NovaRAG</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-300 hover:text-white transition">Features</a>
          <a href="#how" className="text-slate-300 hover:text-white transition">How it works</a>
          <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-slate-300 hover:text-white transition">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#" className="hidden sm:inline-flex px-4 py-2 rounded-lg text-sm font-medium text-white/90 border border-white/15 hover:border-white/25 transition">Sign in</a>
          <a href="#cta" className="inline-flex px-4 py-2 rounded-lg text-sm font-medium text-slate-900 bg-white hover:bg-slate-200 transition">Get started</a>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
