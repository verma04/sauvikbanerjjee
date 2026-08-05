import { SanityDocument } from "@sanity/client";
import Head from "next/head";
import React from "react";

import ReflectionView from "../../components/reflections/reflectionView/Reflection";
import PageLayout from "../../components/Header/PageLayout";
import { client } from "../../utils/client";

const ReflectionDetail = ({ data, reflections }) => {
  return (
    <PageLayout>
      <Head>
        <title>{data?.title} | Reflections | Sauvik Banerjjee</title>
        <meta name="description" content={data?.title}></meta>
        <meta property="og:image" content={data?.mainImage?.asset?.url} />
      </Head>
      <ReflectionView data={data} reflections={reflections} />
    </PageLayout>
  );
};

export async function getStaticPaths() {
  async function getContent() {
    const CONTENT_QUERY = `*[_type == "post"] {
  ...,
  author->,
  mainImage {
    ...,
    asset->
  },
  categories[]->,
  body
}
`;
    const content = await client.fetch(CONTENT_QUERY);
    return content;
  }

  const reflections = await getContent();

  const paths = reflections?.map((t: any) => {
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
  const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  ...,
  author->,
  mainImage {
    ...,
    asset->
  },
  categories[]->,
  body
}`;

  const post = await client.fetch<SanityDocument>(POST_QUERY, {
    slug: params.id,
  });

  async function getContent() {
    const CONTENT_QUERY = `*[_type == "post"] {
  ...,
  author->,
  mainImage {
    ...,
    asset->
  },
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
      data: post,
      reflections: reflections,
    },
    revalidate: 1,
  };
};

export default ReflectionDetail;
