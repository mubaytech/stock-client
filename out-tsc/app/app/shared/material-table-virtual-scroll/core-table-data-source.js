import { DataSource, SelectionModel, } from '@angular/cdk/collections';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, shareReplay, startWith, tap } from 'rxjs/operators';
import { sortBy } from './sort-by';
// CoreTableFilterComponentComponent
/**
 * `DataSource` to be used with `CoreTable` and `MatTable`.
 *
 * Supports advanced filtering, sorting, pagination and virtual scroll.
 */
export class CoreTableDataSource extends DataSource {
    constructor(initialData, { sort, paginator, viewport, } = {}) {
        super();
        this._filteredData = new BehaviorSubject([]);
        this.filterMap = {};
        this.selection = new SelectionModel(true, []);
        this.paginator = paginator;
        this.viewport = viewport;
        this._data = initialData;
        this.filteredData = this._filteredData.asObservable();
        this._filteredData.next(initialData);
        const ordered = sort == null
            ? this._filteredData
            : combineLatest(this._filteredData, sort.sortChange.pipe(startWith({}))).pipe(map(([data, { active, direction }]) => !active || !direction
                ? data
                : sortBy(t => getProperty(t, active), {
                    reverse: direction === 'desc',
                })(data)));
        const paged = paginator == null
            ? ordered
            : combineLatest([ordered, paginator.page.pipe(startWith(null))]).pipe(map(([data]) => data), tap(data => {
                paginator.length = data.length;
            }), map(data => {
                const start = paginator.pageIndex * paginator.pageSize;
                return data.slice(start, start + paginator.pageSize);
            }));
        const sliced = viewport == null
            ? paged
            : combineLatest([paged, viewport.renderedRangeStream.pipe(startWith({}))]).pipe(map(([data, { start, end }]) => start == null || end == null ? data : data.slice(start, end)));
        this.visibleData = sliced.pipe(shareReplay(1));
    }
    /**
     * The full array of data
     */
    get allData() {
        return this._data.slice();
    }
    set allData(data) {
        this._data = data;
        this.filter(data, this.filterMap);
        this.selection.clear();
    }
    get data() {
        let data;
        this.visibleData.subscribe(d => (data = d)).unsubscribe();
        return data;
    }
    /**
     * The array of currently applied `CoreTableFilterComponent`.
     */
    get filters() {
        return Object.values(Object.assign({}, this.filterMap));
    }
    /**
     * The array of currently selected items.
     */
    get selected() {
        return this.selection.selected;
    }
    /**
     * Whether all visible items are selected.
     */
    get selectedAll() {
        return (this.selection.hasValue() && this.selected.length === this.data.length);
    }
    /**
     * A stream of changes made on selections.
     */
    get selectionChanged() {
        return this.selection.changed;
    }
    /**
     * Clears all filters set with `setFilter`.
     */
    clearFilters() {
        this.filterMap = {};
        this._filteredData.next(this.allData);
    }
    /**
     * Clears all of the selected items.
     */
    clearSelection() {
        this.selection.clear();
    }
    /**
     * Whether an item is selected.
     */
    isSelected(item) {
        return this.selection.isSelected(item);
    }
    /**
     * Selects one or more items.
     */
    select(...items) {
        this.selection.select(...items);
    }
    /**
     * Sets a new `CoreTableFilterComponent` based on its key
     * and applies all existing filters to the `DataSource`.
     * @param key Unique key, usually representing the property path to retrieve a value from an item.
     * @param predicate How to filter the values extracted by `key`, like `Array.prototype.filter`.
     * @param valueFn Optional function to extract a value from each item.
     *
     * Default: `item => item[key]`.
     *
     * Note: Supports nested property paths, e.g. `'my.nested.prop'`
     *
     * @example
     * const dataSource = new CoreTableDataSource([1, 2, 3, 4]);
     * dataSource.setFilter({
     *   key: 'prop',
     *   predicate: value => value % 2
     * });
     * console.log(dataSource.data);
     * // [2, 4]
     *
     * dataSource.setFilter({
     *   key: 'propPlusOne',
     *   predicate: value => value % 2,
     *   valueFn: item => item + 1
     * });
     * console.log(dataSource.data);
     * // [1, 3]
     */
    setFilter({ key, predicate, valueFn = (item) => getProperty(item, key), }) {
        const newKey = !this.filterMap[key];
        const newFilter = { key, predicate, valueFn };
        this.filterMap[key] = newFilter;
        newKey
            ? this.filter(this._filteredData.value, { [key]: newFilter })
            : this.filter(this.allData, this.filterMap);
    }
    /**
     * Toggles an item between selected and deselected.
     */
    toggle(item) {
        this.selection.toggle(item);
    }
    /**
     * Toggles the selection of all visible items.
     *
     * If all are selected, deselects all.
     *
     * If some or none are selected, selects all.
     */
    toggleAll() {
        this.selectedAll
            ? this.selection.clear()
            : this.selection.select(...this.data);
    }
    connect() {
        return this.visibleData;
    }
    disconnect() {
    }
    filter(data, filters) {
        var _a;
        this._filteredData.next((data || []).filter((t) => filterOne(t, filters)));
        (_a = this.paginator) === null || _a === void 0 ? void 0 : _a.firstPage();
    }
}
function filterOne(item, filters) {
    return Object.values(filters).every(({ predicate, valueFn }) => predicate(valueFn(item)));
}
export function getProperty(item, propertyPath) {
    return propertyPath.split('.').reduce((obj, prop) => obj && obj[prop], item);
}
//# sourceMappingURL=core-table-data-source.js.map