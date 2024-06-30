import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { publicProcedure, router } from "./trpc";
import { prisma } from "../utils/prisma.server";
import { z } from "zod";
import { User } from "../types/User";

const input: string;
// const user: User | undefined;

const appRouter = router({
  userList: publicProcedure.query(async () => {
    // Retrieve users from a datasource, this is an imaginary database
    const User = await prisma.user.findMany();
    return User;
  }),

  userCreate: publicProcedure.input(z.string()).query(async (opts) => {
    const { input } = opts;

    // Retrieve the user with the given ID
    const user = await prisma.user.create({
      data: {
        name: { opts },
      },
    });

    return user;
  }),
});

// Export type router type signature,
// NOT the router itself.
const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

export type AppRouter = typeof appRouter;