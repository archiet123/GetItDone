import { register } from "../../utils/auth.server";
import Image from "next/image";
import { Select, Button } from "@chakra-ui/react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>hello world</p>
      <Button onClick={(e: any) => register()}>hi</Button>
    </main>
  );
}
