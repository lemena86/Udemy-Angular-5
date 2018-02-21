import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesAssigmentComponent } from './pipes-assigment.component';

describe('PipesAssigmentComponent', () => {
  let component: PipesAssigmentComponent;
  let fixture: ComponentFixture<PipesAssigmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesAssigmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesAssigmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
