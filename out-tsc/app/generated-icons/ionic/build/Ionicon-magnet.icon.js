import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMagnet = {
    name: 'magnet',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="magnet_svg__ionicon" viewBox="0 0 512 512"><path d="M191.98 463.79v-48m-101.82 5.82l33.94-33.94m-76.12-67.88h48" class="magnet_svg__ionicon-stroke-width"/><path d="M267.56 312.32l-31.11 31.11a16 16 0 000 22.63l45.26 45.25a16 16 0 0022.62 0l31.12-31.11a4 4 0 000-5.66l-62.23-62.22a4 4 0 00-5.66 0zM131.8 176.55l-31.11 31.12a16 16 0 000 22.62l45.25 45.26a16 16 0 0022.63 0l31.11-31.11a4 4 0 000-5.66l-62.22-62.23a4 4 0 00-5.66 0zm297.05-93.27a144 144 0 00-203.71-.06l-65.06 65.05a4 4 0 000 5.66l62.23 62.22a4 4 0 005.66 0l65-65.05a48 48 0 0168.46.59c18.3 18.92 17.47 49.24-1.14 67.85L295.85 284a4 4 0 000 5.66l62.22 62.23a4 4 0 005.66 0l64.08-64.08c56.37-56.34 57.37-148.13 1.04-204.53z"/></svg>`
};
let IoniconMagnetComponent = class IoniconMagnetComponent {
};
IoniconMagnetComponent = __decorate([
    Component({
        selector: 'app-ionicon-magnet',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMagnet.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMagnetComponent);
export { IoniconMagnetComponent };
let IoniconMagnetModule = class IoniconMagnetModule {
};
IoniconMagnetModule = __decorate([
    NgModule({
        declarations: [IoniconMagnetComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMagnetComponent
        ],
    })
], IoniconMagnetModule);
export { IoniconMagnetModule };
//# sourceMappingURL=Ionicon-magnet.icon.js.map