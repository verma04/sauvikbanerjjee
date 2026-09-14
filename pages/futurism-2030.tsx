import React from "react";
import PageLayout from "../components/layout/page-layout";
import Futurism2030 from "../components/futurism-2030/futurism-2030";
import Seo from "../components/common/seo";

const Futurism2030Page = () => {
  return (
    <PageLayout>
      <Seo
        title="Sauvik Banerjjee | Futurism 2030 | Predictions for 2030 | Trends"
        description="Sauvik Banerjjee | Tech Futurist's top predictions for 2030 in Tech and how it will permeate our lives, work, societies and Universe at large"
        canonical="https://sauvikbanerjjee.com/futurism-2030"
        ogImage="/sauvik-banerjjee-og-image.png"
      />
      <h1 style={{ display: "none" }}>Futurism 2030 - Sauvik Banerjjee</h1>
      <Futurism2030 />
    </PageLayout>
  );
};

export default Futurism2030Page;