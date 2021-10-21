import { __awaiter, __decorate } from "tslib";
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PromtAlertComponent } from '../promt-alert/promt-alert.component';
let PromtOnClickDirective = class PromtOnClickDirective {
    constructor(modalCtrl, el, renderer) {
        this.modalCtrl = modalCtrl;
        this.el = el;
        this.timeout = 0;
        this.continueText = 'Ok continuer';
        this.cancelText = 'Annuler';
        this.title = 'Etes vous sure de vouloir continuer';
        this.description = '';
        this.disabled = false;
        this.continue = new EventEmitter();
        this.asking = new EventEmitter();
        this.destroy$ = new Subject();
        // @ts-ignore
        fromEvent(el.nativeElement, 'click').pipe(takeUntil(this.destroy$)).subscribe((event) => __awaiter(this, void 0, void 0, function* () {
            if (this.disabled) {
                if (this.modal) {
                    this.modal.dismiss().then();
                }
                if (this.canContinue) {
                    this.canContinue = false;
                }
                return;
            }
            if (!this.canContinue && !this.modal) {
                this.asking.emit(true);
                this.canContinue = false;
                event.stopImmediatePropagation();
                this.modal = yield modalCtrl.create({
                    component: PromtAlertComponent,
                    keyboardClose: false,
                    componentProps: {
                        timeout: this.timeout,
                        continueText: this.continueText,
                        cancelText: this.cancelText,
                        title: this.title,
                        description: this.description,
                    },
                    cssClass: 'modal-error promt-alert',
                }).then();
                yield this.modal.present();
                this.modal.onWillDismiss().then(value => {
                    if (value.data.continue) {
                        this.canContinue = true;
                        this.continue.emit(true);
                        el.nativeElement.click();
                    }
                }).finally(() => {
                    this.modal = null;
                });
            }
            if (this.canContinue) {
                this.canContinue = false;
            }
        }));
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnInit() {
    }
};
__decorate([
    Input()
], PromtOnClickDirective.prototype, "timeout", void 0);
__decorate([
    Input()
], PromtOnClickDirective.prototype, "continueText", void 0);
__decorate([
    Input()
], PromtOnClickDirective.prototype, "cancelText", void 0);
__decorate([
    Input()
], PromtOnClickDirective.prototype, "title", void 0);
__decorate([
    Input()
], PromtOnClickDirective.prototype, "description", void 0);
__decorate([
    Input('appPromtOnClick')
], PromtOnClickDirective.prototype, "disabled", void 0);
__decorate([
    Output()
], PromtOnClickDirective.prototype, "continue", void 0);
__decorate([
    Output()
], PromtOnClickDirective.prototype, "asking", void 0);
PromtOnClickDirective = __decorate([
    Directive({
        selector: '[appPromtOnClick]'
    })
], PromtOnClickDirective);
export { PromtOnClickDirective };
//# sourceMappingURL=promt-on-click.directive.js.map