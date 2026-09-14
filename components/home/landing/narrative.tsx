import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { isIOS } from "react-device-detect";

const Narrative = () => {
  const data = [
    {
      name: "Season 1",
      img: "/season-1/sauvik-banerjjee-presentation-s01-e01-thumbnail.jpg",
    },
    {
      name: "Season 2 ",
      img: "/season-2/sauvik-banerjjee-presentation-s02-episode1-thumbnail.jpg",
    },
    {
      name: "Season 3",
      img: "/season-2/sauvik-banerjjee-presentation-s02-episode1-thumbnail.jpg",
    },
  ];

  const [active, setActive] = useState(0);

  const [image, setImage] = useState(
    "/season-2/sauvik-banerjjee-presentation-s02-episode1-thumbnail.jpg"
  );

  return (
    <Center
      width={"100%"}
      height={"100svh"}
      backgroundRepeat={"repeat"}
      backgroundPosition="center"
      backgroundSize={"cover"}
      bgImage={"/narrative-background.png"}
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
                "/season-1/sauvik-banerjjee-presentation-s01-e01-thumbnail.jpg"
              )
            }
            className="deg0"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e01-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e11-thumbnail.jpg"
              )
            }
            className="deg25"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e11-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e02-thumbnail.jpg"
              )
            }
            className="deg45"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e02-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e04-thumbnail.jpg"
              )
            }
            className="deg135"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e04-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e05-thumbnail.jpg"
              )
            }
            className="deg180"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e05-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e06-thumbnail.jpg"
              )
            }
            className="deg225"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e06-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e07-thumbnail.jpg"
              )
            }
            className="deg315"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e07-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e08-thumbnail.jpg"
              )
            }
            className="img1"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e08-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e09-thumbnail.jpg"
              )
            }
            className="img2"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e09-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e10-thumbnail.jpg"
              )
            }
            className="img3"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e10-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-1/sauvik-banerjjee-presentation-s01-e11-thumbnail.jpg"
              )
            }
            className="img3"
          >
            <img src="/season-1/sauvik-banerjjee-presentation-s01-e11-thumbnail.jpg" />
          </Box>
        </div>
      )}

      {active === 1 && (
        <div className="circle-container">
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode1-thumbnail.jpg"
              )
            }
            className="center"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode1-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode2-thumbnail.jpg"
              )
            }
            className="deg0"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode2-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode3-thumbnail.jpg"
              )
            }
            className="deg45"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode3-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode4-thumbnail.jpg"
              )
            }
            className="deg135"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode4-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode5-thumbnail.jpg"
              )
            }
            className="deg180"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode5-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode6-thumbnail.jpg"
              )
            }
            className="deg225"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode6-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode7-thumbnail.jpg"
              )
            }
            className="deg315"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode7-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode8-thumbnail.jpg"
              )
            }
            className="img1"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode8-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode9-thumbnail.jpg"
              )
            }
            className="img2"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode9-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/sauvik-banerjjee-presentation-s02-episode10-thumbnail.jpg"
              )
            }
            className="img3"
          >
            <img src="/season-2/sauvik-banerjjee-presentation-s02-episode10-thumbnail.jpg" />
          </Box>
          <Box
            id="a"
            onClick={() =>
              setImage(
                "/season-2/comming-soon.jpg"
              )
            }
            className="img3"
          >
            <img src="/season-2/comming-soon.jpg" />
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
