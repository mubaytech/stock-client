import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {MenuComponent} from '../menu/menu.component';
import {ModalController, PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrls: ['./menu-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDialogComponent<T> implements OnInit {
  @Input() menuComponent: MenuComponent<T>;
  @Input() dialogType: 'popover' | 'modal';

  constructor(
    public modalController: ModalController,
    public popoverController: PopoverController
  ) {
  }

  ngOnInit() {
  }

  dismiss() {
    if (this.dialogType === 'modal') {
      this.modalController.dismiss();
    }
    if (this.dialogType === 'modal') {
      this.popoverController.dismiss();
    }
  }
}
