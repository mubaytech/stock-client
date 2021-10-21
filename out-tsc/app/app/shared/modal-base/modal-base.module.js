import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalBaseComponent } from './modal-base.component';
import { IonicModule } from '@ionic/angular';
let ModalBaseModule = class ModalBaseModule {
};
ModalBaseModule = __decorate([
    NgModule({
        declarations: [ModalBaseComponent],
        imports: [
            CommonModule,
            IonicModule
        ],
        exports: [ModalBaseComponent]
    })
], ModalBaseModule);
export { ModalBaseModule };
//# sourceMappingURL=modal-base.module.js.map