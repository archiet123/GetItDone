"use client";

//componets
import GetAll from "../components/GetAll";
import Buttons from "../components/Buttons";

import { trpc } from "../../server/client";
import { Button } from "@chakra-ui/react";

// async function HandleDeleteRecord() {
//   const DeleteRecord1 = await trpc.user1.deleteUser.useMutation();
//   return DeleteRecord1;
// }

export default function Home() {
  return (
    <main className="bg-primary text-white m-auto min-h-screen">
      <div id="title" className="flex flex-col text-center">
        <h1 className="title">hello world</h1>
      </div>
      <div className="flex flex-col m-4">
        <GetAll></GetAll>
      </div>
      <div className="">
        <Buttons></Buttons>
      </div>
    </main>
  );

  // const FetchUsers = async () => {
  //   const User = trpc.userList;
  // };
  // const createdUser = await trpc.userCreate.mutate({ name: "sachinraja" });

  //USE THIS
  // export async function getStaticProps() {
  //   3  const prisma = new PrismaClient()
  //   4  const posts = await prisma.post.findMany()
  //   5
  //   6  return {
  //   7    props : { posts }
  //   8  }
  //   9}
  // Display list of posts (in /pages/index.tsx)
  // 2export default ({posts}) =>
  // 3  <ul>
  // 4   {posts.map(post => (
  // 5     <li key={post.id}>{post.title}</li>
  // 6    ))}
  // 7  </ul>
  // 8);
}
