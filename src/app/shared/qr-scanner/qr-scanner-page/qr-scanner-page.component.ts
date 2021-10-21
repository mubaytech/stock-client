import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, Optional} from '@angular/core';
import {BarcodeFormat, Exception, Result} from "@zxing/library";
import {SettingsService} from "../../../core/settings.service";
import {CoreService} from "../../../core/core.service";

import {BreakpointService} from "../../../core/breakpoint.service";
import {RouteService} from "../../../core/route.service";
import {NavParams} from "@ionic/angular";
import {AppOnDestroy} from "../../../core/types";
import {QrScannerDirective} from "../qr-scanner.directive";

@Component({
  selector: 'app-qr-scanner-page',
  templateUrl: './qr-scanner-page.component.html',
  styleUrls: ['./qr-scanner-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QrScannerPageComponent extends AppOnDestroy implements OnInit {

  scannerEnabled = true;

  desiredDevice = null;

  torch: any;

  devices: MediaDeviceInfo[] = [];

  formats: BarcodeFormat[] = [
    BarcodeFormat.CODABAR,
    BarcodeFormat.QR_CODE,
    // BarcodeFormat.EAN_13,
    // BarcodeFormat.CODE_128,
    // BarcodeFormat.DATA_MATRIX
  ];

  public selectComponent: QrScannerDirective;

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public settingsService: SettingsService,
    public coreService: CoreService,
    private breakpointService: BreakpointService,
    private routeService: RouteService,
    @Optional() public navParams: NavParams
  ) {

    super();
    this.selectComponent = navParams?.get('selectComponent');
  }

  ngOnInit() {
  }

  onTorchCompatible($event: boolean) {

  }

  camerasFoundHandler($event: MediaDeviceInfo[]) {
    this.devices = $event
  }

  camerasNotFoundHandler($event: any) {

  }

  scanSuccessHandler($event: string) {
    this.selectComponent.close($event);
  }

  scanErrorHandler($event: Error) {

  }

  scanFailureHandler($event: Exception) {

  }

  scanCompleteHandler($event: Result) {
    // console.log($event)
  }

  onDeviceChange($event) {
    if ($event !== this.desiredDevice?.deviceId) {
      this.desiredDevice = this.devices.find(d => d.deviceId === $event);
      this.changeDetectorRef.markForCheck();
    }
  }

  ngOnDestroy() {
    super.ngOnDestroy();
    this.scannerEnabled = false;
    this.changeDetectorRef?.markForCheck();
  }
}
