var PersonCreateComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PersonneCreateForm } from './personne-create-form';
import { takeUntil } from 'rxjs/operators';
import { BaseControlValueAccessor } from '../../../shared/base-control-value-accessor';
import { IS_FORM_VALID } from '../../../core/form/utils';
let PersonCreateComponent = PersonCreateComponent_1 = class PersonCreateComponent extends BaseControlValueAccessor {
    constructor(formBuilder, changeDetectorRef, controlContainer) {
        super(changeDetectorRef);
        this.formBuilder = formBuilder;
        this.controlContainer = controlContainer;
        this.phoneMask = '(+221) 99 999 99 99';
        this.cniMask = ['A 9{7}', '9 9{3} 9{4} 9{5}'];
    }
    set value(value) {
        if (this.checkDiff(value)) {
            this.val = value;
            this.onChange(value);
            this.onTouched(value);
        }
    }
    get controls() {
        return this.formGroup.controls;
    }
    ngOnInit() {
        const model = new PersonneCreateForm();
        this.formGroup = this.formBuilder.formGroup(model);
        this.formGroup.valueChanges.pipe(takeUntil(this.onDestroy$)).subscribe(value => {
            // console.log(value);
            if (this.formGroup.valid) {
                this.value = value;
            }
        });
    }
    onSubmit() {
        if (IS_FORM_VALID(this.formGroup, {
            emitEvent: true,
        })) {
            //
        }
        const { roles, depot, permissions, username, identite, } = this.formGroup.getRawValue();
        this.createUserGQL.mutate({
            identite: {
                create: identite
            },
            username: username,
        }).subscribe();
    }
};
__decorate([
    Input()
], PersonCreateComponent.prototype, "value", null);
PersonCreateComponent = PersonCreateComponent_1 = __decorate([
    Component({
        selector: 'app-person-create',
        templateUrl: './person-create.component.html',
        styleUrls: ['./person-create.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PersonCreateComponent_1),
                multi: true
            }
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], PersonCreateComponent);
export { PersonCreateComponent };
//# sourceMappingURL=person-create.component.js.map