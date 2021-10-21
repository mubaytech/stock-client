import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMedical = {
    name: 'medical',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="medical_svg__ionicon" viewBox="0 0 512 512"><path d="M272 464h-32a32 32 0 01-32-32l.05-85.82a4 4 0 00-6-3.47l-74.34 43.06a31.48 31.48 0 01-43-11.52l-16.5-28.64-.06-.1a31.65 31.65 0 0111.56-42.8l74.61-43.25a4 4 0 000-6.92l-74.54-43.21a31.41 31.41 0 01-11.55-43l16.44-28.55a31.48 31.48 0 0119.27-14.74 31.14 31.14 0 0123.8 3.2l74.31 43a4 4 0 006-3.47L208 80a32 32 0 0132-32h32a32 32 0 0132 32v85.72a4 4 0 006 3.47l74.34-43.06a31.51 31.51 0 0143 11.52l16.49 28.64.06.09a31.52 31.52 0 01-11.64 42.86l-74.53 43.2a4 4 0 000 6.92l74.53 43.2a31.42 31.42 0 0111.56 43l-16.44 28.55a31.48 31.48 0 01-19.27 14.74 31.14 31.14 0 01-23.8-3.2l-74.31-43a4 4 0 00-6 3.46L304 432a32 32 0 01-32 32zm-93.56-197.48zm0-21zm155.1-.08zm0 0z"/></svg>`
};
let IoniconMedicalComponent = class IoniconMedicalComponent {
};
IoniconMedicalComponent = __decorate([
    Component({
        selector: 'app-ionicon-medical',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMedical.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMedicalComponent);
export { IoniconMedicalComponent };
let IoniconMedicalModule = class IoniconMedicalModule {
};
IoniconMedicalModule = __decorate([
    NgModule({
        declarations: [IoniconMedicalComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMedicalComponent
        ],
    })
], IoniconMedicalModule);
export { IoniconMedicalModule };
//# sourceMappingURL=Ionicon-medical.icon.js.map