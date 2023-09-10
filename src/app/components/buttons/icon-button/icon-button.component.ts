import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  ElementRef,
} from "@angular/core";
import { IconButtonState } from "./icon-button-state";

@Component({
  selector: "app-icon-button",
  templateUrl: "./icon-button.component.html",
  styleUrls: ["./icon-button.component.scss"],
})
export class IconButtonComponent implements OnInit {
  @Input() icon: string = "";
  @Input() states: IconButtonState[] | null = null;
  @Input() classes: string = "";

  @Output() onClick = new EventEmitter();
  @Output() onStateClick = new EventEmitter<string>();

  nextStateIndex: number = 1;
  changingState: boolean = false;

  activeState: IconButtonState | null = null;
  nextState: IconButtonState | null = null;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    if (this.states) {
      this.activeState = this.states[0];
      this.nextState = this.states[1];
    }
  }

  raiseClickEvent(): void {
    this.onClick.emit();
  }

  raiseStateClickEvent(): void {
    this.changingState = true;
    this.onStateClick.emit(this.activeState!.state);

    setTimeout(() => {
      this.changeState();
      this.changingState = false;
      this.elementRef.nativeElement.firstChild.blur();
    }, 500);
  }

  changeState(): void {
    let newIndex = this.nextStateIndex + 1;
    if (newIndex >= this.states!.length) {
      newIndex = 0;
    }

    this.activeState = this.nextState;
    this.nextState = this.states![newIndex];

    this.nextStateIndex = newIndex;
  }
}
