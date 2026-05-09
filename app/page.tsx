"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { ArrowRight, Gamepad2, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArenaBackground } from "@/components/sections/arena-bg";
import { OrganizerCard, ScrimCard, TournamentCard } from "@/components/sections/cards";
import { liveStats, organizers, scrimAccessSteps, scrims, tournaments } from "@/lib/mock-data";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <ArenaBackground />
      <section className="container-arena grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <Badge className="border-arena-green/40 bg-arena-green/10 text-arena-green"><Sparkles size={14} /> Funded-startup esports platform mockup</Badge>
          <h1 className="mt-6 font-display text-5xl font-black leading-[.95] tracking-tight sm:text-7xl lg:text-8xl">Every Scrim. Every Tournament. <span className="neon-text">One Arena.</span></h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/65">TRXN Arena unifies fragmented Discord servers, Telegram groups, and social tournament drops into a trusted competitive ecosystem for BGMI, Free Fire, Valorant, and Call of Duty Mobile.</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row"><Button asChild size="lg"><Link href="/scrims">Join Scrims <ArrowRight size={18} /></Link></Button><Button asChild variant="secondary" size="lg"><Link href="/tournaments">Explore Tournaments</Link></Button></div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8 }} className="relative">
          <div className="absolute inset-8 rounded-full bg-arena-green/20 blur-3xl" />
          <Card className="relative overflow-hidden p-5 animate-float"><div className="rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(34,197,94,.28),rgba(190,242,100,.12))] p-5"><div className="flex items-center justify-between"><Badge>LIVE CONTROL ROOM</Badge><Gamepad2 className="text-arena-green" /></div><div className="mt-12 grid gap-4">{scrims.slice(0, 3).map((s) => <div key={s.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 p-4"><div><b>{s.game}</b><p className="text-sm text-white/50">{s.organizer} • {s.startTime}</p></div><span className="text-arena-green">{s.slots.filled}/{s.slots.total}</span></div>)}</div><div className="mt-8 h-32 rounded-3xl border border-arena-green/20 bg-grid bg-[size:22px_22px] p-4"><div className="h-full rounded-2xl bg-gradient-to-r from-arena-green/50 via-arena-lime/25 to-transparent" /></div></div></Card>
        </motion.div>
      </section>
      <section className="container-arena py-10"><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{liveStats.map((stat) => <Card key={stat.label} className="p-5"><p className="text-sm text-white/50">{stat.label}</p><div className="mt-2 flex items-end justify-between"><b className="font-display text-3xl">{stat.value}</b><span className="text-sm text-arena-green">{stat.delta}</span></div></Card>)}</div></section>
      <Section title="Featured tournaments" subtitle="High-prize events with bracket previews and live registration."><div className="grid gap-5 lg:grid-cols-3">{tournaments.slice(0, 3).map((t) => <TournamentCard key={t.id} tournament={t} />)}</div></Section>
      <Section title="Logged-in scrim access flow" subtitle="Players only pay or join while registration is open and roster checks are complete."><div className="grid gap-5 md:grid-cols-4">{scrimAccessSteps.map((step) => <Card key={step.title} className="p-5"><h3 className="font-black text-arena-green">{step.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{step.description}</p></Card>)}</div></Section>
      <Section title="Trending scrim rooms" subtitle="Verified lobbies, live slot counters, and trusted organizers."><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{scrims.slice(0, 3).map((s) => <ScrimCard key={s.id} scrim={s} />)}</div></Section>
      <Section title="Verified organizer network" subtitle="Build trust before players pay or check in."><div className="grid gap-5 md:grid-cols-3">{organizers.map((o) => <OrganizerCard key={o.name} organizer={o} />)}</div></Section>
      <Section title="Loved by grinders" subtitle="Designed for competitive communities that need reliability."><div className="grid gap-5 md:grid-cols-3">{["Found scrims without chasing ten Discord links.", "Our paid lobbies finally look professional.", "Trust scores made new organizers safer to try."].map((quote, i) => <Card key={quote} className="p-6"><MessageCircle className="text-arena-green" /><p className="mt-5 text-white/75">“{quote}”</p><p className="mt-4 text-sm text-white/45">Verified player #{i + 1}</p></Card>)}</div></Section>
    </main>
  );
}

function Section({ title, subtitle, children }: { title: string; subtitle: string; children: ReactNode }) {
  return <section className="container-arena py-14"><div className="mb-8 flex items-end justify-between gap-5"><div><h2 className="font-display text-3xl font-black sm:text-5xl">{title}</h2><p className="mt-3 text-white/55">{subtitle}</p></div><ShieldCheck className="hidden text-arena-green sm:block" /></div>{children}</section>;
}
