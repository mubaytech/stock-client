import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtilisateurItemComponent } from './utilisateur-item.component';

describe('UtilisateurItemComponent', () => {
  let component: UtilisateurItemComponent;
  let fixture: ComponentFixture<UtilisateurItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtilisateurItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
