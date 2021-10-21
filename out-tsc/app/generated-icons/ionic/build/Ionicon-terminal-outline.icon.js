import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconTerminalOutline = {
    name: 'terminal_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="terminal-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="448" height="416" x="32" y="48" class="terminal-outline_svg__ionicon-fill-none terminal-outline_svg__ionicon-stroke-width" rx="48" ry="48"/><path d="M96 112l80 64-80 64m96 0h64" class="terminal-outline_svg__ionicon-fill-none terminal-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconTerminalOutlineComponent = class IoniconTerminalOutlineComponent {
};
IoniconTerminalOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-terminal-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconTerminalOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconTerminalOutlineComponent);
export { IoniconTerminalOutlineComponent };
let IoniconTerminalOutlineModule = class IoniconTerminalOutlineModule {
};
IoniconTerminalOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconTerminalOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconTerminalOutlineComponent
        ],
    })
], IoniconTerminalOutlineModule);
export { IoniconTerminalOutlineModule };
//# sourceMappingURL=Ionicon-terminal-outline.icon.js.map