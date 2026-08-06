import { defineField, defineType } from 'sanity'

export const reflectionType = defineType({
  name: 'reflection',
  title: 'Reflection',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),

    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        },
      ],
    }),

    defineField({
      name: 'mainVideo',
      title: 'Main Video File',
      type: 'file',
      description: 'Upload a video file (MP4, WebM, etc.). Displayed if Main Image is not provided.',
      options: {
        accept: 'video/*',
      },
    }),

    defineField({
      name: 'videoUrl',
      title: 'Video URL (Alternative to Video File upload)',
      type: 'url',
      description: 'Direct video link (e.g. MP4 URL). Displayed if Main Image is not provided.',
    }),

    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),

    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare({ title, author, media }) {
      return {
        title,
        subtitle: author ? `by ${author}` : '',
        media,
      }
    },
  },
})