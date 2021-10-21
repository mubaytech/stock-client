import { __decorate } from "tslib";
import { Component, ContentChild, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { AppOnDestroy } from '../../core/types';
import { BehaviorSubject, timer } from 'rxjs';
import { filter, switchMap, takeUntil } from 'rxjs/operators';
let InfiniteScrollComponent = class InfiniteScrollComponent extends AppOnDestroy {
    constructor(domController, renderer2) {
        super();
        this.domController = domController;
        this.renderer2 = renderer2;
        this.ionInfinite = new EventEmitter();
        this._loading = new BehaviorSubject(false);
        this._disabled = new BehaviorSubject(false);
    }
    set disabled(disabled) {
        this._disabled.next(disabled);
    }
    get disabled() {
        return this._disabled.getValue();
    }
    get loading() {
        return this._loading.getValue();
    }
    set loading(loading) {
        if (loading) {
            this.domController.write(timeStamp => {
                this.renderer2.setStyle(this.viewport.elementRef.nativeElement, 'height', '93%');
            });
        }
        else {
            this.domController.write(timeStamp => {
                this.renderer2.setStyle(this.viewport.elementRef.nativeElement, 'height', '100%');
            });
        }
        this._loading.next(loading);
    }
    get onLoading() {
        return this._loading.asObservable();
    }
    get onDisabled() {
        return this._disabled.asObservable();
    }
    ngAfterViewInit() {
        timer(50).pipe(takeUntil(this.onDestroy$), switchMap(() => this.onLoading
            .pipe(filter(value => value), switchMap(() => this.viewport.scrolledIndexChange)))).subscribe(offset => {
            const end = this.viewport.getRenderedRange().end;
            const total = this.viewport.getDataLength();
            // console.log(`${end}, '>=', ${total}`);
            if (end === total) {
                this.loading = true;
                this.ionInfinite.next(this);
            }
        });
    }
    ngOnInit() {
        //
    }
    complete() {
        return new Promise(_ => {
            this.loading = false;
        });
    }
};
__decorate([
    Input()
], InfiniteScrollComponent.prototype, "disabled", null);
__decorate([
    HostBinding('class.loading')
], InfiniteScrollComponent.prototype, "loading", null);
__decorate([
    Output()
], InfiniteScrollComponent.prototype, "ionInfinite", void 0);
__decorate([
    ContentChild(CdkVirtualScrollViewport)
], InfiniteScrollComponent.prototype, "viewport", void 0);
InfiniteScrollComponent = __decorate([
    Component({
        selector: 'app-infinite-scroll',
        templateUrl: './infinite-scroll.component.html',
        styleUrls: ['./infinite-scroll.component.scss'],
    })
], InfiniteScrollComponent);
export { InfiniteScrollComponent };
//# sourceMappingURL=infinite-scroll.component.js.map