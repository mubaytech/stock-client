import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { interval, Subject } from 'rxjs';
import { takeUntil, takeWhile } from 'rxjs/operators';
let PromtAlertComponent = class PromtAlertComponent {
    constructor(modalCtrl, ref) {
        this.modalCtrl = modalCtrl;
        this.ref = ref;
        this.timeout = 0;
        this.continueText = 'Ok continuer';
        this.cancelText = 'Annuler';
        this.title = 'Etes vous sure de vouloir continuer';
        this.description = '';
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        if (this.timeout > 0 && this.timeout <= 10) {
            interval(1000).pipe(takeUntil(this.destroy$), takeWhile(() => this.timeout > 0)).subscribe(() => {
                this.timeout -= 1;
                this.ref.markForCheck();
            });
        }
    }
    cancel() {
        this.modalCtrl.dismiss().then();
    }
    dismiss($event) {
        const { tagName } = $event.target;
        if (tagName === 'ION-ROW' || tagName === 'ION-COL' || tagName === 'ION-CONTENT') {
            this.modalCtrl.dismiss().then();
        }
    }
    continue() {
        this.modalCtrl.dismiss({ continue: true }).then();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
};
__decorate([
    Input()
], PromtAlertComponent.prototype, "timeout", void 0);
__decorate([
    Input()
], PromtAlertComponent.prototype, "continueText", void 0);
__decorate([
    Input()
], PromtAlertComponent.prototype, "cancelText", void 0);
__decorate([
    Input()
], PromtAlertComponent.prototype, "title", void 0);
__decorate([
    Input()
], PromtAlertComponent.prototype, "description", void 0);
PromtAlertComponent = __decorate([
    Component({
        selector: 'app-promt-alert',
        templateUrl: './promt-alert.component.html',
        styleUrls: ['./promt-alert.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], PromtAlertComponent);
export { PromtAlertComponent };
//# sourceMappingURL=promt-alert.component.js.map