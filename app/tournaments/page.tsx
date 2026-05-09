"use client";

import Link from "next/link";
import { useState } from "react";
import { TournamentCard } from "@/components/sections/cards";
import { PageShell } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TabPill } from "@/components/ui/tabs";
import { tournaments } from "@/lib/mock-data";

const tabs = ["Upcoming", "Live", "Completed"];
export default function TournamentsPage() {
  const [tab, setTab] = useState("Upcoming");
  const filtered = tournaments.filter((t) => t.status === tab);
  return <PageShell eyebrow="Tournament Hub" title="One command center for every competitive event." description="Browse featured events, live cups, completed results, prize pools, registration flows, and bracket previews."><Card className="relative mb-8 overflow-hidden p-8"><Badge className="border-red-400/40 bg-red-500/15 text-red-200">● Featured live event</Badge><h2 className="mt-4 font-display text-4xl font-black">TRXN Genesis Cup</h2><p className="mt-3 max-w-2xl text-white/60">64-team Valorant invitational with live registration, match tracking, and instant payout wallet mockups.</p><div className="mt-6 flex flex-col gap-3 sm:flex-row"><Button>Register Team</Button><Button asChild variant="secondary"><Link href="/spectate">Open Broadcast Dashboard</Link></Button></div><div className="absolute right-6 top-6 hidden h-40 w-64 rounded-3xl border border-arena-green/30 bg-grid bg-[size:20px_20px] md:block" /></Card><div className="mb-6 flex flex-wrap gap-2">{tabs.map((t) => <TabPill key={t} active={tab === t} onClick={() => setTab(t)}>{t}</TabPill>)}</div><div className="grid gap-5 lg:grid-cols-2">{filtered.map((t) => <TournamentCard key={t.id} tournament={t} />)}</div></PageShell>;
}
