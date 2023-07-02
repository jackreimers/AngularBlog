import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent {
    @Input() open: boolean | null = true;

    closeMenu(){
        this.open = false;
    }
}
