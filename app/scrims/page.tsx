"use client";

import { CheckCircle2, Clock3, Filter, Headphones, LockKeyhole, Search, ShieldCheck, Smartphone, Users } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";
import { ScrimCard } from "@/components/sections/cards";
import { PageShell } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { TabPill } from "@/components/ui/tabs";
import { ownerRoomPolicies, profile, scrimAccessSteps, scrims } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

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
  const filtered = useMemo(() => scrims.filter((s) => [s.game, s.organizer, s.oneTimeGroup].join(" ").toLowerCase().includes(query.toLowerCase()) && (format === "All" || s.format === format) && (payment === "All" || (payment === "Paid" ? s.paid : !s.paid)) && (skill === "All" || s.skill === skill) && (region === "All" || s.region === region)), [query, format, payment, skill, region]);
  const openScrims = filtered.filter((scrim) => scrim.registrationOpen).length;
  const paymentReady = filtered.filter((scrim) => scrim.paymentState === "Ready").length;

  return (
    <PageShell eyebrow="Scrim Discovery" title="Login, verify your roster, then join only while registration is open." description="Authenticated players get live access to every free and paid scrim running right now. Registration timers gate joining and payment so closed rooms cannot collect fees.">
      <div className="grid gap-6 xl:grid-cols-[1.25fr_.75fr]">
        <Card className="p-5">
          <div className="flex flex-col gap-4 lg:flex-row">
            <div className="relative flex-1"><Search className="absolute left-4 top-3.5 text-white/35" size={18} /><Input className="pl-11" placeholder="Search game, organizer, one-time group..." value={query} onChange={(e) => setQuery(e.target.value)} /></div>
            <div className="flex items-center gap-2 text-white/55"><Filter size={18} /> Advanced filters</div>
          </div>
          <FilterRow items={payments} value={payment} setValue={setPayment} />
          <FilterRow items={formats} value={format} setValue={setFormat} />
          <FilterRow items={skills} value={skill} setValue={setSkill} />
          <FilterRow items={regions} value={region} setValue={setRegion} />
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <StatusTile label="Open registrations" value={String(openScrims)} icon={<Clock3 size={17} />} />
            <StatusTile label="Paid rooms ready" value={String(paymentReady)} icon={<LockKeyhole size={17} />} />
            <StatusTile label="Verified identity" value={profile.identityVerified ? "Active" : "Pending"} icon={<ShieldCheck size={17} />} />
          </div>
        </Card>

        <Card className="p-5">
          <Badge className="border-arena-green/40 bg-arena-green/10 text-arena-green">Logged-in player identity</Badge>
          <h3 className="mt-4 text-2xl font-black">{profile.handle}</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/65">
            <p className="flex items-center gap-2"><ShieldCheck size={16} className="text-arena-green" /> Same IGN: {profile.ign}</p>
            <p className="flex items-center gap-2"><Users size={16} className="text-arena-green" /> UID locked: {profile.uid}</p>
            <p className="flex items-center gap-2"><Smartphone size={16} className="text-arena-green" /> Active phone: {profile.phone}</p>
            <p className="flex items-center gap-2"><Headphones size={16} className="text-arena-green" /> Helpdesk: owner Discord VC</p>
          </div>
          <Button className="mt-5 w-full" variant="secondary">Update roster identity</Button>
        </Card>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {scrimAccessSteps.map((step) => <Card key={step.title} className="p-5"><div className={cn("mb-4 grid h-11 w-11 place-items-center rounded-2xl", step.state === "complete" ? "bg-arena-green text-black" : step.state === "active" ? "bg-arena-lime/20 text-arena-lime" : "bg-white/10 text-white/50")}><CheckCircle2 size={20} /></div><h3 className="font-black">{step.title}</h3><p className="mt-2 text-sm leading-6 text-white/55">{step.description}</p></Card>)}
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filtered.map((scrim) => <ScrimCard key={scrim.id} scrim={scrim} />)}</div>

      <Card className="mt-8 p-5">
        <h3 className="text-2xl font-black">Owner room and helpdesk policy</h3>
        <div className="mt-5 grid gap-4 md:grid-cols-4">{ownerRoomPolicies.map((policy) => <div key={policy.title} className="rounded-2xl border border-white/10 bg-black/25 p-4"><h4 className="font-black text-arena-green">{policy.title}</h4><p className="mt-2 text-sm leading-6 text-white/55">{policy.description}</p></div>)}</div>
      </Card>
    </PageShell>
  );
}

function FilterRow({ items, value, setValue }: { items: string[]; value: string; setValue: (v: string) => void }) {
  return <div className="mt-4 flex flex-wrap gap-2">{items.map((item) => <TabPill key={item} active={item === value} onClick={() => setValue(item)}>{item}</TabPill>)}</div>;
}

function StatusTile({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="rounded-2xl border border-arena-green/20 bg-arena-green/10 p-4"><div className="flex items-center gap-2 text-xs uppercase tracking-widest text-arena-green">{icon}{label}</div><p className="mt-2 font-display text-2xl font-black">{value}</p></div>;
}
