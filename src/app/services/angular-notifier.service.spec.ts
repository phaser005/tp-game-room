import { TestBed } from '@angular/core/testing';

import { AngularNotifierService } from './angular-notifier.service';

describe('AngularNotifierService', () => {
  let service: AngularNotifierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularNotifierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
