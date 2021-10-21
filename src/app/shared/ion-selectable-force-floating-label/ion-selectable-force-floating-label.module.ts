import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ForceFloatingLabelDirective} from './force-floating-label.directive';


@NgModule({
    declarations: [ForceFloatingLabelDirective],
    imports: [
        CommonModule
    ],
    exports: [ForceFloatingLabelDirective]
})
export class IonSelectableForceFloatingLabelModule {
}
