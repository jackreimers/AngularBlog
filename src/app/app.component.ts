import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollService } from './services/scroll-service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'blog';

    scrollPercentage$: Observable<number> | undefined;

    constructor(scrollService: ScrollService) {
        this.scrollPercentage$ = scrollService.scrollEvent;
    }
}
