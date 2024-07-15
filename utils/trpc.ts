// import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
// import { loggerLink } from "@trpc/client";
// import { createTRPCNext } from "@trpc/next";
// import type { AppRouter } from "../server/index";
// //import superjson from "superjson";
// import { initTRPC, TRPCError } from "@trpc/server";
// import type { Context } from "../server/context";

// import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
// import { loggerLink } from "@trpc/client";
// import { createTRPCNext } from "@trpc/next";
// import type { AppRouter } from "../server/index";
// import { createTRPCReact } from "@trpc/react-query";
// //import superjson from "superjson";

// // export const t = initTRPC.context<Context>().create({
// //   //transformer: superjson,
// //   errorFormatter({ shape }) {
// //     return shape;
// //   },
// // });

// const getBaseUrl = () => {
//   if (typeof window !== "undefined") return ""; // browser should use relative url
//   if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
//   return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
// };

// export const trpc = createTRPCNext<AppRouter>({
//   config() {
//     return {
//       //transformer: superjson,
//       links: [
//         loggerLink({
//           enabled: (opts) =>
//             process.env.NODE_ENV === "development" ||
//             (opts.direction === "down" && opts.result instanceof Error),
//         }),
//         httpBatchLink({
//           url: `${getBaseUrl()}/api/trpc`,
//         }),
//       ],
//     };
//   },
//   ssr: false,
// });
