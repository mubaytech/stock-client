import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { DepotCreateForm } from './depot-create-form';
import { AppOnDestroy } from '../../../core/types';
import { combineLatest } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';
let DepotCreateComponent = class DepotCreateComponent extends AppOnDestroy {
    constructor(formBuilder, createDepotGQL) {
        super();
        this.formBuilder = formBuilder;
        this.createDepotGQL = createDepotGQL;
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.formGroup(DepotCreateForm);
        combineLatest([this.formGroup.controls.region.valueChanges, this.formGroup.controls.ville.valueChanges])
            .pipe(takeUntil(this.onDestroy$), debounceTime(200))
            .subscribe(values => {
            if (!this.formGroup.controls.nom.dirty) {
                this.formGroup.controls.nom.setValue(values.join(' ') + ' I');
            }
        });
    }
    submit() {
        console.log(this.formGroup.value);
        if (!this.formGroup.valid) {
            this.formGroup.markAllAsTouched();
            this.formGroup.updateValueAndValidity();
            return;
        }
        const { adresse_1, ville, image, contact_1, nom, contact_2, email, region, slug, web } = this.formGroup.getRawValue();
        const data = {
            image,
            ville,
            adresse_1,
            web,
            slug,
            region, email, contact_2, nom, contact_1
        };
        this.createDepotGQL.mutate(data).subscribe(value => {
            console.log(value);
        });
    }
};
DepotCreateComponent = __decorate([
    Component({
        selector: 'app-depot-create',
        templateUrl: './depot-create.component.html',
        styleUrls: ['./depot-create.component.scss'],
    })
], DepotCreateComponent);
export { DepotCreateComponent };
//# sourceMappingURL=depot-create.component.js.map