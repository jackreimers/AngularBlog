import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { BlogPostService } from "../../services/blog-post.service";
import { Observable } from "rxjs";
import { BlogPost } from "../../types/blogPost";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blogPost$: Observable<BlogPost> | null = null;

  constructor(private blogService: BlogPostService) {}

  ngOnInit(): void {
    this.blogPost$ = this.blogService.getPost("test");
  }
}
