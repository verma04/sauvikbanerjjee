"use client";
import { Center, Heading, Button, Box } from "@chakra-ui/react";
import React from "react";
import VideoList from "./vedio-list";
import { podcastData } from "../json/podcast";

const PodcastGallery = ({ query }: { query?: any }) => {
  const [active, setActive] = React.useState(1);

  return (
    <Box
      bgImage={"url('/mybook-background.png')"}
      bgSize={"cover"}
      bgPosition={"center"}
      bgAttachment={"fixed"}
      minHeight={"100svh"}
      width="100vw"
      bgColor={"black"}
      pb="5rem"
    >
      <Center flexDirection={"column"} pt="15vh" width={"100%"}>
        <Heading
          fontSize={["2.5rem", "3.5rem", "4.5rem", "5rem"]}
          className="webkit-bg"
          textTransform={"uppercase"}
          letterSpacing="tight"
          mb="2rem"
          fontWeight="800"
          textAlign="center"
        >
          Podcast
        </Heading>
      </Center>

      <Center flexWrap={"wrap"} w="90%" maxW="1400px" mx="auto" mt="2rem">
        {podcastData.slice(0, active * 6).map((t, index) => (
          <VideoList key={index} data={t} index={index} />
        ))}

        {active * 6 < podcastData.length && (
          <Box display="flex" justifyContent="center" width="100%" mt="2.5rem">
            <Button
              onClick={() => setActive(active + 1)}
              w="auto"
              px="2rem"
              py="0.8rem"
              h="auto"
              fontSize="0.95rem"
              fontWeight="600"
              borderRadius="full"
              bg="whiteAlpha.100"
              color="white"
              border="1px solid rgba(255,255,255,0.2)"
              backdropFilter="blur(10px)"
              _hover={{
                bg: "whiteAlpha.300",
                transform: "translateY(-2px)",
                boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              }}
              transition="all 0.3s ease"
            >
              Load More Podcasts
            </Button>
          </Box>
        )}
      </Center>
    </Box>
  );
};

export default PodcastGallery;
