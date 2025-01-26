import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaType } from "./schema";

console.log("Sanity Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("Sanity Dataset:", process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET);

export const sanityConfig = defineConfig({
  name: "default",
  title: "studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_PROJECT_DATASET || "",
  plugins: [structureTool(), visionTool()],
  basePath: "/studio",
  schema: { types: schemaType },
});
