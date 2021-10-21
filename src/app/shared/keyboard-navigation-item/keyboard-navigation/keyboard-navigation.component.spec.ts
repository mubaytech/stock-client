import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KeyboardNavigationComponent } from './keyboard-navigation.component';

describe('KeyboardNavigationComponent', () => {
  let component: KeyboardNavigationComponent;
  let fixture: ComponentFixture<KeyboardNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyboardNavigationComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KeyboardNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
