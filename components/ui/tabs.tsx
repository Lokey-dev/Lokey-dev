"use client";

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TabPill({ active, children, onClick }: { active?: boolean; children: ReactNode; onClick?: () => void }) {
  return <button onClick={onClick} className={cn("rounded-full border px-5 py-2 text-sm font-bold transition", active ? "border-arena-cyan bg-arena-cyan text-black shadow-neon" : "border-white/10 bg-white/5 text-white/65 hover:bg-white/10 hover:text-white")}>{children}</button>;
}
