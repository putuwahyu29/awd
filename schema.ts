import { type SchemaTypeDefinition } from "sanity";

import author from "./schemas/project/author";
import project from "./schemas/project";
import technology from "schemas/project/technology";
import certificate from "./schemas/certificate";
import setting from "schemas/singleton/setting";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    

    // Proyek
    project,
    technology,
    author,

    // Sertifikat
    certificate,
    setting,
  ],
};
