import {AfterViewInit, ChangeDetectorRef, Directive, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {DialogPickerBase} from "../dialog-picker-base";
import {ControlValueAccessor} from "@angular/forms";
import {ModalController} from "@ionic/angular";
import {IonicDialogService} from "../ionic-dialog.service";
import {FormService} from "../../core/form/form.service";
import {TimeService} from "../../core/time.service";
import {CoreService} from "../../core/core.service";

import {CustomIonInputComponent} from "../custom-ion-input/custom-ion-input.component";
import {QrScannerPageComponent} from "./qr-scanner-page/qr-scanner-page.component";
import {fromEvent} from "rxjs";

@Directive({
  selector: '[appQrScanner]'
})
export class QrScannerDirective extends DialogPickerBase<string, QrScannerPageComponent> implements OnInit, ControlValueAccessor, AfterViewInit {

  @HostListener('click') onClick() {
    if (!this.customIonInputComponent) {
      this.open().then();
    }
  }

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    _modalController: ModalController,
    ionicDialogService: IonicDialogService,
    private formService: FormService,
    private timeService: TimeService,
    public coreService: CoreService,
    public elementRef: ElementRef<QrScannerPageComponent>
  ) {
    super(changeDetectorRef, _modalController, ionicDialogService, QrScannerPageComponent, {
      cssClass: '',
    });
  }

  @ViewChild(CustomIonInputComponent)
  customIonInputComponent: CustomIonInputComponent<string>;


  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }

}
