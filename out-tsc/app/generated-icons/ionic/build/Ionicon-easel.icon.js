import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconEasel = {
    name: 'easel',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="easel_svg__ionicon" viewBox="0 0 512 512"><rect width="352" height="208" x="80" y="112" rx="12" ry="12"/><path d="M432 64H272V48a16 16 0 00-32 0v16H80a48.05 48.05 0 00-48 48v208a48.05 48.05 0 0048 48h42.79l-26.17 91.6a16 16 0 1030.76 8.8L156.07 368H240v48a16 16 0 0032 0v-48h83.93l28.69 100.4a16 16 0 1030.76-8.8L389.21 368H432a48.05 48.05 0 0048-48V112a48.05 48.05 0 00-48-48zm16 256a16 16 0 01-16 16H80a16 16 0 01-16-16V112a16 16 0 0116-16h352a16 16 0 0116 16z"/></svg>`
};
let IoniconEaselComponent = class IoniconEaselComponent {
};
IoniconEaselComponent = __decorate([
    Component({
        selector: 'app-ionicon-easel',
        template: `
    <div class="app-ionic-icon">
        ${IoniconEasel.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconEaselComponent);
export { IoniconEaselComponent };
let IoniconEaselModule = class IoniconEaselModule {
};
IoniconEaselModule = __decorate([
    NgModule({
        declarations: [IoniconEaselComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconEaselComponent
        ],
    })
], IoniconEaselModule);
export { IoniconEaselModule };
//# sourceMappingURL=Ionicon-easel.icon.js.map