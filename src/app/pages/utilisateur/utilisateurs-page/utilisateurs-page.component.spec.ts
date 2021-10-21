import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtilisateursPageComponent } from './utilisateurs-page.component';

describe('UtilisateursPageComponent', () => {
  let component: UtilisateursPageComponent;
  let fixture: ComponentFixture<UtilisateursPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateursPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtilisateursPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
