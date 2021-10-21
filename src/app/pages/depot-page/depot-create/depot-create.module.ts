import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepotCreateComponent} from './depot-create.component';
import {IonicModule} from '@ionic/angular';
import {ReactiveTypedFormsModule} from '@rxweb/reactive-form-validators';
import {FormErrorsModule} from '../../../shared/form-errors/form-errors.module';
import {UploadModule} from '../../../core/upload/upload.module';
import {HasSlugModule} from '../../../shared/has-slug/has-slug.module';


@NgModule({
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
export class DepotCreateModule {
}
