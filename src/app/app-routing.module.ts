import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { BlogListComponent } from "./pages/blog-list/blog-list.component";

const routes = [
  { path: "", component: IndexComponent },
  { path: "blog-list", component: BlogListComponent },
  { path: "blog", component: BlogComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
