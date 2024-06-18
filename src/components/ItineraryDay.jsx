import { Box, Heading, VStack } from "@chakra-ui/react";
import ItineraryItem from "./ItineraryItem";

const ItineraryDay = ({ day, items }) => {
  return (
    <Box mb={8}>
      <Heading as="h2" size="lg" mb={4}>{day}</Heading>
      <VStack spacing={4}>
        {items.map((item, index) => (
          <ItineraryItem key={index} item={item} />
        ))}
      </VStack>
    </Box>
  );
};

export default ItineraryDay;