import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { IconButtonComponent } from "./components/buttons/icon-button/icon-button.component";
import { BannerComponent } from "./components/banner/banner.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContainerComponent } from "./components/container/container.component";
import { CardComponent } from "./components/card/card.component";
import { CardGridComponent } from "./components/card-grid/card-grid.component";
import { FocusBlockerComponent } from "./components/focus-blocker/focus-blocker.component";
import { ButtonComponent } from "./components/buttons/button/button.component";
import { MarkdownModule } from "ngx-markdown";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { BlogComponent } from "./pages/blog/blog.component";
import { IndexComponent } from "./pages/index/index.component";
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { BlogHeaderComponent } from './components/blog-header/blog-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IconButtonComponent,
    BannerComponent,
    FooterComponent,
    ContainerComponent,
    CardComponent,
    CardGridComponent,
    FocusBlockerComponent,
    ButtonComponent,
    BlogComponent,
    IndexComponent,
    SideNavComponent,
    BlogHeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
