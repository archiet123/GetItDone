"use client";

import { register } from "../utils/auth.server";
import Image from "next/image";
import { Select, Button } from "@chakra-ui/react";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/index";
import { User } from "../types/User";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

const createdUser = trpc.userCreate.mutate({ name: "sachinraja" });
//    ^?
console.log("Created user:", createdUser);

// const FetchUsers = async () => {
//   const User = trpc.userList;
// };

// const createdUser = await trpc.userCreate.mutate({ name: "sachinraja" });

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <p></p>
//       <Button onClick={FetchUsers}>hi</Button>
//     </main>
//   );
// }
