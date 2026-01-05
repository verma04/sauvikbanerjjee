import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

import {
  staggerText,
  staggerReveal,
  fadeInUp,
  handleHover,
  handleHoverExit,
  handleCityReturn,
  handleCity,
  staggerRevealClose,
} from "./Animations";
import { NextLink } from "../../NextLink/NextLink";
import { Box, Heading } from "@chakra-ui/react";

const Hamburger = ({ state }) => {
  // Create varibles of our dom nodes
  let menuLayer = useRef(null);
  let reveal1 = useRef(null);
  let reveal2 = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);
  let line5 = useRef(null);
  let line6 = useRef(null);
  let line7 = useRef(null);
  let line8 = useRef(null);
  let line9 = useRef(null);
  let info = useRef(null);

  const data = [{ name: "Home", image: "/", ref: { line1 } }];

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (state.clicked === false) {
      // If menu is closed and we want to open it.

      staggerRevealClose(reveal2, reveal1);
      // Set menu to display none
      gsap.to(menuLayer, { duration: 1, css: { display: "none" } });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // Set menu to display block
      gsap.to(menuLayer, { duration: 0, css: { display: "block" } });
      //Allow menu to have height of 100%
      gsap.to([reveal1, reveal2], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reveal1, reveal2);
      fadeInUp(info);
      staggerText(
        line1,
        line2,
        line3,
        line4,
        line5,
        line6,
        line7,
        line8,
        line9
      );
    }
  }, [state]);

  return (
    <div ref={(el) => (menuLayer = el)} className="hamburger-menu">
      <div
        ref={(el) => (reveal1 = el)}
        className="menu-secondary-background-color"
      ></div>
      <Box
        backgroundRepeat={"repeat"}
        backgroundPosition="center"
        backgroundSize={"cover"}
        bgImage={[
          "/toogle-mobile.jpg",
          "/toogle-mobile.jpg",
          "/navbarBackgroundDesktop.png",
          "/navbarBackgroundDesktop.png",
        ]}
        ref={(el) => (reveal2 = el)}
        className="menu-layer"
      >
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <NextLink href="/">
                      <Heading
                        _hover={{
                          color: "#2981E2",
                        }}
                        ref={(el) => (line1 = el)}
                      >
                        {" "}
                        Home{" "}
                      </Heading>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/timeline">
                      <Heading
                        _hover={{
                          color: "#2981E2",
                        }}
                        ref={(el) => (line2 = el)}
                      >
                        My Story
                      </Heading>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/narrative">
                      <Heading
                        _hover={{
                          color: "#2981E2",
                        }}
                        ref={(el) => (line3 = el)}
                      >
                        The Narrative
                      </Heading>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/inevitable">
                      <Heading
                        _hover={{
                          color: "#2981E2",
                        }}
                        ref={(el) => (line4 = el)}
                      >
                        Inevitable
                      </Heading>
                    </NextLink>
                  </li>

                  <li>
                    <NextLink href="/futurism-2030">
                      <Heading
                        _hover={{
                          color: "#2981E2",
                        }}
                        ref={(el) => (line5 = el)}
                      >
                        Futurism 2030
                      </Heading>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/futurism-2050">
                      <Heading
                        _hover={{
                          color: "#2981E2",
                        }}
                        ref={(el) => (line6 = el)}
                      >
                        Futurism 2050
                      </Heading>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/media">
                      <Heading
                        _hover={{
                          color: "#2981E2",
                        }}
                        ref={(el) => (line7 = el)}
                      >
                        Media
                      </Heading>
                    </NextLink>
                  </li>
                  <li>
                    <NextLink href="/blog">
                      <Heading
                        _hover={{
                          color: "#2981E2",
                        }}
                        ref={(el) => (line8 = el)}
                      >
                        Blog
                      </Heading>
                    </NextLink>
                  </li>

                  <li>
                    <NextLink href="/contact-us">
                      <Heading
                        _hover={{
                          color: "#2981E2",
                        }}
                        ref={(el) => (line9 = el)}
                      >
                        Contact
                      </Heading>
                    </NextLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Hamburger;
