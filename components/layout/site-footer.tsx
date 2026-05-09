import { Badge } from "@/components/ui/badge";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-12">
      <div className="container-arena grid gap-8 md:grid-cols-[1.4fr_.8fr_.8fr]">
        <div>
          <div className="font-display text-3xl font-black tracking-widest">TRXN <span className="neon-text">ARENA</span></div>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/55">Centralized scrim discovery, tournament aggregation, trusted organizer networks, and player reputation systems for the next wave of competitive mobile and PC esports.</p>
          <div className="mt-5 flex flex-wrap gap-2"><Badge>BGMI</Badge><Badge>Valorant</Badge><Badge>Free Fire</Badge><Badge>CODM</Badge></div>
        </div>
        <div><h3 className="font-bold">Platform</h3><p className="mt-3 text-sm text-white/55">Scrims<br />Tournaments<br />Recruitment<br />Arena Wallet</p></div>
        <div><h3 className="font-bold">Trust Layer</h3><p className="mt-3 text-sm text-white/55">Verified organizers<br />Anti-scam scoring<br />Discord sync<br />Live support</p></div>
      </div>
    </footer>
  );
}
