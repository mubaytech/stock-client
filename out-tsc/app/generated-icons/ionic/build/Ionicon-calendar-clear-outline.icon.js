import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconCalendarClearOutline = {
    name: 'calendar_clear_outline',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="calendar-clear-outline_svg__ionicon" viewBox="0 0 512 512"><rect width="416" height="384" x="48" y="80" class="calendar-clear-outline_svg__ionicon-fill-none calendar-clear-outline_svg__ionicon-stroke-width" rx="48"/><path d="M128 48v32m256-32v32m80 80H48" class="calendar-clear-outline_svg__ionicon-fill-none calendar-clear-outline_svg__ionicon-stroke-width"/></svg>`
};
let IoniconCalendarClearOutlineComponent = class IoniconCalendarClearOutlineComponent {
};
IoniconCalendarClearOutlineComponent = __decorate([
    Component({
        selector: 'app-ionicon-calendar-clear-outline',
        template: `
    <div class="app-ionic-icon">
        ${IoniconCalendarClearOutline.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconCalendarClearOutlineComponent);
export { IoniconCalendarClearOutlineComponent };
let IoniconCalendarClearOutlineModule = class IoniconCalendarClearOutlineModule {
};
IoniconCalendarClearOutlineModule = __decorate([
    NgModule({
        declarations: [IoniconCalendarClearOutlineComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconCalendarClearOutlineComponent
        ],
    })
], IoniconCalendarClearOutlineModule);
export { IoniconCalendarClearOutlineModule };
//# sourceMappingURL=Ionicon-calendar-clear-outline.icon.js.map