import { TestBed } from '@angular/core/testing';

import { Frequency } from './frequency.service';

describe('Frequency', () => {
  let service: Frequency;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Frequency);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
