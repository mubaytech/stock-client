import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadDirective} from './upload.directive';
import {UploadComponent} from './upload.component';
import {IonicModule} from '@ionic/angular';
import {UploadService} from './upload.service';
import {NgVarModule} from '../../shared/ng-var/ng-var.module';
import {FileInputComponent} from './file-input/file-input.component';
import {FormErrorsModule} from '../../shared/form-errors/form-errors.module';
import {ImageModule} from '../../shared/image/image.module';
import {PromtOnClickModule} from '../../shared/promt-on-click/promt-on-click.module';
import {CustomIonInputModule} from "../../shared/custom-ion-input/custom-ion-input.module";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IoniconCameraOutlineModule} from "../../../generated-icons/ionic";



@NgModule({
    declarations: [UploadDirective, UploadComponent, FileInputComponent],
    imports: [
        CommonModule,
        IonicModule,
        NgVarModule,
        ReactiveFormsModule,
        FormErrorsModule,
        ImageModule,
        PromtOnClickModule,
        CustomIonInputModule,
        FormsModule,
        IoniconCameraOutlineModule
    ],
    exports: [
        UploadComponent,
        FileInputComponent
    ],
})
export class UploadModule {
    public static forRoot(): ModuleWithProviders<UploadModule> {
        return {
            ngModule: UploadModule,
            providers: [
                UploadService
            ]
        };
    }
}
