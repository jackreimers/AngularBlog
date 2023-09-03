import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollService } from './services/scroll.service';
import { ScreenBlockerService } from './services/screen-blocker.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog';

  blockerIsVisible$: Observable<boolean> | null;
  scrollPercentage$: Observable<number> | null;

  constructor(
    blockerService: ScreenBlockerService,
    scrollService: ScrollService,
  ) {
    this.blockerIsVisible$ = blockerService.isVisibleEvent;
    this.scrollPercentage$ = scrollService.scrollEvent;
  }
}
