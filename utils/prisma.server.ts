import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
declare global {
  var __db: PrismaClient | undefined;
}

async function Main() {
  const user = await prisma.user.findMany();
  console.log(user);
}

Main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export { prisma };

// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient();
//   prisma.$connect();
// } else {
//   if (!global.__db) {
//     global.__db = new PrismaClient();
//     global.__db.$connect();
//   }
//   prisma = global.__db;
// }

// export { prisma };
