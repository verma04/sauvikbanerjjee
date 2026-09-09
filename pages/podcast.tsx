import Head from "next/head";
import React from "react";
import PageLayout from "../components/Header/PageLayout";
import PodcastGallery from "../components/video/PodcastGallery";
import { useRouter } from "next/router";

const PodcastPage = () => {
  const router = useRouter();
  const query = router.query;

  return (
    <PageLayout>
      <Head>
        <title>
          Sauvik Banerjjee | Podcasts | Featured Conversations & Interviews
        </title>
        <meta
          name="description"
          content="Sauvik Banerjjee | Podcasts, video interviews, featured conversations, talk shows, quotes and communications"
        ></meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>
      <h1 style={{ display: "none" }}>Podcasts - Sauvik Banerjjee</h1>
      <PodcastGallery query={query} />
    </PageLayout>
  );
};

export default PodcastPage;
