import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconChatbox = {
    name: 'chatbox',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="chatbox_svg__ionicon" viewBox="0 0 512 512"><path d="M144 464a16 16 0 01-16-16v-64h-24a72.08 72.08 0 01-72-72V120a72.08 72.08 0 0172-72h304a72.08 72.08 0 0172 72v192a72.08 72.08 0 01-72 72H245.74l-91.49 76.29A16.05 16.05 0 01144 464z"/></svg>`
};
let IoniconChatboxComponent = class IoniconChatboxComponent {
};
IoniconChatboxComponent = __decorate([
    Component({
        selector: 'app-ionicon-chatbox',
        template: `
    <div class="app-ionic-icon">
        ${IoniconChatbox.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconChatboxComponent);
export { IoniconChatboxComponent };
let IoniconChatboxModule = class IoniconChatboxModule {
};
IoniconChatboxModule = __decorate([
    NgModule({
        declarations: [IoniconChatboxComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconChatboxComponent
        ],
    })
], IoniconChatboxModule);
export { IoniconChatboxModule };
//# sourceMappingURL=Ionicon-chatbox.icon.js.map