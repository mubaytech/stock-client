import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PermissionPickerComponent} from './permission-picker.component';
import {IonicSelectableModule} from '@ionic-selectable/angular';
import {IonicModule} from '@ionic/angular';
import {ReactiveTypedFormsModule} from '@rxweb/reactive-form-validators';


@NgModule({
    declarations: [PermissionPickerComponent],
    imports: [
        CommonModule,
        IonicSelectableModule,
        IonicModule,
        ReactiveTypedFormsModule
    ],
    exports: [PermissionPickerComponent]
})
export class PermissionPickerModule {
}
