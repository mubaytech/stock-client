import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { AppOnDestroy } from '../../core/types';
import Inputmask from 'inputmask';
let MaskDirective = class MaskDirective extends AppOnDestroy {
    constructor(control, el, renderer) {
        super();
        this.control = control;
        this.el = el;
        this.renderer = renderer;
        this.options = {
            autoUnmask: true,
            clearIncomplete: true,
            onincomplete: () => {
                var _a;
                if ((_a = this.control.control.value) === null || _a === void 0 ? void 0 : _a.length) {
                    this.control.control.setValue(null);
                }
            }
        };
    }
    set appMask(mask) {
        this.mask = mask;
        if (this.instance) {
            this.instance.option({
                mask
            });
        }
    }
    set maskOptions(options) {
        this.options = Object.assign(Object.assign({}, this.options), options);
        if (this.instance) {
            this.instance.option(Object.assign({}, this.options));
        }
    }
    registerTextMask(inputElement) {
        this.instance = Inputmask(this.mask, Object.assign({}, this.options)).mask(inputElement);
    }
    ngAfterViewInit() {
        //
    }
    ngOnInit() {
        const input = this.el.nativeElement;
        if (input.tagName === 'ION-INPUT') {
            this.el.nativeElement.getInputElement().then(value => this.registerTextMask(value));
            return;
        }
        this.registerTextMask(input);
    }
    ngOnDestroy() {
        super.ngOnDestroy();
        // this.inputMask
        this.instance.remove();
    }
};
__decorate([
    Input()
], MaskDirective.prototype, "appMask", null);
__decorate([
    Input()
], MaskDirective.prototype, "maskOptions", null);
MaskDirective = __decorate([
    Directive({
        selector: '[appMask]'
    })
], MaskDirective);
export { MaskDirective };
//# sourceMappingURL=mask.directive.js.map