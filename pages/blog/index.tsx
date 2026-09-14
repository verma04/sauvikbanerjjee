import React from "react";
import PageLayout from "../../components/header/page-layout";
import { client } from "../../utils/client";
import Blog from "../../components/blog/blog";
import Seo from "../../components/common/seo";

const blogtest = ({ blogs }) => {
  return (
    <PageLayout>
      <Seo
        title="Sauvik Banerjjee | Blogs, Articles & Insights"
        description="Explore articles, perspectives, and technology insights by Sauvik Banerjjee on AI, futurism, digital transformation, and leadership."
        canonical="https://sauvikbanerjjee.com/blog"
        ogImage="/sauvik-banerjjee-og-image.png"
      />
      <h1 style={{ display: "none" }}>Blogs &amp; Articles - Sauvik Banerjjee</h1>
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
