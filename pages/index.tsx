import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "../components/Home/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Sauvik Banerjjee | Tech Futurist, Author & Global C-Suite
        </title>
        <meta
          name="description"
          content="Explore Sauvik Banerjjee's insights on AI, emerging technologies, innovation and the future of business as a tech futurist, author and academic."
        ></meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>
      <h1 style={{ display: "none" }}>
        Sauvik Banerjjee | Tech Futurist, Author & Global C-Suite
      </h1>
      <HomePage />
    </>
  );
};
export default Home;
