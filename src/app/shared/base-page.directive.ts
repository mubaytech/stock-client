import {Directive, EventEmitter, HostBinding, Input, Optional, Output} from "@angular/core";
import {AppOnDestroy} from "../core/types";
import {NavParams} from "@ionic/angular";
import {ModalBaseService} from "./modal-base/modal-base.service";
import {tuiPure} from "@taiga-ui/cdk";
import {BehaviorSubject} from "rxjs";
import {Matiere} from "../../generated/types.graphql-gen";
import {filter} from "rxjs/operators";


@Directive({
  selector: ""
})
export class BasePageDirective<T> extends AppOnDestroy {

  @Output()
  onClose: EventEmitter<T> = new EventEmitter<T>();

  @Output()
  onSave: EventEmitter<T> = new EventEmitter<T>();


  @Input()
  forceDialogMode: boolean;

  @tuiPure
  get dialogMode() {
    return !!this.modalBaseService || this.forceDialogMode
  }

  @HostBinding('class.page-dialog-mode')
  get dialogModeClass() {
    return this.dialogMode
  }

  @Input() set edit(td: T) {
    this.$edit.next(td);
  }

  public $edit = new BehaviorSubject<T>(null);

  public $loading = new BehaviorSubject<boolean>(false);

  item: T;

  constructor(
    protected navParams: NavParams,
    protected modalBaseService: ModalBaseService,
  ) {
    super();
    // console.log(this.modalBaseService)
    this.onClose.asObservable().pipe(
      this.takeUntil,
      filter(_ => !!(this.modalBaseService)),
    ).subscribe(_ => {
      this.modalBaseService.dismiss()
    })
  }

}
