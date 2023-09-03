import { Component, Input } from "@angular/core";
import { BlogMetadata } from "../../types/blogMetadata";

@Component({
  selector: "app-blog-header",
  templateUrl: "./blog-header.component.html",
  styleUrls: ["./blog-header.component.scss"],
})
export class BlogHeaderComponent {
  @Input() metadata: BlogMetadata | undefined = undefined;
}
