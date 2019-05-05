import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmwooPaymentButtonComponent } from './dmwoo-payment-button.component';

describe('ChatMessageFileUploadComponent', () => {
  let component: DmwooPaymentButtonComponent;
  let fixture: ComponentFixture<DmwooPaymentButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmwooPaymentButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmwooPaymentButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
