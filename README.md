# YouTube Clone

This is a YouTube clone project built using React, Next.js, and TailwindCSS. The project uses Clerk for authentication and authorization. It includes protected routes, a custom layout, and a sidebar with personalized sections.

## run dev instance

```bash
bun run dev:all
```

## DB migrations

- push schema changes:

```bash
bunx drizzle-kit push
```

- DB ui:

```bash
bunx drizzle-kit studio
```

## Stack

- Auth: Clerk, webhook
- DB: Neon / Postgres
- ORM: Drizzle
- auth webhooks: (dev) Ngrok, retry: svix
- RPC:tRPC
- redis, rate limiting: upstash
- Video hosting: Mux
- thumbnails: uploadThing
