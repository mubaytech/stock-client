import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLockClosedSharp = {
    name: 'lock_closed_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="lock-closed-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M420 192h-68v-80a96 96 0 10-192 0v80H92a12 12 0 00-12 12v280a12 12 0 0012 12h328a12 12 0 0012-12V204a12 12 0 00-12-12zm-106 0H198v-80.75a58 58 0 11116 0z"/></svg>`
};
let IoniconLockClosedSharpComponent = class IoniconLockClosedSharpComponent {
};
IoniconLockClosedSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-lock-closed-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconLockClosedSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconLockClosedSharpComponent);
export { IoniconLockClosedSharpComponent };
let IoniconLockClosedSharpModule = class IoniconLockClosedSharpModule {
};
IoniconLockClosedSharpModule = __decorate([
    NgModule({
        declarations: [IoniconLockClosedSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconLockClosedSharpComponent
        ],
    })
], IoniconLockClosedSharpModule);
export { IoniconLockClosedSharpModule };
//# sourceMappingURL=Ionicon-lock-closed-sharp.icon.js.map