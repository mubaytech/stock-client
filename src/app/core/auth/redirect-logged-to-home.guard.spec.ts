import { TestBed } from '@angular/core/testing';

import { RedirectLoggedToHomeGuard } from './redirect-logged-to-home.guard';

describe('RedirectLoggedToHomeGuard', () => {
  let guard: RedirectLoggedToHomeGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RedirectLoggedToHomeGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
