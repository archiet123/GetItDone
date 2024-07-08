import { trpc } from "@/app/server/client";
import { appRouter } from "@/app/server/index";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    router: appRouter,
    req,
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
