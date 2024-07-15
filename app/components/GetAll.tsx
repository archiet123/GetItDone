import { trpc } from "../../server/client";
import { useState, Fragment } from "react";

// async function HandleGetRecords() {
//   const GetRecords = await trpc.user1.userList.useQuery();
//   return GetRecords;
// }

export default function Robbery() {
  const UserRecords = trpc.user1.userList.useQuery();

  return (
    <main className="flex flex-col min-h-screen items-center bg-primary text-white">
      <ul>
        {UserRecords.data?.map((UserRecord, i) => (
          <Fragment key={i}>
            {UserRecord.name} {UserRecord.description}
          </Fragment>
        ))}
      </ul>
    </main>
  );
}
