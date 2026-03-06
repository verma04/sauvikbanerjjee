import React from "react";
import { Heading, Text, Box, Flex } from "@chakra-ui/react";
import ReactPlayer from "react-player/youtube";
import { isTablet } from "react-device-detect";

const VideoList = ({ data, index }) => {
  return (
    <Box
      //@ts-ignore
      style={{ width: isTablet ? "50%" : undefined }}
      mb="3rem"
      p="1rem"
      width={["100%", "100%", "50%", "33.333%"]}
    >
      <Box
        width={"100%"}
        display={"flex"}
        flexDirection={"column"}
        minHeight={"24rem"}
        bg="rgba(25, 25, 30, 0.6)"
        backdropFilter="blur(20px)"
        border="1px solid rgba(255, 255, 255, 0.08)"
        borderRadius="2xl"
        overflow="hidden"
        boxShadow="0 10px 40px -10px rgba(0,0,0,0.5)"
        transition="all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
        _hover={{
          transform: "translateY(-10px)",
          boxShadow:
            "0 20px 40px -10px rgba(0,0,0,0.7), 0 0 20px rgba(255,255,255,0.05)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          bg: "rgba(35, 35, 45, 0.7)",
        }}
        position="relative"
        role="group"
      >
        <Box width={"100%"} height="14rem" bg="black" position={"relative"}>
          <ReactPlayer
            width="100%"
            height="100%"
            url={`https://www.youtube.com/watch?v=${data.url}`}
            controls={true}
            light={false}
            style={{ position: "absolute", top: 0, left: 0 }}
          />
        </Box>

        <Flex direction="column" flex="1" p="1.5rem">
          <Box mb="1rem">
            <Flex align="center" mb="0.8rem" opacity="0.8">
              <Box
                w="8px"
                h="8px"
                borderRadius="50%"
                bg="red.500"
                mr="0.5rem"
                boxShadow="0 0 10px rgba(245, 101, 101, 0.8)"
              />
              <Text
                fontSize={"0.8rem"}
                color="red.400"
                fontWeight="bold"
                letterSpacing="widest"
                textTransform="uppercase"
              >
                Video clip
              </Text>
            </Flex>
            <Heading
              as="h4"
              fontSize={"1.2rem"}
              color="white"
              lineHeight="1.5"
              fontWeight="600"
              noOfLines={3}
            >
              {data.text}
            </Heading>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default VideoList;
