import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
let FormErrorsComponent = class FormErrorsComponent {
    constructor(formService, changeDetectorRef) {
        this.formService = formService;
        this.changeDetectorRef = changeDetectorRef;
        this.customMessage = {};
        this.class = false;
        this.onChangeOnly = false;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    ngOnInit() {
        var _a;
        // alert('hi there')
        this.control.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
            // console.log(this.control)
            this.changeDetectorRef.markForCheck();
        });
        this.control.parent.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.changeDetectorRef.markForCheck();
        });
        (_a = this.control.parent.parent) === null || _a === void 0 ? void 0 : _a.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
            // console.log(this.control)
            this.changeDetectorRef.markForCheck();
        });
    }
    get dirty() {
        return this.control.dirty;
    }
    get invalid() {
        return this.control.invalid;
    }
    get pending() {
        return this.control.pending;
    }
    get touched() {
        return this.control.touched;
    }
    get errors() {
        return this.control.errors;
    }
    getErrors() {
        return Object.keys(this.control.errors);
    }
};
__decorate([
    Input()
], FormErrorsComponent.prototype, "control", void 0);
__decorate([
    Input()
], FormErrorsComponent.prototype, "customMessage", void 0);
__decorate([
    HostBinding('class.center'),
    Input()
], FormErrorsComponent.prototype, "class", void 0);
__decorate([
    Input()
], FormErrorsComponent.prototype, "onChangeOnly", void 0);
FormErrorsComponent = __decorate([
    Component({
        selector: 'app-form-errors',
        templateUrl: './form-errors.component.html',
        styleUrls: ['./form-errors.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], FormErrorsComponent);
export { FormErrorsComponent };
//# sourceMappingURL=form-errors.component.js.map