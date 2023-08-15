import { defineField, defineType } from "sanity";
import { CogIcon } from "@sanity/icons";

export default defineType({
  name: "settings",
  title: "Pengaturan",
  type: "document",
  icon: CogIcon,
  fields: [
    defineField({
      name: "heroSection",
      title: "Hero",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "aboutSection",
      title: "Tentang",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "projectSection",
      title: "Proyek",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "skillSection",
      title: "Kemampuan",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "certificateSection",
      title: "Sertifikat",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "contactSection",
      title: "Kontak",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Beranda",
      };
    },
  },
});
