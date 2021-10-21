import {AfterViewChecked, Directive, ElementRef, NgZone, Renderer2} from '@angular/core';
import {timer} from "rxjs";

@Directive({
    selector: '[appForceFloatingLabel]'
})
export class ForceFloatingLabelDirective implements AfterViewChecked {
    private count = 0;

    constructor(public el: ElementRef, public  renderer: Renderer2, public zone: NgZone) {
    }


    ngAfterViewChecked() {
        if (this.count > 0) {
            this.renderer.addClass(this.el.nativeElement, 'item-label-floating');
            return;
        }
        // console.error('error');
        if (this.count < 1) {
            return ++this.count;
        }
        /*if ((this.el.nativeElement as HTMLElement).classList.contains('item-label-floating')) {
            return;
        }
        this.renderer.addClass(this.el.nativeElement, 'item-label-floating');
        */
    }


}
