import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconLogoMarkdown = {
    name: 'logo_markdown',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="logo-markdown_svg__ionicon" viewBox="0 0 512 512"><path d="M475 64H37C16.58 64 0 81.38 0 102.77v306.42C0 430.59 16.58 448 37 448h438c20.38 0 37-17.41 37-38.81V102.77C512 81.38 495.42 64 475 64zM288 368h-64V256l-48 64-48-64v112H64V144h64l48 80 48-80h64zm96 0l-80-112h48.05L352 144h64v112h48z"/></svg>`
};
let IoniconLogoMarkdownComponent = class IoniconLogoMarkdownComponent {
};
IoniconLogoMarkdownComponent = __decorate([
    Component({
        selector: 'app-ionicon-logo-markdown',
        template: `
    <div class="app-ionic-icon">
        ${IoniconLogoMarkdown.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconLogoMarkdownComponent);
export { IoniconLogoMarkdownComponent };
let IoniconLogoMarkdownModule = class IoniconLogoMarkdownModule {
};
IoniconLogoMarkdownModule = __decorate([
    NgModule({
        declarations: [IoniconLogoMarkdownComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconLogoMarkdownComponent
        ],
    })
], IoniconLogoMarkdownModule);
export { IoniconLogoMarkdownModule };
//# sourceMappingURL=Ionicon-logo-markdown.icon.js.map