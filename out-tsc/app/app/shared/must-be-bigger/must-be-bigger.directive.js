var MustBeBiggerDirective_1;
import { __decorate } from "tslib";
import { Directive, Input } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';
import { Subject } from 'rxjs';
import { moment } from '../../core/time.service';
let MustBeBiggerDirective = MustBeBiggerDirective_1 = class MustBeBiggerDirective {
    constructor(el) {
        this.el = el;
    }
    validate(control) {
        let control2;
        if (!(this.othercontrol instanceof FormControl)) {
            control2 = control.parent.get(this.othercontrol);
        }
        else {
            control2 = this.othercontrol;
        }
        if (!this.destroy$) {
            this.destroy$ = new Subject();
            control2.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (control2.invalid) {
            return null;
        }
        // console.log({el: this.el.nativeElement})
        if (this.el.nativeElement.nodeName === 'ION-DATETIME') {
            // alert('hi')
            return moment(control.value).isAfter(moment(control.value)) ? null : { mustBeEqualOrBigger: true };
        }
        return (control.value.length >= control2.value.length)
            ? null
            : { mustBeEqualOrBigger: true };
    }
    ngOnDestroy() {
        if (this.destroy$) {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }
};
__decorate([
    Input('appMustBeBigger')
], MustBeBiggerDirective.prototype, "othercontrol", void 0);
MustBeBiggerDirective = MustBeBiggerDirective_1 = __decorate([
    Directive({
        selector: '[appMustBeBigger]',
        providers: [
            { provide: NG_VALIDATORS, useExisting: MustBeBiggerDirective_1, multi: true },
        ]
    })
], MustBeBiggerDirective);
export { MustBeBiggerDirective };
//# sourceMappingURL=must-be-bigger.directive.js.map