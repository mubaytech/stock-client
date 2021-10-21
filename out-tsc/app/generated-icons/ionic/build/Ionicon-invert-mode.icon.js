import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconInvertMode = {
    name: 'invert_mode',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="invert-mode_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="208" class="invert-mode_svg__ionicon-fill-none invert-mode_svg__ionicon-stroke-width"/><path d="M256 176v160a80 80 0 000-160zm0-128v128a80 80 0 000 160v128c-114.88 0-208-93.12-208-208S141.12 48 256 48z"/></svg>`
};
let IoniconInvertModeComponent = class IoniconInvertModeComponent {
};
IoniconInvertModeComponent = __decorate([
    Component({
        selector: 'app-ionicon-invert-mode',
        template: `
    <div class="app-ionic-icon">
        ${IoniconInvertMode.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconInvertModeComponent);
export { IoniconInvertModeComponent };
let IoniconInvertModeModule = class IoniconInvertModeModule {
};
IoniconInvertModeModule = __decorate([
    NgModule({
        declarations: [IoniconInvertModeComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconInvertModeComponent
        ],
    })
], IoniconInvertModeModule);
export { IoniconInvertModeModule };
//# sourceMappingURL=Ionicon-invert-mode.icon.js.map