import { SanityDocument } from "@sanity/client";
import Head from "next/head";
import React from "react";

import BlogView from "../../components/blog/blogView/Blog";
import PageLayout from "../../components/Header/PageLayout";
import { client } from "../../utils/client";

const Blog = ({ data, blogs }) => {
  return (
    <PageLayout>
      <Head>
        <title>{data?.title}</title>
        <meta name="description" content={data?.title}></meta>
        <meta property="og:image" content={data?.mainImage?.asset?.url} />
      </Head>
      <BlogView data={data} blogs={blogs} />
    </PageLayout>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

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

  // Log content to console
  const blogs = await getContent();

  const paths = blogs?.map((t: any) => {
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

  // Log content to console
  const blogs = await getContent();

  return {
    props: {
      data: post,
      blogs: blogs,
    },
    revalidate: 1,
  };
};

export default Blog;
