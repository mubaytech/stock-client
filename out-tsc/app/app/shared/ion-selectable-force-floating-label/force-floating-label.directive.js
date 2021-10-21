import { __decorate } from "tslib";
import { Directive } from '@angular/core';
let ForceFloatingLabelDirective = class ForceFloatingLabelDirective {
    constructor(el, renderer, zone) {
        this.el = el;
        this.renderer = renderer;
        this.zone = zone;
        this.count = 0;
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
};
ForceFloatingLabelDirective = __decorate([
    Directive({
        selector: '[appForceFloatingLabel]'
    })
], ForceFloatingLabelDirective);
export { ForceFloatingLabelDirective };
//# sourceMappingURL=force-floating-label.directive.js.map