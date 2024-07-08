import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { publicProcedure, router } from "../trpc";
import { prisma } from "../../../utils/prisma.server";
import { z } from "zod";
import { User } from "../../../types/User";

//const input: string;
// const user: User | undefined;

// const appRouter = router({
//   userList: publicProcedure.query(async () => {
//     const User = await prisma.user.findMany();
//     return User;
//   }),

//   userCreate: publicProcedure
//     .input(z.object({ name: z.string() }))
//     .mutation(async (opts) => {
//       const { input } = opts;

//       // Retrieve the user with the given ID
//       // Create a new user in the database
//       const createUser = await prisma.user.create({
//         data: {
//           name: "asdf",
//         },
//       });
//       return createUser;
//     }),
// });

// export type AppRouter = typeof appRouter;
// // Export type router type signature,
// // NOT the router itself.
// const server = createHTTPServer({
//   router: appRouter,
// });

// server.listen(3000);

import { t } from "../trpc";

//import { notesRouter } from "./notes";
import { userRouter } from "./user";

export const appRouter = t.router({
  users: userRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;