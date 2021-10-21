import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionPickerComponent } from './permission-picker.component';
import { IonicSelectableModule } from '@ionic-selectable/angular';
import { IonicModule } from '@ionic/angular';
import { ReactiveTypedFormsModule } from '@rxweb/reactive-form-validators';
let PermissionPickerModule = class PermissionPickerModule {
};
PermissionPickerModule = __decorate([
    NgModule({
        declarations: [PermissionPickerComponent],
        imports: [
            CommonModule,
            IonicSelectableModule,
            IonicModule,
            ReactiveTypedFormsModule
        ],
        exports: [PermissionPickerComponent]
    })
], PermissionPickerModule);
export { PermissionPickerModule };
//# sourceMappingURL=permission-picker.module.js.map