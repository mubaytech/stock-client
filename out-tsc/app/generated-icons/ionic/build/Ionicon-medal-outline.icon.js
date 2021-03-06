import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMedalOutline = {
    name: 'medal_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="medal-outline_svg__ionicon" viewBox="0 0 512 512"><circle cx="256" cy="352" r="112" class="medal-outline_svg__ionicon-fill-none medal-outline_svg__ionicon-stroke-width"/><circle cx="256" cy="352" r="48" class="medal-outline_svg__ionicon-fill-none medal-outline_svg__ionicon-stroke-width"/><path d="M147 323L41.84 159.32a32 32 0 01-1.7-31.61l31-62A32 32 0 0199.78 48h312.44a32 32 0 0128.62 17.69l31 62a32 32 0 01-1.7 31.61L365 323m6-179H37m391.74-91.4L305 250M140.55 144L207 250" class="medal-outline_svg__ionicon-fill-none medal-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconMedalOutlineComponent = class IoniconMedalOutlineComponent {
};
IoniconMedalOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-medal-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMedalOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMedalOutlineComponent);
export { IoniconMedalOutlineComponent };
let IoniconMedalOutlineModule = class IoniconMedalOutlineModule {
};
IoniconMedalOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconMedalOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMedalOutlineComponent
        ],
    })
], IoniconMedalOutlineModule);
export { IoniconMedalOutlineModule };
//# sourceMappingURL=Ionicon-medal-outline.icon.js.map