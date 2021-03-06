import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconBookmarks = {
    name: 'bookmarks',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="bookmarks_svg__ionicon" viewBox="0 0 512 512"><path d="M400 0H176a64.11 64.11 0 00-62 48h228a74 74 0 0174 74v304.89l22 17.6a16 16 0 0019.34.5 16.41 16.41 0 006.66-13.42V64a64 64 0 00-64-64z"/><path d="M320 80H112a64 64 0 00-64 64v351.62A16.36 16.36 0 0054.6 509a16 16 0 0019.71-.71L216 388.92l141.69 119.32a16 16 0 0019.6.79 16.4 16.4 0 006.71-13.44V144a64 64 0 00-64-64z"/></svg>`
};
let IoniconBookmarksComponent = class IoniconBookmarksComponent {
};
IoniconBookmarksComponent = __decorate([
    Component({
        selector: 'app-ionicon-bookmarks',
        template: `
    <div class="app-ionic-icon">
        ${IoniconBookmarks.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconBookmarksComponent);
export { IoniconBookmarksComponent };
let IoniconBookmarksModule = class IoniconBookmarksModule {
};
IoniconBookmarksModule = __decorate([
    NgModule({
        declarations: [IoniconBookmarksComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconBookmarksComponent
        ],
    })
], IoniconBookmarksModule);
export { IoniconBookmarksModule };
//# sourceMappingURL=Ionicon-bookmarks.icon.js.map