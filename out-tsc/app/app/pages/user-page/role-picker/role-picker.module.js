import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolePickerComponent } from './role-picker.component';
import { ReactiveTypedFormsModule } from '@rxweb/reactive-form-validators';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from '../../../shared/ionic-selectable/ionic-selectable.module';
let RolePickerModule = class RolePickerModule {
};
RolePickerModule = __decorate([
    NgModule({
        declarations: [RolePickerComponent],
        imports: [
            CommonModule,
            IonicSelectableModule,
            ReactiveTypedFormsModule,
            IonicModule
        ],
        exports: [
            RolePickerComponent
        ]
    })
], RolePickerModule);
export { RolePickerModule };
//# sourceMappingURL=role-picker.module.js.map