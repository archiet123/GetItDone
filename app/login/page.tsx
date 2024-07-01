"use client";

import { Fragment, useRef, useState } from "react";
import { register } from "../utils/auth.server";
import Image from "next/image";
import { Select, Button, Box } from "@chakra-ui/react";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/trpc/router/index";
import { User } from "../types/User";
//import { trpc } from "../utils/trpc";

import {
  splitLink,
  unstable_httpBatchStreamLink,
  unstable_httpSubscriptionLink,
} from "@trpc/client";

//Initialize the tRPC client
const trpc = createTRPCClient<AppRouter>({
  links: [
    splitLink({
      condition: (op) => op.type === "subscription",
      true: unstable_httpSubscriptionLink({
        url: "http://localhost:3000",
      }),
      false: unstable_httpBatchStreamLink({
        url: "http://localhost:3000",
      }),
    }),
  ],
});

/////////////database queries
//const allUsers = await trpc.userList.query();
//console.log("All users:", allUsers);

const handleFetchUsers = async () => {
  //const allUsers = await trpc.userList.query();
  const allUsers = await trpc.users.userList.query();
  //const createdUser = await trpc.userCreate.mutate({ name: "test1" });
  console.log(allUsers);
};

// const createdUser = trpc.userCreate.mutate({ name: "test1" });
// console.log("Created user:", createdUser);
/////////////

//const initialUsers: IUser[] = handleFetchUsers;

export default function Home() {
  //const [Users, setProducts] = useState(initialUsers);
  return (
    <main className="flex min-h-screen items-center justify-between bg-primary text-white">
      <p>Hello World!</p>
      <Button onClick={handleFetchUsers}>button</Button>

      {/* <>
        {Users.map((User, i) => (
          <Box padding={0} key={i}>
            <h1>{User.name}</h1>
          </Box>
        ))}
      </> */}
    </main>
  );
}

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
