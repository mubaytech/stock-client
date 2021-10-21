import {AppOnDestroy} from '../core/types';
import {ChangeDetectorRef, Directive, EventEmitter, forwardRef, Input, Output} from '@angular/core';
import {BehaviorSubject, combineLatest, from, Observable, of, timer} from 'rxjs';
import {
  delay,
  takeUntil,
  distinctUntilChanged,
  filter,
  switchMap,
  take,
  map,
  distinctUntilKeyChanged
} from 'rxjs/operators';
import {IControlValueAccessor} from '@rxweb/types';
import {
  AbstractControl,
  AsyncValidator,
  NG_ASYNC_VALIDATORS,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors
} from '@angular/forms';

@Directive({
  selector: ''
})
export class BaseControlValueAccessor<T> extends AppOnDestroy
  implements IControlValueAccessor<T>, AsyncValidator {

  // public readonly valueChange: EventEmitter<T> = new EventEmiter<T>();

  protected isEmpty: (v: T) => boolean = (value) => {
    return (value as any) === '' || (typeof value === "undefined") || value === null;
  };

  @Input() set label(label: any) {
    this._label = label;
  }

  @Input() isEmptyFn(fn: (v: T) => boolean) {
    this.isEmpty = fn;
  }

  get label() {
    return this._label;
  }

  get loading() {
    return this.$loading.getValue();
  }

  @Input()
  set loading(l: boolean) {
    this.$loading.next(l);
  }

  get find() {
    return this._find.getValue();
  }

  @Input()
  set find(f: string) {
    this._find.next(f);
  }

  @Input() set placeholder(value: string) {
    this._placeholder = value;
  }

  get placeholder() {
    return this._placeholder;
  }

  set originalValue(value: T) {
    this._originalValue.next(value);
  }

  get originalValue() {
    return this._originalValue.getValue();
  }


  _label: string;
  _placeholder: string;

  @Input()
  set value(value: T | null) {
    if (this.checkDiff(value)) {
      // console.log(value);
      this.val = value;
      this.onChange(value);
      this.onValueChange.emit(value);
      timer(50)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(() => {
          this.changeDetectorRef.markForCheck();
        });
    }
  }

  get value() {
    return this.val;
  }


  @Input()
  set validator(validator: { [key: string]: Promise<ValidationErrors> | Observable<ValidationErrors> | any }) {
    for (let key in Object.keys(validator)) {
      if (this.validators[key] === null || this.validators[key]) {
        delete this.validators[key];
      } else {
        this.validators = {...this.validators, ...validator}
      }
    }
    this.onValidatorChange && this.onValidatorChange()
  }

  set _value(value: T | null) {
    if (this.checkDiff(value)) {
      // console.log(value);
      this.val = value;
      timer(50)
        .pipe(takeUntil(this.onDestroy$))
        .subscribe(() => {
          this.changeDetectorRef.markForCheck();
        });
    }
  }


  constructor(protected changeDetectorRef: ChangeDetectorRef) {
    super();
    // this.onBeforeWriteValue = new BehaviorSubject(this.val);
    // this.onWriteValue = new BehaviorSubject(this.val);
    this.isLoading.pipe(this.takeUntil).subscribe(_ => this.onValidatorChange && this.onValidatorChange())
    this.$isDisabled.pipe(this.takeUntil, distinctUntilChanged()).subscribe(_ => {
      this.onValidatorChange && this.onValidatorChange();
    })
  }

  val: T;


  $isDisabled = new BehaviorSubject<boolean>(false);

  @Input()
  isReadonly = false;

  @Input()
  isMultiple = false;

  @Input()
  disabledItems: Array<T> = [];

  @Input() setCurrent = true;

  @Input() size: 'small' | 'large' = 'large';

  @Input() clearInput: boolean;

  @Input() needOrignalValue = true;

  @Input() maxVisibleOnMultiple = 1;

  @Input() maxSelectable;


  private $loading = new BehaviorSubject<boolean>(false);

  private _originalValue = new BehaviorSubject<T>(null);

  protected _find = new BehaviorSubject<string>(null);

  onOriginalValue = this._originalValue.asObservable().pipe(distinctUntilChanged(), filter(v => (typeof v !== "undefined")));

  onFind = this._find.asObservable().pipe(distinctUntilChanged(), filter(v => (!!v && (v.length > 0))));

  isLoading = this.$loading.asObservable().pipe(distinctUntilChanged());

  @Output()
  onBeforeWriteValue: EventEmitter<T> = new EventEmitter();

  @Output()
  onWriteValue: EventEmitter<T> = new EventEmitter();

  @Output()
  onValueChange: EventEmitter<T> = new EventEmitter();

  protected onValidatorChange: () => void;

  validators: { [key: string]: Promise<ValidationErrors> | Observable<ValidationErrors> | any } = {
    'loading': from(this.isLoading).pipe(switchMap(value => {
      if (!value) {
        return of(null)
      } else {
        return of(value).pipe(filter(v => !v));
      }
    }))
  };


  checkDiff(value: T) {
    return value !== undefined && this.val !== value;
  }

  onChange: (value: any) => void = () => {
    //
  };

  onTouched: (value?: any) => void = () => {
    //
  };

  registerOnChange(fn: (value: T) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.$isDisabled.next(!!isDisabled)
  }

  writeValue(obj: T): void {
    this.onBeforeWriteValue.next(obj);
    this._value = obj;
    this.onWriteValue.next(obj);
  }

  valueChange(val) {
    // console.log(val)
    this.onChange(val);
    this.onTouched();
    this.onWriteValue.next(val);
    this.onValueChange.emit(val);
  }

  valueChangeWithoutTouched(val) {
    this.onChange(val);
    this.onWriteValue.next(val);
    this.onValueChange.emit(val);
  }


  validate(control: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> | any {
    return combineLatest(Object.keys(this.validators).map(v => this.validators[v])).pipe(
      map(validators => {
        for (const invalid of validators) {
          if (invalid) {
            return invalid;
          }
        }
        return null;
      }),
      take(1)
    )


  }

  registerOnValidatorChange?(fn: () => void): void {
    this.onValidatorChange = fn;
  }


}

export function ProvideThisValueAccessor(
  valueAccessor: any
) /*: ExistingProvider*/ {
  return {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => valueAccessor),
    multi: true
  };
}

export function ProvideThisAsyncValisator(
  asyncvalidator: any
) /*: ExistingProvider*/ {
  return {
    provide: NG_ASYNC_VALIDATORS,
    useExisting: forwardRef(() => asyncvalidator),
    multi: true
  };
}

export function ProvideThisValisator(
  validator: any
) /*: ExistingProvider*/ {
  return {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => validator),
    multi: true
  };
}
