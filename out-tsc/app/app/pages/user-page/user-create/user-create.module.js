import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create.component';
import { PersonCreateModule } from '../person-create/person-create.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveTypedFormsModule } from '@rxweb/reactive-form-validators';
import { FormErrorsModule } from '../../../shared/form-errors/form-errors.module';
import { RolePickerModule } from '../role-picker/role-picker.module';
import { IonSelectableForceFloatingLabelModule } from '../../../shared/ion-selectable-force-floating-label/ion-selectable-force-floating-label.module';
import { ScrollbarThemeModule } from '../../../shared/scrollbar-theme/scrollbar-theme.module';
let UserCreateModule = class UserCreateModule {
};
UserCreateModule = __decorate([
    NgModule({
        declarations: [UserCreateComponent],
        imports: [
            CommonModule,
            PersonCreateModule,
            IonicModule,
            ReactiveTypedFormsModule,
            FormErrorsModule,
            RolePickerModule,
            IonSelectableForceFloatingLabelModule,
            ScrollbarThemeModule,
        ],
        exports: [
            UserCreateComponent
        ]
    })
], UserCreateModule);
export { UserCreateModule };
//# sourceMappingURL=user-create.module.js.map