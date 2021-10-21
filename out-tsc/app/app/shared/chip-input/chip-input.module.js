import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipInputComponent } from './chip-input.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ReactiveTypedFormsModule } from '@rxweb/reactive-form-validators';
import { ChipInputLabelDirective } from './chip-input-label.directive';
import { ChipInputFieldDirective } from './chip-input-field.directive';
import { ChipInputItemDirective } from './chip-input-item.directive';
let ChipInputModule = class ChipInputModule {
};
ChipInputModule = __decorate([
    NgModule({
        declarations: [ChipInputComponent, ChipInputLabelDirective, ChipInputFieldDirective, ChipInputItemDirective],
        exports: [
            ChipInputComponent
        ],
        imports: [
            CommonModule,
            IonicModule,
            FormsModule,
            ReactiveTypedFormsModule
        ]
    })
], ChipInputModule);
export { ChipInputModule };
//# sourceMappingURL=chip-input.module.js.map