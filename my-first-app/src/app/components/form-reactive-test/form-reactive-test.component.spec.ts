import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReactiveTestComponent } from './form-reactive-test.component';

describe('FormReactiveTestComponent', () => {
  let component: FormReactiveTestComponent;
  let fixture: ComponentFixture<FormReactiveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReactiveTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReactiveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
