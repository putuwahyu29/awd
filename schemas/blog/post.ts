import { defineField, defineType } from "sanity";
import { BookIcon } from "@sanity/icons";

export default defineType({
  name: "post",
  title: "Artikel",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "title",
      title: "Judul",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Deskripsi",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "author",
      title: "Penulis",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Gambar",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Teks Alternatif",
        },
      ],
    }),
    defineField({
      name: "categories",
      title: "Kategori",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Diterbitkan pada",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      type: "array",
      title: "Isi",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "block",
        },
        {
          type: "image",
        },
        {
          type: "code",
          options: {
            languageAlternatives: [
              { title: "jsx", value: "jsx" },
              { title: "tsx", value: "tsx" },
              { title: "css", value: "css" },
              { title: "bash", value: "bash" },
              { title: "php", value: "php" },
            ],
          },
        },
      ],
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
