import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialTableVirtualScrollDirective} from './material-table-virtual-scroll.directive';
import {CoreTableFilterComponent} from './filter/filter.component';
import {CoreTableMenuComponent} from './menu/menu.component';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';


@NgModule({
    declarations: [MaterialTableVirtualScrollDirective, CoreTableFilterComponent, CoreTableMenuComponent],
    exports: [
        MaterialTableVirtualScrollDirective,
        CoreTableFilterComponent,
        CoreTableMenuComponent
    ],
    imports: [
        IonicModule,
        ReactiveFormsModule,
        CommonModule,
        MatIconModule,
        MatMenuModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
    ]
})
export class MaterialTableVirtualScrollModule {
}
