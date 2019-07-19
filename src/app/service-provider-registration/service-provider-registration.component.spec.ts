import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceProviderRegistrationComponent } from './service-provider-registration.component';

describe('ServiceProviderRegistrationComponent', () => {
  let component: ServiceProviderRegistrationComponent;
  let fixture: ComponentFixture<ServiceProviderRegistrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceProviderRegistrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceProviderRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
