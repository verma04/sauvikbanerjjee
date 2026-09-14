import React from "react";
import Futurism from "../components/futurism/futurism";
import PageLayout from "../components/header/page-layout";
import Seo from "../components/common/seo";

const Futurism2050Page = () => {
  return (
    <PageLayout>
      <Seo
        title="Sauvik Banerjjee | Futurism 2050 | Predictions for 2050 | Trends"
        description="Sauvik Banerjjee | Tech Futurist's top predictions for 2050 in Tech and how it will permeate our lives, work, societies and Universe at large"
        canonical="https://sauvikbanerjjee.com/futurism-2050"
        ogImage="/sauvik-banerjjee-og-image.png"
      />
      <h1 style={{ display: "none" }}>Futurism 2050 - Sauvik Banerjjee</h1>
      <Futurism />
    </PageLayout>
  );
};

export default Futurism2050Page;