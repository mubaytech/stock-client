import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromtAlertComponent} from './promt-alert.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from "@angular/forms";


@NgModule({
    declarations: [PromtAlertComponent],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule
    ],
    exports: [
        PromtAlertComponent
    ]
})
export class PromtAlertModule {
}
