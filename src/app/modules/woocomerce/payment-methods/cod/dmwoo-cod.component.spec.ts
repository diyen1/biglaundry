import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmwooCodComponent } from './dmwoo-cod.component';

describe('ChatMessageFileUploadComponent', () => {
  let component: DmwooCodComponent;
  let fixture: ComponentFixture<DmwooCodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmwooCodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmwooCodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
