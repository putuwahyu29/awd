/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\studio\[[...index]]\page.tsx` route
 */

import { visionTool } from "@sanity/vision";
import { apiVersion, dataset, projectId, previewSecretId } from "./env";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { vercelDeployTool } from "sanity-plugin-vercel-deploy";
import Iframe, {
  defineUrlResolver,
  IframeOptions,
} from "sanity-plugin-iframe-pane";
import { previewUrl } from "sanity-plugin-iframe-pane/preview-url";
import { schema } from "./schema";
import Logo from "@/app/components/SanityStudio/Logo";
import { pageStructure, singletonPlugin } from "plugins/settings";
import setting from "schemas/singleton/setting";

export const PREVIEWABLE_DOCUMENT_TYPES = [
  schema.types.find((t) => t.name === "post")?.name || "",
  schema.types.find((t) => t.name === "project")?.name || "",
] satisfies string[];

export const PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS = [
  schema.types.find((t) => t.name === "post")?.name || "",
  schema.types.find((t) => t.name === "project")?.name || "",
] satisfies typeof PREVIEWABLE_DOCUMENT_TYPES;

// Used to generate URLs for drafts and live previews
export const PREVIEW_BASE_URL = "/api/draft";

export const urlResolver = defineUrlResolver({
  base: PREVIEW_BASE_URL,
  requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
});

export const iframeOptions = {
  url: urlResolver,
  urlSecretId: previewSecretId,
} satisfies IframeOptions;

export default defineConfig({
  basePath: "/studio",
  title: "Awd",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool({
      structure: pageStructure([setting]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // You can add any React component to `S.view.component` and it will be rendered in the pane
      // and have access to content in the form in real-time.
      // It's part of the Studio's “Structure Builder API” and is documented here:
      // https://www.sanity.io/docs/structure-builder-reference
      defaultDocumentNode: (S, { schemaType }) => {
        if ((PREVIEWABLE_DOCUMENT_TYPES as string[]).includes(schemaType)) {
          return S.document().views([
            // Default form view
            S.view.form(),
            // Preview
            S.view.component(Iframe).options(iframeOptions).title("Preview"),
          ]);
        }

        return null;
      },
    }),
    previewUrl({
      base: PREVIEW_BASE_URL,
      requiresSlug: PREVIEWABLE_DOCUMENT_TYPES_REQUIRING_SLUGS,
      urlSecretId: previewSecretId,
      matchTypes: PREVIEWABLE_DOCUMENT_TYPES,
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    vercelDeployTool(),
    singletonPlugin([setting.name]),
  ],
  studio: {
    components: {
      logo: Logo,
    },
  },
});
