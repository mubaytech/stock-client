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
import { MaskModule } from "../../../shared/mask/mask.module";


@NgModule({
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
        MaskModule,
    ],
    exports: [
        UserCreateComponent
    ]
})
export class UserCreateModule {
}
