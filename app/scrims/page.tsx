"use client";

import { Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { ScrimCard } from "@/components/sections/cards";
import { PageShell } from "@/components/sections/page-shell";
import { Input } from "@/components/ui/input";
import { TabPill } from "@/components/ui/tabs";
import { scrims } from "@/lib/mock-data";

const formats = ["All", "Solo", "Duo", "Squad"];
const payments = ["All", "Free", "Paid"];
const skills = ["All", "Rookie", "Grinder", "Semi-Pro", "Pro"];
const regions = ["All", "India", "SEA", "MENA", "Europe"];

export default function ScrimsPage() {
  const [query, setQuery] = useState("");
  const [format, setFormat] = useState("All");
  const [payment, setPayment] = useState("All");
  const [skill, setSkill] = useState("All");
  const [region, setRegion] = useState("All");
  const filtered = useMemo(() => scrims.filter((s) => [s.game, s.organizer].join(" ").toLowerCase().includes(query.toLowerCase()) && (format === "All" || s.format === format) && (payment === "All" || (payment === "Paid" ? s.paid : !s.paid)) && (skill === "All" || s.skill === skill) && (region === "All" || s.region === region)), [query, format, payment, skill, region]);
  return <PageShell eyebrow="Scrim Discovery" title="Find verified practice lobbies before they fill." description="Advanced filters, free/paid rooms, skill categories, regions, ratings, and live slot counters for serious grinders."><div className="glass-card rounded-3xl p-4"><div className="flex flex-col gap-4 lg:flex-row"><div className="relative flex-1"><Search className="absolute left-4 top-3.5 text-white/35" size={18} /><Input className="pl-11" placeholder="Search game, organizer, region..." value={query} onChange={(e) => setQuery(e.target.value)} /></div><div className="flex items-center gap-2 text-white/55"><Filter size={18} /> Advanced filters</div></div><FilterRow items={payments} value={payment} setValue={setPayment} /><FilterRow items={formats} value={format} setValue={setFormat} /><FilterRow items={skills} value={skill} setValue={setSkill} /><FilterRow items={regions} value={region} setValue={setRegion} /></div><div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map((scrim) => <ScrimCard key={scrim.id} scrim={scrim} />)}</div></PageShell>;
}

function FilterRow({ items, value, setValue }: { items: string[]; value: string; setValue: (v: string) => void }) {
  return <div className="mt-4 flex flex-wrap gap-2">{items.map((item) => <TabPill key={item} active={item === value} onClick={() => setValue(item)}>{item}</TabPill>)}</div>;
}
