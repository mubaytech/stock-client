import {HttpClientModule} from '@angular/common/http';
import {ModuleWithProviders, NgModule} from '@angular/core';
import {File} from '@ionic-native/file';
import {IonicModule} from '@ionic/angular';
import {ImageLoader} from './providers/image-loader';
import {ImageLoaderConfig} from './providers/image-loader-config';
import {CommonModule} from '@angular/common';

import {ImgLoaderComponent} from './components/img-loader';

@NgModule({
    declarations: [ImgLoaderComponent],
    imports: [
        CommonModule,
        IonicModule,
        HttpClientModule,
    ],
    exports: [
        ImgLoaderComponent
    ],

})
export class IonicImageLoader {
    static forRoot(): ModuleWithProviders<IonicImageLoader> {
        return {
            ngModule: IonicImageLoader,
            providers: [
                ImageLoaderConfig,
                ImageLoader,
                {provide: File, useFactory: () => File}
                ,
            ],
        };
    }
}
