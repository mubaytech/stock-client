import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter, forwardRef, Injector,
  Input,
  OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import {FormControl, NG_VALIDATORS, NgControl, Validator} from '@angular/forms';
import {IonInput} from '@ionic/angular';
import {AppOnDestroy} from '../../core/types';
import Inputmask from 'inputmask';
import Instance = Inputmask.Instance;
import Options = Inputmask.Options;
import {AutofillMonitor} from '@angular/cdk/text-field';
import {takeUntil} from 'rxjs/operators';

export const InputMask = Inputmask;
export type maskOptions = {} & Options;
export type maskIntance = {} & Instance;

InputMask.extendAliases({

  "datetime": {
    i18n: {
      dayNames: [
        "lun", "mar", "mer", "jeu", "ven", "sam", "dim",
        "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"
      ],
      monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "janvier", "fevrier", "mars", "avril", "mais", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "décembre"
      ],
      ordinalSuffix: ["st", "nd", "rd", "th"]
    },

  } as ({
    i18n: any
  } & maskOptions)
});

@Directive({
  selector: '[appMask]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: forwardRef(() => MaskDirective), multi: true},
  ]
})
export class MaskDirective extends AppOnDestroy implements AfterViewInit, OnInit, OnDestroy, Validator {

  @Input('maskInstance') instance: Instance;
  @Output('maskInstanceChange') instanceChange = new EventEmitter<Instance>();

  control?: NgControl;

  private input: HTMLInputElement;


  @Input() set appMask(mask: string | Array<string> | RegExp) {
    if (mask) {
      this.mask = mask;
      this.maskOptions = (mask instanceof RegExp) ? {
        regex: MaskDirective.regexToString(mask)
      } : {mask};
    }
  }


  @Input() set maskOptions(options: Options) {
    this.options = {
      ...this.options,
      ...options
    };
    if (this.instance) {
      this.instance.option({
        ...this.options
      });
    }
  }

  @Input() set autoUnmask(autoUnmask: boolean) {
    this.maskOptions = {autoUnmask};
  }

  @Input('requiredMaskWithValue')
  required: boolean;

  constructor(
    private _injector: Injector,
    public el: ElementRef<HTMLElement>, public renderer: Renderer2,
    private _autofill: AutofillMonitor,
  ) {
    super();

  }

  options: Options = {
    autoUnmask: true,
    // clearIncomplete: true,
    onincomplete: () => {
      if (this.options.clearIncomplete && (this.control?.control.value as string)?.length) {
        this.control?.control.setValue(null);
      }

    },
    // oncomplete: () => {
    //
    // }
  };

  mask: string | Array<string> | RegExp;

  private registerTextMask(inputElement: HTMLInputElement) {
    this.unRegisterAutoFill();
    this.input = inputElement;
    this.instance = Inputmask({
      ...this.options,
    }).mask(inputElement);
    this.instanceChange.emit(this.instance);
    this.registerAutoFill();
  }

  public static regexToString(regex) {
    const str = (regex as RegExp).toString();
    return str.split('').map((v, i) => {
      if (i === 0 || i === str.length - 1) {
        return '';
      }
      return v;
    }).join('');
  }

  ngAfterViewInit(): void {
    try {
      this.control = this._injector.get(NgControl);
    } catch (e) {

    }
    const input = this.el.nativeElement;
    if ((input as any).getInputElement) {
      (this.el.nativeElement as unknown as IonInput).getInputElement().then(value => this.registerTextMask(value));
      return;
    }

    this.registerTextMask(input as HTMLInputElement);
  }

  ngOnInit(): void {

  }

  registerAutoFill() {
    this._autofill.monitor(this.input)
      .pipe(takeUntil(this.onDestroy$)).subscribe(e => {
      // this.maskOptions = {};
      this.control?.control.setValue(this.input.value);
    });
  }

  unRegisterAutoFill() {
    if (this.input) {
      this._autofill.stopMonitoring(this.input);
    }
  }

  ngOnDestroy(): void {
    super.ngOnDestroy();
    // this.inputMask
    this.unRegisterAutoFill();
    this.instance.remove();
  }

  validate(control: FormControl): { [key: string]: any } | null {
    // console.log(typeof (control.value))

    if (control.value === "0,00" || control.value === "0.00" || control.value === "0") {
      if (this.required) {
        return {required: true};
      }
    }
    if (this.instance && control.value?.length && control.value !== "0") {
      return this.instance?.isValid()
        ? null
        : {pattern: true};
    }
    return null;
  }
}


