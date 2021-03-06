import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconPodiumSharp = {
    name: 'podium_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="podium-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M160 32h192v448H160zm224 160h112v288H384zM16 128h112v352H16z"/></svg>`
};
let IoniconPodiumSharpComponent = class IoniconPodiumSharpComponent {
};
IoniconPodiumSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-podium-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconPodiumSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconPodiumSharpComponent);
export { IoniconPodiumSharpComponent };
let IoniconPodiumSharpModule = class IoniconPodiumSharpModule {
};
IoniconPodiumSharpModule = __decorate([
    NgModule({
        declarations: [IoniconPodiumSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconPodiumSharpComponent
        ],
    })
], IoniconPodiumSharpModule);
export { IoniconPodiumSharpModule };
//# sourceMappingURL=Ionicon-podium-sharp.icon.js.map