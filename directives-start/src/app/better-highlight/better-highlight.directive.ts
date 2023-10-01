import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
    selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
    @Input() defaultColor: string = 'transparent';
    @Input('appBetterHighlight') highlightColor: string = 'blue';
    @HostBinding('style.backgroundColor') backgroundColor: string;

    ngOnInit(): void {
        this.backgroundColor = this.defaultColor
        // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
    }

    constructor(private eleRef: ElementRef, private render: Renderer2) {
    }

    @HostListener('mouseenter') mouseover(eventData: Event) {
        // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'blue');
        this.backgroundColor = this.highlightColor
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        // this.render.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent');
        this.backgroundColor = this.defaultColor;
    }

}
