import { SanityDocument } from "@sanity/client";
import React from "react";

import BlogView from "../../components/blog/blog-view/blog";
import PageLayout from "../../components/header/page-layout";
import { client } from "../../utils/client";
import Seo from "../../components/common/seo";

const Blog = ({ data, blogs }) => {
  return (
    <PageLayout>
      <Seo
        title={`${data?.title || "Blog"} | Sauvik Banerjjee`}
        description={data?.description || data?.title || "Blog article by Sauvik Banerjjee"}
        canonical={`/blog/${data?.slug?.current || ""}`}
        ogType="article"
        ogImage={
          data?.mainImage?.asset?.url ||
          "/sauvik-banerjjee-og-image.png"
        }
        publishedTime={data?.publishedAt || data?._createdAt}
        author={data?.author?.name || "Sauvik Banerjjee"}
      />
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
  mainVideo {
    ...,
    asset->
  },
  videoUrl,
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
