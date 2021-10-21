import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthGuardsService} from '../../core/auth/auth-guards.service';
import {UserOptionsComponent} from '../user-options/user-options.component';
import {PopoverController} from '@ionic/angular';

@Component({
  selector: 'app-current-user',
  templateUrl: './current-user.component.html',
  styleUrls: ['./current-user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CurrentUserComponent implements OnInit {
  private popover: HTMLIonPopoverElement;

  constructor(
    private authGuardsService: AuthGuardsService,
    private popoverController: PopoverController
  ) {
  }

  ngOnInit() {
    //
  }

  get user() {
    return this.authGuardsService.authService.user;
  }

  openUserOptions(ev: any) {
    if (this.popover && this.popover.dismiss) {
      this.popover.dismiss().then();
      return;
    }
    this.popover = {} as any;
    this.popoverController.create({
      component: UserOptionsComponent,
      showBackdrop: false,
      event: ev,
    }).then(popover => {
      this.popover = popover;
      popover.onDidDismiss().then(_ => {
        this.popover = null;
      });
      // this.changeDetectorRef.markForCheck();
      popover.present();
    });

  }
}
