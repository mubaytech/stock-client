import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CategorieCreateComponent} from './categorie-create/categorie-create.component';

const routes: Routes = [
    {
        path: '',
        component: CategorieCreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoriePageRoutingModule {
}
