import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconWatch = {
    name: 'watch',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="watch_svg__ionicon" viewBox="0 0 512 512"><rect width="240" height="240" x="136" y="136" rx="56" ry="56"/><path d="M336 96V32a16 16 0 00-16-16H192a16 16 0 00-16 16v64a80.09 80.09 0 00-80 80v160a80.09 80.09 0 0080 80v64a16 16 0 0016 16h128a16 16 0 0016-16v-64a80.09 80.09 0 0080-80V176a80.09 80.09 0 00-80-80zm56 224a72.08 72.08 0 01-72 72H192a72.08 72.08 0 01-72-72V192a72.08 72.08 0 0172-72h128a72.08 72.08 0 0172 72z"/></svg>`
};
let IoniconWatchComponent = class IoniconWatchComponent {
};
IoniconWatchComponent = __decorate([
    Component({
        selector: 'app-ionicon-watch',
        template: `
    <div class="app-ionic-icon">
        ${IoniconWatch.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconWatchComponent);
export { IoniconWatchComponent };
let IoniconWatchModule = class IoniconWatchModule {
};
IoniconWatchModule = __decorate([
    NgModule({
        declarations: [IoniconWatchComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconWatchComponent
        ],
    })
], IoniconWatchModule);
export { IoniconWatchModule };
//# sourceMappingURL=Ionicon-watch.icon.js.map