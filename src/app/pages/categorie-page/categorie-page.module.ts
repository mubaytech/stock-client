import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoriePageRoutingModule} from './categorie-page-routing.module';
import {CategorieCreateModule} from './categorie-create/categorie-create.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        CategoriePageRoutingModule,
        CategorieCreateModule
    ]
})
export class CategoriePageModule {
}
