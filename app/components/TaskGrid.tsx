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
} from "@chakra-ui/react";

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
        {TaskRecords.data?.map((TaskRecord, i) => (
          <SimpleGrid columns={2} padding={0}>
            <Card
              background={"#292a3f"}
              textColor={"#FFFFFF"}
              className="m-4 h-48 rounded-xl w-full"
              borderRadius={4}
              border={2}
              borderStyle={"solid"}
              borderColor={"#292a3f"}
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
          </SimpleGrid>
        ))}

        <Button
          color={"red"}
          background={"red"}
          className="start-72"
          onClick={() => OpenModal()}
        >
          <AddIcon color={"black"}></AddIcon>
        </Button>

        <Button
          color={"white"}
          background={"red"}
          className="start-72"
          onClick={() => deleteMany.mutateAsync({ DelDescription })}
        >
          delete many
        </Button>
      </div>

      {/* Modal */}
      <Box w="100" display="Flex" justifyContent="center">
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                ref={initialRef}
                value={ModalValue}
                placeholder="First name"
                onChange={(e) => SetModalValue(e.target.value)}
              />
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
