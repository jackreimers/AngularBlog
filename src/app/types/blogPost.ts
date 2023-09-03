import { BlogMetadata } from "./blogMetadata";

export type BlogPost = {
  metadata: BlogMetadata;
  intro: string;
  content: string;
};
