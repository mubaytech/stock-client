var PermissionPickerComponent_1;
import { __decorate } from "tslib";
import { Component, forwardRef } from '@angular/core';
import { BaseControlValueAccessor } from '../../../shared/base-control-value-accessor';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
let PermissionPickerComponent = PermissionPickerComponent_1 = class PermissionPickerComponent extends BaseControlValueAccessor {
    constructor(changeDetectorRef) {
        super(changeDetectorRef);
        this.items = [];
    }
    ngOnInit() {
        //
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
};
PermissionPickerComponent = PermissionPickerComponent_1 = __decorate([
    Component({
        selector: 'app-permission-picker',
        templateUrl: './permission-picker.component.html',
        styleUrls: ['./permission-picker.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => PermissionPickerComponent_1),
                multi: true
            }
        ]
    })
], PermissionPickerComponent);
export { PermissionPickerComponent };
//# sourceMappingURL=permission-picker.component.js.map