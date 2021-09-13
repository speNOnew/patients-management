import { TestBed } from '@angular/core/testing';

import { CitesService } from './cites.service';

describe('CitesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CitesService = TestBed.get(CitesService);
    expect(service).toBeTruthy();
  });
});
