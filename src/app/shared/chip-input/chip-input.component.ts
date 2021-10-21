import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, ContentChild,
  HostBinding,
  OnInit
} from '@angular/core';
import {BaseControlValueAccessor, ProvideThisValueAccessor} from '../base-control-value-accessor';
import {IFormGroup} from '@rxweb/types';
import {ChipInputForm} from './chip-input-form';
import {of} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {FormService} from '../../core/form/form.service';
import {ChipInputFieldComponent} from './chip-input-field/chip-input-field.component';
import {ChipInputItemComponent} from './chip-input-item/chip-input-item.component';

@Component({
  selector: 'app-chip-input',
  templateUrl: './chip-input.component.html',
  styleUrls: ['./chip-input.component.scss'],
  providers: [
    ProvideThisValueAccessor(ChipInputComponent)
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChipInputComponent<T> extends BaseControlValueAccessor<Array<T>> implements OnInit {

  @HostBinding('class.hasItem') get hasItem() {
    return this.items.length > 0;
  }

  @ContentChild(ChipInputFieldComponent) chipInputFieldComponent!: ChipInputFieldComponent;
  @ContentChild(ChipInputItemComponent) chipInputItemComponent!: ChipInputItemComponent;


  constructor(
    changeDetectorRef: ChangeDetectorRef,
    private formService: FormService
  ) {
    super(changeDetectorRef);
  }

  formGroup: IFormGroup<ChipInputForm<T>>;
  items: Array<T> = [];

  ngOnInit() {
    this.formGroup =
      this.formService.formBuilder.group<ChipInputForm<T>>({
        item: [
          null,
        ]
      }) as IFormGroup<ChipInputForm<T>>;
  }

  addItem(item) {
    if (typeof item === 'string') {
      item = (item as string).trim();
    }
    if (!item || (typeof item === 'string' && item.length === 0)) {
      return;
    }

    // of(item).pipe(takeUntil(this.onDestroy$), debounceTime(0)).subscribe(value => {
    //   this.items.push(item);
    //   this.changeDetectorRef.markForCheck();
    // });
    this.items = [...this.items, this.item];
    this.item = null;
    this.value = this.items;
    this.changeDetectorRef.markForCheck();

    //

  }

  removeItem(i) {
    if (this.items.length) {
      this.items.splice(i, 1);
      of(null).pipe(takeUntil(this.onDestroy$), debounceTime(0)).subscribe(value => {
        this.value = [...this.items]
      });
    }
    this.changeDetectorRef.markForCheck();


  }

  removeLast() {
    if ((((this.item || '') as any)?.length === 0) && this.hasItem) {
      this.removeItem(this.items.length - 1);
    }
  }

  removeAll() {
    this.items = [];
    of(null).pipe(takeUntil(this.onDestroy$), debounceTime(0)).subscribe(value => {
      this.value = [...this.items]
    });
    this.changeDetectorRef.markForCheck();
  }

  set item(item: T) {
    this.formGroup.controls.item.setValue(item);
  }

  get item() {
    return this.formGroup.controls.item.value;
  }

  writeValue(obj: Array<T>) {
    super.writeValue(obj);
    this.items = obj || [];
    this.changeDetectorRef.markForCheck()
  }

}
