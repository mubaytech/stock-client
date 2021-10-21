var UploadModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadDirective } from './upload.directive';
import { UploadComponent } from './upload.component';
import { IonicModule } from '@ionic/angular';
import { UploadService } from './upload.service';
import { NgVarModule } from '../../shared/ng-var/ng-var.module';
import { ReactiveTypedFormsModule } from '@rxweb/reactive-form-validators';
import { FileInputComponent } from './file-input/file-input.component';
import { FormErrorsModule } from '../../shared/form-errors/form-errors.module';
import { ImageModule } from '../../shared/image/image.module';
import { PromtOnClickModule } from '../../shared/promt-on-click/promt-on-click.module';
let UploadModule = UploadModule_1 = class UploadModule {
    static forRoot() {
        return {
            ngModule: UploadModule_1,
            providers: [
                UploadService
            ]
        };
    }
};
UploadModule = UploadModule_1 = __decorate([
    NgModule({
        declarations: [UploadDirective, UploadComponent, FileInputComponent],
        imports: [
            CommonModule,
            IonicModule,
            NgVarModule,
            ReactiveTypedFormsModule,
            FormErrorsModule,
            ImageModule,
            PromtOnClickModule
        ],
        exports: [
            UploadComponent,
            FileInputComponent
        ]
    })
], UploadModule);
export { UploadModule };
//# sourceMappingURL=upload.module.js.map