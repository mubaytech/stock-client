import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RolePickerComponent } from './role-picker.component';

describe('RolePickerComponent', () => {
  let component: RolePickerComponent;
  let fixture: ComponentFixture<RolePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RolePickerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RolePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
