import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChipInputFieldComponent } from './chip-input-field.component';

describe('ChipInputFieldComponent', () => {
  let component: ChipInputFieldComponent;
  let fixture: ComponentFixture<ChipInputFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipInputFieldComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChipInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
