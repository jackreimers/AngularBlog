import { AfterViewInit, Component, ElementRef, Input } from "@angular/core";
import { MenuService } from "../../services/menu.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements AfterViewInit {
  //TODO: Change to a boolean if I don't end up using the percentage
  @Input() scrollPercentage: number | null = 0;

  offset: number = 0;

  constructor(
    private elementRef: ElementRef,
    public menuService: MenuService,
  ) {}

  ngAfterViewInit(): void {
    this.offset = this.elementRef.nativeElement.firstChild.offsetHeight + 60;
  }
}
