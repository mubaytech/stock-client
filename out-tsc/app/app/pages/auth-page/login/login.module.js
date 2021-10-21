import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { IonicModule } from '@ionic/angular';
import { FormErrorsModule } from '../../../shared/form-errors/form-errors.module';
import { ReactiveTypedFormsModule } from '@rxweb/reactive-form-validators';
let LoginModule = class LoginModule {
};
LoginModule = __decorate([
    NgModule({
        declarations: [LoginComponent],
        imports: [
            CommonModule,
            IonicModule,
            FormErrorsModule,
            ReactiveTypedFormsModule
        ],
        exports: [
            LoginComponent
        ]
    })
], LoginModule);
export { LoginModule };
//# sourceMappingURL=login.module.js.map