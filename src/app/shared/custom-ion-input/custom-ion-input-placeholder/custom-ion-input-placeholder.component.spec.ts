import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomIonInputPlaceholderComponent } from './custom-ion-input-placeholder.component';

describe('CustomIonInputPlaceholderComponent', () => {
  let component: CustomIonInputPlaceholderComponent;
  let fixture: ComponentFixture<CustomIonInputPlaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomIonInputPlaceholderComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomIonInputPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
