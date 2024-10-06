"use client";

//componets
import GetAll from "../components/GetAll";
import Buttons from "../components/Buttons";
import NavBar from "../components/NavBar";
import TaskGrid from "../components/TaskGrid";

import { trpc } from "../../server/client";
import { Button } from "@chakra-ui/react";

// async function HandleDeleteRecord() {
//   const DeleteRecord1 = await trpc.user1.deleteUser.useMutation();
//   return DeleteRecord1;
// }

export default function Home() {
  return (
    <main className="bg-secondary2 text-white m-auto min-h-screen">
      <NavBar></NavBar>
      <TaskGrid></TaskGrid>
    </main>
  );
}
