import Head from "next/head";
import React from "react";
import PageLayout from "../components/Header/PageLayout";
import VedioGallery from "../components/video/Video";
import { useRouter } from "next/router";

const MediaPage = () => {
  const router = useRouter();
  const query = router.query;

  return (
    <PageLayout>
      <Head>
        <title>
          Sauvik Banerjjee Media | Videos, News & Appearances
        </title>
        <meta
          name="description"
          content="Explore Sauvik Banerjjee's media appearances, videos, TEDx talks and news coverage featuring his views on AI, technology, innovation and business."
        ></meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>
      <h1 style={{ display: "none" }}>
        Sauvik Banerjjee Media | Videos, News & Appearances
      </h1>
      <VedioGallery query={query} />
    </PageLayout>
  );
};

export default MediaPage;
