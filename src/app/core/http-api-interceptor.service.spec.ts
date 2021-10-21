import { TestBed } from '@angular/core/testing';

import { HttpApiInterceptorService } from './http-api-interceptor.service';

describe('HttpApiInterceptorService', () => {
  let service: HttpApiInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpApiInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
