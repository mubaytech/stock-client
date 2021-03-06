import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconReloadCircle = {
    name: 'reload_circle',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="reload-circle_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm120 182.15a8.62 8.62 0 01-8.62 8.62h-59.54a8.61 8.61 0 01-6.09-14.71l22.17-22.17-5.6-6.51a87.38 87.38 0 10-62.94 148 87.55 87.55 0 0082.42-58.25A16 16 0 11368 295.8a119.4 119.4 0 11-112.62-159.18 118.34 118.34 0 0186.36 36.95l.56.62 4.31 5 14.68-14.68a8.44 8.44 0 016-2.54 8.61 8.61 0 018.68 8.63z"/></svg>`
};
let IoniconReloadCircleComponent = class IoniconReloadCircleComponent {
};
IoniconReloadCircleComponent = __decorate([
    Component({
        selector: 'app-ionicon-reload-circle',
        template: `
    <div class="app-ionic-icon">
        ${IoniconReloadCircle.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconReloadCircleComponent);
export { IoniconReloadCircleComponent };
let IoniconReloadCircleModule = class IoniconReloadCircleModule {
};
IoniconReloadCircleModule = __decorate([
    NgModule({
        declarations: [IoniconReloadCircleComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconReloadCircleComponent
        ],
    })
], IoniconReloadCircleModule);
export { IoniconReloadCircleModule };
//# sourceMappingURL=Ionicon-reload-circle.icon.js.map