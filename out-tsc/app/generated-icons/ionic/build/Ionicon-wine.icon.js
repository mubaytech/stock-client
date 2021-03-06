import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconWine = {
    name: 'wine',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="wine_svg__ionicon" viewBox="0 0 512 512"><path d="M414.56 94.92V80a16 16 0 00-16-16H113.44a16 16 0 00-16 16v14.92c-1.46 11.37-9.65 90.74 36.93 144.69 24.87 28.8 60.36 44.85 105.63 47.86V416h-80a16 16 0 000 32h192a16 16 0 000-32h-80V287.47c45.27-3 80.76-19.06 105.63-47.86 46.58-53.95 38.37-133.32 36.93-144.69zm-285.3 3.41a15.14 15.14 0 00.18-2.33h253.12a15.14 15.14 0 00.18 2.33 201.91 201.91 0 010 45.67H129.32a204.29 204.29 0 01-.06-45.67z"/></svg>`
};
let IoniconWineComponent = class IoniconWineComponent {
};
IoniconWineComponent = __decorate([
    Component({
        selector: 'app-ionicon-wine',
        template: `
    <div class="app-ionic-icon">
        ${IoniconWine.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconWineComponent);
export { IoniconWineComponent };
let IoniconWineModule = class IoniconWineModule {
};
IoniconWineModule = __decorate([
    NgModule({
        declarations: [IoniconWineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconWineComponent
        ],
    })
], IoniconWineModule);
export { IoniconWineModule };
//# sourceMappingURL=Ionicon-wine.icon.js.map