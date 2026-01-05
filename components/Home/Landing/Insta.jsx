import Slider from "react-slick";

import React from "react";
import { Box } from "@chakra-ui/react";
import { LinkedInEmbed } from "react-social-media-embed";

const Insta = () => {
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
  const set = [
    "https://www.linkedin.com/embed/feed/update/urn:li:share:7411395086015578112?collapsed=1",
    // "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7051895511544455168",
    // "https://www.linkedin.com/embed/feed/update/urn:li:share:7047135614038618112",
  ];

  return (
    <Slider {...settings}>
      {set.map((set) => (
        <Box mt="2rem" width="90%" height="22rem">
          <LinkedInEmbed url={set} height={"100%"} width={"100%"} />
        </Box>
      ))}
    </Slider>
  );
};

export default Insta;
