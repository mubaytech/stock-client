var IonicSelectableModalComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, HostListener, ViewChild } from '@angular/core';
import { IonContent, IonSearchbar } from '@ionic/angular';
import { Subject, timer } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { InfiniteScrollComponent } from '../infinite-scroll/infinite-scroll.component';
let IonicSelectableModalComponent = IonicSelectableModalComponent_1 = class IonicSelectableModalComponent {
    constructor(navParams, _element, domCtl, changeDetectorRef, coreService, nav, ngZone) {
        this.navParams = navParams;
        this._element = _element;
        this.domCtl = domCtl;
        this.changeDetectorRef = changeDetectorRef;
        this.coreService = coreService;
        this.nav = nav;
        this.ngZone = ngZone;
        this._cssClass = true;
        this.destroy$ = new Subject();
        const check = (() => {
            this.changeDetectorRef.markForCheck();
        }).bind(this);
        this.selectComponent = this.navParams.get('selectComponent');
        this.selectComponent._modalComponent = this;
        this.selectComponent._nav = this.nav;
        this.selectComponent._selectedItems = [];
        // this.selectComponent.onSaveItem.pipe(takeUntil(this.destroy$)).subscribe(check);
        // this.selectComponent.onDeleteItem.pipe(takeUntil(this.destroy$)).subscribe(check);
        // this.selectComponent.onAddItem.pipe(takeUntil(this.destroy$)).subscribe(check);
        // // this.selectComponent.onChange.subscribe(check)
        // // this.selectComponent.onSelect.pipe(takeUntil(this.destroy$)).subscribe(check)
        // this.selectComponent.onClear.subscribe(check);
        this.selectComponent.onSearch.pipe(takeUntil(this.destroy$)).subscribe(check);
        // // this.selectComponent.onInfiniteScroll.pipe(takeUntil(this.destroy$)).subscribe(check)
        this.selectComponent.onSearchFail.pipe(takeUntil(this.destroy$)).subscribe(check);
        this.selectComponent.onSearchSuccess.pipe(takeUntil(this.destroy$)).subscribe(check);
        this.selectComponent.onItemsChange.pipe(takeUntil(this.destroy$), debounceTime(150)).subscribe(() => {
            check();
            this.scrollToSelectedElements();
        });
        if (!IonicSelectableModalComponent_1._isNullOrWhiteSpace(this.selectComponent.value)) {
            if (this.selectComponent.isMultiple) {
                this.selectComponent.value.forEach(item => {
                    this.selectComponent._selectedItems.push(item);
                });
            }
            else {
                this.selectComponent._selectedItems.push(this.selectComponent.value);
            }
        }
        this.selectComponent._setItemsToConfirm(this.selectComponent._selectedItems);
    }
    get _canClearCssClass() {
        return this.selectComponent.canClear;
    }
    get _isMultipleCssClass() {
        return this.selectComponent.isMultiple;
    }
    get _isSearchingCssClass() {
        return this.selectComponent._isSearching;
    }
    get _isIos() {
        return this.selectComponent._isIos;
    }
    get _isAddItemTemplateVisibleCssClass() {
        return this.selectComponent._isAddItemTemplateVisible;
    }
    get check() {
        return () => {
            this.changeDetectorRef.markForCheck();
        };
    }
    _isMD() {
        return this.selectComponent._isMD;
    }
    onResize() {
        // ion-footer inside the template might change its height when
        // device orientation changes.
        this.selectComponent._positionAddItemTemplate();
    }
    ngAfterViewInit() {
        this.domCtl.read(() => {
            this._header = this._element.nativeElement.querySelector('ion-header');
            this.changeDetectorRef.markForCheck();
            if (this._searchbarComponent && this.selectComponent.shouldFocusSearchbar) {
                // Focus after a delay because focus doesn't work without it.
                timer(1000).pipe(takeUntil(this.destroy$)).subscribe(() => {
                    this.domCtl.write(() => {
                        this._searchbarComponent.setFocus().then();
                        this.changeDetectorRef.markForCheck();
                    });
                });
            }
        });
    }
    ngOnInit() {
        timer(0).subscribe(() => {
            this.ionContent.getScrollElement().then(value => {
                this.cdkVirtualScrollViewport.checkViewportSize();
            });
        });
    }
    trackByFn(index, item) {
        // console.log(item)
        return item.id;
    }
    ionViewWillEnter() {
        if (!this.initialized) {
            this.initialized = true;
            this.scrollToSelectedElements();
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    scrollToSelectedElements() {
        timer(this.coreService.isAndroid ? 1100 : 300).pipe(takeUntil(this.destroy$)).subscribe(() => {
            var _a, _b;
            if (this.selectComponent._selectedItems.length) {
                const selected = this.selectComponent._selectedItems[this.selectComponent._selectedItems.length - 1];
                let index = -1;
                const items = ((_a = this.selectComponent._filteredGroups[0]) === null || _a === void 0 ? void 0 : _a.items) || [];
                for (let i = 0; i < items.length; i++) {
                    if (items[i].id === selected.id) {
                        index = i > 2 ? i - 2 : i;
                        break;
                    }
                }
                (_b = this.cdkVirtualScrollViewport) === null || _b === void 0 ? void 0 : _b.scrollToIndex(index, 'smooth');
            }
        });
    }
    static _isNullOrWhiteSpace(value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    }
};
__decorate([
    HostBinding('class.ionic-selectable-modal-can-clear')
], IonicSelectableModalComponent.prototype, "_canClearCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-modal-is-multiple')
], IonicSelectableModalComponent.prototype, "_isMultipleCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-modal-is-searching')
], IonicSelectableModalComponent.prototype, "_isSearchingCssClass", null);
__decorate([
    HostBinding('class.ionic-selectable-modal-ios')
], IonicSelectableModalComponent.prototype, "_isIos", null);
__decorate([
    HostBinding('class.ionic-selectable-modal-is-add-item-template-visible')
], IonicSelectableModalComponent.prototype, "_isAddItemTemplateVisibleCssClass", null);
__decorate([
    ViewChild(IonContent)
], IonicSelectableModalComponent.prototype, "_content", void 0);
__decorate([
    ViewChild(InfiniteScrollComponent)
], IonicSelectableModalComponent.prototype, "_infiniteScroll", void 0);
__decorate([
    ViewChild(IonContent)
], IonicSelectableModalComponent.prototype, "ionContent", void 0);
__decorate([
    ViewChild(CdkVirtualScrollViewport)
], IonicSelectableModalComponent.prototype, "cdkVirtualScrollViewport", void 0);
__decorate([
    ViewChild(IonSearchbar)
], IonicSelectableModalComponent.prototype, "_searchbarComponent", void 0);
__decorate([
    HostBinding('class.ionic-selectable-modal')
], IonicSelectableModalComponent.prototype, "_cssClass", void 0);
__decorate([
    HostBinding('class.ionic-selectable-modal-md')
], IonicSelectableModalComponent.prototype, "_isMD", null);
__decorate([
    HostListener('window:resize')
], IonicSelectableModalComponent.prototype, "onResize", null);
IonicSelectableModalComponent = IonicSelectableModalComponent_1 = __decorate([
    Component({
        // tslint:disable-next-line:component-selector
        selector: 'ionic-selectable-modal',
        templateUrl: './ionic-selectable-modal.component.html',
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], IonicSelectableModalComponent);
export { IonicSelectableModalComponent };
//# sourceMappingURL=ionic-selectable-modal.component.js.map