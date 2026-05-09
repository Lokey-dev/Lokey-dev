import { Search, Users } from "lucide-react";
import { PageShell } from "@/components/sections/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { recruitmentPosts } from "@/lib/mock-data";

export default function RecruitmentPage() {
  return <PageShell eyebrow="Team Recruitment" title="Find rosters, tryouts, and serious teammates faster." description="Role filters, looking-for-team cards, and tryout listings for competitive communities."><div className="glass-card rounded-3xl p-4"><div className="relative"><Search className="absolute left-4 top-3.5 text-white/35" size={18} /><Input className="pl-11" placeholder="Search by role, game, rank, availability..." /></div><div className="mt-4 flex flex-wrap gap-2">{["Entry", "IGL", "Support", "Sniper", "Flex", "Coach"].map((r) => <Badge key={r}>{r}</Badge>)}</div></div><div className="mt-8 grid gap-5 md:grid-cols-3">{recruitmentPosts.map((post) => <Card key={post.handle} className="p-6"><Users className="text-arena-green" /><h3 className="mt-5 text-2xl font-black">{post.handle}</h3><p className="text-arena-lime">{post.role}</p><div className="mt-5 space-y-2 text-sm text-white/60"><p>{post.game} • {post.rank}</p><p>{post.availability}</p><p>{post.goal}</p></div><Button className="mt-6 w-full" variant="secondary">Invite Tryout</Button></Card>)}</div></PageShell>;
}
