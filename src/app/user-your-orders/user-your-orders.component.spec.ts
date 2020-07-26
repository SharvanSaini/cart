import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserYourOrdersComponent } from './user-your-orders.component';

describe('UserYourOrdersComponent', () => {
  let component: UserYourOrdersComponent;
  let fixture: ComponentFixture<UserYourOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserYourOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserYourOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
