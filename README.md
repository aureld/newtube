# YouTube Clone

This is a YouTube clone project built using React, Next.js, and TailwindCSS. The project uses Clerk for authentication and authorization. It includes protected routes, a custom layout, and a sidebar with personalized sections.

## Build & run dev instance

bun run dev
bun run build

## DB migrations

- push schema changes:

bunx drizzle-kit push

- DB ui:

bunx drizzle-kit studio

## Stack

- Auth: Clerk
- DB: Neon / Postgres
- ORM: Drizzle
