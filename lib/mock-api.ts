import { battleRoyaleStandings, liveBracket, organizers, playerStats, premiumFeatures, profile, recruitmentPosts, scrims, teamTracker, tournaments, trendingMatches } from "./mock-data";

const latency = 120;
const resolve = <T>(data: T) => new Promise<T>((ok) => setTimeout(() => ok(data), latency));

export const mockApi = {
  getScrims: () => resolve(scrims),
  getTournaments: () => resolve(tournaments),
  getOrganizers: () => resolve(organizers),
  getPlayerProfile: () => resolve(profile),
  getRecruitmentPosts: () => resolve(recruitmentPosts),
  getPremiumFeatures: () => resolve(premiumFeatures),
  getLiveBracket: () => resolve(liveBracket),
  getBattleRoyaleStandings: () => resolve(battleRoyaleStandings),
  getPlayerStats: () => resolve(playerStats),
  getTeamTracker: () => resolve(teamTracker),
  getTrendingMatches: () => resolve(trendingMatches),
};
