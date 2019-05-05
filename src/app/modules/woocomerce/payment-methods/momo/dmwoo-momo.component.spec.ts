import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DmwooMomoComponent } from './dmwoo-momo.component';

describe('ChatMessageFileUploadComponent', () => {
  let component: DmwooMomoComponent;
  let fixture: ComponentFixture<DmwooMomoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DmwooMomoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DmwooMomoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
