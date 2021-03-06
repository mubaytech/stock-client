import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconGrid = {
    name: 'grid',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="grid_svg__ionicon" viewBox="0 0 512 512"><path d="M204 240H68a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V68a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zM204 480H68a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36zm240 0H308a36 36 0 01-36-36V308a36 36 0 0136-36h136a36 36 0 0136 36v136a36 36 0 01-36 36z"/></svg>`
};
let IoniconGridComponent = class IoniconGridComponent {
};
IoniconGridComponent = __decorate([
    Component({
        selector: 'app-ionicon-grid',
        template: `
    <div class="app-ionic-icon">
        ${IoniconGrid.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconGridComponent);
export { IoniconGridComponent };
let IoniconGridModule = class IoniconGridModule {
};
IoniconGridModule = __decorate([
    NgModule({
        declarations: [IoniconGridComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconGridComponent
        ],
    })
], IoniconGridModule);
export { IoniconGridModule };
//# sourceMappingURL=Ionicon-grid.icon.js.map