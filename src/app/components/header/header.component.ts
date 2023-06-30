import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ScrollService } from 'src/app/services/scroll-service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    //TODO: Change to a boolean if I don't end up using the percentage
    @Input() scrollPercentage: number | null = 0;
}
