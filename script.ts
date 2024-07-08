import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function Main() {
  const user = await prisma.user.findMany();
  // const user = await prisma.user.create({
  //   data: {
  //     name: "destroy",
  //   },
  // });

  console.log(user);
}

Main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
