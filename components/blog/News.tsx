import React from "react";
import { Center, Heading, Text, Box, Button } from "@chakra-ui/react";
import Image from "next/image";
import { Player } from "video-react";

const Blog = ({ data, index }) => {
  return (
    <Box mb="2em" width={"100%"}>
      <Box
        width={"100%"}
        display={"flex"}
        justifyContent="center"
        alignItems={"center"}
        flexDirection={"column"}
        height="100%"
        backgroundRepeat={"repeat"}
        backgroundPosition="center"
        backgroundSize={"cover"}
        backgroundImage={"/gradiendFrame.png"}
      >
        <Center
          justifyContent={"space-between"}
          flexDirection={"column"}
          width={"100%"}
          height="100%"
          backgroundRepeat={"repeat"}
          backgroundPosition="center"
          backgroundSize={"cover"}
        >
          <Box width={"90%"} mt="2rem" position={"relative"}>
            <Player
              playsInline
              poster="/galleryPlaceholder.png"
              src="https://res.cloudinary.com/dwjlja8hw/video/upload/v1680171727/videoplayback_mq9lqz.mp4"
            />
          </Box>

          <Box width={"90%"} mt="1rem" mb="2rem">
            <Text as="h3" color="white">
              nanobots will plug our brains straight into the cloud
            </Text>
          </Box>
        </Center>
      </Box>
    </Box>
  );
};

export default Blog;
