import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHeaderDirective } from './menu-header.directive';
import { MenuContentDirective } from './menu-content.directive';
import { MenuFooterDirective } from './menu-footer.directive';
import { MenuTriggerDirective } from './menu-trigger.directive';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { MenuDialogComponent } from './menu-dialog/menu-dialog.component';
let MenuModule = class MenuModule {
};
MenuModule = __decorate([
    NgModule({
        declarations: [
            MenuHeaderDirective, MenuContentDirective, MenuFooterDirective, MenuTriggerDirective, MenuComponent, MenuDialogComponent
        ],
        imports: [
            CommonModule,
            IonicModule
        ]
    })
], MenuModule);
export { MenuModule };
//# sourceMappingURL=menu.module.js.map