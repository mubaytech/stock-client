var ChipInputComponent_1;
import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, forwardRef, HostBinding, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BaseControlValueAccessor } from '../base-control-value-accessor';
import { ChipInputForm } from './chip-input-form';
import { ChipInputLabelDirective } from './chip-input-label.directive';
import { ChipInputFieldDirective } from './chip-input-field.directive';
import { of } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
let ChipInputComponent = ChipInputComponent_1 = class ChipInputComponent extends BaseControlValueAccessor {
    constructor(changeDetectorRef, formBuilder) {
        super(changeDetectorRef);
        this.formBuilder = formBuilder;
        this.items = [];
    }
    get hasItem() {
        return this.items.length > 0;
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.formGroup(ChipInputForm);
    }
    addItem(item) {
        if (typeof item === 'string') {
            item = item.trim();
        }
        if (!item || (typeof item === 'string' && item.length === 0)) {
            return;
        }
        of(item).pipe(takeUntil(this.onDestroy$), debounceTime(0)).subscribe(value => {
            this.items.push(item);
            // this.changeDetectorRef.markForCheck();
        });
        this.item = null;
        this.value = this.items;
        //
    }
    removeItem(i) {
        if (this.items.length) {
            this.value = this.items.splice(i, 1);
        }
        // this.changeDetectorRef.markForCheck();
    }
    removeLast() {
        var _a;
        if ((((_a = (this.item || '')) === null || _a === void 0 ? void 0 : _a.length) === 0) && this.hasItem) {
            this.removeItem(this.items.length - 1);
        }
    }
    set item(item) {
        this.formGroup.controls.item.setValue(item);
    }
    get item() {
        return this.formGroup.controls.item.value;
    }
};
__decorate([
    HostBinding('class.hasItem')
], ChipInputComponent.prototype, "hasItem", null);
__decorate([
    ContentChild(ChipInputLabelDirective)
], ChipInputComponent.prototype, "chipInputLabelDirective", void 0);
__decorate([
    ContentChild(ChipInputFieldDirective)
], ChipInputComponent.prototype, "chipInputFieldDirective", void 0);
__decorate([
    Input()
], ChipInputComponent.prototype, "label", void 0);
ChipInputComponent = ChipInputComponent_1 = __decorate([
    Component({
        selector: 'app-chip-input',
        templateUrl: './chip-input.component.html',
        styleUrls: ['./chip-input.component.scss'],
        providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => ChipInputComponent_1),
                multi: true
            },
        ],
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ChipInputComponent);
export { ChipInputComponent };
//# sourceMappingURL=chip-input.component.js.map