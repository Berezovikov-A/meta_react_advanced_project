import React from "react";
import { Avatar, Heading, VStack, Stack, HStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profilePicture from "../assets/images/profilepicture.jpg";

const greeting = "Hello, I am Alexey!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <HStack spacing={10}>
      <Avatar src={profilePicture} size={50} />
      <VStack spacing={4} alignContent="center" minW="xl">
        <Heading size="md">{greeting}</Heading>
        <Heading size="xl">{bio1}</Heading>
        <Heading size="xl">{bio2}</Heading>
      </VStack>
    </HStack>
  </FullScreenSection>
);

export default LandingSection;
