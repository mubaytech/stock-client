import { __decorate } from "tslib";
import { AppOnDestroy } from '../core/types';
import { Input } from '@angular/core';
import { timer } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
export class BaseControlValueAccessor extends AppOnDestroy {
    constructor(changeDetectorRef) {
        super();
        this.changeDetectorRef = changeDetectorRef;
        this.onChange = () => {
            //
        };
        this.onTouched = () => {
            //
        };
    }
    set value(value) {
        if (this.checkDiff(value)) {
            this.val = value;
            this.onChange(value);
        }
    }
    get value() {
        return this.val;
    }
    checkDiff(value) {
        return value !== undefined && this.val !== value;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    writeValue(obj) {
        this.value = obj;
        this.changeDetectorRef.detectChanges();
        timer(50).pipe(takeUntil(this.onDestroy$)).subscribe(() => {
            this.changeDetectorRef.markForCheck();
            // console.log(this.val)
        });
    }
}
__decorate([
    Input()
], BaseControlValueAccessor.prototype, "label", void 0);
__decorate([
    Input()
], BaseControlValueAccessor.prototype, "value", null);
//# sourceMappingURL=base-control-value-accessor.js.map