import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmwooOmComponent } from './dmwoo-om.component';

describe('ChatMessageFileUploadComponent', () => {
  let component: DmwooOmComponent;
  let fixture: ComponentFixture<DmwooOmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmwooOmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmwooOmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
