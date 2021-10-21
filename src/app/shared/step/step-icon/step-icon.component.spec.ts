import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepIconComponent } from './step-icon.component';

describe('StepIconComponent', () => {
  let component: StepIconComponent;
  let fixture: ComponentFixture<StepIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepIconComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
