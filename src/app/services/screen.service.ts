import { EventEmitter, Injectable, Output } from "@angular/core";
import { VoidFunction } from "../types";

@Injectable({
  providedIn: "root",
})
export class ScreenService {
  @Output() isMenuVisibleEvent = new EventEmitter<boolean>();
  @Output() isBlockerVisibleEvent = new EventEmitter<boolean>();

  blockerCallback: VoidFunction = null;

  showMenu(): void {
    this.isMenuVisibleEvent.emit(true);
    this.showBlocker(() => this.hideMenu());
  }

  hideMenu(): void {
    this.isMenuVisibleEvent.emit(false);
    this.hideBlocker(true);
  }

  showBlocker(callback: VoidFunction): void {
    this.isBlockerVisibleEvent.emit(true);
    this.blockerCallback = callback;
  }

  hideBlocker(ignoreCallback: boolean = false): void {
    if (this.blockerCallback && !ignoreCallback) this.blockerCallback();

    this.isBlockerVisibleEvent.emit(false);
  }
}
