import { Metadata } from "./metadata";

export type Post = {
  metadata: Metadata;
  intro: string;
  content: string;
};
