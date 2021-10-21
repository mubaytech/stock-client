import { TestBed } from '@angular/core/testing';

import { IonicDialogService } from './ionic-dialog.service';

describe('IonicDialogService', () => {
  let service: IonicDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
