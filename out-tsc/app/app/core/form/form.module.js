var FormModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormValidationService } from './form-validation.service';
let FormModule = FormModule_1 = class FormModule {
    static forRoot() {
        return {
            ngModule: FormModule_1,
            providers: [FormValidationService]
        };
    }
};
FormModule = FormModule_1 = __decorate([
    NgModule({
        declarations: [],
        providers: [],
        imports: [
            CommonModule
        ]
    })
], FormModule);
export { FormModule };
//# sourceMappingURL=form.module.js.map