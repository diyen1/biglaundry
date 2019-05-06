import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmwooNotificationComponent } from './dmwoo-notification.component';

describe('ChatMessageFileUploadComponent', () => {
  let component: DmwooNotificationComponent;
  let fixture: ComponentFixture<DmwooNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmwooNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmwooNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
