import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostIdeaComponent } from './post-idea.component';

describe('PostIdeaComponent', () => {
  let component: PostIdeaComponent;
  let fixture: ComponentFixture<PostIdeaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostIdeaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostIdeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
