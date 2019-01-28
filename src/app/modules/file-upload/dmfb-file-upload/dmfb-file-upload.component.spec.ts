import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmfbFileUploadComponent } from './dmfb-file-upload.component';

describe('ChatMessageFileUploadComponent', () => {
  let component: DmfbFileUploadComponent;
  let fixture: ComponentFixture<DmfbFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmfbFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmfbFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
