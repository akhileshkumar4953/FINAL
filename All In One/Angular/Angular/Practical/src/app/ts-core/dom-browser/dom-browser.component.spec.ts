import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomBrowserComponent } from './dom-browser.component';

describe('DomBrowserComponent', () => {
  let component: DomBrowserComponent;
  let fixture: ComponentFixture<DomBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DomBrowserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DomBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
