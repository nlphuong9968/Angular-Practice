import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    ngOnInit(): void {
        this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    }

    constructor(private eleRef: ElementRef, private render: Renderer2) {
    }

}
