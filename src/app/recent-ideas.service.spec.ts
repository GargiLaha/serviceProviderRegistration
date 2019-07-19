import { TestBed } from '@angular/core/testing';

import { RecentIdeasService } from './recent-ideas.service';

describe('RecentIdeasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecentIdeasService = TestBed.get(RecentIdeasService);
    expect(service).toBeTruthy();
  });
});
