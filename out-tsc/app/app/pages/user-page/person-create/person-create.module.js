import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCreateComponent } from './person-create.component';
import { FormErrorsModule } from '../../../shared/form-errors/form-errors.module';
import { IonicModule } from '@ionic/angular';
import { ReactiveTypedFormsModule } from '@rxweb/reactive-form-validators';
import { ChipInputModule } from '../../../shared/chip-input/chip-input.module';
import { UploadModule } from '../../../core/upload/upload.module';
import { MaskModule } from '../../../shared/mask/mask.module';
let PersonCreateModule = class PersonCreateModule {
};
PersonCreateModule = __decorate([
    NgModule({
        declarations: [PersonCreateComponent],
        imports: [
            CommonModule,
            FormErrorsModule,
            IonicModule,
            ReactiveTypedFormsModule,
            ChipInputModule,
            UploadModule,
            MaskModule
        ],
        exports: [
            PersonCreateComponent,
        ]
    })
], PersonCreateModule);
export { PersonCreateModule };
//# sourceMappingURL=person-create.module.js.map