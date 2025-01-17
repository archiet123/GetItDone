import { trpc } from "../../server/client";
import { useState, Fragment } from "react";

// async function HandleGetRecords() {
//   const GetRecords = await trpc.user1.userList.useQuery();
//   return GetRecords;
// }

export default function Robbery() {
  const TestRecords = trpc.user1.RecordFetch.useQuery();

  // var date: Date;

  return (
    <main className="flex flex-col items-center bg-primary text-white">
      <div className="flex flex-col ">
        {TestRecords.data?.map((TestRecord, i) => (
          <div
            key={i}
            className="flex flex-col m-2 bg-purple-700 rounded-md p-4"
          >
            <p>Record ID: {TestRecord.id}</p>
            <p>Record CompleteBy: {TestRecord.CompleteBy}</p>
            <p>
              Record DateCreated:{" "}
              {new Date(TestRecord.DateCreated).toDateString()}
            </p>
            <p>Record TestType: {TestRecord.TestType}</p>
            <p>Record Description: {TestRecord.Description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
