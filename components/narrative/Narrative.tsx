import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { isIOS } from "react-device-detect";
import Season1 from "./Season1";

import { season1, season2, season3 } from "./season";

import YouTube, { YouTubeProps } from "react-youtube";
const Narrative = () => {
  const data = [
    {
      name: "Season 1",
      img: "/season1/SauvikBanerjjeePresentation_S01_E01_Thumbnail.jpg",
      link: "i3RFwVwgnf4",
      list: season1,
    },
    {
      name: "Season 2 ",
      img: "/season2/SauvikBanerjjeePresentation_S02_Episode1_Thumbnail.jpg",
      link: "_qwXOCcXZUI",
      list: season2,
    },

    {
      name: "Season 3",
      img: "https://img.youtube.com/vi/a0_mj_g_X30/maxresdefault.jpg",
      link: "a0_mj_g_X30",
      list: season3,
    },
  ];

  const [active, setActive] = useState(data[0]);

  const [image, setImage] = useState(data[0].link);
  const opts: YouTubeProps["opts"] = {
    width: "350",
    height: "200",
  };
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  return (
    <Center
      width={"100%"}
      height={"100svh"}
      backgroundRepeat={"repeat"}
      backgroundPosition="center"
      backgroundSize={"cover"}
      bgImage={[
        "/narrativebg.png",
        "/narrativebg.png",
        "/narrativeBackgroundDesktop.png",
        "/narrativeBackgroundDesktop.png",
      ]}
      position="relative"
      flexDirection={"column"}
      justifyContent="flex-start"
      overflow={"hidden"}
    >
      <Box
        mt="10vh"
        width={"100%"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Heading fontSize={["2rem", "2rem", "8vh", "8vh"]} color="white">
          the narrative
        </Heading>
      </Box>

      <Center width={"100%"} mt="2rem" mb="3rem" position="relative">
        <Center width={"100%"} height={"20vh"} position="relative">
          {/* <App /> */}

          <YouTube videoId={image} opts={opts} onReady={onPlayerReady} />
        </Center>
      </Center>

      <Box>
        {active.name !== "Season 3" && (
          <Season1 setImage={setImage} list={active.list} />
        )}
      </Box>

      <Center
        zIndex={1}
        height={"7vh"}
        w="100%"
        position={"absolute"}
        bottom="2%"
      >
        <Flex alignItems={"center"} width={"90%"} height="100%" bgColor="white">
          {data.map((set, index) => (
            <Box key={index}>
              <Text
                onClick={async () => {
                  await setActive(set);
                  await setImage(set.link);
                }}
                borderBottom={active.name === set.name ? "1px solid black" : ""}
                ml="1rem"
              >
                {set.name}
              </Text>
            </Box>
          ))}
        </Flex>
      </Center>
    </Center>
  );
};

export default Narrative;
