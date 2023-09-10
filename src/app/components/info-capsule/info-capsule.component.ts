import { Component, Input } from "@angular/core";

@Component({
  selector: "app-info-capsule",
  templateUrl: "./info-capsule.component.html",
  styleUrls: ["./info-capsule.component.scss"],
})
export class InfoCapsuleComponent {
  @Input() icon: string = "";
  @Input() text: string = "";
  @Input() classes: string = "";
}
