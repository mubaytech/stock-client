import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MustBeBiggerDirective } from './must-be-bigger.directive';



@NgModule({
    declarations: [MustBeBiggerDirective],
    exports: [
        MustBeBiggerDirective
    ],
    imports: [
        CommonModule
    ]
})
export class MustBeBiggerModule { }
