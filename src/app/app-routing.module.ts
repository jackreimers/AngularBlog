import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { IndexComponent } from "./pages/index/index.component";
import { BlogComponent } from "./pages/blog/blog.component";

const routes = [
  { path: "", component: IndexComponent },
  { path: "blog", component: BlogComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
