import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosuresScopeComponent } from './closures-scope.component';

describe('ClosuresScopeComponent', () => {
  let component: ClosuresScopeComponent;
  let fixture: ComponentFixture<ClosuresScopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClosuresScopeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosuresScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
