import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChatboxSharp = {
    name: 'chatbox_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="chatbox-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M128 464v-80H56a24 24 0 01-24-24V72a24 24 0 0124-24h400a24 24 0 0124 24v288a24 24 0 01-24 24H245.74zM456 80z"/></svg>`
};
let IoniconChatboxSharpComponent = class IoniconChatboxSharpComponent {
};
IoniconChatboxSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-chatbox-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconChatboxSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconChatboxSharpComponent);
export { IoniconChatboxSharpComponent };
let IoniconChatboxSharpModule = class IoniconChatboxSharpModule {
};
IoniconChatboxSharpModule = __decorate([
    NgModule({
        declarations: [IoniconChatboxSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconChatboxSharpComponent
        ],
    })
], IoniconChatboxSharpModule);
export { IoniconChatboxSharpModule };
//# sourceMappingURL=Ionicon-chatbox-sharp.icon.js.map