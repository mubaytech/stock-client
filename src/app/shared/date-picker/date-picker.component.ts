import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild
} from '@angular/core';
import {DatePickerInputComponent} from './date-picker-input/date-picker-input.component';
import {NavParams} from '@ionic/angular';
import {CoreService} from '../../core/core.service';
import {MatCalendar,} from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DatePickerComponent implements OnInit, AfterViewInit {

  @ViewChild(MatCalendar) _calendar: MatCalendar<any>;
  public pickerInputComponent: DatePickerInputComponent;

  constructor(
    private navParams: NavParams,
    public _element: ElementRef,
    public changeDetectorRef: ChangeDetectorRef,
    public coreService: CoreService,
  ) {
    this.pickerInputComponent = this.navParams.get('selectComponent');
  }

  ngOnInit() {
    // If we have actions, clone the model so that we have the ability to cancel the selection,
    // otherwise update the global model directly. Note that we want to assign this as soon as
    // possible, but `_actionsPortal` isn't available in the constructor so we do it in `ngOnInit`.
  }

  ngAfterViewInit() {
    /*this._subscriptions.add(this.pickerInputComponent.onChange().subscribe(() => {
        this._changeDetectorRef.markForCheck();
    }));*/
    this._calendar.focusActiveCell();
  }
}
