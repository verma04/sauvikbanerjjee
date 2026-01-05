import Slider from "react-slick";

import React from "react";
import { Box } from "@chakra-ui/react";
import { TwitterEmbed } from "react-social-media-embed";

const Twitter = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };
  const data = [
    "https://twitter.com/sauvikbanerjjee/status/1691043792588017664",
    // "https://twitter.com/sauvikbanerjjee/status/1580283559017058305", "https://twitter.com/sauvikbanerjjee/status/1580282881163038720"
  ];
  return (
    <Slider {...settings}>
      {data.map((set) => (
        <Box mt="2rem" width="90%" height="22rem">
          <TwitterEmbed url={set} height={"100%"} width={"100%"} />
        </Box>
      ))}
    </Slider>
  );
};

export default Twitter;
