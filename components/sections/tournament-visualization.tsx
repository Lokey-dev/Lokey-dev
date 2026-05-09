"use client";

import { motion } from "framer-motion";
import { Activity, ArrowUpRight, Flame, Radio, Search, ShieldX, Swords, Timer, Trophy, Users } from "lucide-react";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { battleRoyaleStandings, liveBracket, playerStats, teamTracker, trendingMatches } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import type { BracketMatch, BracketTeam } from "@/lib/types";

const qualifyingCutoff = 3;

export function TournamentVisualizationSystem() {
  const [teamQuery, setTeamQuery] = useState(teamTracker.team);
  const [countdown, setCountdown] = useState(462);

  useEffect(() => {
    const tick = window.setInterval(() => setCountdown((seconds) => (seconds > 0 ? seconds - 1 : 462)), 1000);
    return () => window.clearInterval(tick);
  }, []);

  const formattedCountdown = useMemo(() => {
    const minutes = Math.floor(countdown / 60).toString().padStart(2, "0");
    const seconds = (countdown % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  }, [countdown]);

  return (
    <div className="space-y-8">
      <BroadcastHero countdown={formattedCountdown} />

      <div className="grid gap-6 xl:grid-cols-[1.35fr_.65fr]">
        <LiveBracket />
        <TeamTracker teamQuery={teamQuery} setTeamQuery={setTeamQuery} countdown={formattedCountdown} />
      </div>

      <div className="grid gap-6 xl:grid-cols-[1fr_.9fr]">
        <BattleRoyaleTable />
        <PlayerSpotlight />
      </div>

      <TrendingMatches />
    </div>
  );
}

function BroadcastHero({ countdown }: { countdown: string }) {
  return (
    <Card className="relative overflow-hidden p-6 sm:p-8">
      <div className="absolute inset-0 bg-grid bg-[size:28px_28px] opacity-20" />
      <motion.div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-arena-green/25 blur-3xl"
        animate={{ scale: [1, 1.16, 1], opacity: [0.45, 0.8, 0.45] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
        <div>
          <Badge className="border-red-400/40 bg-red-500/15 text-red-100"><Radio size={14} /> Live spectator mode</Badge>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight sm:text-6xl">
            Genesis Cup <span className="neon-text">Broadcast Control</span>
          </h2>
          <p className="mt-4 max-w-3xl text-white/60">
            A professional observer dashboard for public spectators to follow brackets, standings, room assignments,
            MVP races, kill leaders, and qualification paths without needing to register.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:w-[31rem]">
          <SignalMetric icon={<Activity size={18} />} label="Match state" value="Map 2 Live" tone="cyan" />
          <SignalMetric icon={<Timer size={18} />} label="Next phase" value={countdown} tone="purple" />
          <SignalMetric icon={<Users size={18} />} label="Viewers" value="102K" tone="blue" />
          <SignalMetric icon={<Trophy size={18} />} label="Prize" value="₹5L" tone="green" />
        </div>
      </div>
    </Card>
  );
}

function LiveBracket() {
  const rounds = ["Quarterfinal", "Semifinal", "Grand Final"];
  return (
    <Card className="overflow-hidden p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-arena-green">Live bracket</p>
          <h3 className="mt-2 text-2xl font-black">Knockout progression tree</h3>
        </div>
        <Badge className="border-arena-green/40 bg-arena-green/10 text-arena-green">Animated advancement online</Badge>
      </div>
      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {rounds.map((round) => (
          <div key={round} className="space-y-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center font-display text-sm font-black uppercase tracking-[0.22em] text-white/75">
              {round}
            </div>
            {liveBracket.filter((match) => match.round === round).map((match) => <MatchNode key={match.id} match={match} />)}
          </div>
        ))}
      </div>
    </Card>
  );
}

function MatchNode({ match }: { match: BracketMatch }) {
  return (
    <motion.div
      layout
      whileHover={{ y: -5, scale: 1.01 }}
      className={cn(
        "relative rounded-3xl border bg-black/30 p-4 transition",
        match.status === "Live" ? "border-arena-green/55 shadow-neon" : "border-white/10",
      )}
    >
      {match.status === "Live" && <div className="absolute inset-x-4 -top-px h-px bg-gradient-to-r from-transparent via-arena-green to-transparent" />}
      <div className="mb-3 flex items-center justify-between text-xs text-white/45">
        <span>{match.map} • Lane {match.lane}</span>
        <StatusBadge status={match.status} label={match.status === "Live" ? `Live ${match.startsIn}` : match.startsIn} />
      </div>
      <div className="space-y-2">
        {match.teams.map((team) => <TeamRow key={team.name} team={team} />)}
      </div>
    </motion.div>
  );
}

function TeamRow({ team }: { team: BracketTeam }) {
  return (
    <motion.div
      layout
      className={cn(
        "flex items-center justify-between rounded-2xl border px-3 py-3",
        team.status === "advanced" && "border-arena-green/45 bg-arena-green/10 text-arena-green",
        team.status === "eliminated" && "border-red-400/20 bg-red-500/10 text-white/35 line-through",
        team.status === "playing" && "border-arena-green/35 bg-arena-green/10",
        team.status === "waiting" && "border-white/10 bg-white/5 text-white/50",
      )}
    >
      <span className="flex items-center gap-2 font-bold"><span className="text-xs text-white/35">#{team.seed || "—"}</span>{team.name}</span>
      <span className="font-display text-xl font-black">{team.score}</span>
    </motion.div>
  );
}

function TeamTracker({ teamQuery, setTeamQuery, countdown }: { teamQuery: string; setTeamQuery: (value: string) => void; countdown: string }) {
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-arena-lime">Where is my team?</p>
          <h3 className="mt-2 text-2xl font-black">Instant tracker</h3>
        </div>
        <Search className="text-arena-green" />
      </div>
      <Input className="mt-5" value={teamQuery} onChange={(event) => setTeamQuery(event.target.value)} placeholder="Enter team name or captain ID" />
      <div className="mt-5 rounded-3xl border border-arena-green/25 bg-arena-green/10 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/50">Tracking</p>
            <h4 className="text-2xl font-black">{teamQuery || teamTracker.team}</h4>
          </div>
          <Badge className="border-yellow-300/40 bg-yellow-300/10 text-yellow-100">{teamTracker.qualificationStatus}</Badge>
        </div>
        <div className="mt-5 grid gap-3">
          <TrackerLine icon={<Swords size={16} />} label="Current round" value={teamTracker.currentRound} />
          <TrackerLine icon={<Radio size={16} />} label="Room allocation" value={teamTracker.room} />
          <TrackerLine icon={<Timer size={16} />} label="Match timing" value={`${teamTracker.matchTiming} • ${countdown}`} />
          <TrackerLine icon={<ShieldX size={16} />} label="Opponent status" value={teamTracker.opponentStatus} />
          <TrackerLine icon={<ArrowUpRight size={16} />} label="Progression" value={teamTracker.progressionStage} />
        </div>
      </div>
      <Button className="mt-5 w-full" variant="secondary">Follow team updates</Button>
    </Card>
  );
}

function BattleRoyaleTable() {
  return (
    <Card className="overflow-hidden p-5 sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-arena-green">Battle royale board</p>
          <h3 className="mt-2 text-2xl font-black">Live standings and qualification</h3>
        </div>
        <Badge>Top {qualifyingCutoff} qualify</Badge>
      </div>
      <div className="mt-6 space-y-3">
        {battleRoyaleStandings.map((team, index) => (
          <motion.div
            key={team.team}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className={cn(
              "grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-2xl border p-4",
              team.qualified ? "border-arena-green/35 bg-arena-green/10" : "border-white/10 bg-white/5",
            )}
          >
            <div className={cn("grid h-11 w-11 place-items-center rounded-2xl font-display font-black", team.rank <= 3 ? "bg-gradient-to-br from-arena-green to-arena-lime text-black shadow-neon" : "bg-white/10 text-white/55")}>{team.rank}</div>
            <div>
              <div className="flex flex-wrap items-center gap-2"><b>{team.team}</b><Badge>{team.game}</Badge>{team.qualified && <Badge className="border-arena-green/40 bg-arena-green/10 text-arena-green">Qualified</Badge>}</div>
              <p className="mt-1 text-sm text-white/50">Placement {team.placement} • {team.kills} kills • trend {team.trend}</p>
            </div>
            <div className="text-right"><p className="font-display text-2xl font-black">{team.points}</p><p className="text-xs text-white/45">PTS</p></div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

function PlayerSpotlight() {
  const mvp = playerStats[0];
  return (
    <Card className="p-5 sm:p-6">
      <div className="rounded-3xl border border-arena-lime/30 bg-gradient-to-br from-arena-lime/20 to-arena-green/10 p-5">
        <Badge className="border-arena-lime/40 bg-arena-lime/10 text-lime-100"><Flame size={14} /> Top player highlight</Badge>
        <h3 className="mt-4 text-3xl font-black">{mvp.player}</h3>
        <p className="text-white/55">{mvp.team} • {mvp.role} • MVP score {mvp.mvpScore}</p>
      </div>
      <div className="mt-5 space-y-3">
        {playerStats.map((player, index) => (
          <div key={player.player} className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/10 bg-black/25 p-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 font-black">{index + 1}</span>
            <div><b>{player.player}</b><p className="text-xs text-white/45">{player.kills} kills • {player.assists} assists • {player.damage.toLocaleString()} dmg</p></div>
            <Badge className="border-arena-green/40 bg-arena-green/10 text-arena-green">{player.mvpScore}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
}

function TrendingMatches() {
  return (
    <Card className="p-5 sm:p-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.3em] text-arena-lime">Trending matches</p>
          <h3 className="mt-2 text-2xl font-black">Spectator heat map</h3>
        </div>
        <Badge className="border-red-400/40 bg-red-500/15 text-red-100"><Radio size={14} /> Observer feed live</Badge>
      </div>
      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        {trendingMatches.map((match) => (
          <motion.div key={match.title} whileHover={{ y: -6 }} className="rounded-3xl border border-white/10 bg-black/25 p-5">
            <div className="flex items-center justify-between"><StatusBadge status={match.status === "Live" ? "Live" : "Upcoming"} label={match.status} /><span className="text-sm text-white/50">{match.game}</span></div>
            <h4 className="mt-4 text-xl font-black">{match.title}</h4>
            <p className="mt-2 text-sm text-white/50">{match.viewers} spectators tracking this match</p>
            <div className="mt-5 h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-gradient-to-r from-red-400 via-arena-lime to-arena-green" style={{ width: `${match.heat}%` }} /></div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

function StatusBadge({ status, label }: { status: "Live" | "Completed" | "Upcoming"; label: string }) {
  return <Badge className={cn(status === "Live" && "border-red-400/40 bg-red-500/15 text-red-100", status === "Completed" && "border-arena-green/40 bg-arena-green/10 text-arena-green")}>{status === "Live" ? "● " : ""}{label}</Badge>;
}

function SignalMetric({ icon, label, value, tone }: { icon: ReactNode; label: string; value: string; tone: "cyan" | "purple" | "blue" | "green" }) {
  const tones = {
    cyan: "border-arena-green/35 bg-arena-green/10 text-arena-green",
    purple: "border-arena-lime/35 bg-arena-lime/10 text-lime-100",
    blue: "border-arena-blue/35 bg-arena-blue/10 text-blue-100",
    green: "border-arena-green/35 bg-arena-green/10 text-arena-green",
  };
  return <div className={cn("rounded-2xl border p-4", tones[tone])}><div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80">{icon}{label}</div><p className="mt-2 font-display text-xl font-black text-white">{value}</p></div>;
}

function TrackerLine({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return <div className="flex gap-3 rounded-2xl border border-white/10 bg-black/25 p-3"><span className="mt-0.5 text-arena-green">{icon}</span><div><p className="text-xs uppercase tracking-widest text-white/40">{label}</p><p className="text-sm font-semibold text-white/80">{value}</p></div></div>;
}
