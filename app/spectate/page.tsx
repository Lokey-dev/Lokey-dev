import { TournamentVisualizationSystem } from "@/components/sections/tournament-visualization";
import { PageShell } from "@/components/sections/page-shell";

export default function SpectatePage() {
  return (
    <PageShell
      eyebrow="Advanced Visualization"
      title="Watch the tournament like an esports broadcast desk."
      description="Track live brackets, team progression, battle royale points, MVP races, kill leaders, room allocations, and qualification status from a public spectator command center."
    >
      <TournamentVisualizationSystem />
    </PageShell>
  );
}
