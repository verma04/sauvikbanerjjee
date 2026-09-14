import type { NextPage } from "next";
import HomePage from "../components/home/home";
import Seo from "../components/common/seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Sauvik Banerjjee | Tech Futurist, Author, Academic, Global C-Suite"
        description="Sauvik Banerjjee is the global CEO for Rezolve. Sauvik is a Tech Futurist, Author, Academic, global C-suite Leader, Ex-CTO Tata Digital, Tata Neu, TATA Cliq and has worked with many known brands"
        canonical="https://sauvikbanerjjee.com"
        ogImage="/sauvik-banerjjee-og-image.png"
      />
      <HomePage />
    </>
  );
};

export default Home;
