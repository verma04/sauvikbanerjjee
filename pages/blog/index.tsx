import Head from "next/head";
import React from "react";
import PageLayout from "../../components/Header/PageLayout";
import { client } from "../../utils/client";
import Blog from "../../components/blog/Blog";

const blogtest = ({ blogs }) => {
  console.log(blogs);

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
      <Blog blogs={blogs} />
    </PageLayout>
  );
};

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  async function getContent() {
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

  // Log content to console
  const blog = await getContent();

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      blogs: blog,
    },
    revalidate: 1,
  };
}

export default blogtest;
