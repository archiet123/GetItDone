import { number, z } from "zod";
//import { t, publicProcedure } from "../trpc";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//
import { UserTable as Table } from "@prisma/client";
//import { prisma } from "../../../utils/prisma.server";
import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  userList: publicProcedure.query(async () => {
    const Users = await prisma.userTable.findMany();

    return Users;
  }),
  deleteUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const deleteUser = await prisma.userTable.delete({
        where: {
          id: parseInt(input), // what the gay
        },
      });
    }),

  // userCreate: publicProcedure
  //   .input(z.object({ name: z.string() }))
  //   .mutation(async (opts) => {
  //     const { input } = opts;

  //     // Retrieve the user with the given ID
  //     // Create a new user in the database
  //     const createUser = await prisma.user.create({
  //       data: {
  //         name: "asdf",
  //       },
  //     });
  //     return createUser;
  //   }),
});
