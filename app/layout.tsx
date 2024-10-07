import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/app/components/provider";

import { extendTheme } from "@chakra-ui/react";
import { modalTheme } from "./components/themes/modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Get It Done",
  description: "Note & Productivity Tool",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="p-0 m-0">
      <body className={inter.className}>
        <ChakraProvider>
          <Provider>{children}</Provider>
        </ChakraProvider>
      </body>
    </html>
  );
}
