import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {takeUntil, takeWhile} from 'rxjs/operators';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-promt-alert',
  templateUrl: './promt-alert.component.html',
  styleUrls: ['./promt-alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PromtAlertComponent implements OnInit, OnDestroy {
  @Input() timeout = 0;
  @Input() continueText = 'Ok continuer';
  @Input() cancelText = 'Annuler';
  @Input() title = 'Etes vous sure de vouloir continuer';
  @Input() description = '';
  destroy$ = new Subject();
  @Input() confirmerAvant: boolean;
  confirmee = false;

  constructor(public modalCtrl: ModalController, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    if (!this.confirmerAvant) {
      this.confirmee = true;
    }
    if (this.timeout > 0 && this.timeout <= 10) {
      interval(1000).pipe(
        takeUntil(this.destroy$),
        takeWhile(() => this.timeout > 0),
      ).subscribe(() => {
        this.timeout -= 1;
        this.ref.markForCheck();
      });
    }
  }

  cancel() {
    this.modalCtrl.dismiss().then();
  }

  dismiss($event: MouseEvent) {
    this.modalCtrl.dismiss().then();
  }

  continue() {
    this.modalCtrl.dismiss({continue: true}).then();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
