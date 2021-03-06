import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconEnterOutline = {
    name: 'enter_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="enter-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M176 176v-40a40 40 0 0140-40h208a40 40 0 0140 40v240a40 40 0 01-40 40H216a40 40 0 01-40-40v-40" class="enter-outline_svg__ionicon-fill-none enter-outline_svg__ionicon-stroke-width"/><path d="M272 336l80-80-80-80M48 256h288" class="enter-outline_svg__ionicon-fill-none enter-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconEnterOutlineComponent = class IoniconEnterOutlineComponent {
};
IoniconEnterOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-enter-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconEnterOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconEnterOutlineComponent);
export { IoniconEnterOutlineComponent };
let IoniconEnterOutlineModule = class IoniconEnterOutlineModule {
};
IoniconEnterOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconEnterOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconEnterOutlineComponent
        ],
    })
], IoniconEnterOutlineModule);
export { IoniconEnterOutlineModule };
//# sourceMappingURL=Ionicon-enter-outline.icon.js.map