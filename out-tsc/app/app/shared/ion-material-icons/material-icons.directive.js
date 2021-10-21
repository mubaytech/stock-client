import { __decorate } from "tslib";
import { Directive, HostBinding, Input } from '@angular/core';
import { timer } from 'rxjs';
let MaterialIconsDirective = class MaterialIconsDirective {
    constructor(el) {
        this.el = el;
        // console.log(el);
    }
    get style() {
        return this.mi && this.mi[0] == 'mi';
    }
    set miName(val) {
        const _miCache = this.mi;
        this._name = val;
        this.mi = val === null || val === void 0 ? void 0 : val.split('-');
        if (this.mi && this.mi[0] === 'mi') {
            timer(80).subscribe(() => {
                if (_miCache) {
                    this.el.nativeElement.shadowRoot.querySelector('.mi-icon-inner').remove();
                }
                const outlined = this.outlined ? 'material-icons-outlined' : '';
                const shadowEl = this.el.nativeElement.shadowRoot.querySelector('.icon-inner');
                shadowEl.innerHTML = `
               <span class="mi-icon-inner">
                <i class="material-icons ${outlined}">${this.mi[1]}</i>
                <style type="text/css" >
                    .material-icons {
                      font-family: 'Material Icons';
                      font-weight: normal;
                      font-style: normal;
                      font-size: 24px;  /* Preferred icon size */
                      display: inline-block;
                      line-height: 1;
                      text-transform: none;
                      letter-spacing: normal;
                      word-wrap: normal;
                      white-space: nowrap;
                      direction: ltr;

                      /* Support for all WebKit browsers. */
                      -webkit-font-smoothing: antialiased;
                      /* Support for Safari and Chrome. */
                      text-rendering: optimizeLegibility;

                      /* Support for Firefox. */
                      -moz-osx-font-smoothing: grayscale;

                      /* Support for IE. */
                      font-feature-settings: 'liga';
                     }
                    .material-icons-outlined {
                        font-family: 'Material Icons Outlined', serif;
                    }

                    .material-icons-sharp {
                        font-family: 'Material Icons Sharp', serif;
                    }
                    </style>
                </span>
            `;
            });
            return;
        }
        if (_miCache) {
            timer(80).subscribe(value => {
                this.el.nativeElement.shadowRoot.querySelector('.mi-icon-inner').remove();
                this.el.nativeElement.name = val;
            });
        }
        else {
            this.el.nativeElement.name = val;
        }
    }
    ngOnInit() {
    }
};
__decorate([
    HostBinding('class.has-material-icons')
], MaterialIconsDirective.prototype, "style", null);
__decorate([
    Input()
], MaterialIconsDirective.prototype, "outlined", void 0);
__decorate([
    Input('mi-name')
], MaterialIconsDirective.prototype, "miName", null);
MaterialIconsDirective = __decorate([
    Directive({
        // tslint:disable-next-line:directive-selector
        selector: 'ion-icon[mi-name]'
    })
], MaterialIconsDirective);
export { MaterialIconsDirective };
//# sourceMappingURL=material-icons.directive.js.map