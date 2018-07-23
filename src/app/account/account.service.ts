import { Injectable } from '@angular/core';
import {Observable, Subscriber} from 'rxjs';

@Injectable()

export class AccountService {
  private accountInfo: AccountInfo;
  private accountSubscriber: Subscriber<AccountInfo>;

  constructor() {
    this.accountInfo = {
      name: 'Name',
      surname: 'Surname',
      tutorial: false
    };
  }

  public getAccount(): Observable<AccountInfo> {
    return Observable.create((subscriber: Subscriber<AccountInfo>) => {
      this.accountSubscriber = subscriber;
      this.accountSubscriber.next(this.accountInfo);
    });
  }

  public isTutorial(): boolean {
    return this.accountInfo.tutorial;
  }
}
