import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() text: string = '';
    @Input() classes: string = '';
    @Output() onClick = new EventEmitter();

    raiseClickEvent(): void {
        this.onClick.emit();
    }
}
