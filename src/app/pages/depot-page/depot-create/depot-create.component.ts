import {Component, OnInit} from '@angular/core';
import {IFormGroup, RxFormBuilder, RxFormGroup} from '@rxweb/reactive-form-validators';
import {CreateDepotGQL, CreateDepotMutationVariables, Depot} from '../../../../generated/types.graphql-gen';
import {DepotCreateForm} from './depot-create-form';
import {AppOnDestroy} from '../../../core/types';
import {combineLatest} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-depot-create',
    templateUrl: './depot-create.component.html',
    styleUrls: ['./depot-create.component.scss'],
})
export class DepotCreateComponent extends AppOnDestroy implements OnInit {
    formGroup: IFormGroup<DepotCreateForm>;

    constructor(
        private formBuilder: RxFormBuilder,
        public createDepotGQL: CreateDepotGQL
    ) {
        super();
    }

    ngOnInit() {
        this.formGroup = (this.formBuilder.formGroup<DepotCreateForm>(DepotCreateForm) as IFormGroup<DepotCreateForm>);
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
        const {adresse_1, ville, image, contact_1, nom, contact_2, email, region, slug, web}: DepotCreateForm = this.formGroup.getRawValue();
        const data: CreateDepotMutationVariables = {
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
}
