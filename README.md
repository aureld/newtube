# YouTube Clone

This is a YouTube clone project built using React, Next.js, and TailwindCSS. The project uses Clerk for authentication and authorization. It includes protected routes, a custom layout, and a sidebar with personalized sections.

## run dev instance

```bash
bun run dev:all
```

access from: https://marmot-hip-presently.ngrok-free.app/

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

- Auth: Clerk, webhook retry: svix
- DB: Neon / Postgres
- ORM: Drizzle
- webhook testing (dev): Ngrok
