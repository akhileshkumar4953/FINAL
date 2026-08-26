import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ES6Component } from './es6.component';

describe('ES6Component', () => {
  let component: ES6Component;
  let fixture: ComponentFixture<ES6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ES6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ES6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
