import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBrushSharp = {
    name: 'brush_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="brush-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M480 96l-64-64-244 260 64 64zM142 320c-36.52 0-66 30.63-66 68.57 0 25.43-31 45.72-44 45.72C52.24 462.17 86.78 480 120 480c48.62 0 88-40.91 88-91.43 0-37.94-29.48-68.57-66-68.57z"/></svg>`
};
let IoniconBrushSharpComponent = class IoniconBrushSharpComponent {
};
IoniconBrushSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-brush-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBrushSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBrushSharpComponent);
export { IoniconBrushSharpComponent };
let IoniconBrushSharpModule = class IoniconBrushSharpModule {
};
IoniconBrushSharpModule = __decorate([
    NgModule({
        declarations: [IoniconBrushSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBrushSharpComponent
        ],
    })
], IoniconBrushSharpModule);
export { IoniconBrushSharpModule };
//# sourceMappingURL=Ionicon-brush-sharp.icon.js.map