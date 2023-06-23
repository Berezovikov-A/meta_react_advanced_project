import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import projects from "../assets/data/projects.json"

const ProjectsSection = () => {
  return (
    <FullScreenSection  
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(2,minmax(0,1fr))"
        gridGap={8}
      >
        {projects.map(({title, description, img}) => (
          <ProjectCard
            key={title}
            title={title}
            description={description}
            imageSrc={(() => require(`../assets/images/${img}`))()}
          />
          )
        )}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
