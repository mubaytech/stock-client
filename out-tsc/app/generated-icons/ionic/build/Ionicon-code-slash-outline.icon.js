import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCodeSlashOutline = {
    name: 'code_slash_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="code-slash-outline_svg__ionicon" viewBox="0 0 512 512"><path d="M160 368L32 256l128-112m192 224l128-112-128-112m-48-48l-96 320" class="code-slash-outline_svg__ionicon-fill-none code-slash-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconCodeSlashOutlineComponent = class IoniconCodeSlashOutlineComponent {
};
IoniconCodeSlashOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-code-slash-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCodeSlashOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCodeSlashOutlineComponent);
export { IoniconCodeSlashOutlineComponent };
let IoniconCodeSlashOutlineModule = class IoniconCodeSlashOutlineModule {
};
IoniconCodeSlashOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconCodeSlashOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCodeSlashOutlineComponent
        ],
    })
], IoniconCodeSlashOutlineModule);
export { IoniconCodeSlashOutlineModule };
//# sourceMappingURL=Ionicon-code-slash-outline.icon.js.map