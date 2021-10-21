import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
let DisableControlDirective = class DisableControlDirective {
    constructor(ngControl) {
        this.ngControl = ngControl;
        this.initCondition = null;
    }
    set appDisableControl(condition) {
        this.action = condition;
        if (!this.initCondition !== null) {
            this.initCondition = condition;
        }
    }
    set action(condition) {
        const action = condition ? 'disable' : 'enable';
        // console.log(this.ngControl.name,this.ngControl.valid)
        if (this.ngControl.control) {
            this.ngControl.control[action]({ emitEvent: false });
        }
    }
    ngOnInit() {
        this.action = this.initCondition;
    }
};
__decorate([
    Input()
], DisableControlDirective.prototype, "appDisableControl", null);
DisableControlDirective = __decorate([
    Directive({
        selector: '[appDisableControl]'
    })
], DisableControlDirective);
export { DisableControlDirective };
//# sourceMappingURL=disable-control.directive.js.map