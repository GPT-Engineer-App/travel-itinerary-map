import { Container, Heading, VStack } from "@chakra-ui/react";
import ItineraryDay from "../components/ItineraryDay";
import ItineraryMap from "../components/ItineraryMap";

const itinerary = [
  {
    day: "Day 1",
    items: [
      { title: "Visit Museum", description: "Explore the local museum.", time: "10:00 AM" },
      { title: "Lunch at Central Park", description: "Enjoy a picnic lunch.", time: "12:00 PM" },
    ],
  },
  {
    day: "Day 2",
    items: [
      { title: "Hiking", description: "Hike the nearby trails.", time: "9:00 AM" },
      { title: "Dinner at Downtown", description: "Dine at a popular restaurant.", time: "7:00 PM" },
    ],
  },
];

const locations = [
  { name: "Museum", position: [51.505, -0.09] },
  { name: "Central Park", position: [51.51, -0.1] },
  { name: "Hiking Trail", position: [51.52, -0.12] },
  { name: "Downtown Restaurant", position: [51.515, -0.13] },
];

const Index = () => {
  return (
    <Container maxW="container.md" py={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">Travel Itinerary</Heading>
      <VStack spacing={8}>
        {itinerary.map((day, index) => (
          <ItineraryDay key={index} day={day.day} items={day.items} />
        ))}
        <ItineraryMap locations={locations} />
      </VStack>
    </Container>
  );
};

export default Index;