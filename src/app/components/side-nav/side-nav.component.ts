import { Component, OnInit } from "@angular/core";
import { MenuService } from "../../services/menu.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-side-nav",
  templateUrl: "./side-nav.component.html",
  styleUrls: ["./side-nav.component.scss"],
})
export class SideNavComponent implements OnInit {
  menuOpen$: Observable<boolean> | null = null;

  constructor(public menuService: MenuService) {}

  ngOnInit(): void {
    this.menuOpen$ = this.menuService.isVisibleEvent;
  }
}
