import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmwooPaymentOptionsComponent } from './dmwoo-payment-options.component';

describe('ChatMessageFileUploadComponent', () => {
  let component: DmwooPaymentOptionsComponent;
  let fixture: ComponentFixture<DmwooPaymentOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmwooPaymentOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmwooPaymentOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
