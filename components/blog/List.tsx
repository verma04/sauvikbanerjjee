import React from "react";
import { Center, Heading, Text, Box, Button } from "@chakra-ui/react";

import YouTube, { YouTubeProps } from "react-youtube";
import { Flex } from "@chakra-ui/react";
import { isTablet } from "react-device-detect";
import Image from "next/image";
import Link from "next/link";
import { NextLink } from "../../NextLink/NextLink";
import { useRouter } from "next/router";
import moment from "moment";
const List = ({ data, index }) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const router = useRouter();

  return (
    <Center
      //@ts-ignore
      style={{ width: isTablet && "50%" }}
      mb="2em"
      width={["100%", "100%", "50%", "30%"]}
    >
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        flexDirection={"column"}
        backgroundRepeat={"repeat"}
        backgroundPosition="center"
        backgroundSize={"cover"}
        bgGradient="linear(to-r, pink.500, #0069f7) "
      >
        <Center
          justifyContent={"flex-start"}
          flexDirection={"column"}
          width={"100%"}
          height="100%"
          backgroundRepeat={"repeat"}
          backgroundPosition="center"
          backgroundSize={"cover"}
        >
          <Box
            width={"90%"}
            mt="2rem"
            height={"15rem"}
            position={"relative"}
            cursor="pointer"
            onClick={() => router.push(`/blog/${data?.slug?.current}`)}
          >
            <Image
              alt="sdds"
              src={data?.mainImage?.asset?.url}
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>

          <Flex
            height={"7rem"}
            width={"90%"}
            mt="1rem"
            mb="2rem"
            flexDirection={"column"}
            zIndex={2}
          >
            {/* <Center pt="0.2rem" w="2rem" pb="0.2rem" h="2rem" bgColor="white" borderRadius="50%" mr="0.5rem"  >{index + 1}</Center> */}
            <Box width={"100%"}>
              <Text
                cursor={"pointer"}
                onClick={() => router.push(`/blog/${data?.slug?.current}`)}
                as="h3"
                color="white"
              >
                {data?.title}
              </Text>
            </Box>

            <Flex justifyContent={"space-between"} mt="1rem">
              <Text
                textTransform={"uppercase"}
                fontSize={"0.7rem"}
                as="h4"
                color="white"
              >
                {data?.categories && data?.categories[0]?.title}
              </Text>
              <Text
                textTransform={"uppercase"}
                fontSize={"0.7rem"}
                as="h4"
                color="white"
              >
                {moment(data?.publishedAt).format("ll")}
              </Text>
            </Flex>
          </Flex>
        </Center>
      </Box>
    </Center>
  );
};

export default List;
