import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassesOopComponent } from './classes-oop.component';

describe('ClassesOopComponent', () => {
  let component: ClassesOopComponent;
  let fixture: ComponentFixture<ClassesOopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassesOopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassesOopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
