/**
 * Created By : Author XYZ (http://angular/5)
 */

import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightStudent]'
})
export class HighlightStudentDirective {

	constructor(private el: ElementRef) {
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.highlight('gray');
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.highlight(null);
	}

	private highlight(color: string) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}

/**
 * Created By : Author XYZ (http://angular/5)
 */