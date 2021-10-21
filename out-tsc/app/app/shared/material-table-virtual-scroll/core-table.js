import { __decorate } from "tslib";
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, Output, ViewChild, ViewChildren, } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { coerceBoolean } from './coerce-boolean';
import { CoreTableDataSource } from './core-table-data-source';
import { CoreTableFilterComponent } from './filter/filter.component';
import { CoreTableMenuComponent } from './menu/menu.component';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MaterialTableVirtualScrollDirective } from './material-table-virtual-scroll.directive';
import { takeUntil } from 'rxjs/operators';
import { IonContent } from '@ionic/angular';
let CoreTableBaseComponent = class CoreTableBaseComponent {
    constructor(columns) {
        this.columns = columns;
        this.rowHeigtht = 48;
        this.offset = 56;
        this.sticky = true;
        this.onDestroy$ = new Subject();
        // tslint:disable-next-line:no-output-native
        this.select = new Subject();
        this.displayedColumns = columns;
    }
    get pending() {
        return this._pending;
    }
    set pending(pending) {
        this._pending = coerceBoolean(pending);
    }
    get indeterminate() {
        return this.dataSource.selected.length > 0 && !this.selectedAll;
    }
    get length() {
        return this.dataSource.data.length;
    }
    placeholderWhen(index, _) {
        return index === 0;
    }
    get selectedAll() {
        return this.dataSource.selectedAll;
    }
    ngOnInit() {
        // this.init();
    }
    ngAfterViewInit() {
        timer(0).pipe(takeUntil(this.onDestroy$)).subscribe(() => {
            this.init();
            if (this.filters.length && this.tableMenu == null) {
                // this just hides the table data by introducing a bogus filter.
                // not having a clear filters button hopefully makes the error obvious.
                this.dataSource.setFilter({
                    key: '', predicate: () => null, valueFn: () => {
                    }
                });
                // this notifies the error to the dev
                throw new Error(`<core-table-filter> usage requires a <core-table-menu> for user convenience`);
            }
        });
    }
    init() {
        // already init'd short-circuit/guard
        if (this.dataSource) {
            return;
        }
        if (hasObservers(this.select)) {
            this.displayedColumns = ['select', ...this.columns];
        }
        this.dataSource = new CoreTableDataSource([], {
            sort: this.sort,
            paginator: this.paginator,
            viewport: this.viewport,
        });
        this.dataSource.selectionChanged.pipe(takeUntil(this.onDestroy$)).subscribe(() => this.select.next(this.dataSource.selected));
        this.onInit();
    }
    clearFilters() {
        this.dataSource.clearFilters();
        this.filters.forEach(fc => fc.filter.setValue(null));
    }
    clearSelection() {
        this.dataSource.clearSelection();
    }
    filter(key, predicate, valueFn, variable) {
        this.dataSource.setFilter({ key, predicate, valueFn });
    }
    isSelected(item) {
        return this.dataSource.isSelected(item);
    }
    toggle(item) {
        this.dataSource.toggle(item);
    }
    toggleAll() {
        this.dataSource.toggleAll();
    }
    /**
     * Override this method to execute during ngOnInit
     */
    onInit() {
    }
    /**
     * Sets the data for dataSource usage
     */
    set(data) {
        this.init();
        this.dataSource.allData = data;
    }
    trackByFn(index, item) {
        return item.id;
    }
    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
};
__decorate([
    Input()
], CoreTableBaseComponent.prototype, "pending", null);
__decorate([
    ViewChild(MaterialTableVirtualScrollDirective)
], CoreTableBaseComponent.prototype, "virtualScrollDirective", void 0);
__decorate([
    Output()
], CoreTableBaseComponent.prototype, "select", void 0);
__decorate([
    ViewChild(MatSort)
], CoreTableBaseComponent.prototype, "sort", void 0);
__decorate([
    ViewChild(MatPaginator)
], CoreTableBaseComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(CdkVirtualScrollViewport)
], CoreTableBaseComponent.prototype, "viewport", void 0);
__decorate([
    ViewChild(CoreTableMenuComponent)
], CoreTableBaseComponent.prototype, "tableMenu", void 0);
__decorate([
    ViewChildren(CoreTableFilterComponent)
], CoreTableBaseComponent.prototype, "filters", void 0);
__decorate([
    ViewChildren(IonContent)
], CoreTableBaseComponent.prototype, "ionContent", void 0);
CoreTableBaseComponent = __decorate([
    Component({
        template: ''
    })
], CoreTableBaseComponent);
export { CoreTableBaseComponent };
function hasObservers(subject) {
    return subject.observers.length > 0;
}
//# sourceMappingURL=core-table.js.map