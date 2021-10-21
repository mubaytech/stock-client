import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBowlingBallOutline = {
    name: 'bowling_ball_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="bowling-ball-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="256" r="208" class="bowling-ball-outline_svg__ionicon-fill-none bowling-ball-outline_svg__ionicon-stroke-width"/><circle cx="288" cy="200" r="24"/><circle cx="296" cy="128" r="24"/><circle cx="360" cy="168" r="24"/></svg>`
};
let IoniconBowlingBallOutlineComponent = class IoniconBowlingBallOutlineComponent {
};
IoniconBowlingBallOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-bowling-ball-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBowlingBallOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBowlingBallOutlineComponent);
export { IoniconBowlingBallOutlineComponent };
let IoniconBowlingBallOutlineModule = class IoniconBowlingBallOutlineModule {
};
IoniconBowlingBallOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconBowlingBallOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBowlingBallOutlineComponent
        ],
    })
], IoniconBowlingBallOutlineModule);
export { IoniconBowlingBallOutlineModule };
//# sourceMappingURL=Ionicon-bowling-ball-outline.icon.js.map