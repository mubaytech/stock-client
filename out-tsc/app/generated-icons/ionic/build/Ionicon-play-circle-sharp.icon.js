import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPlayCircleSharp = {
    name: 'play_circle_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="play-circle-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-56 296V168l144 88z"/></svg>`
};
let IoniconPlayCircleSharpComponent = class IoniconPlayCircleSharpComponent {
};
IoniconPlayCircleSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-play-circle-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconPlayCircleSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconPlayCircleSharpComponent);
export { IoniconPlayCircleSharpComponent };
let IoniconPlayCircleSharpModule = class IoniconPlayCircleSharpModule {
};
IoniconPlayCircleSharpModule = __decorate([
    NgModule({
        declarations: [IoniconPlayCircleSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconPlayCircleSharpComponent
        ],
    })
], IoniconPlayCircleSharpModule);
export { IoniconPlayCircleSharpModule };
//# sourceMappingURL=Ionicon-play-circle-sharp.icon.js.map