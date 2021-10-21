import {Injectable, Optional} from '@angular/core';
import {IonRouterOutlet, ModalController, PopoverController} from "@ionic/angular";
import {ModalOptions} from "@ionic/core";
import {ModalBaseComponent} from "./modal-base/modal-base.component";

@Injectable({
  providedIn: "root"
})
export class IonicDialogService {

  constructor(
    protected _modalController: ModalController,
    @Optional() public routerOutlet: IonRouterOutlet
  ) {
  }


  open<C>(routPage: object, options: ({} & ModalOptions) = ({} as any)): Promise<HTMLIonModalElement> {
    const self = this;
    return (new Promise<HTMLIonModalElement>((resolve, reject) => {
      const modalOptions: ModalOptions = {
        ...options,
        presentingElement: this.routerOutlet.nativeEl,
        component: ModalBaseComponent,
        componentProps: {
          rootPage: routPage,
        },

      };

      (self._modalController.create(modalOptions)).then(value => resolve(value));
    }));
  }


}
