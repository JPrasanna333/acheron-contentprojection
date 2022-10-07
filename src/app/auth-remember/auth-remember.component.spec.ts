import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRememberComponent } from './auth-remember.component';

describe('AuthRememberComponent', () => {
  let component: AuthRememberComponent;
  let fixture: ComponentFixture<AuthRememberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRememberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthRememberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
