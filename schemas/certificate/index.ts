import { defineField, defineType } from "sanity";
import { CreditCardIcon } from "@sanity/icons";

export default defineType({
  name: "certificate",
  title: "Sertifikat",
  type: "document",
  icon: CreditCardIcon,
  fields: [
    defineField({
      name: "title",
      title: "Pemberi Sertifikat",
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
      name: "mainImage",
      title: "Gambar Sertifikat",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Teks Alternatif",
        },
      ],
      validation: (Rule) => Rule.required(),
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
