import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InfiniteScrollComponent} from './infinite-scroll.component';
import {IonicModule} from '@ionic/angular';


@NgModule({
    declarations: [InfiniteScrollComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [InfiniteScrollComponent]
})
export class InfiniteScrollModule {
}
