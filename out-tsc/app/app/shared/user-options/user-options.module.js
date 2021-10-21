import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOptionsComponent } from './user-options.component';
import { IonicModule } from '@ionic/angular';
import { ImageModule } from '../image/image.module';
import { RouterModule } from '@angular/router';
let UserOptionsModule = class UserOptionsModule {
};
UserOptionsModule = __decorate([
    NgModule({
        declarations: [UserOptionsComponent],
        imports: [
            CommonModule,
            IonicModule,
            ImageModule,
            RouterModule
        ],
        exports: [
            UserOptionsComponent
        ]
    })
], UserOptionsModule);
export { UserOptionsModule };
//# sourceMappingURL=user-options.module.js.map