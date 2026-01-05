import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const PreLoader = dynamic(() => import("../preloader/Preloader"), {
  ssr: false,
});
const LandingMobile = dynamic(() => import("./Landing/LandingMobile"), {
  ssr: false,
});
import Media from "./Landing/Media";

import Poster from "./Landing/Poster";
import SocialMedia from "./Landing/SocialMedia";
import Futurism from "./Landing/Futurism";
import Narrative from "../narrative/Narrative";
import { isDesktop } from "react-device-detect";
import NarrativeDesktop from "../newNarative/Narrative";

const Home = () => {
  const myRef = React.useRef(null);
  const [loading, setLoading] = useState(true);
  const [landing, setLanding] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, [loading]);
  //@ts-ignore
  const executeScroll = () => myRef?.current?.scrollIntoView();
  return (
    <>
      {landing && (
        <Box position="fixed" top={0} height="10vh" zIndex={10}>
          <Header />
        </Box>
      )}
      <div className="scroll">
        {loading && <PreLoader />}
        <section className="snap-scroll">
          <LandingMobile
            executeScroll={executeScroll}
            ani={landing}
            setAni={setLanding}
          />
        </section>
        {landing && (
          <>
            <section ref={myRef} className="snap-scroll">
              {isDesktop ? <NarrativeDesktop /> : <Narrative />}
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
            {isDesktop && (
              <section className="snap-scroll">
                <SocialMedia />
              </section>
            )}

            <section className="snap-scroll">
              <Footer />
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
