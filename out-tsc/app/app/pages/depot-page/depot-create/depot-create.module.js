import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepotCreateComponent } from './depot-create.component';
import { IonicModule } from '@ionic/angular';
import { ReactiveTypedFormsModule } from '@rxweb/reactive-form-validators';
import { FormErrorsModule } from '../../../shared/form-errors/form-errors.module';
import { UploadModule } from '../../../core/upload/upload.module';
import { HasSlugModule } from '../../../shared/has-slug/has-slug.module';
let DepotCreateModule = class DepotCreateModule {
};
DepotCreateModule = __decorate([
    NgModule({
        declarations: [DepotCreateComponent],
        imports: [
            CommonModule,
            IonicModule,
            ReactiveTypedFormsModule,
            FormErrorsModule,
            UploadModule,
            HasSlugModule
        ],
        exports: [DepotCreateComponent]
    })
], DepotCreateModule);
export { DepotCreateModule };
//# sourceMappingURL=depot-create.module.js.map