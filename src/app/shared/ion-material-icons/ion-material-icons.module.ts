import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialIconsDirective } from './material-icons.directive';



@NgModule({
    declarations: [MaterialIconsDirective],
    exports: [
        MaterialIconsDirective
    ],
    imports: [
        CommonModule
    ]
})
export class IonMaterialIconsModule { }
