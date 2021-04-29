import { TestBed } from '@angular/core/testing';

import { MemoryTestApiService } from './memory-test-api.service';

describe('MemoryTestApiService', () => {
  let service: MemoryTestApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryTestApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
