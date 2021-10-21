import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconHourglassSharp = {
    name: 'hourglass_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="hourglass-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M416 32H96v112l108 112L96 368v112h320V368L308 256l108-112zM272 224v112l91 96H148l92-96V224l-80-80h192z"/></svg>`
};
let IoniconHourglassSharpComponent = class IoniconHourglassSharpComponent {
};
IoniconHourglassSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-hourglass-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconHourglassSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconHourglassSharpComponent);
export { IoniconHourglassSharpComponent };
let IoniconHourglassSharpModule = class IoniconHourglassSharpModule {
};
IoniconHourglassSharpModule = __decorate([
    NgModule({
        declarations: [IoniconHourglassSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconHourglassSharpComponent
        ],
    })
], IoniconHourglassSharpModule);
export { IoniconHourglassSharpModule };
//# sourceMappingURL=Ionicon-hourglass-sharp.icon.js.map