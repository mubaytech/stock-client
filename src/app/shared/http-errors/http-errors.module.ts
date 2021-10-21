import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpErrorsComponent} from './http-errors.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [HttpErrorsComponent],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class HttpErrorsModule {
}
