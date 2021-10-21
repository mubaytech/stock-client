import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
let ScrollbarThemeDirective = class ScrollbarThemeDirective {
    constructor(el, renderer, core) {
        this.el = el;
        this.renderer = renderer;
        this.core = core;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnInit() {
        this.core.platformReady.pipe(takeUntil(this.destroy$)).subscribe(() => {
            if (this.core.isMobile) {
                return;
            }
            const bg = this.scrollbarColor || '--ion-text-color,#aaaaaa';
            const border = this.scrollbarBackground || (this.el.nativeElement.classList.contains('main-content') ? '--ion-color-light' : '--ion-background-color,#fff');
            const stylesheet = `
              /*.inner-scroll:hover::-webkit-scrollbar-track {
                background: var(--ion-color-light);
                border-radius:100px;
              }
              .inner-scroll:hover::-webkit-scrollbar-thumb {
                border-color:  var(--ion-color-light);
              }*/
              ::-webkit-scrollbar-track {
                background: transparent;
              }
              ::-webkit-scrollbar-thumb {
                    background: var(${bg});
                    border: 3.44px solid var(${border});
                    border-radius: 100px;
                    margin: 2px;
              }
              ::-webkit-scrollbar {
                width:8px;


              }
                ::-webkit-scrollbar-thumb:hover {
                  border-width: 0px;

              }
            `;
            const styleElmt = (this.el.nativeElement.shadowRoot || this.el.nativeElement).querySelector('style');
            if (styleElmt) {
                styleElmt.append(stylesheet);
            }
            else {
                const barStyle = document.createElement('style');
                barStyle.append(stylesheet);
                (this.el.nativeElement.shadowRoot || this.el.nativeElement).appendChild(barStyle);
            }
        });
    }
};
__decorate([
    Input()
], ScrollbarThemeDirective.prototype, "scrollbarColor", void 0);
__decorate([
    Input()
], ScrollbarThemeDirective.prototype, "scrollbarBackground", void 0);
ScrollbarThemeDirective = __decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'ion-content, cdk-virtual-scroll-viewport, app-scrollable',
    })
], ScrollbarThemeDirective);
export { ScrollbarThemeDirective };
//# sourceMappingURL=scrollbar-theme.directive.js.map