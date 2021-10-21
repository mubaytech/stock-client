import { TestBed } from '@angular/core/testing';

import { HasBackdropGuard } from './has-backdrop.guard';

describe('HasBackdropGuard', () => {
  let guard: HasBackdropGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(HasBackdropGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
