import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { isIOS } from "react-device-detect";
import Season1 from "./Season1";

import { season1, season2, season3 } from "./season";

import YouTube, { YouTubeProps } from "react-youtube";
const NarrativeDesktop = () => {
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
    width: "250",
    height: "150",
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
        "/daniele.jpg",
        "/daniele.jpg",
      ]}
      position="relative"
      flexDirection={"column"}
      justifyContent="flex-start"
      overflow={"hidden"}
    >
      <Center top="32%" width={"100%"} mt="2rem" mb="3rem" position="absolute">
        <Center width={"100%"} height={"20vh"} position="relative">
          {/* <App /> */}
          {active.name === "Season 3" ? (
            <Image
              priority
              alt="Season3"
              src={"/Dada_Season_3.jpg"}
              fill
              style={{ objectFit: "contain" }}
            />
          ) : (
            <YouTube videoId={image} opts={opts} onReady={onPlayerReady} />
          )}
        </Center>
      </Center>

      <Box
        style={{ zoom: 1.3 }}
        backgroundColor={"red"}
        top="20%"
        left="32%"
        position={"absolute"}
      >
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
        <Flex alignItems={"center"} width={"90%"} height="100%">
          {data.map((set, index) => (
            <Box key={index}>
              <Text
                color="white"
                onClick={async () => {
                  await setActive(set);
                  await setImage(set.link);
                }}
                borderBottom={active.name === set.name ? "1px solid white" : ""}
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

export default NarrativeDesktop;
