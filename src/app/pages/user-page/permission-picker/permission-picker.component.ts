import {ChangeDetectorRef, Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {BaseControlValueAccessor} from '../../../shared/base-control-value-accessor';
import {Role} from '../../../../generated/types.graphql-gen';
import {NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-permission-picker',
    templateUrl: './permission-picker.component.html',
    styleUrls: ['./permission-picker.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PermissionPickerComponent),
            multi: true
        }
    ]
})
export class PermissionPickerComponent extends BaseControlValueAccessor<Role> implements OnInit, OnDestroy {
    items: Array<Role> = [];

    constructor(changeDetectorRef: ChangeDetectorRef) {
        super(changeDetectorRef);
    }

    ngOnInit() {
        //
    }

    ngOnDestroy(): void {
        super.ngOnDestroy();
    }
}
