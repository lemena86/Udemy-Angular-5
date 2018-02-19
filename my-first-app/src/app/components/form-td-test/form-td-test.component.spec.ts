import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTdTestComponent } from './form-td-test.component';

describe('FormTdTestComponent', () => {
  let component: FormTdTestComponent;
  let fixture: ComponentFixture<FormTdTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormTdTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormTdTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
