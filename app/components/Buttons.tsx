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
  const [datetime, SetDateTime] = useState<string>("");

  const ClearDeleteField = () => {
    SetCuid("");
  };

  const ClearDescFields = () => {
    SetDescription("");
  };

  const createUser = trpc.user1.createRecord.useMutation({
    onSettled: () => {
      ClearDescFields();
      TestRecords.refetch();
    },
  });
  const deleteRecord = trpc.user1.deleteUser.useMutation({
    onSettled: () => {
      ClearDeleteField();
      TestRecords.refetch();
    },
  });
  const updateRecord = trpc.user1.updateRecord.useMutation({
    onSettled: () => {
      ClearDeleteField();
      TestRecords.refetch();
    },
  });

  return (
    <main className="flex flex-col items-center bg-primary text-white">
      <div className="flex flex-col text-white p-2">
        <div className="createContainer flex flex-col p-2">
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

        <div id="updateContainer" className="flex flex-col p-2">
          <input
            onChange={(e) => SetCuid(e.target.value)}
            id="cuid"
            placeholder="cuid to update"
            className="p-2 text-stone-950"
            value={cuid}
          ></input>
          <input
            onChange={(e) => SetDateTime(e.target.value)}
            id="datetime"
            placeholder="datetime value"
            className="p-2 text-stone-950"
            value={datetime}
            type="datetime-local"
          ></input>
          <Button
            className="flex flex-col p-2 text-stone-950"
            onClick={() => updateRecord.mutate({ cuid, datetime })}
          >
            update
          </Button>
        </div>

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
