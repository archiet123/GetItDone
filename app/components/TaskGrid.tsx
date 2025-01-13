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
  Textarea,
  Flex,
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
import { max } from "moment";

export default function TaskGrid() {
  const TaskRecords = trpc.user1.RecordFetch.useQuery();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [DelDescription, SetDelDescription] = useState<string>("");

  const [ModalTaskTitle, SetModalTaskTitle] = useState<string>("");

  const [ModalTaskDescription, SetModalTaskDescription] = useState<string>("");

  const [ModalTaskDatetime, SetModalTaskDatetime] = useState<string>("");

  const [ModalTaskType, SetModalTaskType] = useState<string>("");
  //  const [ModalTaskDatetime, SetModalTaskDatetime] = useState<Date>(new Date());

  const ClearFields = () => {
    SetModalTaskTitle("");
    SetModalTaskDescription("");
    SetModalTaskType("");
  };

  function OpenModal() {
    onOpen();
  }

  function CloseModal(
    ModalTaskTitle: string,
    ModalTaskDescription: string,
    ModalTaskDatetime: string,
    ModalTaskType: string
  ) {
    createTask.mutate({
      ModalTaskTitle,
      ModalTaskDescription,
      ModalTaskDatetime,
      ModalTaskType,
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
          delete tests
        </Button>

        <Button
          textColor={"white"}
          background={"#cc709f"}
          className="ml-3"
          // onClick={() => deleteMany.mutateAsync({ DelDescription })}
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
                // className="m-4 rounded-xl w-full flex flex-col"
                borderRadius={4}
                border={2}
                borderStyle={"solid"}
                borderColor={"#292a3f"}
                padding={0}
                margin={0}
                shadow={"lg"}
                display={"flex"}
                direction={"column"}
              >
                <CardHeader
                  padding={0}
                  background={"#292a3f"}
                  textColor={"#FFFFFF"}
                  className="mb-2 m-2"
                >
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col" id="headingContainer">
                      <Heading size="md">{TaskRecord.TaskTitle}</Heading>
                      <Text>{TaskRecord.TaskType}</Text>
                    </div>

                    <div className="flex flex-col" id="delContainer">
                      <Text className="text-slate-500 flex">
                        {new Date(TaskRecord.DateCreated).toDateString()}
                      </Text>
                      {/* <Text className="text-slate-500 flex">
                        {new Date(TaskRecord.CompleteBy).toDateString()}
                      </Text> */}
                      <Button
                        background={"#292a3f"}
                        _hover={{
                          color: "#292a3f",
                        }}
                        onClick={() => DeleteTask(TaskRecord.id)}
                        display={"flex"}
                        justifyContent={"flex-end"}
                        padding={0}
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
                  </div>
                </CardHeader>
                <CardBody
                  padding={0}
                  background={"#292a3f"}
                  mb={4}
                  marginInline={2}
                  width={"75%"}
                >
                  <p className="line-clamp-1">{TaskRecord.Description}</p>
                </CardBody>
                <CardFooter
                  className="flex relative justify-end"
                  padding={0}
                  m={0}
                  background={"#292a3f"}
                >
                  <Button
                    className="right-0 justify-end"
                    m={2}
                    color={"white"}
                    background={"#cc709f"}
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
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={"6xl"}>
          <ModalOverlay />
          <ModalContent background={"#353453"}>
            <ModalHeader>
              <Text color={"white"}>Create Task</Text>
            </ModalHeader>
            <ModalCloseButton />

            <ModalBody>
              <Box
                className="flex flex-row justify-between min-h-60 w-full"
                id="modalFormContainer"
              >
                <Box
                  className="flex flex-col justify-between w-1/3 mr-3"
                  id="statsContainer"
                >
                  <Input
                    // ref={initialRef}
                    value={ModalTaskTitle}
                    placeholder="Task Title"
                    onChange={(e) => SetModalTaskTitle(e.target.value)}
                    color={"white"}
                  />

                  <Box id="CompleteBy">
                    <Text className="text-gray-400">Complete By:</Text>
                    <Input
                      // placeholder="Complete By"
                      color={"white"}
                      type="datetime-local"
                      value={ModalTaskDatetime}
                      onChange={(e) => SetModalTaskDatetime(e.target.value)}
                    />
                  </Box>

                  <Box id="">
                    <Text className="text-gray-400">Task Type:</Text>
                    <Select
                      color={"white"}
                      onChange={(e) => SetModalTaskType(e.target.value)}
                    >
                      {" "}
                      <option className="text-black" value={"Task"}>
                        Task
                      </option>
                      <option className="text-black" value={"Purchase"}>
                        Purchase
                      </option>
                      <option className="text-black" value={"Reminder"}>
                        Reminder
                      </option>
                    </Select>
                  </Box>
                </Box>
                <Box
                  className="flex flex-col h-full w-1/2 mr-3 min-h-60"
                  id="DescriptionContainer"
                >
                  {" "}
                  <Textarea
                    value={ModalTaskDescription}
                    placeholder="Task Description.."
                    color={"white"}
                    onChange={(e) => SetModalTaskDescription(e.target.value)}
                    minH={60}
                  />
                </Box>
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="blue"
                mr={3}
                onClick={() =>
                  CloseModal(
                    ModalTaskTitle,
                    ModalTaskDescription,
                    ModalTaskDatetime,
                    ModalTaskType
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
