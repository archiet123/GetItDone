import { trpc } from "../../server/client";
import React from "react";
import { useState, Fragment } from "react";
import TaskFunctions from "./TaskFunctions";

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

import {
  CalendarIcon,
  AddIcon,
  WarningIcon,
  DeleteIcon,
  EditIcon,
  InfoIcon,
} from "@chakra-ui/icons";
import test from "node:test";
import { complex } from "framer-motion";

export default function TaskGrid() {
  const TaskRecords = trpc.user1.RecordFetch.useQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [DelDescription, SetDelDescription] = useState<string>("");

  const [ModalTaskTitle, SetModalTaskTitle] = useState<string>("");

  const [ModalTaskDescription, SetModalTaskDescription] = useState<string>("");

  const [ModalTaskDatetime, SetModalTaskDatetime] = useState<string>("");
  //  const [ModalTaskDatetime, SetModalTaskDatetime] = useState<Date>(new Date());

  const ClearFields = () => {
    SetModalTaskTitle("");
    SetModalTaskDescription("");
  };

  function OpenModal() {
    onOpen();
  }

  function CloseModal(
    ModalTaskTitle: string,
    ModalTaskDescription: string,
    ModalTaskDatetime: string
  ) {
    createTask.mutate({
      ModalTaskTitle,
      ModalTaskDescription,
      ModalTaskDatetime,
    });
    onClose();
    ClearFields();
  }

  function CompleteTask(TaskID: string) {
    completeTask.mutate({
      TaskID,
    });
  }

  function DeleteTask(TaskID: string) {
    deleteTask.mutate({
      TaskID,
    });
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

  const deleteTask = trpc.user1.deleteTask.useMutation({
    onSettled: () => {
      TaskRecords.refetch();
    },
  });

  const completeTask = trpc.user1.completeTask.useMutation({
    onSettled: () => {
      TaskRecords.refetch();
    },
  });

  return (
    <main className="top-16 relative w-3/4 translate-x-1/4">
      <div className="w-full p-5 relative right-0 flex flex-row justify-end">
        <Button
          color={"red"}
          background={"#cc709f"}
          className="ml-3"
          onClick={() => OpenModal()}
        >
          <AddIcon color={"white"}></AddIcon>
        </Button>

        <Button
          textColor={"white"}
          background={"#cc709f"}
          className="ml-3"
          onClick={() => deleteMany.mutateAsync({ DelDescription })}
        >
          delete many
        </Button>

        <Button
          textColor={"white"}
          background={"#cc709f"}
          className="ml-3"
          onClick={() => deleteMany.mutateAsync({ DelDescription })}
        >
          <InfoIcon color={"white"}></InfoIcon>
        </Button>
      </div>

      <div className="mappedTasks ">
        <SimpleGrid columns={2} padding={5} spacing={10}>
          {TaskRecords.data?.map((TaskRecord, i) => (
            <Box>
              <Card
                background={"#292a3f"}
                textColor={"#FFFFFF"}
                className="m-4 rounded-xl w-full"
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
                  className="mb-4 m-2"
                >
                  <div className="flex flex-row justify-between ">
                    <Heading size="md">{TaskRecord.TaskTitle}</Heading>
                    <Button
                      background={"#292a3f"}
                      _hover={{
                        color: "#292a3f",
                      }}
                      onClick={() => DeleteTask(TaskRecord.id)}
                    >
                      <DeleteIcon
                        boxSize={6}
                        color={"white"}
                        _hover={{
                          color: "#FF0000",
                        }}
                      ></DeleteIcon>
                    </Button>
                  </div>
                </CardHeader>
                <CardBody padding={0} background={"#292a3f"} m={2}>
                  <Text>{TaskRecord.Description}</Text>
                  <Text>
                    {/* {new Date(TaskRecord.CompleteBy).toLocaleDateString()} */}
                  </Text>
                  <Text>{new Date(TaskRecord.DateCreated).toDateString()}</Text>
                </CardBody>
                <CardFooter
                  className="flex relative"
                  padding={0}
                  m={0}
                  background={"#292a3f"}
                >
                  <Button
                    className=""
                    m={2}
                    color={"white"}
                    background={"#cc709f"}
                    right={0}
                    position={"relative"}
                    onClick={() => CompleteTask(TaskRecord.id)}
                  >
                    Resolve
                  </Button>
                </CardFooter>
              </Card>
            </Box>
          ))}
        </SimpleGrid>
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
                  // ref={initialRef}
                  value={ModalTaskTitle}
                  placeholder="Task Title"
                  onChange={(e) => SetModalTaskTitle(e.target.value)}
                  color={"white"}
                />
                <Input
                  value={ModalTaskDescription}
                  placeholder="Task Description"
                  margin={3}
                  color={"white"}
                  onChange={(e) => SetModalTaskDescription(e.target.value)}
                />
                <Input
                  // placeholder="Complete By"
                  margin={3}
                  color={"white"}
                  type="datetime-local"
                  value={ModalTaskDatetime}
                  onChange={(e) => SetModalTaskDatetime(e.target.value)}

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
                onClick={() =>
                  CloseModal(
                    ModalTaskTitle,
                    ModalTaskDescription,
                    ModalTaskDatetime
                  )
                }
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
