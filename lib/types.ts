export type Game = "BGMI" | "Free Fire" | "Valorant" | "Call of Duty Mobile";
export type SkillLevel = "Rookie" | "Grinder" | "Semi-Pro" | "Pro";
export type Region = "India" | "SEA" | "MENA" | "Europe";

export interface ScrimRoom {
  id: string;
  game: Game;
  organizer: string;
  entryFee: string;
  prizePool: string;
  startTime: string;
  slots: { filled: number; total: number };
  rating: number;
  verified: boolean;
  format: "Solo" | "Duo" | "Squad";
  skill: SkillLevel;
  region: Region;
  paid: boolean;
  registrationClosesIn: string;
  registrationOpen: boolean;
  requiredPlayers: number;
  playersCheckedIn: number;
  groupJoinLink: string;
  oneTimeGroup: string;
  groupExpiresAt: string;
  ownerRoomGroup: string;
  helpdeskDiscordVc: string;
  paymentState: "Free" | "Locked" | "Ready";
}

export interface Tournament {
  id: string;
  title: string;
  game: Game;
  status: "Upcoming" | "Live" | "Completed";
  prizePool: string;
  teams: number;
  starts: string;
  organizer: string;
}

export interface Organizer {
  name: string;
  tier: string;
  events: number;
  rating: number;
  trust: number;
}

export interface PlayerProfile {
  handle: string;
  role: string;
  rank: string;
  reputation: number;
  favoriteGames: Game[];
  badges: string[];
  ign: string;
  uid: string;
  phone: string;
  identityVerified: boolean;
}

export interface BracketTeam {
  name: string;
  seed: number;
  score: number;
  status: "advanced" | "eliminated" | "playing" | "waiting";
}

export interface BracketMatch {
  id: string;
  round: "Round 1" | "Quarterfinal" | "Semifinal" | "Grand Final";
  lane: number;
  status: "Live" | "Completed" | "Upcoming";
  startsIn: string;
  map: string;
  teams: [BracketTeam, BracketTeam];
}

export interface BattleRoyaleStanding {
  rank: number;
  team: string;
  game: Game;
  placement: number;
  kills: number;
  points: number;
  trend: "up" | "down" | "stable";
  qualified: boolean;
}

export interface PlayerStat {
  player: string;
  team: string;
  role: string;
  kills: number;
  assists: number;
  damage: number;
  mvpScore: number;
}

export interface TeamTrackerStatus {
  team: string;
  currentRound: string;
  room: string;
  matchTiming: string;
  opponentStatus: string;
  progressionStage: string;
  qualificationStatus: "Qualified" | "In Danger" | "Eliminated" | "Pending";
}

export interface TrendingMatch {
  title: string;
  game: Game;
  viewers: string;
  heat: number;
  status: "Live" | "Starting" | "Final Map";
}


export interface ScrimAccessStep {
  title: string;
  description: string;
  state: "complete" | "active" | "locked";
}

export interface OwnerRoomPolicy {
  title: string;
  description: string;
}
