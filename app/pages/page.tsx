"use client";

import { createTRPCNext } from "@trpc/next";
import { Fragment, useRef, useState } from "react";
//import { register } from "../../utils/auth.server";
import Image from "next/image";
import { Select, Button, Box } from "@chakra-ui/react";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
//import type { AppRouter } from "../server/trpc/router/index";
import { User } from "../../types/User";
//import { trpc } from "../utils/trpc";

//const initialUsers: IUser[] = handleFetchUsers;

import GetAll from "../components//GetAll";
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-between bg-primary text-white">
      hello
      <GetAll></GetAll>
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
