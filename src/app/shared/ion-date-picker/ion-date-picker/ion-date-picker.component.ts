import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  forwardRef,
  Input,
  OnInit,
  ViewChild
} from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALIDATORS
} from '@angular/forms';
import {
  BaseControlValueAccessor,
  ProvideThisValueAccessor
} from '../../base-control-value-accessor';
import {moment, TimeService} from '../../../core/time.service';
import {maskIntance, maskOptions} from '../../mask/mask.directive';
import {timer} from 'rxjs';
import {IonDatetime, IonInput} from '@ionic/angular';
import {AnimationBuilder, Mode} from "@ionic/core";

@Component({
  selector: 'app-ion-date-picker',
  templateUrl: './ion-date-picker.component.html',
  styleUrls: ['./ion-date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProvideThisValueAccessor(IonDatePickerComponent),
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => IonDatePickerComponent),
      multi: true
    }
  ]
})
export class IonDatePickerComponent extends BaseControlValueAccessor<string>
  implements OnInit, AfterViewInit, ControlValueAccessor {
  maskOptions: maskOptions;

  @Input() type = 'datetime';
  @Input() format = 'DD/MM/YYYY';
  @Input() pickerFormat = 'DD MMM YYYY';
  @Input() now = false;
  ionInputValue = null;
  maskInstance: maskIntance;
  @ViewChild(IonInput) ionInput: IonInput;
  @ViewChild(IonDatetime) ionDatetime: IonDatetime;
  hasFocus;
  private ngControl: any;
  pickerOptions: { columns?: PickerColumn[] | undefined; buttons?: PickerButton[] | undefined; cssClass?: string | string[] | undefined; showBackdrop?: boolean | undefined; backdropDismiss?: boolean | undefined; animated?: boolean | undefined; mode?: Mode | undefined; keyboardClose?: boolean | undefined; id?: string | undefined; enterAnimation?: AnimationBuilder | undefined; leaveAnimation?: AnimationBuilder | undefined; } = {
    // buttons:[
    //   {
    //     text:'test'
    //   },
    //   {
    //     text:'test'
    //   },
    //   {
    //     text:'test'
    //   },
    //   {
    //     text:'test'
    //   }
    // ],

  };

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    public timeService: TimeService
  ) {
    super(changeDetectorRef);
  }

  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    timer(50).pipe(this.takeUntil).subscribe(_ => {

      if (this.now && this.isEmpty(this.value)) {
        // console.log(!this.isEmpty(this.value));
        const date = this.timeService.now();
        this.ionInputValue = date.format(this.format);
        this.value = date.format();
      }
    })
  }

  ngOnInit() {
    this.onValueChange.asObservable().pipe(
      this.takeUntil
    ).subscribe(value => {
      if (value) {
        this.ionInputValue = this.timeService.format(this.val, this.format);
      } else {
        if (!this.hasFocus) {
          this.ionInputValue = null;
        }
      }
    });
    this.maskOptions = {
      alias: this.type,
      // format: this.format,
      // jitMasking: true,
      // inputType: 'text',
      inputFormat: this.format.toLowerCase(),
      autoUnmask: false,
      onincomplete: () => {
      }
    } as maskOptions;
  }

  validate(control: FormControl): { [key: string]: any } | null {
    // alert(this.ionInput?.value)
    if (control.value) {
      return moment(this.value).isValid() ? null : {pattern: true};
    }
    return null;
  }

  checkDiff(value: string) {
    return value !== undefined && this.val !== value;
  }

  log() {
    // console.log(this.val)
  }

  onInput(value: string | number) {
    this.value = this.maskInstance?.isValid()
      ? this.timeService.format(value, null, this.format)
      : null;
  }

  onBlur($event: any) {

    if (!this.hasFocus) {
      this.value = $event.detail.value;
    }

  }

  writeValue(obj: string) {
    super.writeValue(obj);
    if (!obj) {
      this.ionInputValue = null;
    } else {
      this.ionInputValue = this.timeService.format(obj, this.format);
    }
  }
}

export interface PickerButton {
  text?: string;
  role?: string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void;
}

export interface PickerOptions {
  columns: PickerColumn[];
  buttons?: PickerButton[];
  cssClass?: string | string[];
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  animated?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}

export interface PickerColumnOption {
  text?: string;
  value?: any;
  disabled?: boolean;
  duration?: number;
  transform?: string;
  selected?: boolean;
}

export interface PickerColumn {
  name: string;
  align?: string;
  selectedIndex?: number;
  prevSelected?: number;
  prefix?: string;
  suffix?: string;
  options: PickerColumnOption[];
  cssClass?: string | string[];
  columnWidth?: string;
  prefixWidth?: string;
  suffixWidth?: string;
  optionsWidth?: string;
  refresh?: () => void;
}
