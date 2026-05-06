import { PremiumFeature } from "@/components/sections/cards";
import { PageShell } from "@/components/sections/page-shell";
import { Card } from "@/components/ui/card";
import { premiumFeatures } from "@/lib/mock-data";

export default function PremiumPage() {
  return <PageShell eyebrow="Premium Concepts" title="Investor-ready systems that make TRXN defensible." description="Mockups for the trust, ranking, wallet, notification, and realtime layers that turn discovery into a full esports operating system."><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{premiumFeatures.map((feature, index) => <PremiumFeature key={feature} title={feature} index={index} />)}</div><Card className="mt-8 p-6"><h2 className="font-display text-3xl font-black">Realtime architecture preview</h2><div className="mt-6 grid gap-4 md:grid-cols-4">{["Firebase Auth", "Firestore Rooms", "Cloud Functions", "FCM Notifications"].map((item) => <div key={item} className="rounded-2xl border border-arena-cyan/20 bg-arena-cyan/10 p-4 text-center font-bold">{item}</div>)}</div></Card></PageShell>;
}
