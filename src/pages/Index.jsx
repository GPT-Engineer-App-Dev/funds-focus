import { Box, Container, Flex, Heading, Text, VStack, HStack, Spacer, Image, Link } from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} align="center">
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Financial Times
        </Heading>
        <Spacer />
        <HStack spacing={4} display={{ base: "none", md: "flex" }}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">World</Link>
          <Link href="#" color="white">Business</Link>
          <Link href="#" color="white">Tech</Link>
          <Link href="#" color="white">Markets</Link>
          <Link href="#" color="white">Opinion</Link>
        </HStack>
        <Box display={{ base: "block", md: "none" }}>
          <FaBars />
        </Box>
      </Flex>

      {/* Main Content Area */}
      <Flex direction={{ base: "column", md: "row" }} mt={4}>
        {/* Articles Section */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="Article Image" />
              <Heading as="h2" size="md" mt={2}>Article Title 1</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
            <Box>
              <Image src="https://via.placeholder.com/800x400" alt="Article Image" />
              <Heading as="h2" size="md" mt={2}>Article Title 2</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar Section */}
        <Box flex="1" bg="gray.100" p={4}>
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="white" p={4} boxShadow="md">
              <Heading as="h4" size="sm">Advertisement</Heading>
              <Text mt={2}>Ad content goes here.</Text>
            </Box>
            <Box bg="white" p={4} boxShadow="md">
              <Heading as="h4" size="sm">Additional Content</Heading>
              <Text mt={2}>Additional content goes here.</Text>
            </Box>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;