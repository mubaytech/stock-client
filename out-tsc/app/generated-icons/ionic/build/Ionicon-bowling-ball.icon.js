import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBowlingBall = {
    name: 'bowling_ball',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="bowling-ball_svg__ionicon" viewBox="0 0 512 512"><path d="M414.39 97.61A224 224 0 1097.61 414.39 224 224 0 10414.39 97.61zM288 224a24 24 0 1124-24 24 24 0 01-24 24zm8-72a24 24 0 1124-24 24 24 0 01-24 24zm64 40a24 24 0 1124-24 24 24 0 01-24 24z"/></svg>`
};
let IoniconBowlingBallComponent = class IoniconBowlingBallComponent {
};
IoniconBowlingBallComponent = __decorate([
    Component({
        selector: 'app-ionicon-bowling-ball',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBowlingBall.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBowlingBallComponent);
export { IoniconBowlingBallComponent };
let IoniconBowlingBallModule = class IoniconBowlingBallModule {
};
IoniconBowlingBallModule = __decorate([
    NgModule({
        declarations: [IoniconBowlingBallComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBowlingBallComponent
        ],
    })
], IoniconBowlingBallModule);
export { IoniconBowlingBallModule };
//# sourceMappingURL=Ionicon-bowling-ball.icon.js.map