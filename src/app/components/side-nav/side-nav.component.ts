import { Component, OnInit } from "@angular/core";
import { ScreenService } from "../../services/screen.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  menuOpen$: Observable<boolean> | null = null;

  constructor(public screenService: ScreenService) {}

  ngOnInit(): void {
    this.menuOpen$ = this.screenService.isMenuVisibleEvent;
  }
}
