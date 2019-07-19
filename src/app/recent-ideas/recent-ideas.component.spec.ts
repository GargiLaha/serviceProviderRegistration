import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentIdeasComponent } from './recent-ideas.component';

describe('RecentIdeasComponent', () => {
  let component: RecentIdeasComponent;
  let fixture: ComponentFixture<RecentIdeasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentIdeasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentIdeasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
