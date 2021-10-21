import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StepTextComponent } from './step-text.component';

describe('StepTextComponent', () => {
  let component: StepTextComponent;
  let fixture: ComponentFixture<StepTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepTextComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StepTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
