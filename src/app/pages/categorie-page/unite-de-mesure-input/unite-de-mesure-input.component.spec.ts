import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UniteDeMesureInputComponent } from './unite-de-mesure-input.component';

describe('UniteDeMesureInputComponent', () => {
  let component: UniteDeMesureInputComponent;
  let fixture: ComponentFixture<UniteDeMesureInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteDeMesureInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UniteDeMesureInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
