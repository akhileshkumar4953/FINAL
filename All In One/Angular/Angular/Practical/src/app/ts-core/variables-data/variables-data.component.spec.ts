import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariablesDataComponent } from './variables-data.component';

describe('VariablesDataComponent', () => {
  let component: VariablesDataComponent;
  let fixture: ComponentFixture<VariablesDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariablesDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariablesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
