import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomIonInputValueComponent } from './custom-ion-input-value.component';

describe('CustomIonInputValueComponent', () => {
  let component: CustomIonInputValueComponent;
  let fixture: ComponentFixture<CustomIonInputValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomIonInputValueComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomIonInputValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
