import { categoriesRouter } from "@/modules/categories/server/procedures";
import { studioRouter } from "@/modules/studio/server/procedures";
import { videosRouter } from "@/modules/videos/server/procedures";
import { videosViewsRouter } from "@/modules/video-views/server/procedures";
import { videosReactionsRouter } from "@/modules/video-reactions/server/procedures";
import { SubscriptionsRouter } from "@/modules/subscriptions/server/procedures";
import { createTRPCRouter } from "../init";

export const appRouter = createTRPCRouter({
  categories: categoriesRouter,
  studio: studioRouter,
  videos: videosRouter,
  videoViews: videosViewsRouter,
  videoReactions: videosReactionsRouter,
  subscriptions: SubscriptionsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
