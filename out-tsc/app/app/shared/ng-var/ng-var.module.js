import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgVarDirective } from './ng-var.directive';
let NgVarModule = class NgVarModule {
};
NgVarModule = __decorate([
    NgModule({
        declarations: [NgVarDirective],
        imports: [
            CommonModule
        ],
        exports: [
            NgVarDirective
        ]
    })
], NgVarModule);
export { NgVarModule };
//# sourceMappingURL=ng-var.module.js.map