import { TestBed } from '@angular/core/testing';

import { GraphqlPaginationService } from './graphql-pagination.service';

describe('GraphqlPaginationService', () => {
  let service: GraphqlPaginationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlPaginationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
