import type { NextPage } from "next";
import Head from "next/head";

import HomePage from "../components/Home/Home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>
          Sauvik Banerjjee | Tech Futurist, Author, Academic, Global C-Suite
        </title>
        <meta
          name="description"
          content="Sauvik Banerjjee is the global CEO for Rezolve. Sauvik is a Tech Futurist, Author, Academic, global C-suite Leader, Ex-CTO Tata Digital, Tata Neu, TATA Cliq and has worked with many known brands"
        ></meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>
      <h1 style={{ display: "none" }}>Home Page - Sauvik Banerjjee</h1>
      <HomePage />
    </>
  );
};

export default Home;
