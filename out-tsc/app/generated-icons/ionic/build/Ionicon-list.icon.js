import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconList = {
    name: 'list',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="list_svg__ionicon" viewBox="0 0 512 512"><path d="M160 144h288M160 256h288M160 368h288" class="list_svg__ionicon-fill-none"/><circle cx="80" cy="144" r="16" class="list_svg__ionicon-fill-none list_svg__ionicon-stroke-width"/><circle cx="80" cy="256" r="16" class="list_svg__ionicon-fill-none list_svg__ionicon-stroke-width"/><circle cx="80" cy="368" r="16" class="list_svg__ionicon-fill-none list_svg__ionicon-stroke-width"/></svg>`
};
let IoniconListComponent = class IoniconListComponent {
};
IoniconListComponent = __decorate([
    Component({
        selector: 'app-ionicon-list',
        template: `
    <div class="app-ionic-icon">
        ${IoniconList.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconListComponent);
export { IoniconListComponent };
let IoniconListModule = class IoniconListModule {
};
IoniconListModule = __decorate([
    NgModule({
        declarations: [IoniconListComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconListComponent
        ],
    })
], IoniconListModule);
export { IoniconListModule };
//# sourceMappingURL=Ionicon-list.icon.js.map