export default function Loading() {
  return <main className="container-arena min-h-screen py-16"><div className="h-8 w-48 animate-pulse rounded-full bg-white/10" /><div className="mt-6 h-20 max-w-3xl animate-pulse rounded-3xl bg-white/10" /><div className="mt-10 grid gap-5 md:grid-cols-3">{Array.from({ length: 6 }).map((_, index) => <div key={index} className="h-72 animate-pulse rounded-3xl border border-white/10 bg-white/[0.06]" />)}</div></main>;
}
