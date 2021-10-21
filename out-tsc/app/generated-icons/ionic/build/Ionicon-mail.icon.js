import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconMail = {
    name: 'mail',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="mail_svg__ionicon" viewBox="0 0 512 512"><path d="M424 80H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h336a56.06 56.06 0 0056-56V136a56.06 56.06 0 00-56-56zm-14.18 92.63l-144 112a16 16 0 01-19.64 0l-144-112a16 16 0 1119.64-25.26L256 251.73l134.18-104.36a16 16 0 0119.64 25.26z"/></svg>`
};
let IoniconMailComponent = class IoniconMailComponent {
};
IoniconMailComponent = __decorate([
    Component({
        selector: 'app-ionicon-mail',
        template: `
    <div class="app-ionic-icon">
        ${IoniconMail.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconMailComponent);
export { IoniconMailComponent };
let IoniconMailModule = class IoniconMailModule {
};
IoniconMailModule = __decorate([
    NgModule({
        declarations: [IoniconMailComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconMailComponent
        ],
    })
], IoniconMailModule);
export { IoniconMailModule };
//# sourceMappingURL=Ionicon-mail.icon.js.map