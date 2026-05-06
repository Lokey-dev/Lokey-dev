"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Crown, ShieldCheck, Star, Trophy, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Organizer, ScrimRoom, Tournament } from "@/lib/types";

export function ScrimCard({ scrim }: { scrim: ScrimRoom }) {
  const pct = Math.round((scrim.slots.filled / scrim.slots.total) * 100);
  return (
    <motion.article whileHover={{ y: -8, scale: 1.015 }} className="h-full">
      <Card className="cyber-border h-full overflow-hidden p-5">
        <div className="flex items-start justify-between gap-3"><div><Badge className="border-arena-cyan/40 bg-arena-cyan/10 text-arena-cyan">{scrim.game}</Badge><h3 className="mt-4 text-xl font-black">{scrim.organizer}</h3></div>{scrim.verified && <ShieldCheck className="text-arena-cyan" />}</div>
        <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
          <Metric icon={<Crown size={16} />} label="Entry" value={scrim.entryFee} />
          <Metric icon={<Trophy size={16} />} label="Prize" value={scrim.prizePool} />
          <Metric icon={<Clock size={16} />} label="Start" value={scrim.startTime} />
          <Metric icon={<Star size={16} />} label="Rating" value={scrim.rating.toFixed(1)} />
        </div>
        <div className="mt-5"><div className="flex justify-between text-xs text-white/55"><span>{scrim.format} • {scrim.skill}</span><span>{scrim.slots.filled}/{scrim.slots.total}</span></div><div className="mt-2 h-2 rounded-full bg-white/10"><div style={{ width: `${pct}%` }} className="h-full rounded-full bg-gradient-to-r from-arena-cyan to-arena-purple" /></div></div>
        <Button className="mt-6 w-full">Join Scrim</Button>
      </Card>
    </motion.article>
  );
}

export function TournamentCard({ tournament }: { tournament: Tournament }) {
  return <motion.div whileHover={{ y: -6 }}><Card className="overflow-hidden p-5"><div className="flex items-center justify-between"><Badge className={tournament.status === "Live" ? "border-red-400/40 bg-red-500/15 text-red-200" : ""}>{tournament.status === "Live" ? "● Live" : tournament.status}</Badge><span className="text-sm text-white/50">{tournament.game}</span></div><h3 className="mt-5 text-2xl font-black">{tournament.title}</h3><p className="mt-2 text-sm text-white/55">Hosted by {tournament.organizer}</p><div className="mt-5 grid grid-cols-3 gap-2"><Metric icon={<Trophy size={15} />} label="Pool" value={tournament.prizePool} /><Metric icon={<Users size={15} />} label="Teams" value={String(tournament.teams)} /><Metric icon={<Clock size={15} />} label="Starts" value={tournament.starts} /></div><div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-3"><div className="grid grid-cols-4 gap-2">{Array.from({ length: 8 }).map((_, i) => <div key={i} className="h-8 rounded-lg border border-white/10 bg-white/5" />)}</div><p className="mt-3 text-xs text-white/45">Bracket preview auto-generates after check-in.</p></div><Button className="mt-5 w-full">Register</Button></Card></motion.div>;
}

export function OrganizerCard({ organizer }: { organizer: Organizer }) {
  return <Card className="p-5"><div className="flex items-center gap-4"><div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-arena-purple to-arena-cyan font-display font-black text-black">{organizer.name.slice(0, 2)}</div><div><h3 className="font-black">{organizer.name}</h3><p className="text-sm text-arena-cyan">{organizer.tier}</p></div></div><div className="mt-5 grid grid-cols-3 gap-3 text-center"><div><b>{organizer.events}</b><p className="text-xs text-white/45">Events</p></div><div><b>{organizer.rating}</b><p className="text-xs text-white/45">Rating</p></div><div><b>{organizer.trust}%</b><p className="text-xs text-white/45">Trust</p></div></div></Card>;
}

export function PremiumFeature({ title, index }: { title: string; index: number }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * .04 }} viewport={{ once: true }}><Card className="relative overflow-hidden p-5"><Zap className="text-arena-cyan" /><h3 className="mt-4 text-lg font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-white/55">Production concept module with Firebase-ready events, trust data, and realtime notifications.</p><div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-arena-purple/25 blur-2xl" /></Card></motion.div>;
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return <div className="rounded-2xl border border-white/10 bg-black/25 p-3"><div className="flex items-center gap-2 text-white/45">{icon}<span className="text-[11px] uppercase tracking-widest">{label}</span></div><p className="mt-1 font-bold text-white">{value}</p></div>;
}
