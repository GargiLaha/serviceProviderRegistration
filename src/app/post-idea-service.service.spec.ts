import { TestBed } from '@angular/core/testing';

import { PostIdeaServiceService } from './post-idea-service.service';

describe('PostIdeaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostIdeaServiceService = TestBed.get(PostIdeaServiceService);
    expect(service).toBeTruthy();
  });
});
