"use client";
import { Center, Heading, Button, Box } from "@chakra-ui/react";
import React from "react";
import FuturismList from "./VedioList";
import NewsList from "./NewsList";
import vedioData from "../json/video";
import { newsData, newsData2 } from "../json/news";

const VedioGallery = () => {
  const news = [
    ...newsData,
    ...newsData2.sort((a, b) => {
      // @ts-ignore
      return new Date(b.date) - new Date(a.date);
    }),
  ];

  const [active, setActive] = React.useState(1);
  const [active2, setActive2] = React.useState(1);

  return (
    <Box
      bgImage={"url('/mybookBackground.png')"}
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
          Video Gallery
        </Heading>
      </Center>

      <Center flexWrap={"wrap"} w="90%" maxW="1400px" mx="auto" mt="2rem">
        {vedioData.slice(0, active * 3).map((t, index) => (
          <FuturismList key={index} data={t} index={index} />
        ))}

        {active * 3 < vedioData.length && (
          <Center width={"100%"} mt="2rem">
            <Button
              onClick={() => setActive(active + 1)}
              px="2.5rem"
              py="1.5rem"
              fontSize="1.1rem"
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
              Load More Videos
            </Button>
          </Center>
        )}
      </Center>

      <Center flexDirection={"column"} mt="15vh" width={"100%"}>
        <Heading
          fontSize={["2.5rem", "3.5rem", "4.5rem", "5rem"]}
          className="webkit-bg"
          textTransform={"uppercase"}
          letterSpacing="tight"
          mb="2rem"
          fontWeight="800"
          textAlign="center"
        >
          News Coverage
        </Heading>
      </Center>

      <Center
        mb="3rem"
        flexWrap={"wrap"}
        w="90%"
        maxW="1400px"
        mx="auto"
        mt="2rem"
      >
        {news.slice(0, active2 * 3).map((t, index) => (
          <NewsList key={index} data={t} index={index} />
        ))}

        {active2 * 3 < news.length && (
          <Center width={"100%"} mt="2rem">
            <Button
              onClick={() => setActive2(active2 + 1)}
              px="2.5rem"
              py="1.5rem"
              fontSize="1.1rem"
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
              Load More News
            </Button>
          </Center>
        )}
      </Center>
    </Box>
  );
};

export default VedioGallery;
