import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriePickerComponent} from './categorie-picker.component';
import {IonicModule} from '@ionic/angular';
import {TreeModule} from '@circlon/angular-tree-component';
import {
    IoniconArrowBackModule, IoniconCheckboxModule, IoniconChevronDownOutlineModule,
    IoniconChevronForwardOutlineModule,
    IoniconCloseModule, IoniconRemoveCircleModule, IoniconSquareOutlineModule
} from '../../../../generated-icons/ionic';
import {NodePipeModule} from '../unite-de-mesure-picker/node-pipe/node-pipe.module';


@NgModule({
    declarations: [CategoriePickerComponent],
    imports: [
        CommonModule,
        IonicModule,
        TreeModule,
        IoniconArrowBackModule,
        IoniconCloseModule,
        NodePipeModule,
        IoniconChevronForwardOutlineModule,
        IoniconChevronDownOutlineModule,
        IoniconRemoveCircleModule,
        IoniconCheckboxModule,
        IoniconSquareOutlineModule
    ],
    exports: [CategoriePickerComponent]
})
export class CategoriePickerModule {
}
