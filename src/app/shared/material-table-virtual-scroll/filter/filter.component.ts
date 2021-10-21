import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Input,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import {FormControl} from '@angular/forms';
import {BehaviorSubject, merge, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, filter, map} from 'rxjs/operators';
import {MatInput} from '@angular/material/input';
import {MatMenuTrigger} from '@angular/material/menu';
import {MatPaginator} from '@angular/material/paginator';


@Component({
    selector: 'app-core-table-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoreTableFilterComponent implements AfterViewInit, OnInit {
    // tslint:disable-next-line:no-output-native
    @Output() change: Observable<(text: string) => boolean>;
    @Input() betweens: object;
    @Input() paginator: MatPaginator;
    change$: BehaviorSubject<[any, any]>;
    @ViewChild(MatInput) input: MatInput;
    @ViewChild(MatMenuTrigger) menu: MatMenuTrigger;
    nullable = {
        predicate: (a: string): boolean => true,
        name: 'notEmpty',
        needsFilter: false,
    };

    filter = new FormControl();
    operation = new FormControl();
    operations: any[];

    @HostBinding('class.has-value')
    get hasValue(): boolean {
        return !this.needsFilter || this.filter.value;
    }

    @HostBinding('class.show-trigger')
    get showTrigger(): boolean {
        return this.menu?.menuOpen || this.hasValue;
    }

    get needsFilter(): boolean {
        return this.operation.value.needsFilter;
    }


    constructor(
        private ref: ChangeDetectorRef,
    ) {
        this.operations = operations;
        this.operation.setValue(operations[0]);
        this.change$ = new BehaviorSubject<[any, any]>([null, null]);
        merge(this.filter.valueChanges,
            this.operation.valueChanges
        ).subscribe(() => {
            this.change$.next([this.filter.value, this.operation.value]);
        });
        this.change =
            this.change$.asObservable().pipe(
                debounceTime(400),
                filter(value => value[0] != null),
                distinctUntilChanged((p, q) => {
                    return p[1].text === q[1].text && p[0] === q[0];
                }),
                map(() => ({
                        fn: this.operation.value.predicate,
                        b: simplify(this.filter.value),
                    })
                ),
                map(({fn, b}) =>
                    (text: string) => fn(simplify(text), b)
                )
            );

    }

    ngOnInit(): void {
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
}

const contains = (a: string, b: string): boolean => {
    try {
        return ((new RegExp(('(' + b.replace(' ', ')|(') + ')'))).test(a));
    } catch (e) {
        return false;
    }
};
const equals = (a: string, b: string): boolean => a === b;
const startsWith = (a: string, b: string): boolean => a.startsWith(b);
const endsWith = (a: string, b: string): boolean => a.endsWith(b);
const empty = (a: string): boolean => !a;
const notEmpty = (a: string): boolean => !!a;
// console.log(contains.toString());
// console.log(contains.toString().replace(/\((.*?)\) *?=>.*/, '$1'));
const fnArgumentCount = (fn: ((a: string, b: string) => boolean) | ((a: string) => boolean)): number =>
    fn
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
    /* empty,
     notEmpty,*/
].map(predicate => ({
    predicate,
    name: predicate.name,
    text: textify(operationText[predicate.name]),
    needsFilter: predicate.length === 2,
    graphql: (
        predicate.name === 'equals'
    ) ? 'EQ' : 'LIKE',
}));


/**
 * Simplifies a string (trims and lowerCases)
 */
function simplify(s: string): string {
    return `${s}`.trim().toLowerCase();
}

/**
 * Transforms a camelCase string into a readable text format
 * @example textify('helloWorld!')
 * // Hello world!
 */
function textify(text: string) {
    return text
        .replace(/([A-Z])/g, char => ` ${char.toLowerCase()}`)
        .replace(/^([a-z])/, char => char.toUpperCase());
}
