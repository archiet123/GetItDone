import { trpc } from "../../server/client";
import { useState, Fragment } from "react";
import { Button } from "@chakra-ui/react";

export default function Buttons() {
  //   async function HandleDeleteRecord() {
  //     const DeleteRecord1 = await trpc.user1.deleteUser.useMutation();
  //     return DeleteRecord1;
  //   }

  //const DeleteRecord1 = trpc.user1.deleteUser.useMutation();
  const TestRecords = trpc.user1.RecordFetch.useQuery();
  const [description, SetDescription] = useState<string>("");
  const [cuid, SetCuid] = useState<string>("");

  //
  const [updatecuid, Setupdatecuid] = useState<string>("");
  const [update, Setupdate] = useState<string>("");

  const ClearFields = () => {
    Setupdate("");
    Setupdatecuid("");
    SetCuid("");
    SetDescription("");
  };

  const createUser = trpc.user1.createRecord.useMutation({
    onSettled: () => {
      ClearFields();
      TestRecords.refetch();
    },
  });
  const deleteRecord = trpc.user1.deleteUser.useMutation({
    onSettled: () => {
      ClearFields();
      TestRecords.refetch();
    },
  });
  const updateRecord = trpc.user1.updateRecord.useMutation({
    onSettled: () => {
      ClearFields();
      TestRecords.refetch();
    },
  });

  return (
    <main className="flex flex-col items-center bg-primary text-white">
      <div className="flex flex-col text-white p-2">
        <div className="createContainer flex flex-col p-2">
          //create
          <input
            onChange={(e) => SetDescription(e.target.value)}
            id="description"
            placeholder="description value"
            className="p-2 text-stone-950"
            value={description}
          ></input>
          <Button
            className="flex flex-col p-2 text-stone-950"
            onClick={() => createUser.mutate({ description })}
          >
            create
          </Button>
        </div>
        //update
        <div id="updateContainer" className="flex flex-col p-2">
          <input
            onChange={(e) => Setupdatecuid(e.target.value)}
            id="cuid"
            placeholder="cuid to find"
            className="p-2 text-stone-950"
            value={updatecuid}
          ></input>
          <input
            onChange={(e) => Setupdate(e.target.value)}
            id="update"
            placeholder="update to update"
            className="p-2 text-stone-950"
            value={update}
            // type="datetime-local"
          ></input>
          <Button
            className="flex flex-col p-2 text-stone-950"
            onClick={() => updateRecord.mutate({ updatecuid, update })}
          >
            update
          </Button>
        </div>
        //delete
        <div id="deleteContainer" className="flex flex-col p-2">
          <input
            onChange={(e) => SetCuid(e.target.value)}
            id="cuid"
            placeholder="cuid to delete"
            className="p-2 text-stone-950"
            value={cuid}
          ></input>
          <Button
            className="flex flex-col text-white"
            onClick={() => deleteRecord.mutate({ cuid })}
          >
            delete
          </Button>
        </div>
      </div>
    </main>
  );
}
