import { TestBed } from '@angular/core/testing';

import { ManagerOnlyGuard } from './manager-only.guard';

describe('ManagerOnlyGuard', () => {
  let guard: ManagerOnlyGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ManagerOnlyGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
