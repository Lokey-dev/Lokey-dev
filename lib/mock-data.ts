import type { BattleRoyaleStanding, BracketMatch, Organizer, OwnerRoomPolicy, PlayerProfile, PlayerStat, ScrimAccessStep, ScrimRoom, TeamTrackerStatus, Tournament, TrendingMatch } from "./types";

export const liveStats = [
  { label: "Active Players", value: "128K+", delta: "+18%" },
  { label: "Live Scrims", value: "742", delta: "42 now" },
  { label: "Tournaments Today", value: "96", delta: "24 live" },
  { label: "Prize Pools", value: "₹38L", delta: "weekly" },
];

export const scrims: ScrimRoom[] = [
  { id: "s1", game: "BGMI", organizer: "Nova Circuit", entryFee: "₹40", prizePool: "₹12,000", startTime: "8:30 PM", slots: { filled: 78, total: 100 }, rating: 4.9, verified: true, format: "Squad", skill: "Semi-Pro", region: "India", paid: true, registrationClosesIn: "18m 42s", registrationOpen: true, requiredPlayers: 4, playersCheckedIn: 4, groupJoinLink: "trxn.gg/join/nova-b7", oneTimeGroup: "Nova B7 Paid Lobby", groupExpiresAt: "Deletes 15 min after result upload", ownerRoomGroup: "Nova Circuit ID-Pass Vault", helpdeskDiscordVc: "Nova Helpdesk VC #2", paymentState: "Ready" },
  { id: "s2", game: "Valorant", organizer: "Clutch Labs", entryFee: "Free", prizePool: "XP + VOD", startTime: "9:00 PM", slots: { filled: 8, total: 10 }, rating: 4.8, verified: true, format: "Duo", skill: "Pro", region: "SEA", paid: false, registrationClosesIn: "31m 08s", registrationOpen: true, requiredPlayers: 2, playersCheckedIn: 2, groupJoinLink: "trxn.gg/join/clutch-vc", oneTimeGroup: "Clutch Duo Room", groupExpiresAt: "Deletes when room closes", ownerRoomGroup: "Clutch ID-Pass Drop", helpdeskDiscordVc: "Clutch Labs VC Alpha", paymentState: "Free" },
  { id: "s3", game: "Free Fire", organizer: "Ignite League", entryFee: "₹25", prizePool: "₹5,000", startTime: "7:45 PM", slots: { filled: 41, total: 48 }, rating: 4.7, verified: true, format: "Squad", skill: "Grinder", region: "India", paid: true, registrationClosesIn: "09m 16s", registrationOpen: true, requiredPlayers: 4, playersCheckedIn: 3, groupJoinLink: "trxn.gg/join/ignite-squad", oneTimeGroup: "Ignite Paid FF Room", groupExpiresAt: "Deletes after final screenshot audit", ownerRoomGroup: "Ignite ID-Pass Hub", helpdeskDiscordVc: "Ignite Support VC", paymentState: "Locked" },
  { id: "s4", game: "Call of Duty Mobile", organizer: "Tactical Hub", entryFee: "Free", prizePool: "Rank Points", startTime: "10:15 PM", slots: { filled: 14, total: 20 }, rating: 4.6, verified: false, format: "Solo", skill: "Rookie", region: "MENA", paid: false, registrationClosesIn: "Closed", registrationOpen: false, requiredPlayers: 1, playersCheckedIn: 1, groupJoinLink: "trxn.gg/join/tactical-solo", oneTimeGroup: "Tactical Solo Room", groupExpiresAt: "Deleted", ownerRoomGroup: "Tactical ID-Pass Group", helpdeskDiscordVc: "Tactical Hub VC", paymentState: "Free" },
  { id: "s5", game: "BGMI", organizer: "Apex Scrims", entryFee: "₹60", prizePool: "₹25,000", startTime: "11:00 PM", slots: { filled: 92, total: 100 }, rating: 5.0, verified: true, format: "Squad", skill: "Pro", region: "India", paid: true, registrationClosesIn: "44m 02s", registrationOpen: true, requiredPlayers: 4, playersCheckedIn: 4, groupJoinLink: "trxn.gg/join/apex-pro", oneTimeGroup: "Apex Pro Paid Room", groupExpiresAt: "Deletes when owner ends room", ownerRoomGroup: "Apex ID-Pass Vault", helpdeskDiscordVc: "Apex Claims VC", paymentState: "Ready" },
  { id: "s6", game: "Valorant", organizer: "Spike Factory", entryFee: "₹99", prizePool: "₹18,000", startTime: "6:30 PM", slots: { filled: 6, total: 16 }, rating: 4.8, verified: true, format: "Duo", skill: "Semi-Pro", region: "Europe", paid: true, registrationClosesIn: "Closed", registrationOpen: false, requiredPlayers: 2, playersCheckedIn: 1, groupJoinLink: "trxn.gg/join/spike-duo", oneTimeGroup: "Spike Factory Paid Duo", groupExpiresAt: "Deleted", ownerRoomGroup: "Spike ID-Pass Room", helpdeskDiscordVc: "Spike EU VC", paymentState: "Locked" },
];

export const tournaments: Tournament[] = [
  { id: "t1", title: "TRXN Genesis Cup", game: "Valorant", status: "Live", prizePool: "₹5,00,000", teams: 64, starts: "Live now", organizer: "TRXN Arena" },
  { id: "t2", title: "BGMI Nightfall Series", game: "BGMI", status: "Upcoming", prizePool: "₹2,50,000", teams: 128, starts: "Fri 8 PM", organizer: "Nova Circuit" },
  { id: "t3", title: "Free Fire Rush Masters", game: "Free Fire", status: "Upcoming", prizePool: "₹1,20,000", teams: 96, starts: "Sat 7 PM", organizer: "Ignite League" },
  { id: "t4", title: "CODM Tactical Open", game: "Call of Duty Mobile", status: "Completed", prizePool: "₹80,000", teams: 32, starts: "Completed", organizer: "Tactical Hub" },
];

export const organizers: Organizer[] = [
  { name: "Nova Circuit", tier: "Verified Pro", events: 418, rating: 4.9, trust: 98 },
  { name: "Clutch Labs", tier: "Elite Partner", events: 203, rating: 4.8, trust: 96 },
  { name: "Ignite League", tier: "Community Gold", events: 312, rating: 4.7, trust: 94 },
];

export const profile: PlayerProfile = {
  handle: "ReynaFlux#777",
  role: "Flex IGL",
  rank: "Radiant / Conqueror",
  reputation: 97,
  favoriteGames: ["Valorant", "BGMI", "Call of Duty Mobile"],
  badges: ["Clutch King", "Verified Captain", "Top 1% Grinder", "No-Scam Trust"],
  ign: "TRXNxReynaFlux",
  uid: "UID-7782-4419",
  phone: "+91 98••• ••777",
  identityVerified: true,
};


export const scrimAccessSteps: ScrimAccessStep[] = [
  { title: "Login unlocks live inventory", description: "Authenticated players see every free and paid scrim currently running with live registration timers.", state: "complete" },
  { title: "Registration window check", description: "Join and payment buttons stay disabled after the registration timer closes.", state: "active" },
  { title: "Team group verification", description: "Paid squads must have every player logged in through the organizer join link before payment unlocks.", state: "active" },
  { title: "One-time room access", description: "After payment, TRXN adds the roster to a temporary ID-pass group that expires when the owner closes the room.", state: "locked" },
];

export const ownerRoomPolicies: OwnerRoomPolicy[] = [
  { title: "Owner ID-Pass group", description: "Every organizer creates a controlled group for room ID/password drops and match announcements." },
  { title: "Auto-delete after completion", description: "One-time room groups are removed after tournament completion, result audit, or owner room expiry." },
  { title: "Player identity lock", description: "Every player must keep the same IGN, UID, and active phone number for no-show and rule-violation handling." },
  { title: "Discord VC helpdesk", description: "Organizer-specific Discord voice channels handle live disputes, missing players, and urgent support." },
];

export const recruitmentPosts = [
  { handle: "MaviX", role: "Entry Fragger", game: "Valorant", rank: "Immortal 2", availability: "Night scrims", goal: "Looking for Tier-2 roster" },
  { handle: "RogueAadi", role: "IGL", game: "BGMI", rank: "Conqueror", availability: "Daily 8-12", goal: "Paid tournament squad" },
  { handle: "NeonByte", role: "Support", game: "Free Fire", rank: "Grandmaster", availability: "Weekends", goal: "Tryout listings" },
];

export const premiumFeatures = [
  "AI skill ranking", "Global leaderboard", "Organizer verification", "Anti-scam trust engine", "Live match tracking", "Discord integration", "Arena wallet", "Smart notifications"
];


export const liveBracket: BracketMatch[] = [
  { id: "b1", round: "Quarterfinal", lane: 1, status: "Completed", startsIn: "FT", map: "Ascent", teams: [{ name: "Velocity X", seed: 1, score: 13, status: "advanced" }, { name: "Neon Ronin", seed: 8, score: 9, status: "eliminated" }] },
  { id: "b2", round: "Quarterfinal", lane: 2, status: "Live", startsIn: "07:42", map: "Bind", teams: [{ name: "Rogue Aces", seed: 4, score: 11, status: "playing" }, { name: "Nova Circuit", seed: 5, score: 10, status: "playing" }] },
  { id: "b3", round: "Semifinal", lane: 1, status: "Upcoming", startsIn: "24:00", map: "Haven", teams: [{ name: "Velocity X", seed: 1, score: 0, status: "waiting" }, { name: "TBD Winner", seed: 0, score: 0, status: "waiting" }] },
  { id: "b4", round: "Grand Final", lane: 1, status: "Upcoming", startsIn: "58:00", map: "Lotus", teams: [{ name: "Upper Finalist", seed: 0, score: 0, status: "waiting" }, { name: "Lower Finalist", seed: 0, score: 0, status: "waiting" }] },
];

export const battleRoyaleStandings: BattleRoyaleStanding[] = [
  { rank: 1, team: "Apex Predators", game: "BGMI", placement: 42, kills: 88, points: 130, trend: "up", qualified: true },
  { rank: 2, team: "Hydra Volt", game: "BGMI", placement: 39, kills: 81, points: 120, trend: "stable", qualified: true },
  { rank: 3, team: "Ignite Rush", game: "Free Fire", placement: 34, kills: 92, points: 118, trend: "up", qualified: true },
  { rank: 4, team: "Tactical Hub", game: "Call of Duty Mobile", placement: 31, kills: 70, points: 101, trend: "down", qualified: false },
  { rank: 5, team: "Shadow Syndicate", game: "BGMI", placement: 28, kills: 74, points: 98, trend: "up", qualified: false },
];

export const playerStats: PlayerStat[] = [
  { player: "ReynaFlux", team: "Velocity X", role: "Duelist", kills: 54, assists: 18, damage: 8120, mvpScore: 98 },
  { player: "MaviX", team: "Rogue Aces", role: "Entry", kills: 49, assists: 21, damage: 7740, mvpScore: 94 },
  { player: "AadiIGL", team: "Apex Predators", role: "IGL", kills: 43, assists: 32, damage: 6900, mvpScore: 91 },
  { player: "NeonByte", team: "Ignite Rush", role: "Support", kills: 38, assists: 40, damage: 6520, mvpScore: 88 },
];

export const teamTracker: TeamTrackerStatus = {
  team: "Nova Circuit",
  currentRound: "Quarterfinal — Map 2",
  room: "Arena Room B7 / Observer Slot 03",
  matchTiming: "Live now • next tactical pause in 02:18",
  opponentStatus: "Rogue Aces leading by 1 round",
  progressionStage: "Winner advances to Semifinal vs Velocity X",
  qualificationStatus: "In Danger",
};

export const trendingMatches: TrendingMatch[] = [
  { title: "Rogue Aces vs Nova Circuit", game: "Valorant", viewers: "48.2K", heat: 97, status: "Live" },
  { title: "Apex Predators Drop Zone 4", game: "BGMI", viewers: "31.7K", heat: 89, status: "Final Map" },
  { title: "Ignite Rush Survival Push", game: "Free Fire", viewers: "19.4K", heat: 82, status: "Starting" },
];
