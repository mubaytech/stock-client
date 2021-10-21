import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconExit = {
    name: 'exit',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="exit_svg__ionicon" viewBox="0 0 512 512"><path d="M336 376V272H191a16 16 0 010-32h145V136a56.06 56.06 0 00-56-56H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h192a56.06 56.06 0 0056-56zm89.37-104l-52.68 52.69a16 16 0 0022.62 22.62l80-80a16 16 0 000-22.62l-80-80a16 16 0 00-22.62 22.62L425.37 240H336v32z"/></svg>`
};
let IoniconExitComponent = class IoniconExitComponent {
};
IoniconExitComponent = __decorate([
    Component({
        selector: 'app-ionicon-exit',
        template: `
    <div class="app-ionic-icon">
        ${IoniconExit.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconExitComponent);
export { IoniconExitComponent };
let IoniconExitModule = class IoniconExitModule {
};
IoniconExitModule = __decorate([
    NgModule({
        declarations: [IoniconExitComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconExitComponent
        ],
    })
], IoniconExitModule);
export { IoniconExitModule };
//# sourceMappingURL=Ionicon-exit.icon.js.map