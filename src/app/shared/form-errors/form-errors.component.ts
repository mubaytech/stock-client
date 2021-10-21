import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit
} from '@angular/core';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {FormValidationService} from '../../core/form/form-validation.service';
import {IAbstractControl} from '@rxweb/types/reactive-form/i-abstract-control';

@Component({
  selector: 'app-form-errors',
  templateUrl: './form-errors.component.html',
  styleUrls: ['./form-errors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class FormErrorsComponent implements OnInit, OnDestroy {

  @Input() control: IAbstractControl<any>;

  @Input() customMessage: { [key: string]: string } = {};

  @HostBinding('class.center')
  @Input()
  class = false;

  @Input() set color(color: string) {
    this._color = 'ion-color-' + color;
  }


  @Input() onChangeOnly = false;

  constructor(
    public formService: FormValidationService,
    private changeDetectorRef: ChangeDetectorRef,
  ) {

  }

  destroy$: Subject<any> = new Subject<any>();

  @HostBinding('class')
  _color = 'ion-color-danger';

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();

  }

  ngOnInit() {
    // alert('hi there')
    this.control.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      // console.log(this.control)
      this.changeDetectorRef.markForCheck();
    });
    this.control.parent.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.changeDetectorRef.markForCheck();
    });
    this.control.parent.parent?.statusChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      // console.log(this.control)
      this.changeDetectorRef.markForCheck();
    });
  }

  get dirty() {
    return this.control.dirty;
  }

  get invalid() {
    return this.control.invalid;
  }

  get pending() {
    return this.control.pending;
  }

  get touched() {
    return this.control.touched;
  }

  get errors() {
    return this.control.errors || {};
  }

  getErrors() {
    return Object.keys(this.control.errors || {});
  }
}




