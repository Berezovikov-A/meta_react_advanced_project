import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
    key: 1,
  },
  {
    icon: faGithub,
    url: "https://github.com",
    key: 2,
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
    key: 3,
  },
  {
    icon: faMedium,
    url: "https://medium.com",
    key: 4,
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
    key: 5,
  },
];

const Header = () => {

  const boxElement = useRef();

  useEffect(() => {

    let lastY = 0;

    const handleScroll = () => {

      let currentY = window.scrollY;

      if (currentY > lastY || currentY == 0) {
        boxElement.current.style.transform = "translateY(0)";
      } else {
        boxElement.current.style.transform = "translateY(-200px)";
      }

      
      lastY = currentY;
    }

    document.addEventListener("scroll", handleScroll, false);


    return () => {removeEventListener("scroll", handleScroll)};

  }, [boxElement]);

  const handleClick = anchor => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      ref={boxElement}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      zIndex="90"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <HStack spacing={8}>
            {socials.map(({icon, url, key}) => <a href={url} key={key}><FontAwesomeIcon icon={icon} size="2x" /></a> )}
          </HStack>
          <nav>
            <HStack spacing={8}>
              <a onClick={() => handleClick('projects')} href="/#projects">Projects</a>
              <a onClick={() => handleClick('contactme')} href="/#contact-me">Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};

export default Header;
