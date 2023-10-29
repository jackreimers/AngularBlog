import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Metadata } from "../types/blog/metadata";
import { Post } from "../types/blog/post";
import { map, Observable } from "rxjs";
import { Frontmatter } from "../types/blog/frontmatter";
import { Tag } from "../types/blog/tag";
import { tagMappings } from "../../assets/categories/tagMappings";

@Injectable({
  providedIn: "root",
})
export class BlogService {
  metadataRegex: RegExp = /^---([\s\S]*?)---/;

  constructor(private http: HttpClient) {}

  getPost(postName: string): Observable<Post> {
    const url = `assets/posts/${postName}.md`;
    const response = this.http.get(url, { responseType: "text" });

    return response.pipe(
      map((data) => {
        return this.getPostData(data);
      }),
    );
  }

  private getPostData(postData: string): Post {
    const metadata = this.getPostMetadata(postData);
    const body = postData.split("---").pop()?.split("<!--endintro-->") || [];

    const intro = body[0] ?? "";
    const content = body[1] || "";

    //Calculate time to read article
    const introWords = intro.split(" ").length;
    const contentWords = content.split(" ").length;

    metadata.readTime = Math.ceil((introWords + contentWords) / 200);

    return { metadata, intro, content };
  }

  getPostFrontmatter(postName: string): Observable<Frontmatter> {
    return this.getPost(postName).pipe(
      map((post) => {
        return {
          metadata: post.metadata,
          intro: post.intro,
        };
      }),
    );
  }

  private getPostMetadata(postData: string): Metadata {
    //TODO: Log failures somewhere?
    //TODO: Test how this fails
    const matchedMetadata = postData.match(this.metadataRegex);
    if (!matchedMetadata) {
      throw new Error("Failed to find any metadata on blog post.");
    }

    const rawMetadata = matchedMetadata[1];
    if (!rawMetadata) {
      throw new Error("Failed to get raw metadata from blog post.");
    }

    const metadataLines = rawMetadata.split("\n");
    const accumulator = metadataLines.reduce(
      (accumulator: [string, string][], line) => {
        const [key, ...value] = line.split(":").map((part) => part.trim());

        if (key) {
          const joinedValue = value[1] ? value.join(":") : value.join("");
          accumulator.push([key, joinedValue]);
        }
        return accumulator;
      },
      [],
    );

    const mappedMetadata: { [key: string]: string } =
      Object.fromEntries(accumulator);

    return {
      title: mappedMetadata["title"],
      author: mappedMetadata["author"],
      date: mappedMetadata["date"],
      tags: this.parseTags(mappedMetadata["categories"]),

      socialName: mappedMetadata["social-name"],
      socialUrl: mappedMetadata["social-url"],

      //This is set later as we don't have access to the content in this function
      //TODO: Get all metadata in one go
      readTime: null,
    };
  }

  private parseTags(tags: string): Tag[] {
    const split = tags.split(",");
    return split.map((tag) => {
      tag = tag.trim();

      return {
        name: tagMappings.find((i) => i.slug == tag)?.name ?? tag,
        slug: tag,
      };
    });
  }
}
