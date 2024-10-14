import Icon from "../faviconOld.png";
import Image from "next/image";
import { CalendarIcon, AddIcon, WarningIcon, EditIcon } from "@chakra-ui/icons";
import { Button, ButtonGroup, SimpleGrid, Text } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <main className="absolute left-0 bg-primary2 w-72 h-screen">
      <div className="text-center">
        {/* <Image
          className="object-cover relative size-56 left-5 mb-10"
          src={Icon}
          alt="Icon"
        /> */}

        <Text
          className="mb-10"
          fontSize={72}
          fontFamily={"monospace"}
          fontWeight={"bold"}
        >
          Get It Done
        </Text>

        <div className="button mb-4">
          <Button className="flex-col" onClick={() => console.log("clicked")}>
            <EditIcon></EditIcon>
          </Button>
          <p className="">Tasks</p>
        </div>

        <div className="button mb-4" onClick={() => console.log("clicked")}>
          <Button className="flex-col">
            <CalendarIcon></CalendarIcon>
          </Button>
          <p className="">Calendar</p>
        </div>

        <p className="">3</p>
        <p className="">4</p>
        <p className="">5</p>
      </div>
    </main>
  );
}
