import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-icon-button',
    templateUrl: './icon-button.component.html',
    styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent {
    @Input() icon: string = '';
    @Input() classes: string = '';
    @Output() onClick = new EventEmitter();

    raiseClickEvent() : void {
        this.onClick.emit();
    }
}
