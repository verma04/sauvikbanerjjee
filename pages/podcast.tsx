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
          Sauvik Banerjjee Podcasts | Interviews & Conversations
        </title>
        <meta
          name="description"
          content="Listen to podcasts featuring Sauvik Banerjjee on AI, technology, leadership, innovation and business, with insights from leading industry conversations."
        ></meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>
      <h1 style={{ display: "none" }}>
        Sauvik Banerjjee Podcasts | Interviews & Conversations
      </h1>
      <PodcastGallery query={query} />
    </PageLayout>
  );
};

export default PodcastPage;
