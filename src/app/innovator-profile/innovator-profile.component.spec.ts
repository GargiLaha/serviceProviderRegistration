import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovatorProfileComponent } from './innovator-profile.component';

describe('InnovatorProfileComponent', () => {
  let component: InnovatorProfileComponent;
  let fixture: ComponentFixture<InnovatorProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovatorProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovatorProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
