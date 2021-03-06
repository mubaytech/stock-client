import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPlayBackSharp = {
    name: 'play_back_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="play-back-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M496 400L256 256l240-144v288zm-240 0L16 256l240-144v288z"/></svg>`
};
let IoniconPlayBackSharpComponent = class IoniconPlayBackSharpComponent {
};
IoniconPlayBackSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-play-back-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconPlayBackSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconPlayBackSharpComponent);
export { IoniconPlayBackSharpComponent };
let IoniconPlayBackSharpModule = class IoniconPlayBackSharpModule {
};
IoniconPlayBackSharpModule = __decorate([
    NgModule({
        declarations: [IoniconPlayBackSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconPlayBackSharpComponent
        ],
    })
], IoniconPlayBackSharpModule);
export { IoniconPlayBackSharpModule };
//# sourceMappingURL=Ionicon-play-back-sharp.icon.js.map