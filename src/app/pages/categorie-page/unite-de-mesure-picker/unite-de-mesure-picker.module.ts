import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UniteDeMesurePickerComponent} from './unite-de-mesure-picker.component';
import {IonicModule} from '@ionic/angular';
import {
    IoniconCheckboxModule,
    IoniconChevronDownOutlineModule,
    IoniconChevronForwardOutlineModule,
    IoniconCloseModule,
    IoniconRemoveCircleModule,
    IoniconSquareOutlineModule
} from '../../../../generated-icons/ionic';
import {TreeModule} from '@circlon/angular-tree-component';
import {NgVarModule} from '../../../shared/ng-var/ng-var.module';
import {NodePipeModule} from './node-pipe/node-pipe.module';


@NgModule({
    declarations: [UniteDeMesurePickerComponent],
    imports: [
        CommonModule,
        IonicModule,
        TreeModule,
        IoniconCheckboxModule,
        IoniconSquareOutlineModule,
        IoniconChevronForwardOutlineModule,
        IoniconChevronDownOutlineModule,
        NgVarModule,
        IoniconCloseModule,
        IoniconRemoveCircleModule,
        NodePipeModule
    ],
    exports: [UniteDeMesurePickerComponent]
})
export class UniteDeMesurePickerModule {
}
