import { Injectable, Inject } from '@angular/core';
import { USER_CONFIG } from './user.config';
import { Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class UserService {
  private userInfo: UserInfo;
  private userSubscriber: Subscriber<UserInfo>;

  constructor(@Inject(USER_CONFIG) private userConfig: UserConfig) {
    const loggedInUser = JSON.parse(localStorage.getItem('user'));
    this.userInfo = loggedInUser ?
      this.userConfig.USER.INFO.find((user) => user.type === loggedInUser.type) :
      this.userConfig.USER.INFO.find((user) => user.type === this.userConfig.USER.NO_USER);
  }

  public login(username: string, password: string, type: string) {
    const userObject: UserLoginInfo = {username, password, type};
    const userInfo = this.userConfig.USER.INFO.find((user) => user.type === type);
    // this.loggerService.info(this.userConfig.LOGS.interfaceName, this.userConfig.LOGS.INFO.USER_LOGIN_START);
    localStorage.setItem(this.userConfig.USER.STORAGE_KEY, JSON.stringify(userObject));
    // this.loggerService.info(this.userConfig.LOGS.interfaceName, this.userConfig.LOGS.INFO.USER_SUCCESS_LOGIN);
    this.userInfo = userInfo;
  }

  public logout() {
    // this.loggerService.info(this.userConfig.LOGS.interfaceName, this.userConfig.LOGS.INFO.USER_LOGOUT);
    this.userInfo = this.userConfig.USER.INFO.find((user) => user.type === this.userConfig.USER.NO_USER);
    localStorage.removeItem(this.userConfig.USER.STORAGE_KEY);
  }

  public isLogged(): boolean {
    return this.userInfo && this.userInfo.type !== this.userConfig.USER.NO_USER;
  }

  public getUserTabs(): Observable<Array<Tab>> {
    return this.getUser().pipe(map((userInfo: UserInfo) => userInfo.tabs));
  }

  public getUserAllowedPaths(): Observable<Array<string>> {
    return this.getUser().pipe(map((userInfo: UserInfo) => userInfo.allowedPath));
  }

  public getUserPhoto(): {

  }

  private getUser(): Observable<UserInfo> {
    return Observable.create((subscriber: Subscriber<UserInfo>) => {
      if (this.userInfo) {
        subscriber.next(this.userInfo);
      }
      this.userSubscriber = subscriber;
    });
  }
}
