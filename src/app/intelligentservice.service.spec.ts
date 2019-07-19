import { TestBed } from '@angular/core/testing';

import { IntelligentserviceService } from './intelligentservice.service';

describe('IntelligentserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IntelligentserviceService = TestBed.get(IntelligentserviceService);
    expect(service).toBeTruthy();
  });
});
