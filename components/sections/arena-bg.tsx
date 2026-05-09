export function ArenaBackground() {
  return <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden noise"><div className="absolute inset-0 bg-aurora" /><div className="absolute inset-0 bg-grid bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" /><div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-arena-green/20 blur-3xl" /><div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-arena-lime/15 blur-3xl" /></div>;
}
