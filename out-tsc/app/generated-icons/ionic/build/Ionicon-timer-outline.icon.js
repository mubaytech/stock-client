import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTimerOutline = {
    name: 'timer_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="timer-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M112.91 128A191.85 191.85 0 0064 254c-1.18 106.35 85.65 193.8 192 194 106.2.2 192-85.83 192-192 0-104.54-83.55-189.61-187.5-192a4.36 4.36 0 00-4.5 4.37V152" class="timer-outline_svg__ionicon-fill-none timer-outline_svg__ionicon-stroke-width"/><path d="M233.38 278.63l-79-113a8.13 8.13 0 0111.32-11.32l113 79a32.5 32.5 0 01-37.25 53.26 33.21 33.21 0 01-8.07-7.94z"/></svg>`
};
let IoniconTimerOutlineComponent = class IoniconTimerOutlineComponent {
};
IoniconTimerOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-timer-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconTimerOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconTimerOutlineComponent);
export { IoniconTimerOutlineComponent };
let IoniconTimerOutlineModule = class IoniconTimerOutlineModule {
};
IoniconTimerOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconTimerOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconTimerOutlineComponent
        ],
    })
], IoniconTimerOutlineModule);
export { IoniconTimerOutlineModule };
//# sourceMappingURL=Ionicon-timer-outline.icon.js.map