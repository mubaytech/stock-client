import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import {
    AfterViewInit,
    Component,
    Inject,
    Input,
    OnDestroy,
    OnInit,
    Output,
    QueryList,
    ViewChild,
    ViewChildren,
} from '@angular/core';
import {Subject, timer} from 'rxjs';
import {coerceBoolean} from './coerce-boolean';
import {CoreTableDataSource} from './core-table-data-source';
import {CoreTableFilterComponent} from './filter/filter.component';
import {CoreTableMenuComponent} from './menu/menu.component';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MaterialTableVirtualScrollDirective} from './material-table-virtual-scroll.directive';
import {takeUntil} from 'rxjs/operators';
import {IonContent} from '@ionic/angular';


@Component({
    template: ''
})
export class CoreTableBaseComponent<T> implements AfterViewInit, OnInit, OnDestroy {
    paginatorInfo: any;

    @Input()
    get pending(): boolean {
        return this._pending;
    }

    set pending(pending: boolean) {
        this._pending = coerceBoolean(pending);
    }

    // tslint:disable-next-line:variable-name
    private _pending: boolean;
    rowHeigtht: any = 48;
    offset: any = 56;
    sticky: any = true;
    protected onDestroy$: Subject<any> = new Subject<any>();
    // tslint:disable-next-line:no-output-native
    @ViewChild(MaterialTableVirtualScrollDirective) virtualScrollDirective: MaterialTableVirtualScrollDirective;
    // tslint:disable-next-line:no-output-native
    @Output() select = new Subject<T[]>();

    @ViewChild(MatSort) sort: MatSort;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
    @ViewChild(CoreTableMenuComponent) tableMenu: CoreTableMenuComponent;
    @ViewChildren(CoreTableFilterComponent) filters: QueryList<CoreTableFilterComponent>;
    @ViewChildren(IonContent) ionContent: IonContent;
    dataSource: CoreTableDataSource<T>;
    displayedColumns: string[];

    get indeterminate(): boolean {
        return this.dataSource.selected.length > 0 && !this.selectedAll;
    }

    get length(): number {
        return this.dataSource.data.length;
    }

    placeholderWhen(index: number, _: any) {
        return index === 0;
    }

    get selectedAll(): boolean {
        return this.dataSource.selectedAll;
    }

    constructor(public readonly columns: string[]) {
        this.displayedColumns = columns;
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

    protected init() {
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
        this.dataSource.selectionChanged.pipe(takeUntil(this.onDestroy$)).subscribe(() =>
            this.select.next(this.dataSource.selected)
        );
        this.onInit();
    }

    clearFilters(): void {
        this.dataSource.clearFilters();
        this.filters.forEach(fc => fc.filter.setValue(null));
    }

    clearSelection(): void {
        this.dataSource.clearSelection();
    }

    filter(
        key: string,
        predicate: (value: any) => boolean,
        valueFn?: (item: T) => any,
        variable?: any
    ): void {
        this.dataSource.setFilter({key, predicate, valueFn});
    }

    isSelected(item: T): boolean {
        return this.dataSource.isSelected(item);
    }

    toggle(item: T): void {
        this.dataSource.toggle(item);
    }

    toggleAll(): void {
        this.dataSource.toggleAll();
    }

    /**
     * Override this method to execute during ngOnInit
     */
    protected onInit() {
    }

    /**
     * Sets the data for dataSource usage
     */
    protected set(data: T[]): void {
        this.init();
        this.dataSource.allData = data;
    }

    trackByFn(index, item: any) {
        return item.id;
    }

    ngOnDestroy() {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    }
}

function hasObservers(subject: Subject<any>): boolean {
    return subject.observers.length > 0;
}
