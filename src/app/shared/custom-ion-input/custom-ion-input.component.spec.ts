import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomIonInputComponent } from './custom-ion-input.component';

describe('CustomIonInputComponent', () => {
  let component: CustomIonInputComponent;
  let fixture: ComponentFixture<CustomIonInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomIonInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomIonInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
