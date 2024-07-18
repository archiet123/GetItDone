import { number, z } from "zod";
//import { t, publicProcedure } from "../trpc";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
//
import { UserTable as Table } from "@prisma/client";
//import { prisma } from "../../../utils/prisma.server";
import { router, publicProcedure } from "../trpc";

export const userRouter = router({
  RecordFetch: publicProcedure.query(async () => {
    const Users = await prisma.testTable.findMany();
    return Users;
  }),
  deleteUser: publicProcedure
    .input(z.object({ cuid: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const deleteUser = await prisma.testTable.delete({
        where: {
          id: input.cuid, // what in the gay
        },
      });
      return deleteUser;
    }),

  createRecord: publicProcedure
    .input(z.object({ description: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.testTable.create({
        data: {
          Description: input.description,
        },
      });
    }),
  updateRecord: publicProcedure
    .input(z.object({ updatecuid: z.string(), update: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.testTable.update({
        where: {
          id: input.updatecuid,
        },
        data: {
          Description: input.update,
        },
      });
    }),
});

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
