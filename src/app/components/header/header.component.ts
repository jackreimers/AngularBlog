import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { ScreenService } from "../../services/screen.service";
import { ThemeService } from "../../services/theme.service";
import { IconButtonState } from "../buttons/icon-button/icon-button-state";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements AfterViewInit {
  //TODO: Change to a boolean if I don't end up using the percentage
  @Input() scrollPercentage: number | null = 0;

  offset: number = 0;
  states: IconButtonState[] = [
    { state: "dark", icon: "dark_mode" },
    //{ state: "system", icon: "devices" },
    { state: "light", icon: "light_mode" },
  ];

  constructor(
    private elementRef: ElementRef,
    public themeService: ThemeService,
    public screenService: ScreenService,
  ) {}

  ngAfterViewInit(): void {
    this.offset = this.elementRef.nativeElement.firstChild.offsetHeight + 60;
  }
}
