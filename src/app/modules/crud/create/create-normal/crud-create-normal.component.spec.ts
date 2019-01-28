import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCreateNormalComponent } from './crud-create-normal.component';

describe('CrudReadSingleComponent', () => {
  let component: CrudCreateNormalComponent;
  let fixture: ComponentFixture<CrudCreateNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCreateNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCreateNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
