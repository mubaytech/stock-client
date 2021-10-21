import {AfterViewInit, ContentChild, Directive, forwardRef, Input, OnChanges, OnDestroy} from '@angular/core';
import {VIRTUAL_SCROLL_STRATEGY} from '@angular/cdk/scrolling';
import {MatTable} from '@angular/material/table';
import {MaterialTableVirtualScroll} from './material-table-virtual-scroll';
import {CoreTableDataSource} from './core-table-data-source';
import {Subscription, timer} from 'rxjs';

@Directive({
    selector: '[appMaterialTableVirtualScroll]',
    providers: [
        {
            provide: VIRTUAL_SCROLL_STRATEGY,
            useFactory: (scroll: MaterialTableVirtualScrollDirective) => scroll.scrollStrategy,
            deps: [forwardRef(() => MaterialTableVirtualScrollDirective)],
        },
    ],
})
export class MaterialTableVirtualScrollDirective
    implements AfterViewInit, OnChanges, OnDestroy {
    @Input() rowHeight = 48;
    @Input() offset = 56;

    @ContentChild(MatTable) table: MatTable<any>;

    scrollStrategy: MaterialTableVirtualScroll;

    private sub: Subscription;

    constructor() {
        // console.log(this.offset);
        this.scrollStrategy = new MaterialTableVirtualScroll(
            this.rowHeight,
            this.offset
        );
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
}
