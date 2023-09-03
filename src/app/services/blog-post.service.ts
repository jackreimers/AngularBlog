import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BlogMetadata } from "../types/blogMetadata";
import { BlogPost } from "../types/blogPost";
import { map, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BlogPostService {
  metadataRegex: RegExp = /^---([\s\S]*?)---/;

  constructor(private http: HttpClient) {}

  getPost(postName: string): Observable<BlogPost> {
    const url = `assets/posts/${postName}.md`;
    const response = this.http.get(url, { responseType: "text" });

    return response.pipe(
      map((data) => {
        return this.processPostData(data);
      }),
    );
  }

  private processPostData(postData: string): BlogPost {
    const metadata = this.getPostMetadata(postData);
    const intro = this.getPostIntro(postData);
    const content = this.getPostContent(postData);

    return { metadata, intro, content };
  }

  private getPostMetadata(postData: string): BlogMetadata {
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
      tags: mappedMetadata["tags"].split(","),

      socialName: mappedMetadata["social-name"],
      socialUrl: mappedMetadata["social-url"],
    };
  }

  //TODO: Might be worth inlining these as calling the out of order could break things
  private getPostIntro(postData: string): string {
    return postData.split("<!--endintro-->")[0];
  }

  private getPostContent(postData: string): string {
    return postData.split("---").pop() || "";
  }
}
