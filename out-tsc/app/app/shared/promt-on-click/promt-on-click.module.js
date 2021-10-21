import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PromtAlertModule } from '../promt-alert/promt-alert.module';
import { PromtOnClickDirective } from './promt-on-click.directive';
let PromtOnClickModule = class PromtOnClickModule {
};
PromtOnClickModule = __decorate([
    NgModule({
        declarations: [PromtOnClickDirective],
        imports: [
            CommonModule,
            PromtAlertModule
        ],
        exports: [
            PromtOnClickDirective
        ]
    })
], PromtOnClickModule);
export { PromtOnClickModule };
//# sourceMappingURL=promt-on-click.module.js.map