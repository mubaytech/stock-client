import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrScannerDirective} from './qr-scanner.directive';
import {QrScannerPageComponent} from "./qr-scanner-page/qr-scanner-page.component";
import {IonicModule} from "@ionic/angular";
import {ZXingScannerModule} from "@zxing/ngx-scanner";
import {FormsModule} from "@angular/forms";
import {TuiLoaderModule} from "@taiga-ui/core";


@NgModule({
  declarations: [
    QrScannerDirective, QrScannerPageComponent
  ],
    imports: [
        CommonModule,
        IonicModule,
        ZXingScannerModule,
        FormsModule,
        TuiLoaderModule
    ],
  exports: [QrScannerDirective, QrScannerPageComponent]
})
export class QrScannerModule {
}
