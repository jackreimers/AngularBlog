import {Component, Input} from '@angular/core';
import {ScreenBlockerService} from "../../services/screen-blocker.service";

@Component({
    selector: 'app-focus-blocker',
    templateUrl: './focus-blocker.component.html',
    styleUrls: ['./focus-blocker.component.scss']
})
export class FocusBlockerComponent {
    @Input() isVisible: boolean | null = false;
    
    constructor(private screenBlockerService: ScreenBlockerService) {}
    
    raiseOnClick(): void {
        this.screenBlockerService.close()
    }
}
