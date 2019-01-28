import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCreateMultistepComponent } from './crud-create-multistep.component';

describe('CrudReadSingleComponent', () => {
  let component: CrudCreateMultistepComponent;
  let fixture: ComponentFixture<CrudCreateMultistepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCreateMultistepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCreateMultistepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
