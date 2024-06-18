import { Box, Text } from "@chakra-ui/react";

const ItineraryItem = ({ item }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" mb={4}>
      <Text fontSize="xl" fontWeight="bold">{item.title}</Text>
      <Text>{item.description}</Text>
      <Text fontSize="sm" color="gray.500">{item.time}</Text>
    </Box>
  );
};

export default ItineraryItem;