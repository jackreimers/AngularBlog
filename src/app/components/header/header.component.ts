import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    //TODO: Change to a boolean if I don't end up using the percentage
    @Input() scrollPercentage: number | null = 0;

    menuOpen: boolean = false;

    setMenuOpen(open: boolean) {
        this.menuOpen = open;
    }
}
