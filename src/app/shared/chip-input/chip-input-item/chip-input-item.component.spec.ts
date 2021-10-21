import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChipInputItemComponent } from './chip-input-item.component';

describe('ChipInputItemComponent', () => {
  let component: ChipInputItemComponent;
  let fixture: ComponentFixture<ChipInputItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChipInputItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChipInputItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
