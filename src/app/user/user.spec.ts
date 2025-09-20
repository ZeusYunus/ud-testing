import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { User } from './user';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('User', () => {
  let component: User;
  let fixture: ComponentFixture<User>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [User],
      providers: [UserService, DataService]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(User);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

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

  it('should display username if user is logged in', () => {
    const fixture = TestBed.createComponent(User);
    const app = fixture.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).toContain(app.user.name);
  });

  it('shouldn\'t display username if user is not logged in', () => {
    const fixture = TestBed.createComponent(User);
    const app = fixture.componentInstance;
    app.isLoggedIn = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('p')?.textContent).not.toContain(app.user.name);
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    const fixture = TestBed.createComponent(User);
    const app = fixture.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', waitForAsync(() => {
    const fixture = TestBed.createComponent(User);
    const app = fixture.componentInstance;
    const dataService = fixture.debugElement.injector.get(DataService);
    const spy = spyOn(dataService, 'getDetails').and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  }));
});
