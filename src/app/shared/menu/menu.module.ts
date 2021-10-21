import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuHeaderDirective} from './menu-header.directive';
import {MenuContentDirective} from './menu-content.directive';
import {MenuFooterDirective} from './menu-footer.directive';
import {MenuTriggerDirective} from './menu-trigger.directive';
import {IonicModule} from '@ionic/angular';
import {MenuComponent} from './menu/menu.component';
import {MenuDialogComponent} from './menu-dialog/menu-dialog.component';


@NgModule({
    declarations: [
        MenuHeaderDirective, MenuContentDirective, MenuFooterDirective, MenuTriggerDirective, MenuComponent, MenuDialogComponent],
    imports: [
        CommonModule,
        IonicModule
    ]
})
export class MenuModule {
}
