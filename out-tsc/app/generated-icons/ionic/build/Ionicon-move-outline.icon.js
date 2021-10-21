import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMoveOutline = {
    name: 'move_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="move-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M176 112l80-80 80 80m-80.02-80l.02 448m-80-80l80 80 80-80m64-224l80 80-80 80M112 176l-80 80 80 80m-80-80h448" class="move-outline_svg__ionicon-fill-none move-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconMoveOutlineComponent = class IoniconMoveOutlineComponent {
};
IoniconMoveOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-move-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMoveOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMoveOutlineComponent);
export { IoniconMoveOutlineComponent };
let IoniconMoveOutlineModule = class IoniconMoveOutlineModule {
};
IoniconMoveOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconMoveOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMoveOutlineComponent
        ],
    })
], IoniconMoveOutlineModule);
export { IoniconMoveOutlineModule };
//# sourceMappingURL=Ionicon-move-outline.icon.js.map