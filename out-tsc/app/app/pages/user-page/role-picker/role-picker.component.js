var RolePickerComponent_1;
import { __decorate } from "tslib";
import { Component, forwardRef, ViewChild } from '@angular/core';
import { BaseControlValueAccessor } from '../../../shared/base-control-value-accessor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { catchError, map, takeUntil, tap } from 'rxjs/operators';
import { of } from 'rxjs';
let RolePickerComponent = RolePickerComponent_1 = class RolePickerComponent extends BaseControlValueAccessor {
    constructor(changeDetectorRef, rolesGQL) {
        super(changeDetectorRef);
        this.rolesGQL = rolesGQL;
        this.items = (new Array(1000)).fill(1, 0, 1000).map((value, i) => ({
            id: '' + i,
            nom: 'role'
        }));
    }
    ngOnInit() {
        //
    }
    onOpen($event) {
        const { component } = $event;
        if (this.roles) {
            return;
        }
        component === null || component === void 0 ? void 0 : component.showLoading();
        this.roles = (this.rolesGQL.watch().valueChanges.pipe(takeUntil(this.onDestroy$), map(value => value.data.roles.data), catchError(err => of([])), tap(x => {
            component === null || component === void 0 ? void 0 : component.hideLoading();
        })));
        this.changeDetectorRef.markForCheck();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
__decorate([
    ViewChild('_ionicSelectableComponent')
], RolePickerComponent.prototype, "ionicSelectableComponent", void 0);
RolePickerComponent = RolePickerComponent_1 = __decorate([
    Component({
        selector: 'app-role-picker',
        templateUrl: './role-picker.component.html',
        styleUrls: ['./role-picker.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => RolePickerComponent_1),
                multi: true
            }
        ]
    })
], RolePickerComponent);
export { RolePickerComponent };
//# sourceMappingURL=role-picker.component.js.map