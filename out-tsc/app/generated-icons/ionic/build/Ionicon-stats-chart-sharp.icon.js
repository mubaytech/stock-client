import { __decorate } from "tslib";
import { Component, NgModule, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
/* 🤖 this file was generated by svg-to-ts*/
export const IoniconStatsChartSharp = {
    name: 'stats_chart_sharp',
    data: `<svg xmlns="http://www.w3.org/2000/svg" class="stats-chart-sharp_svg__ionicon" viewBox="0 0 512 512"><path d="M128 496H48V304h80zm224 0h-80V208h80zm112 0h-80V96h80zm-224 0h-80V16h80z"/></svg>`
};
let IoniconStatsChartSharpComponent = class IoniconStatsChartSharpComponent {
};
IoniconStatsChartSharpComponent = __decorate([
    Component({
        selector: 'app-ionicon-stats-chart-sharp',
        template: `
    <div class="app-ionic-icon">
        ${IoniconStatsChartSharp.data}
    </div>
    `,
        styles: [`
    :host{
        display: inline-block
    }

    `],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], IoniconStatsChartSharpComponent);
export { IoniconStatsChartSharpComponent };
let IoniconStatsChartSharpModule = class IoniconStatsChartSharpModule {
};
IoniconStatsChartSharpModule = __decorate([
    NgModule({
        declarations: [IoniconStatsChartSharpComponent],
        imports: [
            CommonModule
        ],
        exports: [
            IoniconStatsChartSharpComponent
        ],
    })
], IoniconStatsChartSharpModule);
export { IoniconStatsChartSharpModule };
//# sourceMappingURL=Ionicon-stats-chart-sharp.icon.js.map