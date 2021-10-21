import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NationalitePickerComponent } from './nationalite-picker.component';

describe('NationalitePickerComponent', () => {
  let component: NationalitePickerComponent;
  let fixture: ComponentFixture<NationalitePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalitePickerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NationalitePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
