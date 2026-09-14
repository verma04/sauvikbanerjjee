import React from "react";
import PageLayout from "../components/header/page-layout";
import PodcastGallery from "../components/video/podcast-gallery";
import { useRouter } from "next/router";
import Seo from "../components/common/seo";

const PodcastPage = () => {
  const router = useRouter();
  const query = router.query;

  return (
    <PageLayout>
      <Seo
        title="Sauvik Banerjjee | Podcasts | Featured Conversations & Interviews"
        description="Sauvik Banerjjee | Podcasts, video interviews, featured conversations, talk shows, quotes and communications"
        canonical="https://sauvikbanerjjee.com/podcast"
        ogImage="/sauvik-banerjjee-og-image.png"
      />
      <h1 style={{ display: "none" }}>Podcasts - Sauvik Banerjjee</h1>
      <PodcastGallery query={query} />
    </PageLayout>
  );
};

export default PodcastPage;
