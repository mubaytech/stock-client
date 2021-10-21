var IonicImageLoader_1;
import { __decorate } from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { File } from '@ionic-native/file';
import { IonicModule } from '@ionic/angular';
import { ImageLoader } from './providers/image-loader';
import { ImageLoaderConfig } from './providers/image-loader-config';
import { CommonModule } from '@angular/common';
import { ImgLoaderComponent } from './components/img-loader';
let IonicImageLoader = IonicImageLoader_1 = class IonicImageLoader {
    static forRoot() {
        return {
            ngModule: IonicImageLoader_1,
            providers: [
                ImageLoaderConfig,
                ImageLoader,
                { provide: File, useFactory: () => File },
            ],
        };
    }
};
IonicImageLoader = IonicImageLoader_1 = __decorate([
    NgModule({
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
], IonicImageLoader);
export { IonicImageLoader };
//# sourceMappingURL=image-loader.module.js.map