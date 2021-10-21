import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategorieInputComponent } from './categorie-input.component';

describe('CategorieInputComponent', () => {
  let component: CategorieInputComponent;
  let fixture: ComponentFixture<CategorieInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategorieInputComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategorieInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
