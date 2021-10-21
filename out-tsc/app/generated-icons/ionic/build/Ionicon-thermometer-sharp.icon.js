import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconThermometerSharp = {
    name: 'thermometer_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="thermometer-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M320 291.24V80a64 64 0 10-128 0v211.24A113.39 113.39 0 00144 384a112 112 0 00224 0 113.39 113.39 0 00-48-92.76zM256 432a48 48 0 01-16-93.26V96h32v242.74A48 48 0 01256 432z"/></svg>`
};
let IoniconThermometerSharpComponent = class IoniconThermometerSharpComponent {
};
IoniconThermometerSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-thermometer-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconThermometerSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconThermometerSharpComponent);
export { IoniconThermometerSharpComponent };
let IoniconThermometerSharpModule = class IoniconThermometerSharpModule {
};
IoniconThermometerSharpModule = __decorate([
    NgModule({
        declarations: [IoniconThermometerSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconThermometerSharpComponent
        ],
    })
], IoniconThermometerSharpModule);
export { IoniconThermometerSharpModule };
//# sourceMappingURL=Ionicon-thermometer-sharp.icon.js.map