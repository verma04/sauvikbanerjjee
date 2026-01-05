"use client";
//@ts-nocheck
import { Center, Heading, Button } from "@chakra-ui/react";
import React, { useEffect } from "react";
import FuturismList from "./VedioList";
import NewsList from "./NewsList";
import vedioData from "../json/video";
import { newsData, newsData2 } from "../json/news";
import { useRouter } from "next/router";

const VedioGallery = ({ query }) => {
  const news = [
    ...newsData,
    ...newsData2.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      // @ts-ignore
      return new Date(b.date) - new Date(a.date);
    }),
  ];

  const router = useRouter();
  const [active, setActive] = React.useState(1);
  const [active2, setActive2] = React.useState(1);

  return (
    <Center
      bgImage={"/mybookBackground.png"}
      minHeight={"100svh"}
      width="100vw"
      bgColor={"black"}
      alignItems="center"
      flexDirection={"column"}
    >
      <Center flexDirection={"column"} mt="12vh" width={"90%"} height="80%">
        <Heading
          fontSize={["2rem", "2rem", "8vh", "8vh"]}
          className="webkit-bg"
          textTransform={"uppercase"}
        >
          Video Gallery
        </Heading>
      </Center>

      <Center flexWrap={"wrap"} w="100%" mt="3rem">
        {vedioData.slice(0, active * 3).map((t, index) => (
          <FuturismList key={index} data={t} index={index} />
        ))}
        <Center width={"100%"}>
          {active * 3 < vedioData.length && (
            <Button
              onClick={() => setActive(active + 1)}
              w="6rem"
              variant={"white"}
            >
              Load More
            </Button>
          )}
        </Center>
      </Center>

      <Center flexDirection={"column"} mt="12vh" width={"90%"} height="80%">
        <Heading
          fontSize={["2rem", "2rem", "8vh", "8vh"]}
          className="webkit-bg"
          textTransform={"uppercase"}
        >
          News Coverage
        </Heading>
      </Center>

      <Center mb="3rem" flexWrap={"wrap"} w="100%" mt="3rem">
        {news.slice(0, active2 * 3).map((t, index) => (
          <NewsList key={index} data={t} index={index} />
        ))}

        <Center width={"100%"}>
          {active * 3 < news.length && (
            <Button
              onClick={() => setActive2(active2 + 1)}
              w="6rem"
              variant={"white"}
            >
              Load More
            </Button>
          )}
        </Center>
      </Center>
    </Center>
  );
};

export default VedioGallery;
