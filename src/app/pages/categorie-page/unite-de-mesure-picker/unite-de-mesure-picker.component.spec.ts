import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UniteDeMesurePickerComponent } from './unite-de-mesure-picker.component';

describe('UniteDeMesurePickerComponent', () => {
  let component: UniteDeMesurePickerComponent;
  let fixture: ComponentFixture<UniteDeMesurePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteDeMesurePickerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UniteDeMesurePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
