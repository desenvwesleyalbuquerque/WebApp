import { TestBed } from '@angular/core/testing';

import { LocalStorangeService } from './local-storange.service';

describe('LocalStorangeService', () => {
  let service: LocalStorangeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalStorangeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
