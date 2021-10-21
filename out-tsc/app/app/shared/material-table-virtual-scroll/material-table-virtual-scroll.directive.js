var MaterialTableVirtualScrollDirective_1;
import { __decorate } from "tslib";
import { ContentChild, Directive, forwardRef, Input } from '@angular/core';
import { VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { MatTable } from '@angular/material/table';
import { MaterialTableVirtualScroll } from './material-table-virtual-scroll';
import { CoreTableDataSource } from './core-table-data-source';
import { timer } from 'rxjs';
let MaterialTableVirtualScrollDirective = MaterialTableVirtualScrollDirective_1 = class MaterialTableVirtualScrollDirective {
    constructor() {
        this.rowHeight = 48;
        this.offset = 56;
        // console.log(this.offset);
        this.scrollStrategy = new MaterialTableVirtualScroll(this.rowHeight, this.offset);
    }
    ngAfterViewInit() {
        timer(0).subscribe(() => {
            if (this.table.dataSource instanceof CoreTableDataSource) {
                this.sub = this.table.dataSource.filteredData.subscribe(data => {
                    this.scrollStrategy.setDataLength(data.length);
                });
            }
        });
    }
    ngOnChanges() {
        this.scrollStrategy.setScrollHeight(this.rowHeight, this.offset);
    }
    ngOnDestroy() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }
};
__decorate([
    Input()
], MaterialTableVirtualScrollDirective.prototype, "rowHeight", void 0);
__decorate([
    Input()
], MaterialTableVirtualScrollDirective.prototype, "offset", void 0);
__decorate([
    ContentChild(MatTable)
], MaterialTableVirtualScrollDirective.prototype, "table", void 0);
MaterialTableVirtualScrollDirective = MaterialTableVirtualScrollDirective_1 = __decorate([
    Directive({
        selector: '[appMaterialTableVirtualScroll]',
        providers: [
            {
                provide: VIRTUAL_SCROLL_STRATEGY,
                useFactory: (scroll) => scroll.scrollStrategy,
                deps: [forwardRef(() => MaterialTableVirtualScrollDirective_1)],
            },
        ],
    })
], MaterialTableVirtualScrollDirective);
export { MaterialTableVirtualScrollDirective };
//# sourceMappingURL=material-table-virtual-scroll.directive.js.map