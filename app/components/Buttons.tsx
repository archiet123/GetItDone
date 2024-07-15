import { trpc } from "../../server/client";
import { useState, Fragment } from "react";
import { Button } from "@chakra-ui/react";

export default function Buttons() {
  //   async function HandleDeleteRecord() {
  //     const DeleteRecord1 = await trpc.user1.deleteUser.useMutation();
  //     return DeleteRecord1;
  //   }

  //const DeleteRecord1 = trpc.user1.deleteUser.useMutation();

  const { mutate: DeleteRecord1 } = trpc.user1.deleteUser.useMutation({
    onMutate: async (input) => {},
  });

  return (
    <main className="flex flex-col min-h-screen items-center bg-primary text-white">
      <div className="flex flex-col text-white">
        <input id="id" placeholder="input"></input>
        <Button
          className="flex flex-col text-white"
          onClick={() => DeleteRecord1({ input: 1 })}
        >
          click!
        </Button>
      </div>
    </main>
  );
}
