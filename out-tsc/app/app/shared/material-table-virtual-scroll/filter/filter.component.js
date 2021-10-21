import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input, Output, ViewChild, } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { MatInput } from '@angular/material/input';
import { MatMenuTrigger } from '@angular/material/menu';
let CoreTableFilterComponent = class CoreTableFilterComponent {
    constructor(ref) {
        this.ref = ref;
        this.nullable = {
            predicate: (a) => true,
            name: 'notEmpty',
            needsFilter: false,
        };
        this.filter = new FormControl();
        this.operation = new FormControl();
        this.operations = operations;
        this.operation.setValue(operations[0]);
        this.change$ = new BehaviorSubject([null, null]);
        merge(this.filter.valueChanges, this.operation.valueChanges).subscribe(() => {
            this.change$.next([this.filter.value, this.operation.value]);
        });
        this.change =
            this.change$.asObservable().pipe(debounceTime(400), filter(value => value[0] != null), distinctUntilChanged((p, q) => {
                return p[1].text === q[1].text && p[0] === q[0];
            }), map(() => ({
                fn: this.operation.value.predicate,
                b: simplify(this.filter.value),
            })), map(({ fn, b }) => (text) => fn(simplify(text), b)));
    }
    get hasValue() {
        return !this.needsFilter || this.filter.value;
    }
    get showTrigger() {
        var _a;
        return ((_a = this.menu) === null || _a === void 0 ? void 0 : _a.menuOpen) || this.hasValue;
    }
    get needsFilter() {
        return this.operation.value.needsFilter;
    }
    ngOnInit() {
        if (this.betweens) {
            this.operation.valueChanges.subscribe(() => {
                this.filter.setValue(this.operation.value.value$$);
            });
            this.operations = (Object.keys(this.betweens).map(key => {
                return {
                    predicate: equals,
                    name: equals.name,
                    text: textify(this.betweens[key]),
                    needsFilter: false,
                    value$$: key,
                    graphql: 'EQ',
                };
            }));
            this.operation.setValue(operations[0]);
            this.ref.detectChanges();
        }
    }
    ngAfterViewInit() {
        this.menu.menuOpened.subscribe(() => this.input && this.input.focus());
    }
};
__decorate([
    Output()
], CoreTableFilterComponent.prototype, "change", void 0);
__decorate([
    Input()
], CoreTableFilterComponent.prototype, "betweens", void 0);
__decorate([
    Input()
], CoreTableFilterComponent.prototype, "paginator", void 0);
__decorate([
    ViewChild(MatInput)
], CoreTableFilterComponent.prototype, "input", void 0);
__decorate([
    ViewChild(MatMenuTrigger)
], CoreTableFilterComponent.prototype, "menu", void 0);
__decorate([
    HostBinding('class.has-value')
], CoreTableFilterComponent.prototype, "hasValue", null);
__decorate([
    HostBinding('class.show-trigger')
], CoreTableFilterComponent.prototype, "showTrigger", null);
CoreTableFilterComponent = __decorate([
    Component({
        selector: 'app-core-table-filter',
        templateUrl: './filter.component.html',
        styleUrls: ['./filter.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], CoreTableFilterComponent);
export { CoreTableFilterComponent };
const contains = (a, b) => {
    try {
        return ((new RegExp(('(' + b.replace(' ', ')|(') + ')'))).test(a));
    }
    catch (e) {
        return false;
    }
};
const equals = (a, b) => a === b;
const startsWith = (a, b) => a.startsWith(b);
const endsWith = (a, b) => a.endsWith(b);
const empty = (a) => !a;
const notEmpty = (a) => !!a;
// console.log(contains.toString());
// console.log(contains.toString().replace(/\((.*?)\) *?=>.*/, '$1'));
const fnArgumentCount = (fn) => fn
    .toString()
    .replace(/\((.*?)\) *?=>.*/, '$1') // for lambdas
    .replace(/function.*?\((.*?)\).*/, '$1') // for functions
    .split(',').length;
const operationText = {
    [contains.name]: 'contient',
    [equals.name]: 'egual a',
    [startsWith.name]: 'commence par',
    [endsWith.name]: 'fini par',
    [empty.name]: 'vide',
    [notEmpty.name]: 'non vide'
};
export const operations = [
    contains,
    equals,
    startsWith,
    endsWith,
].map(predicate => ({
    predicate,
    name: predicate.name,
    text: textify(operationText[predicate.name]),
    needsFilter: predicate.length === 2,
    graphql: (predicate.name === 'equals') ? 'EQ' : 'LIKE',
}));
/**
 * Simplifies a string (trims and lowerCases)
 */
function simplify(s) {
    return `${s}`.trim().toLowerCase();
}
/**
 * Transforms a camelCase string into a readable text format
 * @example textify('helloWorld!')
 * // Hello world!
 */
function textify(text) {
    return text
        .replace(/([A-Z])/g, char => ` ${char.toLowerCase()}`)
        .replace(/^([a-z])/, char => char.toUpperCase());
}
//# sourceMappingURL=filter.component.js.map