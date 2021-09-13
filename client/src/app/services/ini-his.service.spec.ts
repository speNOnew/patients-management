import { TestBed } from '@angular/core/testing';

import { IniHisService } from './ini-his.service';

describe('IniHisService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IniHisService = TestBed.get(IniHisService);
    expect(service).toBeTruthy();
  });
});
