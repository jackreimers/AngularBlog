import { EventEmitter, Injectable, Output } from "@angular/core";
import { ScreenBlockerService } from "./screen-blocker.service";

@Injectable({
  providedIn: "root",
})
export class MenuService {
  @Output() isVisibleEvent = new EventEmitter<boolean>();

  constructor(private screenBlockerService: ScreenBlockerService) {}

  open(): void {
    this.isVisibleEvent.emit(true);
    this.screenBlockerService.open(() => this.close());
  }

  close(): void {
    this.isVisibleEvent.emit(false);
    this.screenBlockerService.close(true);
  }
}
