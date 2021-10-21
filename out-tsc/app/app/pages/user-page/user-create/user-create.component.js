import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserCreateForm } from './user-create-form';
import { AppOnDestroy } from '../../../core/types';
import { IS_FORM_VALID } from '../../../core/form/utils';
let UserCreateComponent = class UserCreateComponent extends AppOnDestroy {
    constructor(formBuilder, changeDetectorRef, createUserGQL) {
        super();
        this.formBuilder = formBuilder;
        this.changeDetectorRef = changeDetectorRef;
        this.createUserGQL = createUserGQL;
    }
    get controls() {
        return this.formGroup.controls;
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.formGroup(UserCreateForm);
        // this.formGroup.valueChanges.subscribe(console.log);
    }
    onSubmit() {
        if (!IS_FORM_VALID(this.formGroup)) {
            // return;
        }
        const { identite, depot, password, permissions, roles, username } = this.formGroup.getRawValue();
    }
};
UserCreateComponent = __decorate([
    Component({
        selector: 'app-user-create',
        templateUrl: './user-create.component.html',
        styleUrls: ['./user-create.component.scss'],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], UserCreateComponent);
export { UserCreateComponent };
//# sourceMappingURL=user-create.component.js.map