import { 
  Heading, 
  Image, 
  Text, 
  Card,
  CardHeader, 
  CardBody,
  CardFooter,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <Card>
        <CardHeader>
          <Heading size="md">{title}</Heading>
        </CardHeader>
        <CardBody>
          <Image objectFit="cover" src={imageSrc} borderRadius="lg" />
          <Text>{description}</Text>
        </CardBody>
        <CardFooter>
          <Heading size="sm" marginRight={2}>See more</Heading>
          <FontAwesomeIcon icon={faArrowRight} />
        </CardFooter>
    </Card>
  );
};

export default ProjectCard;
