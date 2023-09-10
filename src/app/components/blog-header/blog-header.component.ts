import { Component, Input } from "@angular/core";
import { Metadata } from "../../types/blog/metadata";

@Component({
  selector: "app-blog-header",
  templateUrl: "./blog-header.component.html",
  styleUrls: ["./blog-header.component.scss"],
})
export class BlogHeaderComponent {
  @Input() metadata: Metadata | null = null;
}
