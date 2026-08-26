import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAppsScriptServicesComponent } from './google-apps-script-services.component';

describe('GoogleAppsScriptServicesComponent', () => {
  let component: GoogleAppsScriptServicesComponent;
  let fixture: ComponentFixture<GoogleAppsScriptServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoogleAppsScriptServicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoogleAppsScriptServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
