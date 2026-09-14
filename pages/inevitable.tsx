import React from "react";
import PageLayout from "../components/header/page-layout";
import Inevitable from "../components/inevitable/inevitable";
import Seo from "../components/common/seo";

const InevitablePage = () => {
  return (
    <PageLayout>
      <Seo
        title="Sauvik Banerjjee | Tech Trends that will inevitably permeate our lives"
        description="Sauvik Banerjjee | Tech Futurist's top predictions for Tech Trends and how it will permeate our lives, work, behaviours, societies and Universe at large"
        canonical="https://sauvikbanerjjee.com/inevitable"
        ogImage="/sauvik-banerjjee-og-image.png"
      />
      <Inevitable />
      <h1 style={{ display: "none" }}>Inevitable - Sauvik Banerjjee</h1>
    </PageLayout>
  );
};

export default InevitablePage;