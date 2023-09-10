// TODO: Investigate having date parsed and typed
export type Metadata = {
  title: string;
  author: string;
  date: string;
  tags: string[];

  socialName: string;
  socialUrl: string;

  readTime: number | null;
};
