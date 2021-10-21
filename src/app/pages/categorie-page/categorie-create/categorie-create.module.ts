import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategorieCreateComponent} from './categorie-create.component';
import {IonicModule} from '@ionic/angular';
import {CategorieInputModule} from '../categorie-input/categorie-input.module';
import {ReactiveTypedFormsModule} from '@rxweb/reactive-form-validators';
import {FormErrorsModule} from '../../../shared/form-errors/form-errors.module';
import {UniteDeMesureInputModule} from '../unite-de-mesure-input/unite-de-mesure-input.module';


@NgModule({
    declarations: [CategorieCreateComponent],
    imports: [
        CommonModule,
        IonicModule,
        CategorieInputModule,
        ReactiveTypedFormsModule,
        FormErrorsModule,
        UniteDeMesureInputModule
    ],
    exports: [CategorieCreateComponent]
})
export class CategorieCreateModule {
}
