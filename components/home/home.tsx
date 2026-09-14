import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

const PreLoader = dynamic(() => import("../preloader/preloader"), {
  ssr: false,
});
import LandingMobile from "./landing/landing-mobile";
import Media from "./landing/media";
import Podcast from "./landing/podcast";

import Poster from "./landing/poster";
const SocialMedia = dynamic(() => import("./landing/social-media"), {
  ssr: false,
});
import Futurism from "./landing/futurism";
import Narrative from "../narrative/narrative";
import NarrativeDesktop from "../new-narative/narrative";

const Home = () => {
  const myRef = React.useRef(null);
  const [loading, setLoading] = useState(true);
  const [landing, setLanding] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setIsClient(true);
    setIsDesktop(window.innerWidth >= 1024);
  }, []);

  //@ts-ignore
  const executeScroll = () => myRef?.current?.scrollIntoView();
  return (
    <>
      <Box
        position="fixed"
        top={0}
        height="10vh"
        zIndex={10}
        display={isClient && !landing ? "none" : "block"}
      >
        <Header />
      </Box>
      <div className="scroll">
        {loading && <PreLoader />}
        <section className="snap-scroll">
          <LandingMobile
            executeScroll={executeScroll}
            ani={landing}
            setAni={setLanding}
          />
        </section>
        <Box display={isClient && !landing ? "none" : "block"}>
          <section ref={myRef} className="snap-scroll">
            {isClient && isDesktop ? <NarrativeDesktop /> : <Narrative />}
          </section>
          <section className="snap-scroll">
            <Podcast />
          </section>
          <section className="snap-scroll">
            <Media />
          </section>
          <section className="snap-scroll">
            <Poster />
          </section>
          <section className="snap-scroll">
            <Futurism />
          </section>
          {isClient && isDesktop && (
            <section className="snap-scroll">
              <SocialMedia />
            </section>
          )}

          <section className="snap-scroll">
            <Footer />
          </section>
        </Box>
      </div>
    </>
  );
};

export default Home;
