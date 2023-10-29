import { OnInit } from "@angular/core";
import { Component } from "@angular/core";
import { BlogService } from "../../services/blog.service";
import { Observable } from "rxjs";
import { Post } from "../../types/blog/post";
import { ThemeService } from "../../services/theme.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.scss"],
})
export class BlogComponent implements OnInit {
  blogPost$: Observable<Post> | null = null;

  constructor(
    public themeService: ThemeService,
    private blogService: BlogService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    //this.route.paramMap.subscribe((params) => {
    //  const postName = params.get("post");
    //  console.log(postName);
    //});

    this.blogPost$ = this.blogService.getPost("test");
  }
}
