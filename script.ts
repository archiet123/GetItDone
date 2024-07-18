import { PrismaClient } from "@prisma/client";
import { trpc } from "./server/client";
const prisma = new PrismaClient();

async function Main() {
  const TestRecords = trpc.user1.RecordFetch.useQuery();
  //   const UserWrite = await prisma.userTable.create({
  //     data: {
  //       name: "Init",
  //       description: "first database commit",
  //     },
  //   });

  console.log(TestRecords);
}

Main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
