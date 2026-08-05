import Head from "next/head";
import React from "react";
import PageLayout from "../../components/Header/PageLayout";
import { client } from "../../utils/client";
import Reflections from "../../components/reflections/Reflections";

const ReflectionsPage = ({ reflections }) => {
  return (
    <PageLayout>
      <Head>
        <title>
          Sauvik Banerjjee | Reflections | Thoughts | Perspectives
        </title>
        <meta
          name="description"
          content="Sauvik Banerjjee | Reflections — personal thoughts, perspectives, insights and contemplations on technology, futurism, AI, and the human condition"
        ></meta>
        <meta property="og:image" content="/Sauvik_Banerjjee_OgImage.png" />
      </Head>
      <h1 style={{ display: "none" }}>Reflections - Sauvik Banerjjee</h1>
      <Reflections reflections={reflections} />
    </PageLayout>
  );
};

export async function getStaticProps() {
  async function getContent() {
    // Fetches posts from Sanity — same dataset, same "post" type as Blog
    // The Reflections module reuses blog post data from Sanity
    const CONTENT_QUERY = `*[_type == "post"] | order(publishedAt desc) {
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
      reflections: reflections,
    },
    revalidate: 1,
  };
}

export default ReflectionsPage;
