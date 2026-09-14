import React from "react";
import PageLayout from "../components/header/page-layout";
import VedioGallery from "../components/video/video";
import { useRouter } from "next/router";
import Seo from "../components/common/seo";

const MediaPage = () => {
  const router = useRouter();
  const query = router.query;

  return (
    <PageLayout>
      <Seo
        title="Sauvik Banerjjee | Media Coverage | In the News | Video & Articles"
        description="Sauvik Banerjjee | Media, video, interviews, podcasts, vlogs, blogs, coverage in global media, news, television channels, talk shows, quotes and communications"
        canonical="https://sauvikbanerjjee.com/media"
        ogImage="/sauvik-banerjjee-og-image.png"
      />
      <h1 style={{ display: "none" }}>Media - Sauvik Banerjjee</h1>
      <VedioGallery query={query} />
    </PageLayout>
  );
};

export default MediaPage;
