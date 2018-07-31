import { Directive, ElementRef, Renderer } from '@angular/core';


@Directive({ selector: '[appFontcolorRed]' })
export class FontcolorDirective {
	constructor(elem: ElementRef, renderer: Renderer) {
		renderer.setElementStyle(elem.nativeElement, 'color', 'RED');
	}
}

@Directive({ selector: '[appFontcolorYellow]' })
export class FontcolorDirective1 {
	constructor(elem: ElementRef, renderer: Renderer) {
		renderer.setElementStyle(elem.nativeElement, 'color', 'YELLOW');
	}
}