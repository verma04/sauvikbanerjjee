import Head from "next/head";
import React from "react";
import PageLayout from "../components/Header/PageLayout";
import VedioGallery from "../components/video/Video";
import { useRouter } from "next/router";

const video = () => {
  const router = useRouter();
  const query = router.query;

  return (
    <PageLayout>
      <Head>
        <title>
          Sauvik Banerjjee | Media Coverage | In the News | Video | Articles{" "}
        </title>
        <meta
          name="description"
          content="Sauvik Banerjjee | Media, video, interviews, podcasts, vlogs, blogs, coverage in global media, news, television channels, talk shows, quotes and communications"
        ></meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>
      <h1 style={{ display: "none" }}>Media - Sauvik Banerjjee</h1>
      <VedioGallery query={query} />
    </PageLayout>
  );
};

export default video;
