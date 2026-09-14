import React, { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const ScrollVideo = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const initScrollTrigger = () => {
      const duration = video.duration || 8;

      // GSAP pins the video section and scrubs through the video
      // No CSS sticky needed — GSAP handles pinning natively
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=200%", // scroll distance = 200% of viewport height
          pin: true, // GSAP pins the section — no black gap
          scrub: 1, // 1 second smooth lag for cinematic feel
          anticipatePin: 1, // prevents flicker when pin starts
        },
      });

      // Tween a proxy object and update video.currentTime on each frame
      tl.to(
        { frame: 0 },
        {
          frame: duration,
          ease: "none",
          onUpdate: function () {
            // @ts-ignore
            const progress = this.targets()[0].frame;
            if (video.readyState >= 2) {
              video.currentTime = Math.max(
                0,
                Math.min(progress, duration - 0.01),
              );
            }
          },
        },
      );
    };

    // Wait for metadata to load
    if (video.readyState >= 1) {
      initScrollTrigger();
    } else {
      video.addEventListener("loadedmetadata", initScrollTrigger, {
        once: true,
      });
    }

    // Cleanup
    return () => {
      video.removeEventListener("loadedmetadata", initScrollTrigger);
      ScrollTrigger.getAll().forEach((st) => {
        if (st.trigger === section) {
          st.kill();
        }
      });
    };
  }, []);

  return (
    <Box
      ref={sectionRef}
      w="100%"
      h="100vh"
      bg="black"
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <video
        ref={videoRef}
        src="https://pulseplaydigital.sgp1.cdn.digitaloceanspaces.com/Dada%20walking%20video.mp4"
        style={{
          pointerEvents: "none",
          height: "100%",
          width: "100%",
          objectFit: "cover",
        }}
        muted
        playsInline
        preload="auto"
      />
    </Box>
  );
};

export default ScrollVideo;
