import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PromtAlertModule} from '../promt-alert/promt-alert.module';
import {PromtOnClickDirective} from './promt-on-click.directive';


@NgModule({
    declarations: [PromtOnClickDirective],
    imports: [
        CommonModule,
        PromtAlertModule
    ],
    exports: [
        PromtOnClickDirective
    ]
})
export class PromtOnClickModule {
}
