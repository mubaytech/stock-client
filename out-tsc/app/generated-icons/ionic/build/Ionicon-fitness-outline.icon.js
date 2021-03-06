import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconFitnessOutline = {
    name: 'fitness_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="fitness-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M352.92 80C288 80 256 144 256 144s-32-64-96.92-64c-52.76 0-94.54 44.14-95.08 96.81-1.1 109.33 86.73 187.08 183 252.42a16 16 0 0018 0c96.26-65.34 184.09-143.09 183-252.42-.54-52.67-42.32-96.81-95.08-96.81z" class="fitness-outline_svg__ionicon-fill-none fitness-outline_svg__ionicon-stroke-width"/><path d="M48 256h112l48-96 48 160 48-96 32 64h128" class="fitness-outline_svg__ionicon-fill-none fitness-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconFitnessOutlineComponent = class IoniconFitnessOutlineComponent {
};
IoniconFitnessOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-fitness-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconFitnessOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconFitnessOutlineComponent);
export { IoniconFitnessOutlineComponent };
let IoniconFitnessOutlineModule = class IoniconFitnessOutlineModule {
};
IoniconFitnessOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconFitnessOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconFitnessOutlineComponent
        ],
    })
], IoniconFitnessOutlineModule);
export { IoniconFitnessOutlineModule };
//# sourceMappingURL=Ionicon-fitness-outline.icon.js.map