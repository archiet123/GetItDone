// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();

// async function Main() {
//   //const user = await prisma.userTable.findMany();
//   const UserWrite = await prisma.userTable.create({
//     data: {
//       name: "Init",
//       description: "first database commit",
//     },
//   });

//   console.log(UserWrite);
// }

// Main()
//   .catch((e) => {
//     console.error(e.message);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
