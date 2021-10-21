import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MustBeBiggerDirective } from './must-be-bigger.directive';
let MustBeBiggerModule = class MustBeBiggerModule {
};
MustBeBiggerModule = __decorate([
    NgModule({
        declarations: [MustBeBiggerDirective],
        exports: [
            MustBeBiggerDirective
        ],
        imports: [
            CommonModule
        ]
    })
], MustBeBiggerModule);
export { MustBeBiggerModule };
//# sourceMappingURL=must-be-bigger.module.js.map