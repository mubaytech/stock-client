import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepotsComponent} from './depots.component';


@NgModule({
    declarations: [DepotsComponent],
    imports: [
        CommonModule
    ],
    exports: [DepotsComponent]
})
export class DepotsModule {
}
