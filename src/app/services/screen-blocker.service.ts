import { EventEmitter, Injectable, Output } from "@angular/core";
import { VoidFunction } from "../types";

@Injectable({
  providedIn: "root",
})
export class ScreenBlockerService {
  @Output() isVisibleEvent = new EventEmitter<boolean>();

  callback: VoidFunction = null;

  open(callback: VoidFunction): void {
    this.isVisibleEvent.emit(true);
    this.callback = callback;
  }

  close(ignoreCallback: boolean = false): void {
    if (this.callback && !ignoreCallback) this.callback();

    this.isVisibleEvent.emit(false);
  }
}
