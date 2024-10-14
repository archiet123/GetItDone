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
    const Users = await prisma.taskRecords.findMany();
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

  // createRecord: publicProcedure
  //   .input(z.object({ description: z.string() }))
  //   .mutation(async ({ input }) => {
  //     await prisma.taskRecords.create({
  //       data: {
  //         Description: input.description,
  //       },
  //     });
  //   }),
  updateRecord: publicProcedure
    .input(z.object({ updatecuid: z.string(), update: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.taskRecords.update({
        where: {
          id: input.updatecuid,
        },
        data: {
          Description: input.update,
        },
      });
    }),
  createTask: publicProcedure
    .input(z.object({ ModalTaskTitle: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.taskRecords.create({
        data: {
          TaskTitle: input.ModalTaskTitle,
          Description: "test",
        },
      });
    }),
  deleteMany: publicProcedure
    .input(z.object({ DelDescription: z.string() }))
    .mutation(async ({ input }) => {
      await prisma.taskRecords.deleteMany({
        where: {
          Description: {
            contains: "test",
          },
        },
      });
    }),
});

/////////////////////Backup///////////////////

// import { number, z } from "zod";
// //import { t, publicProcedure } from "../trpc";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// //
// import { UserTable as Table } from "@prisma/client";
// //import { prisma } from "../../../utils/prisma.server";
// import { router, publicProcedure } from "../trpc";

// export const userRouter = router({
//   RecordFetch: publicProcedure.query(async () => {
//     const Users = await prisma.testTable.findMany();
//     return Users;
//   }),
//   deleteUser: publicProcedure
//     .input(z.object({ cuid: z.string() }))
//     .mutation(async (opts) => {
//       const { input } = opts;
//       const deleteUser = await prisma.testTable.delete({
//         where: {
//           id: input.cuid, // what in the gay
//         },
//       });
//       return deleteUser;
//     }),

//   createRecord: publicProcedure
//     .input(z.object({ description: z.string() }))
//     .mutation(async ({ input }) => {
//       await prisma.testTable.create({
//         data: {
//           Description: input.description,
//         },
//       });
//     }),
//   updateRecord: publicProcedure
//     .input(z.object({ updatecuid: z.string(), update: z.string() }))
//     .mutation(async ({ input }) => {
//       await prisma.testTable.update({
//         where: {
//           id: input.updatecuid,
//         },
//         data: {
//           Description: input.update,
//         },
//       });
//     }),
//   createTask: publicProcedure
//     .input(z.object({ ModalValue: z.string() }))
//     .mutation(async ({ input }) => {
//       await prisma.testTable.create({
//         data: {
//           Description: input.ModalValue,
//         },
//       });
//     }),
//   deleteMany: publicProcedure
//     .input(z.object({ DelDescription: z.string() }))
//     .mutation(async ({ input }) => {
//       await prisma.testTable.deleteMany({
//         where: {
//           Description: {
//             contains: "test",
//           },
//         },
//       });
//     }),
// });
