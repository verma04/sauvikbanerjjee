import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import gsap from "gsap";

import { season1, season2 } from "./season";
import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";
import Image from "next/image";
import { season3 } from "../narrative/season";
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

  const opts = {
    width: "500",
    height: "300",
  };
  const onPlayerReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  const [active, setActive] = React.useState(data[0]);
  const [image, setImage] = React.useState(data[0].link);
  React.useEffect(() => {
    var cards = gsap.utils.toArray(".creative-pro"),
      radius = 520;

    gsap.set(".demoWrapper", {
      perspective: 1100,
      transformStyle: "preserve-3d",
    });

    cards.forEach(function (element, index) {
      gsap.set(element, {
        rotationY: (index * 360) / cards.length,
        transformOrigin: "50% 50% " + -radius,
      });
      gsap.to(element, {
        duration: 40,
        rotationY: "-=270",
        repeat: -1,
        ease: "none",
      });
    });
  }, [data]);

  return (
    <Box
      bgImage={[
        "/narrativebg.png",
        "/narrativebg.png",
        "/daniele.jpg",
        "/daniele.jpg",
      ]}
      backgroundRepeat={"repeat"}
      backgroundPosition="center"
      backgroundSize={"cover"}
      position={"relative"}
      display={"100vh"}
      height={"100vh"}
      width="100vw"
      bgColor={"black"}
    >
      <Box
        pt="10vh"
        width={"100%"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Heading
          letterSpacing={"0.3rem"}
          fontSize={["2rem", "2rem", "8vh", "8vh"]}
          color="white"
        >
          the narrative
        </Heading>
      </Box>
      {/* <App /> */}

      <Center top="35%" position="absolute" width={"100%"}>
        <Center width={"100%"} height={"20vh"} position="relative">
          <YouTube videoId={image} opts={opts} onReady={onPlayerReady} />
        </Center>
      </Center>

      <div className="demoWrapper">
        <>
          {active.list.map((set) => (
            <Box
              onClick={() => setImage(set.link)}
              className="card box creative-pro"
            >
              <img
                className="card-img-top"
                src={set.ep}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </Box>
          ))}
        </>
      </div>

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
                cursor={"pointer"}
                color="white"
                onClick={async () => {
                  await setActive(set);
                  await setImage(set.link);
                }}
                _hover={{
                  color: "#2981E2",
                  borderBottom: "1px solid #2981E2",
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
    </Box>
  );
};

export default Narrative;
