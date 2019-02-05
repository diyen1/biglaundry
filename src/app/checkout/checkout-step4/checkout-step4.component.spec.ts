import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutStep4Component } from './checkout-step4.component';

describe('CheckoutStep4Component', () => {
  let component: CheckoutStep4Component;
  let fixture: ComponentFixture<CheckoutStep4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckoutStep4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutStep4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
