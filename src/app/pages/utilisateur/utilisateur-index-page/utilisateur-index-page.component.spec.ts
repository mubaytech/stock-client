import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtilisateurIndexPageComponent } from './utilisateur-index-page.component';

describe('UtilisateurIndexPageComponent', () => {
  let component: UtilisateurIndexPageComponent;
  let fixture: ComponentFixture<UtilisateurIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurIndexPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtilisateurIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
