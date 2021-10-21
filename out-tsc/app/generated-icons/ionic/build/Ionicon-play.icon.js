import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPlay = {
    name: 'play',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="play_svg__ionicon" viewBox="0 0 512 512"><path d="M133 440a35.37 35.37 0 01-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0135.77.45l247.85 148.36a36 36 0 010 61l-247.89 148.4A35.5 35.5 0 01133 440z"/></svg>`
};
let IoniconPlayComponent = class IoniconPlayComponent {
};
IoniconPlayComponent = __decorate([
    Component({
        selector: 'app-ionicon-play',
        template: `
    <div class="app-ionic-icon">
        ${IoniconPlay.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconPlayComponent);
export { IoniconPlayComponent };
let IoniconPlayModule = class IoniconPlayModule {
};
IoniconPlayModule = __decorate([
    NgModule({
        declarations: [IoniconPlayComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconPlayComponent
        ],
    })
], IoniconPlayModule);
export { IoniconPlayModule };
//# sourceMappingURL=Ionicon-play.icon.js.map