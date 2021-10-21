import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PermissionPickerComponent } from './permission-picker.component';

describe('PermissionPickerComponent', () => {
  let component: PermissionPickerComponent;
  let fixture: ComponentFixture<PermissionPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermissionPickerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
