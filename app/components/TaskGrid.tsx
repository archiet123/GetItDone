import { SimpleGrid, Box } from "@chakra-ui/react";

export default function TaskGrid() {
  return (
    <main className="top-16 start-1/4 relative right-0 w-1/2">
      <SimpleGrid columns={2} spacing={10}>
        <Box className="bg-primary2 rounded-md" height="140px"></Box>
        <Box className="bg-primary2 rounded-md" height="140px"></Box>
        <Box className="bg-primary2 rounded-md" height="140px"></Box>
        <Box className="bg-primary2 rounded-md" height="140px"></Box>
        <Box className="bg-primary2 rounded-md" height="140px"></Box>
        <Box className="bg-primary2 rounded-md" height="140px"></Box>
      </SimpleGrid>
    </main>
  );
}
