import { trpc } from "../../server/client";
import React from "react";
import { useState, Fragment } from "react";

import {
  SimpleGrid,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  extendTheme,
  Select,
} from "@chakra-ui/react";

import { modalTheme } from "./themes/modal";

import { CalendarIcon, AddIcon, WarningIcon, EditIcon } from "@chakra-ui/icons";
import test from "node:test";

export default function TaskGrid() {
  const TaskRecords = trpc.user1.RecordFetch.useQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [DelDescription, SetDelDescription] = useState<string>("");

  const [ModalValue, SetModalValue] = useState<string>("");

  const ClearFields = () => {
    SetModalValue("");
  };

  function OpenModal() {
    onOpen();
  }

  function CloseModal(ModalValue: string) {
    createTask.mutate({ ModalValue });
    onClose();
    ClearFields();
  }

  const deleteMany = trpc.user1.deleteMany.useMutation({
    onSettled: () => {
      TaskRecords.refetch();
    },
  });

  const createTask = trpc.user1.createTask.useMutation({
    onSettled: () => {
      TaskRecords.refetch();
    },
  });

  return (
    <main className="top-16 start-1/4 relative right-0 w-1/2">
      <div className="mappedTasks ">
        <SimpleGrid columns={2} padding={5} spacing={10}>
          {TaskRecords.data?.map((TaskRecord, i) => (
            <Box>
              <Card
                background={"#292a3f"}
                textColor={"#FFFFFF"}
                className="m-4 h-48 rounded-xl w-full"
                borderRadius={4}
                border={2}
                borderStyle={"solid"}
                borderColor={"#292a3f"}
                padding={0}
                margin={0}
              >
                <CardHeader
                  padding={0}
                  background={"#292a3f"}
                  textColor={"#FFFFFF"}
                  className="mb-4"
                >
                  <Heading size="md">{TaskRecord.id}</Heading>
                </CardHeader>
                <CardBody padding={0} background={"#292a3f"}>
                  <Text>{TaskRecord.Description}</Text>
                </CardBody>
              </Card>
            </Box>
          ))}

          <Button
            color={"red"}
            background={"#cc709f"}
            className="w-1/2 start-1/4 top-1/3"
            onClick={() => OpenModal()}
          >
            <AddIcon color={"white"}></AddIcon>
          </Button>
        </SimpleGrid>
        <Button
          textColor={"white"}
          background={"#cc709f"}
          className="w-1/2 start-1/4 mt-10"
          onClick={() => deleteMany.mutateAsync({ DelDescription })}
        >
          delete many
        </Button>
      </div>

      {/* Modal */}
      <Box w="100" display="Flex" justifyContent="center">
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={"xl"}>
          <ModalOverlay />
          <ModalContent background={"#353453"}>
            <ModalHeader>
              <Text color={"white"}>Create Task</Text>
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <SimpleGrid columns={2} spacing={4}>
                <Input
                  margin={3}
                  ref={initialRef}
                  value={ModalValue}
                  placeholder="Task Title"
                  onChange={(e) => SetModalValue(e.target.value)}
                  color={"white"}
                />
                <Input
                  placeholder="Task Description"
                  margin={3}
                  color={"white"}
                  // onChange={(e) => SetModalValue(e.target.value)}
                />
                <Input
                  placeholder="Complete By"
                  margin={3}
                  color={"white"}
                  // onChange={(e) => SetModalValue(e.target.value)}
                />

                <Select margin={3} color={"white"}>
                  {" "}
                  <option className="text-black" value="option1">
                    Option 1
                  </option>
                  <option className="text-black" value="option2">
                    Option 2
                  </option>
                  <option className="text-black" value="option3">
                    Option 3
                  </option>
                </Select>
              </SimpleGrid>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() => CloseModal(ModalValue)}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      {/* Modal */}
    </main>
  );
}
