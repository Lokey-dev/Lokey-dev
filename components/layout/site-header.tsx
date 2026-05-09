"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Arena" },
  { href: "/scrims", label: "Scrims" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/spectate", label: "Spectate" },
  { href: "/organizer", label: "Organizer" },
  { href: "/profile", label: "Profile" },
  { href: "/recruitment", label: "Teams" },
  { href: "/premium", label: "Premium" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-arena-void/70 backdrop-blur-2xl">
      <nav className="container-arena flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-arena-green to-arena-lime text-black shadow-neon"><ShieldCheck /></span>
          <span className="font-display text-xl font-black tracking-widest">TRXN <span className="neon-text">ARENA</span></span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map((link) => <Link key={link.href} href={link.href} className={cn("rounded-full px-4 py-2 text-sm font-semibold text-white/60 transition hover:bg-white/10 hover:text-white", pathname === link.href && "bg-white/10 text-white")}>{link.label}</Link>)}
        </div>
        <Button className="hidden lg:inline-flex" size="sm">Join Beta</Button>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && <div className="container-arena grid gap-2 pb-5 lg:hidden">{links.map((link) => <Link onClick={() => setOpen(false)} key={link.href} href={link.href} className="rounded-2xl bg-white/5 px-4 py-3 text-white/80">{link.label}</Link>)}</div>}
    </header>
  );
}
