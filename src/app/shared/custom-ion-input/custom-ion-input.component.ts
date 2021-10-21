import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  IterableDiffers,
  OnInit,
  Optional,
  Output,
  Renderer2,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import {BaseControlValueAccessor} from '../base-control-value-accessor';
import {IonItem, ModalController, Platform} from '@ionic/angular';
import {CoreService} from '../../core/core.service';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {timer} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {CustomIonInputValueComponent} from './custom-ion-input-value/custom-ion-input-value.component';
import {CustomIonInputIconComponent} from './custom-ion-input-icon/custom-ion-input-icon.component';
import {CustomIonInputPlaceholderComponent} from './custom-ion-input-placeholder/custom-ion-input-placeholder.component';


@Component({
  selector: 'app-custom-ion-input',
  templateUrl: './custom-ion-input.component.html',
  styleUrls: ['./custom-ion-input.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomIonInputComponent),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomIonInputComponent<T> extends BaseControlValueAccessor<T> implements OnInit {
  private $event: any;
  _isOpened: boolean;


  @HostBinding('class.custom-ion-input-has-value')
  get _hasValueCssClass(): boolean {
    return this.hasValue();
  }

  @HostBinding('class.custom-ion-input-has-placeholder')
  get _hasPlaceholderCssClass(): boolean {
    return this._hasPlaceholder;
  }

  @HostBinding('class.custom-ion-input-has-label')
  get _hasIonLabelCssClass(): boolean {
    return this._hasIonLabel;
  }

  @HostBinding('class.custom-ion-input-label-default')
  get _hasDefaultIonLabelCssClass(): boolean {
    return this._ionLabelPosition === 'default';
  }

  @HostBinding('class.custom-ion-input-label-fixed')
  get _hasFixedIonLabelCssClass(): boolean {
    return this._ionLabelPosition === 'fixed';
  }

  @HostBinding('class.custom-ion-input-label-stacked')
  get _hasStackedIonLabelCssClass(): boolean {
    return this._ionLabelPosition === 'stacked';
  }

  @HostBinding('class.custom-ion-input-label-floating')
  get _hasFloatingIonLabelCssClass(): boolean {
    return this._ionLabelPosition === 'floating';
  }


  get value(): any {
    return this.val;
  }

  set value(value) {

    if (this.checkDiff(value)) {
      super.value = value;
      // console.log(value)
      timer(10).pipe(takeUntil(this.onDestroy$)).subscribe(_ => {
        this._setIonItemHasValue();
        this._setHasPlaceholder();
      });
      this._emitValueChange();
      this.changeDetectorRef.markForCheck();
    }
  }
  @Input() set noFocusStyle(noFocusStyle: boolean) {
    this._setIonItemCssClass('no-focus-item', noFocusStyle);
  }
  @HostBinding('class.custom-ion-input-is-enabled')
  @Input('isEnabled')
  get isEnabled(): boolean {
    return this._isEnabled;
  }

  set isEnabled(isEnabled: boolean) {
    this._isEnabled = !!isEnabled;
    this.enableIonItem(this._isEnabled);
  }

  constructor(
    private $_modalController: ModalController,
    private _platform: Platform,
    @Optional() private ionItem: IonItem,
    private _iterableDiffers: IterableDiffers,
    private _element: ElementRef,
    private _renderer: Renderer2,
    changeDetectorRef: ChangeDetectorRef,
    public coreService: CoreService
  ) {

    super(changeDetectorRef);
  }

  @HostBinding('class.custom-ion-input')
  _cssClass = true;
  @HostBinding('class.custom-ion-input-ios')
  _isIos: boolean;
  @HostBinding('class.custom-ion-input-md')
  _isMD: boolean;
  private _isEnabled = true;
  private _ionItemElement: any;
  private _ionLabelElement: any;
  private _hasIonLabel = false;
  private _ionLabelPosition: 'fixed' | 'stacked' | 'floating' | 'default' | null = null;
  _hasPlaceholder: boolean;


  @Output()
  onOnChange: EventEmitter<{ component: CustomIonInputComponent<T>, value: T }> = new EventEmitter();

  @Input()
  hasIcon = true;

  get hasIconComponent() {
    return !!this.iconTemplate
  }

  @Input()
  hasButton = true;

  @Input()
  ionItemClass = '';



  @Output()
  onOpen: EventEmitter<{ component: CustomIonInputComponent<T> }> = new EventEmitter();

  @Output()
  onClose: EventEmitter<{ component: CustomIonInputComponent<T> }> = new EventEmitter();

  @ContentChild(CustomIonInputValueComponent)
  valueTemplate: TemplateRef<any>;
  @ContentChild(CustomIonInputIconComponent)
  iconTemplate: TemplateRef<any>;
  @ContentChild(CustomIonInputPlaceholderComponent)
  placeholderTemplate: TemplateRef<any>;

  enableIonItem(isEnabled: boolean) {
    if (!this.ionItem) {
      return;
    }

    this.ionItem.disabled = !isEnabled;
    // ;
  }

  _emitValueChange() {
    this.onOnChange.emit({
      component: this,
      value: this.value
    });


  }

  _click($event) {
    this.$event = $event;
    if (!this.isEnabled || this.isReadonly) {
      return;
    }

    this._label = this._getLabelText();

    this.onOpen.emit({
      component: this
    });

  }

  _close() {
    this.onClose.emit({
      component: this
    });

  }

  private _getLabelText(): string {
    return this._ionLabelElement ? this._ionLabelElement.textContent : null;
  }

  _setIonItemHasFocus(hasFocus: boolean) {
    if (!this.ionItem) {
      return;
    }

    // Apply focus CSS class for proper stylying of ion-item/ion-label.
    this._setIonItemCssClass('item-has-focus', hasFocus);
  }

  private _setIonItemHasValue() {
    if (!this.ionItem) {
      return;
    }
    // // console.log(this.hasValue());
    // Apply value CSS class for proper stylying of ion-item/ion-label.
    this._setIonItemCssClass('item-has-value', this.hasValue());

  }

  private _setHasPlaceholder() {
    this._hasPlaceholder = !!(!this.hasValue() &&
      (!CustomIonInputComponent._isNullOrWhiteSpace(this.placeholder) || this.placeholderTemplate));
    // ;

  }

  private _setIonItemCssClass(cssClass: string, shouldAdd: boolean) {
    if (!this._ionItemElement) {
      return;
    }

    // Change to Renderer2
    if (shouldAdd) {
      this._renderer.addClass(this._ionItemElement, cssClass);
    } else {
      this._renderer.removeClass(this._ionItemElement, cssClass);
    }
  }


  setDisabledState(isDisabled: boolean) {
    this.isEnabled = !isDisabled;
    // ;
    this.changeDetectorRef.markForCheck();
  }

  ngOnInit() {
    this._isIos = this._platform.is('ios');
    this._isMD = !this._isIos;

    if (this.ionItem) {
      this._ionItemElement = this._element.nativeElement.closest('ion-item');
      if (this.ionItemClass) {
        this._setIonItemCssClass(this.ionItemClass, true);
      }
      this._setIonItemCssClass('item-interactive', true);
      this._setIonItemCssClass('item-custom-ion-input', true);
      if (this._ionItemElement) {
        this._ionLabelElement = this._ionItemElement.querySelector('ion-label');

        if (this._ionLabelElement) {
          this._hasIonLabel = true;
          this._ionLabelPosition = this._ionLabelElement.getAttribute('position') || 'default';
        }
      }
    }
    this.enableIonItem(this.isEnabled);
  }

  /*ngDoCheck() {
      const itemsChanges = this.differ.diff(this.items);
      if (itemsChanges) {
          this.value = this.value;
      }
  }*/


  hasValue(): boolean {
    return !CustomIonInputComponent._isNullOrWhiteSpace(this.value);
  }

  static _isNullOrWhiteSpace(value: any): boolean {
    if (value === null || value === undefined) {
      return true;
    }
    return value.toString().replace(/\s/g, '').length < 1;
  }
}
