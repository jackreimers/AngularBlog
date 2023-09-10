import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { ScrollService } from "./services/scroll.service";
import { ScreenService } from "./services/screen.service";
import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "blog";

  blockerIsVisible$: Observable<boolean> | null;
  scrollPercentage$: Observable<number> | null;

  constructor(
    scrollService: ScrollService,
    screenService: ScreenService,
    public themeService: ThemeService,
  ) {
    this.scrollPercentage$ = scrollService.scrollEvent;
    this.blockerIsVisible$ = screenService.isBlockerVisibleEvent;
  }
}
