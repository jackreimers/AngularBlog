import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ScrollService {
    @Output() scrollEvent = new EventEmitter<number>();
    
    constructor() {
        document.addEventListener('scroll', () => {
            this.trackScroll();
        });
    }

    trackScroll(): void {
        const root = document.documentElement;
        const body = document.body;

        const percentage = (root.scrollTop || body.scrollTop) / ((root.scrollHeight|| body.scrollHeight) - root.clientHeight) * 100;

        this.scrollEvent.emit(percentage);
    }

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}