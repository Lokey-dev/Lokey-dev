import type { ReactNode } from "react";
import { ArenaBackground } from "./arena-bg";

export function PageShell({ eyebrow, title, description, children }: { eyebrow: string; title: string; description: string; children: ReactNode }) {
  return <main className="relative min-h-screen overflow-hidden py-12 sm:py-16"><ArenaBackground /><section className="container-arena"><div className="max-w-3xl"><p className="text-sm font-black uppercase tracking-[0.35em] text-arena-green">{eyebrow}</p><h1 className="mt-4 font-display text-4xl font-black leading-tight sm:text-6xl">{title}</h1><p className="mt-5 text-lg leading-8 text-white/62">{description}</p></div><div className="mt-10">{children}</div></section></main>;
}
