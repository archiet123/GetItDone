import { json } from "stream/consumers";
import { prisma } from "./prisma.server";

async function Register() {
  const user = await prisma.user.findMany();
  console.log(JSON.stringify(user));
}

export async function register() {}
