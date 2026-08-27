import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebuggingConsoleComponent } from './debugging-console.component';

describe('DebuggingConsoleComponent', () => {
  let component: DebuggingConsoleComponent;
  let fixture: ComponentFixture<DebuggingConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DebuggingConsoleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DebuggingConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
