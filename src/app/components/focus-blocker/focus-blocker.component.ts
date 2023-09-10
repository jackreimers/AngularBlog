import { Component, Input } from "@angular/core";
import { ScreenService } from "../../services/screen.service";

@Component({
  selector: "app-focus-blocker",
  templateUrl: "./focus-blocker.component.html",
  styleUrls: ["./focus-blocker.component.scss"],
})
export class FocusBlockerComponent {
  @Input() isVisible: boolean | null = false;

  constructor(private screenService: ScreenService) {}

  raiseOnClick(): void {
    this.screenService.hideBlocker();
  }
}
