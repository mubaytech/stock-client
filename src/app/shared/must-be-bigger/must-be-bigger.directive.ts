import {Directive, ElementRef, Input, OnDestroy} from '@angular/core';
import {AbstractControl, FormControl, NG_VALIDATORS} from '@angular/forms';
import {Subject} from 'rxjs';
import {moment} from '../../core/time.service';


@Directive({
    selector: '[appMustBeBigger]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: MustBeBiggerDirective, multi: true},
    ]
})
export class MustBeBiggerDirective implements OnDestroy {
    @Input('appMustBeBigger') othercontrol: FormControl | string;
    destroy$: Subject<any>;

    constructor(
        private el: ElementRef
    ) {
    }

    validate(control: FormControl): { [key: string]: any } | null {

        let control2: AbstractControl;
        if (!(this.othercontrol instanceof FormControl)) {
            control2 = control.parent.get(this.othercontrol);
        } else {
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
            return moment(control.value).isAfter(moment(control.value)) ? null : {mustBeEqualOrBigger: true};
        }
        return (control.value.length >= control2.value.length)
            ? null
            : {mustBeEqualOrBigger: true};

    }

    ngOnDestroy(): void {
        if (this.destroy$) {
            this.destroy$.next();
            this.destroy$.complete();
        }
    }

    /* registerOnValidatorChange(fn: () => void): void {
     }*/
}
