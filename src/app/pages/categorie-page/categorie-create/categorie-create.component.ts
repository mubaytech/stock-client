import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {IFormGroup} from '@rxweb/types';
import {RxFormBuilder} from '@rxweb/reactive-form-validators';
import {INPUT_MASKS} from '../../../core/form/form-validation.service';
import {IS_FORM_VALID} from '../../../core/form/utils';
import {CategorieCreateForm} from './categorie-create-form';

@Component({
    selector: 'app-categorie-create',
    templateUrl: './categorie-create.component.html',
    styleUrls: ['./categorie-create.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorieCreateComponent implements OnInit {
    get controls() {
        return this.formGroup.controls as IFormGroup<CategorieCreateForm>['controls'];
    }

    constructor(
        private formBuilder: RxFormBuilder,
        public changeDetectorRef: ChangeDetectorRef,
    ) {

    }

    formGroup: IFormGroup<CategorieCreateForm>;
    loading: boolean;
    inputMasks = INPUT_MASKS;

    ngOnInit() {
        this.formGroup = this.formBuilder.formGroup<CategorieCreateForm>(
            CategorieCreateForm
        ) as IFormGroup<CategorieCreateForm>;
        // this.formGroup.valueChanges.subscribe(console.log);
    }

    onSubmit() {
        if (!IS_FORM_VALID(this.formGroup)) {
            return;
        }
    }

}
