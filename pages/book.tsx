import Head from "next/head";
import React from "react";
import MyBook from "../components/book/MyBook";
import PageLayout from "../components/Header/PageLayout";

const book = () => {
  return (
    <PageLayout>

      <Head>
        <title>Sauvik Banerjjee: CEO Rezolve - Product, Tech & Digital Services, Tech Futurist, Author & Academic</title>
        <meta name="description" content=" 22 years of building internet platforms, internet businesses and internet technologies across 4 continents and over 500 internet platforms launched across enterprise companies, SME’s, MSME’s and over 100 eCommerce platforms launched across UKI, Europe, US, South East Asia and built from scratch Indias two most loved digital platforms - Reliance JIO to TataCLiQ, from building Tata Digital to Tata Neu which are purely home made in India." >

        </meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>
      <MyBook />
    </PageLayout>
  );
};

export default book;
