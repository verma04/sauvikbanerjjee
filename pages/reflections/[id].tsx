import { SanityDocument } from "@sanity/client";
import React from "react";

import ReflectionView from "../../components/reflections/reflection-view/reflection";
import PageLayout from "../../components/header/page-layout";
import { client } from "../../utils/client";
import Seo from "../../components/common/seo";

const ReflectionDetail = ({ data, reflections }) => {
  return (
    <PageLayout>
      <Seo
        title={`${data?.title || "Reflection"} | Reflections | Sauvik Banerjjee`}
        description={data?.title || "Reflections by Sauvik Banerjjee"}
        canonical={`/reflections/${data?.slug?.current || ""}`}
        ogType="article"
        ogImage={
          data?.mainImage?.asset?.url ||
          "/sauvik-banerjjee-og-image.png"
        }
        publishedTime={data?.publishedAt || data?._createdAt}
        author={data?.author?.name || "Sauvik Banerjjee"}
      />
      <ReflectionView data={data} reflections={reflections} />
    </PageLayout>
  );
};

export async function getStaticPaths() {
  async function getContent() {
    const CONTENT_QUERY = `*[_type == "reflection"] {
  ...,
  author->,
  mainImage {
    ...,
    asset->
  },
  mainVideo {
    ...,
    asset->
  },
  videoUrl,
  categories[]->,
  body
}
`;
    const content = await client.fetch(CONTENT_QUERY);
    return content;
  }

  const reflections = await getContent();

  const paths = (reflections || [])?.map((t: any) => {
    return {
      params: { id: t.slug.current },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async ({ params }) => {
  const REFLECTION_QUERY = `*[_type == "reflection" && slug.current == $slug][0]{
  ...,
  author->,
  mainImage {
    ...,
    asset->
  },
  mainVideo {
    ...,
    asset->
  },
  videoUrl,
  categories[]->,
  body
}`;

  const reflection = await client.fetch<SanityDocument>(REFLECTION_QUERY, {
    slug: params.id,
  });

  async function getContent() {
    const CONTENT_QUERY = `*[_type == "reflection"] {
  ...,
  author->,
  mainImage {
    ...,
    asset->
  },
  mainVideo {
    ...,
    asset->
  },
  videoUrl,
  categories[]->,
  body
}
`;
    const content = await client.fetch(CONTENT_QUERY);
    return content;
  }

  const reflections = await getContent();

  return {
    props: {
      data: reflection || null,
      reflections: reflections || [],
    },
    revalidate: 1,
  };
};

export default ReflectionDetail;
