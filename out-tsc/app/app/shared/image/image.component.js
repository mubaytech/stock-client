import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, ViewChild, } from '@angular/core';
import { BehaviorSubject, from, of, Subject, timer } from 'rxjs';
import { debounceTime, filter, switchMap, takeUntil } from 'rxjs/operators';
let ImageComponent = class ImageComponent {
    constructor(_renderer, dom, network, ref, imageLoader, core) {
        this._renderer = _renderer;
        this.dom = dom;
        this.network = network;
        this.ref = ref;
        this.imageLoader = imageLoader;
        this.core = core;
        this._src = null;
        this._ratio = { w: 100, h: 100 };
        this._onFailIcon = {
            color: 'light',
            style: {},
            icon: 'image',
        };
        this.destroy$ = new Subject();
        this.loaded = false;
        this.done = new BehaviorSubject(false);
        this.hasError = new BehaviorSubject(false);
        this.rounded = true;
        this.showLoaderAnimation = true;
        this.iconContainer = {};
        this._srcSet = new Subject();
        this._srcSet.asObservable().pipe(takeUntil(this.destroy$), filter(url => !!url), debounceTime(50), switchMap(v => this.core.isNativeMobile ? from(this.imageLoader.preload(v)) : of(v))).subscribe((val) => {
            if (this.loaded) {
                this.loaded = false;
                this.done.next(false);
                this.dom.write(() => {
                    this._renderer.removeClass(this._elementRef.nativeElement, 'img-loaded');
                    this._renderer.removeClass(this._elementRef.nativeElement, 'error');
                });
            }
            this._src = (val !== undefined && val !== null && typeof val === 'string') ? val : null;
            ref.detectChanges();
        });
    }
    get _imageStyle() {
        return this.imageStyle || {};
    }
    ngOnInit() {
        //
    }
    set src(val) {
        this._srcSet.next(val);
    }
    set onFailIcon(onFailIcon) {
        this._onFailIcon = onFailIcon || { icon: 'image', style: {}, color: 'medium' };
        this.ref.markForCheck();
    }
    set failIcon(icon) {
        this._onFailIcon.icon = icon;
    }
    set failIconStyle(style) {
        this._onFailIcon.style = style;
    }
    set failIconColor(color) {
        this._onFailIcon.color = color;
    }
    _update() {
        //
    }
    _loaded() {
        this.dom.write(() => {
            this._renderer.removeClass(this._elementRef.nativeElement, 'error');
            this._renderer.addClass(this._elementRef.nativeElement, 'img-loaded');
            this.loaded = true;
            this.done.next(true);
            this.hasError.next(false);
            this.ref.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    _error() {
        this.dom.write(() => {
            this._renderer.removeClass(this._elementRef.nativeElement, 'img-loaded');
            this._renderer.addClass(this._elementRef.nativeElement, 'error');
            this.done.next(true);
            this.hasError.next(true);
            this.ref.markForCheck();
        });
        if (!this.network.status.connected && !this.networkSubscription) {
            if (!this.networkSubscription) {
                this.networkSubscription = this.network.onInternetRetablished.pipe(takeUntil(this.destroy$)).subscribe(() => {
                    this.networkSubscription.unsubscribe();
                    this.networkSubscription = null;
                    if (!this.loaded) {
                        this.reload();
                    }
                });
            }
        }
    }
    reload() {
        const src = this._src;
        this._src = ' ';
        this.done.next(true);
        this.ref.markForCheck();
        timer(300).pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.src = src;
            this.ref.markForCheck();
        });
    }
};
__decorate([
    ViewChild('container')
], ImageComponent.prototype, "_elementRef", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "imageStyle", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "rounded", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "showLoaderAnimation", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "iconContainer", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "fallBackUlr", void 0);
__decorate([
    Input()
], ImageComponent.prototype, "src", null);
__decorate([
    Input()
], ImageComponent.prototype, "onFailIcon", null);
__decorate([
    Input()
], ImageComponent.prototype, "failIcon", null);
__decorate([
    Input()
], ImageComponent.prototype, "failIconStyle", null);
__decorate([
    Input()
], ImageComponent.prototype, "failIconColor", null);
ImageComponent = __decorate([
    Component({
        selector: 'app-image',
        templateUrl: './image.component.html',
        styleUrls: ['./image.component.scss'],
        // encapsulation: ViewEncapsulation.None,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], ImageComponent);
export { ImageComponent };
//# sourceMappingURL=image.component.js.map