import { trpc } from "../server/client";

export default function Robbery() {
  const GetUsers = trpc.user.completion.useMutation();

  return (
    <main className="flex min-h-screen items-center justify-between bg-primary text-white">
      {JSON.stringify(GetUsers.data)}
    </main>
  );
}
