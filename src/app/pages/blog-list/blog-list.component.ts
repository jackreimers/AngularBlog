import { Component } from "@angular/core";
import { BlogService } from "../../services/blog.service";

@Component({
  selector: "app-blog-list",
  templateUrl: "./blog-list.component.html",
  styleUrls: ["./blog-list.component.scss"],
})
export class BlogListComponent {
  //posts$ = this.blogService.();

  constructor(private blogService: BlogService) {}
}
