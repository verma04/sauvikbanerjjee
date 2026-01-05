import Slider from "react-slick";

import React from "react";
import { Box } from "@chakra-ui/react";
import { InstagramEmbed } from "react-social-media-embed";

const Instragram = () => {
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
    "https://www.instagram.com/reel/DEPjbSfAKWu/?igsh=eTU5Y3Zva2N3anMx",
    // "https://www.instagram.com/p/Cre2R6bo337",
    // "https://www.instagram.com/p/CrdCerLAV0K",
  ];
  return (
    <Slider {...settings}>
      {data.map((set) => (
        <Box mt="2rem" width="90%" height="22rem">
          <InstagramEmbed url={set} height={"100%"} width={"100%"} />
        </Box>
      ))}
    </Slider>
  );
};

export default Instragram;
