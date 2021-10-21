import {CustomIonInputComponent} from './custom-ion-input/custom-ion-input.component';
import {ModalController, PopoverController} from '@ionic/angular';
import {AnimationBuilder, ComponentProps, FrameworkDelegate, ModalOptions, Mode} from '@ionic/core';
import {ModalBaseComponent} from './modal-base/modal-base.component';
import {ChangeDetectorRef, Directive, EventEmitter, Output, ViewChild} from '@angular/core';
import {BaseControlValueAccessor} from './base-control-value-accessor';
import {IonicDialogService} from "./ionic-dialog.service";

@Directive(({
  selector: '',
}))
export class DialogPickerBase<T, C> extends BaseControlValueAccessor<T> {
  scrollPosition: number = 0;

  @Output()
  dialogShow = new EventEmitter();

  @Output()
  dialogHide = new EventEmitter();

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    protected _modalController: ModalController | PopoverController,
    protected ionicDialogService: IonicDialogService,
    protected rootPage: object,
    protected options?: ({
      componentProps?: ComponentProps<T>;
      presentingElement?: HTMLElement;
      showBackdrop?: boolean;
      backdropDismiss?: boolean;
      cssClass?: string | string[];
      delegate?: FrameworkDelegate;
      animated?: boolean;
      swipeToClose?: boolean;
      mode?: Mode;
      keyboardClose?: boolean;
      id?: string;
      enterAnimation?: AnimationBuilder;
      leaveAnimation?: AnimationBuilder;
    })
  ) {
    super(changeDetectorRef);
  }

  @ViewChild(CustomIonInputComponent)
  customIonInputComponent: CustomIonInputComponent<T>;

  public _modal: HTMLIonModalElement | HTMLIonPopoverElement;
  public _component: C;

  open() {
    const self = this;
    return new Promise<void>((resolve, reject) => {
      if (this.customIonInputComponent?.$isDisabled.getValue() || self._modal) {
        reject('IonicSelectable is disabled or already opened.');
        return;
      }
      const modalOptions: ModalOptions = {
        presentingElement: this.ionicDialogService.routerOutlet.nativeEl,
        component: ModalBaseComponent,
        componentProps: {
          selectComponent: self,
          rootPage: this.rootPage,
        },
        ...(this.options ? this.options : {})
      };

      self._modalController.create(modalOptions).then(modal => {
        self._modal = modal;


        modal.onWillDismiss().then(() => {
          self._modal = null;
          self.customIonInputComponent?._setIonItemHasFocus(false);
        });

        modal.onDidDismiss().then(event => {
          if (self.customIonInputComponent) {
            self.customIonInputComponent._isOpened = false;
          }
          if (event.role === 'backdrop') {
            self.customIonInputComponent?.onClose.emit();
          }
          // ;
          this.dialogHide.emit();
          this.changeDetectorRef.markForCheck();
        });

        modal.present().then(() => {
          this.dialogShow.emit();
          // Set focus after Modal has opened to avoid flickering of focus highlighting
          // before Modal opening.
          self.customIonInputComponent?._setIonItemHasFocus(true);
          resolve();
        });
        // ;
        this.changeDetectorRef.markForCheck();
      });
    });
  }

  close(data?: any) {
    this._modal?.dismiss(data).then()
  }

}
