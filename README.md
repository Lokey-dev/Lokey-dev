# TRXN Arena

A pitch-ready Next.js 15 mockup for a black-and-green futuristic esports scrim discovery and tournament aggregation platform.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- ShadCN-style UI primitives
- Firebase-ready architecture in `lib/firebase.ts`
- Mock API/data layer in `lib/mock-api.ts` and `lib/mock-data.ts`

## Pages

- `/` cinematic landing page
- `/scrims` scrim discovery with login-gated access, registration timers, roster check-in, payment gating, temporary owner groups, and live slot cards
- `/tournaments` tournament hub with status tabs and brackets preview
- `/spectate` advanced broadcast-style tournament visualization dashboard
- `/organizer` organizer dashboard mockup
- `/profile` player profile system
- `/recruitment` team recruitment section
- `/premium` premium platform feature concepts

## Development

```bash
npm install
npm run dev
```


## Scrim Registration Rules

- Logged-in players see all free and paid scrims that are currently running.
- Registration timers gate every join and payment action; closed rooms cannot collect payment.
- Paid scrims require every teammate to join through the organizer link before checkout unlocks.
- After payment, the roster enters a one-time ID-pass group that exists only until the room or tournament closes.
- Player identity is locked to the same IGN, UID, and active phone number for moderation and rule enforcement.
- Owners use their Discord voice channels as live helpdesks for disputes and missing players.
