import { Component, Input } from "@angular/core";
import { Tag } from "../../types/blog/tag";
import { ThemeService } from "../../services/theme.service";

@Component({
  selector: "app-tag",
  templateUrl: "./tag.component.html",
  styleUrls: ["./tag.component.scss"],
})
export class TagComponent {
  @Input() category: Tag | null = null;

  constructor(public themeService: ThemeService) {}
}
