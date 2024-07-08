import { z } from "zod";
import { t, publicProcedure } from "../trpc";
//
import { prisma } from "../../../utils/prisma.server";

export const userRouter = t.router({
  userList: publicProcedure.query(async () => {
    const User = await prisma.user.findMany();
    return User;
  }),

  userCreate: publicProcedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;

      // Retrieve the user with the given ID
      // Create a new user in the database
      const createUser = await prisma.user.create({
        data: {
          name: "asdf",
        },
      });
      return createUser;
    }),
  worldGreeting: publicProcedure.query(async () => {
    return {
      message: "Hello World!",
    };
  }),
});
