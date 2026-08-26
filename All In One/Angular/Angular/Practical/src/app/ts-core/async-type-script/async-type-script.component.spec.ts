import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncTypeScriptComponent } from './async-type-script.component';

describe('AsyncTypeScriptComponent', () => {
  let component: AsyncTypeScriptComponent;
  let fixture: ComponentFixture<AsyncTypeScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncTypeScriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncTypeScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
