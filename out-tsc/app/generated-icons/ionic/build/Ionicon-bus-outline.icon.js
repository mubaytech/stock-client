import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBusOutline = {
    name: 'bus_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="bus-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="352" height="192" x="80" y="112" class="bus-outline_svg__ionicon-fill-none bus-outline_svg__ionicon-stroke-width" rx="32" ry="32"/><rect width="352" height="128" x="80" y="304" class="bus-outline_svg__ionicon-fill-none bus-outline_svg__ionicon-stroke-width" rx="32" ry="32"/><path d="M400 112H112a32.09 32.09 0 01-32-32 32.09 32.09 0 0132-32h288a32.09 32.09 0 0132 32 32.09 32.09 0 01-32 32zM144 432v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22zm272 0v22a10 10 0 01-10 10h-28a10 10 0 01-10-10v-22z" class="bus-outline_svg__ionicon-fill-none bus-outline_svg__ionicon-stroke-width"/><circle cx="368" cy="368" r="16" class="bus-outline_svg__ionicon-fill-none bus-outline_svg__ionicon-stroke-width"/><circle cx="144" cy="368" r="16" class="bus-outline_svg__ionicon-fill-none bus-outline_svg__ionicon-stroke-width"/><path d="M256 112v192M80 80v288M432 80v288" class="bus-outline_svg__ionicon-fill-none bus-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconBusOutlineComponent = class IoniconBusOutlineComponent {
};
IoniconBusOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-bus-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBusOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBusOutlineComponent);
export { IoniconBusOutlineComponent };
let IoniconBusOutlineModule = class IoniconBusOutlineModule {
};
IoniconBusOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconBusOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBusOutlineComponent
        ],
    })
], IoniconBusOutlineModule);
export { IoniconBusOutlineModule };
//# sourceMappingURL=Ionicon-bus-outline.icon.js.map