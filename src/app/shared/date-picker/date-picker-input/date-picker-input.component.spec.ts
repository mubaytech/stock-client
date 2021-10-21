import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DatePickerInputComponent } from './date-picker-input.component';

describe('DatePickerInputComponent', () => {
  let component: DatePickerInputComponent;
  let fixture: ComponentFixture<DatePickerInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatePickerInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DatePickerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
