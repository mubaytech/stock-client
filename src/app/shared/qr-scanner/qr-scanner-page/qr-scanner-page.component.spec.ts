import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrScannerPageComponent } from './qr-scanner-page.component';

describe('QrScannerPageComponent', () => {
  let component: QrScannerPageComponent;
  let fixture: ComponentFixture<QrScannerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrScannerPageComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrScannerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
