import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginScoutComponent } from './login-scout.component';

describe('LoginScoutComponent', () => {
  let component: LoginScoutComponent;
  let fixture: ComponentFixture<LoginScoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginScoutComponent]
    });
    fixture = TestBed.createComponent(LoginScoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
