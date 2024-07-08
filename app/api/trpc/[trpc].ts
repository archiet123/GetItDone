import { createNextApiHandler } from "@trpc/server/adapters/next";
import { createContext } from "../../server/trpc/context";
import { appRouter } from "../../server/index";
import type { NextApiRequest, NextApiResponse } from "next";
// create the API handler, but don't return it yet
export default createNextApiHandler({
  router: appRouter,
  createContext,
});
