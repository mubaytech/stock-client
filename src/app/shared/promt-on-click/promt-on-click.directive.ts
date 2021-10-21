import {Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, Renderer2} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {fromEvent, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {PromtAlertComponent} from '../promt-alert/promt-alert.component';

@Directive({
  selector: '[appPromtOnClick]'
})
export class PromtOnClickDirective implements OnInit, OnDestroy {
  @Input() set titleOnUnSave(doSet: boolean) {
    if (doSet) {
      this.title = 'Etes vous sure de vouloir abandonner';
    } else {
      this.title = this._title;
    }
  }


  @Input() timeout = 0;
  @Input() confirmerAvant = false;
  @Input() continueText = 'Ok continuer';
  @Input() cancelText = 'Annuler';
  _title = 'Etes vous sure de vouloir continuer';
  @Input() title = this._title;
  @Input() description = '';
  @Input('appPromtOnClick') disabled = false;
  @Output() continue = new EventEmitter();
  @Output() asking = new EventEmitter();
  private firstClick;
  public modal: HTMLIonModalElement;
  private canContinue: boolean;
  private destroy$ = new Subject();


  constructor(public modalCtrl: ModalController, public el: ElementRef, renderer: Renderer2) {
    // @ts-ignore
    fromEvent(el.nativeElement, 'click').pipe(takeUntil(this.destroy$)).subscribe(async (event: Event) => {
      if (this.disabled) {
        if (this.modal) {
          this.modal.dismiss().then();
        }
        if (this.canContinue) {
          this.canContinue = false;
        }
        return;
      }
      if (!this.canContinue && !this.modal) {
        this.asking.emit(true);
        this.canContinue = false;
        event.stopImmediatePropagation();
        this.modal = await this.create();
        await this.modal.present();
        this.modal.onWillDismiss().then(value => {
          if (value.data.continue) {
            // console.log('fffffffffff');
            this.canContinue = true;
            this.continue.emit(true);
            (el.nativeElement as HTMLButtonElement).click();
          }
        }).finally(() => {
          this.modal = null;
        });
      }
      if (this.canContinue) {
        this.canContinue = false;
      }
    });
  }

  async create() {
    return await this.modalCtrl.create({
      component: PromtAlertComponent,
      keyboardClose: false,
      componentProps: {
        timeout: this.timeout,
        continueText: this.continueText,
        cancelText: this.cancelText,
        title: this.title,
        description: this.description,
        confirmerAvant: this.confirmerAvant

      },
      showBackdrop: true,
      cssClass: 'modal-error promt-alert',
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
  }

}
