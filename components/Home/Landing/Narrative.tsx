import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { isIOS } from "react-device-detect";

const Narrative = () => {
  const data = [
    {
      name: "Season 1",
      img: "/season1/SauvikBanerjjeePresentation_S01_E01_Thumbnail.jpg",
    },
    {
      name: "Season 2 ",
      img: "/season2/SauvikBanerjjeePresentation_S02_Episode1_Thumbnail.jpg",
    },
    {
      name: "Season 3",
      img: "/season2/SauvikBanerjjeePresentation_S02_Episode1_Thumbnail.jpg",
    },
  ];

  const [active, setActive] = useState(0);

  const [image, setImage] = useState(
    "/season2/SauvikBanerjjeePresentation_S02_Episode1_Thumbnail.jpg"
  );

  return (
    <Center
      width={"100%"}
      height={"100svh"}
      backgroundRepeat={"repeat"}
      backgroundPosition="center"
      backgroundSize={"cover"}
      bgImage={"/narrativeBackground.png"}
      position="relative"
      flexDirection={"column"}
      justifyContent="flex-start"
      overflowX={"hidden"}
      className="snap-scroll"
    >
      <Box
        mt="30%"
        width={"100%"}
        display="flex"
        justifyContent={"center"}
        alignItems="center"
      >
        <Heading color="white">the narrative</Heading>
      </Box>

      <Center width={"100%"} height={"20rem"} position="relative">
        <Center width={"90%"} height={"20vh"} position="relative">
          {/* <App /> */}
          <Image alt="sdds" src={image} fill style={{ objectFit: "contain" }} />
        </Center>
      </Center>

      {active === 0 && (
        <div className="circle-container">
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S01_E01_Thumbnail.jpg"
              )
            }
            className="center"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E01_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S01_E11_Thumbnail.jpg"
              )
            }
            className="deg0"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E11_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S03_E03_Thumbnail.jpg"
              )
            }
            className="deg45"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E02_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S01_E04_Thumbnail.jpg"
              )
            }
            className="deg135"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E04_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S01_E05_Thumbnail.jpg"
              )
            }
            className="deg180"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E05_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S01_E06_Thumbnail.jpg"
              )
            }
            className="deg225"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E06_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S01__E7_Thumbnail.jpg"
              )
            }
            className="deg315"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E07_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S01_E08_Thumbnail.jpg"
              )
            }
            className="img1"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E08_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "//season1/SauvikBanerjjeePresentation_S01_E09_Thumbnail.jpg"
              )
            }
            className="img2"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E09_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S01_E10_Thumbnail.jpg"
              )
            }
            className="img3"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E010_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season1/SauvikBanerjjeePresentation_S01_E11_Thumbnail.jpg"
              )
            }
            className="img3"
          >
            <img src="/season1/SauvikBanerjjeePresentation_S01_E011_Thumbnail.jpg" />
          </Box>
        </div>
      )}

      {active === 1 && (
        <div className="circle-container">
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode1_Thumbnail.jpg"
              )
            }
            className="center"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode1_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode2_Thumbnail.jpg"
              )
            }
            className="deg0"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode2_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode3_Thumbnail.jpg"
              )
            }
            className="deg45"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode3_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode4_Thumbnail.jpg"
              )
            }
            className="deg135"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode4_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode5_Thumbnail.jpg"
              )
            }
            className="deg180"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode5_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode6_Thumbnail.jpg"
              )
            }
            className="deg225"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode6_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode7_Thumbnail.jpg"
              )
            }
            className="deg315"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode7_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode8_Thumbnail.jpg"
              )
            }
            className="img1"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode8_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode9_Thumbnail.jpg"
              )
            }
            className="img2"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode9_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode10_Thumbnail.jpg"
              )
            }
            className="img3"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode10_Thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season2/SauvikBanerjjeePresentation_S02_Episode11_Thumbnail.jpg"
              )
            }
            className="img3"
          >
            <img src="/season2/SauvikBanerjjeePresentation_S02_Episode11_Thumbnail.jpg" />
          </Box>
        </div>
      )}

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
                  await setActive(index);
                  await setImage(set.img);
                }}
                borderBottom={active === index ? "1px solid black" : ""}
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
