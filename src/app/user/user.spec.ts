import { ComponentFixture, TestBed } from '@angular/core/testing';

import { User } from './user';
import { UserService } from './user.service';

describe('User', () => {
  let component: User;
  let fixture: ComponentFixture<User>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [User],
      providers: [UserService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(User);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(User);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should get username from the service', () => {
    const fixture = TestBed.createComponent(User);
    const app = fixture.componentInstance;
    const userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });
});
