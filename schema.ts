import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/blog/category";
import post from "./schemas/blog/post";
import author from "./schemas/blog/author";
import project from "./schemas/project";
import technology from "schemas/project/technology";
import certificate from "./schemas/certificate";
import setting from "schemas/singleton/setting";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    //  Artikel
    post,
    author,
    category,

    // Proyek
    project,
    technology,

    // Sertifikat
    certificate,

    blockContent,
    setting,
  ],
};
