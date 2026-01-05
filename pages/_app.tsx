import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../theme/theme";
import Head from "next/head";
import "node_modules/video-react/dist/video-react.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import "react-toastify/dist/ReactToastify.css";

import dynamic from "next/dynamic";
const Protect = dynamic(() => import("react-app-protect"), {
  ssr: false,
});
import "react-app-protect/dist/index.css";

import "../styles/globals.css";
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

const BackToButton = dynamic(
  () => import("../components/backtoTop/BackToButton"),
  {
    ssr: false,
  }
);
const prod = process.env.NODE_ENV === "production";
function MyApp({ Component, pageProps }: AppProps) {
  // useEffect(() => {
  //   // define a custom handler function
  //   // for the contextmenu event
  //   const handleContextMenu = (e) => {
  //     // prevent the right-click menu from appearing
  //     e.preventDefault();
  //   };

  //   // attach the event listener to
  //   // the document object
  //   document.addEventListener("contextmenu", handleContextMenu);

  //   // clean up the event listener when
  //   // the component unmounts
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);
  return (
    <>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GFQGCGGE32"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date())
  gtag("config", "G-GFQGCGGE32");


        `}
      </Script>

      <Head>
        <meta name="theme-color" content={"#17181c"} />

        <link rel="shortcut icon" href="/static/favicon.ico" />

        <meta name="msapplication-navbutton-color" content={"#17181c"} />

        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={"#17181c"}
        ></meta>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Person",
              name: "Sauvik Banerjjee",
              url: "https://sauvikbanerjjee.com/",
              image:
                "https://sauvikbanerjjee.com/_next/image?url=%2Flogo.png&w=3840&q=75",
              sameAs: [
                "https://sauvikbanerjjee.com/",
                "https://www.instagram.com/sauvikbanerjjeeofficial",
                "https://www.youtube.com/channel/UCnoxf9FBPTlYdeEznXrsXLQ",
                "https://twitter.com/sauvikbanerjjee",
              ],
              jobTitle: "Product Technology & Digital Services",
              worksFor: {
                "@type": "Organization",
                name: "Rezolve",
              },
            }),
          }}
        />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GFQGCGGE32"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
           window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag(‘js’, new Date());
  gtag(‘config’, ‘G-GFQGCGGE32’);
        `}
        </Script>
      </Head>
      <ToastContainer />
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />

        <BackToButton />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
