import React from "react";
import { Center, Heading, Text, Box, Button } from "@chakra-ui/react";

import ReactPlayer from 'react-player/youtube'
import YouTube, { YouTubeProps } from 'react-youtube';
import { Flex } from "@chakra-ui/react";
import { isTablet } from 'react-device-detect';
const VideoList = ({ data, index }) => {
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const opts: YouTubeProps['opts'] = {

    width: '100%',
    height: '200',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  return (
    //@ts-ignore
    <Center style={{ width: isTablet && "50%" }} mb="2em" width={["100%", "100%", "50%", "30%"]}>
      <Box
        width={"90%"}
        display={"flex"}
        justifyContent="flex-start"
        alignItems={"center"}
        flexDirection={"column"}

        height={"25rem"}
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
          <Box width={"90%"} mt="2rem" height={"15rem"} position={"relative"}>

            <ReactPlayer width={"100%"} height="100%" url={`https://www.youtube.com/watch?v=${data.url}`} />
          </Box>

          <Flex width={"90%"} mt="1rem" mb="2rem">
            {/* <Center pt="0.2rem" w="2rem" pb="0.2rem" h="2rem" bgColor="white" borderRadius="50%" mr="0.5rem"  >{index + 1}</Center> */}
            <Box>
              <Text as="h3" color="white">
                {data.text}
              </Text>
            </Box>
          </Flex>
        </Center>
      </Box>
    </Center>
  );
};

export default VideoList;
