import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

    ngOnInit(): void {
        // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    }

    constructor(private eleRef: ElementRef, private render: Renderer2) {
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = 'blue'
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = 'transparent';
    }

}
