import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {ProvideThisValueAccessor} from '../../base-control-value-accessor';
import {ControlValueAccessor} from '@angular/forms';
import {IonRouterOutlet, ModalController} from '@ionic/angular';
import {DatePickerComponent} from '../date-picker.component';
import {CustomIonInputComponent} from '../../custom-ion-input/custom-ion-input.component';
import {TimeService} from '../../../core/time.service';
import {ComponentType} from '@angular/cdk/overlay';
import {MatCalendarCellClassFunction, MatCalendarView} from '@angular/material/datepicker';
import {DialogPickerBase} from '../../dialog-picker-base';
import {IonicDialogService} from "../../ionic-dialog.service";

@Component({
  selector: 'app-date-picker-input',
  templateUrl: './date-picker-input.component.html',
  styleUrls: ['./date-picker-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    ProvideThisValueAccessor(DatePickerInputComponent)
  ]
})
export class DatePickerInputComponent extends DialogPickerBase<Date, DatePickerComponent> implements OnInit, ControlValueAccessor, AfterViewInit {

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    _modalController: ModalController,
    ionicDialogService: IonicDialogService,
    private timeService: TimeService
  ) {
    super(changeDetectorRef, _modalController, ionicDialogService, DatePickerComponent);
  }

  @Input()
  title = 'ng-calendar-demo';
  @Input()
  valueFormat;
  @Input()
  valueDisplayFormat = 'YYYY MMMM  ddd DD HH:mm:ss';
  @Input()
  displayFormat = 'YYYY MMMM  ddd DD HH:mm:ss';

  @Input()
  @Input() set selectedDate(selectedDate: string) {
    this._selectedDate = new Date(selectedDate);
  }

  _selectedDate = null;

  @Input() set startAt(startAt: string) {
    this._startAt = new Date(startAt);
  }

  _startAt = new Date('1900/01/01');


  @Input()
  set minDate(minDate: string) {
    this._minDate = new Date(minDate);
  }

  _minDate = new Date('1900/01/01');

  @Input() set maxDate(maxDate: string) {
    this._maxDate = new Date(maxDate);
  }

  _maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));

  @ViewChild(CustomIonInputComponent) customIonInputComponent: CustomIonInputComponent<Date>;

  public _modal: HTMLIonModalElement;

  @Input()
  panelClass: any;

  @Input() startView: 'month' | 'year' | 'multi-year' = 'month';

  @Input() dateClass: MatCalendarCellClassFunction<any>;

  @Input() calendarHeaderComponent: ComponentType<any>;

  /**
   * Emits selected year in multiyear view.
   * This doesn't imply a change on the selected date.
   */
  @Output() readonly yearSelected: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Emits selected month in year view.
   * This doesn't imply a change on the selected date.
   */
  @Output() readonly monthSelected: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Emits when the current view changes.
   */
  @Output() readonly viewChanged: EventEmitter<MatCalendarView> =
    new EventEmitter<MatCalendarView>(true);


  /** Start of the comparison range. */
  comparisonStart: any | null;

  /** End of the comparison range. */
  comparisonEnd: any | null;


  @Input()
  display = (value: Date, display?: string) => {
    if (!value) {
      return null;
    }
    return this.timeService.format(value, display);
  }

  /** Emits the selected year in multiyear view */
  _selectYear(normalizedYear: any): void {
    this.yearSelected.emit(normalizedYear);
  }

  /** Emits selected month in year view */
  _selectMonth(normalizedMonth: any): void {
    this.monthSelected.emit(normalizedMonth);
  }

  /** Emits changed view */
  _viewChanged(view: MatCalendarView): void {
    this.viewChanged.emit(view);
  }

  onSelect(event: Date) {
    this._selectedDate = event;
    this.value = event;
  }

  myDateFilter = (d: Date): boolean => {
    // const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    // return day !== 0 && day !== 6;
    return true;
  }

  ngOnInit(): void {
    //
  }


  ngAfterViewInit(): void {
    this.onSelect(this._selectedDate);
  }


}
