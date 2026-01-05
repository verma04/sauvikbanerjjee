import React, { useRef } from "react";

import {
  Center,
  Container,
  Box,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";

import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { gsap } from "gsap";

import dynamic from "next/dynamic";
//@ts-ignore

const ContactNow = () => {
  const button = useRef<null | HTMLParagraphElement>(null);
  const state = useRef<null | HTMLParagraphElement>(null);
  const state2 = useRef<null | HTMLParagraphElement>(null);
  const state3 = useRef<null | HTMLParagraphElement>(null);
  React.useEffect(() => {
    gsap
      .to(state3.current, {
        x: -10,
      })
      .duration(1);
    button?.current?.addEventListener("mouseover", function () {
      gsap
        .to(state.current, {
          borderRadius: 0,
          height: "4rem",
          justifyContent: "flex-end",
          ease: "ease-in-out",
          width: "7rem",
          paddingRight: "0.5rem",
        })
        .duration(0.7);

      gsap
        .to(state3.current, {
          borderRadius: 0,
          transform: "rotate(0deg)",
          height: "4rem",
          marginLeft: "0 !importnat",
          ease: "ease-in-out",
          justifyContent: "flex-start",
        })
        .duration(0.7);
    });

    button?.current?.addEventListener("mouseleave", function () {
      gsap
        .to(state.current, {
          borderRadius: "4vh",
          height: "4rem",
          justifyContent: "center",
          ease: "ease-in-out",
        })
        .duration(1);

      gsap
        .to(state2.current, {
          borderRadius: "4vh",
          height: "4rem",
          width: "5rem",
          ease: "ease-in-out",
        })
        .duration(1);

      gsap
        .to(state3.current, {
          borderRadius: "4vh",
          height: "3rem",
          transform: "rotate(-90deg)",
          ease: "ease-in-out",

          justifyContent: "center",
        })
        .duration(1);
    });
  }, []);

  return (
    <>

    </>
  );
};

export default ContactNow;
