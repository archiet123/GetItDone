import { userRouter } from "./trpc/router/user";
import { router } from "./trpc/trpc";

export const appRouter = router({
  user: userRouter,
});

export type AppRouter = typeof appRouter;
