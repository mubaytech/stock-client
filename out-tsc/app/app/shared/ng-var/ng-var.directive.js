import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
let NgVarDirective = class NgVarDirective {
    constructor(vcRef, templateRef) {
        this.vcRef = vcRef;
        this.templateRef = templateRef;
        this.context = {};
    }
    // ll
    set ngVar(context) {
        this.context.$implicit = this.context.ngVar = context;
        this.updateView();
    }
    updateView() {
        this.vcRef.clear();
        this.vcRef.createEmbeddedView(this.templateRef, this.context);
    }
};
__decorate([
    Input()
], NgVarDirective.prototype, "ngVar", null);
NgVarDirective = __decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: '[ngVar]'
    })
], NgVarDirective);
export { NgVarDirective };
//# sourceMappingURL=ng-var.directive.js.map