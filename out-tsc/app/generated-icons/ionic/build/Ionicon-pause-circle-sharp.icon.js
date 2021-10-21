import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPauseCircleSharp = {
    name: 'pause_circle_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="pause-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-32 288h-32V176h32zm96 0h-32V176h32z"/></svg>`
};
let IoniconPauseCircleSharpComponent = class IoniconPauseCircleSharpComponent {
};
IoniconPauseCircleSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-pause-circle-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconPauseCircleSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconPauseCircleSharpComponent);
export { IoniconPauseCircleSharpComponent };
let IoniconPauseCircleSharpModule = class IoniconPauseCircleSharpModule {
};
IoniconPauseCircleSharpModule = __decorate([
    NgModule({
        declarations: [IoniconPauseCircleSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconPauseCircleSharpComponent
        ],
    })
], IoniconPauseCircleSharpModule);
export { IoniconPauseCircleSharpModule };
//# sourceMappingURL=Ionicon-pause-circle-sharp.icon.js.map