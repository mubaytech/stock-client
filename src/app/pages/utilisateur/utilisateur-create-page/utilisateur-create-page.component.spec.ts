import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UtilisateurCreatePageComponent } from './utilisateur-create-page.component';

describe('UtilisateurCreatePageComponent', () => {
  let component: UtilisateurCreatePageComponent;
  let fixture: ComponentFixture<UtilisateurCreatePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtilisateurCreatePageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UtilisateurCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
