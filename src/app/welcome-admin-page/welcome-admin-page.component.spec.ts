import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAdminPageComponent } from './welcome-admin-page.component';

describe('WelcomeAdminPageComponent', () => {
  let component: WelcomeAdminPageComponent;
  let fixture: ComponentFixture<WelcomeAdminPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelcomeAdminPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
