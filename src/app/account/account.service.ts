import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ACCOUNT_CONFIG, IAccountConfig} from './account.config';

@Injectable({
  providedIn: 'root',
})

export class AccountService {
  private accountInfo: AccountInfo;
  private oldAccountInfo: AccountInfo;
  private readonly account: BehaviorSubject<AccountInfo>;

  constructor(@Inject(ACCOUNT_CONFIG) private accountConfig: IAccountConfig) {
    this.accountInfo = {
      personal: {
        firstName: 'Adnan',
        lastName: 'Saadeddine',
        month: 'January',
        day: '1',
        year: '1995',
        phone: '0721674323'
      }
    };
    this.account = new BehaviorSubject(this.accountInfo);
  }

  public getAvatar(): Observable<Blob> {
    return this.getAccount().pipe(map(() => this.accountInfo.avatar), shareReplay(1));
  }

  public setPersonalProperty(property: string, value: string) {
    this.oldAccountInfo.personal[property] = this.accountInfo.personal[property];
    this.accountInfo.personal[property] = value;
    this.account.next(this.accountInfo);
  }

  public getFullName(): Observable<string> {
    return this.getAccount().pipe(
      map(() => `${this.accountInfo.personal.firstName} ${this.accountInfo.personal.lastName}`),
      shareReplay(1)
    );
  }

  public getAccount(): BehaviorSubject<AccountInfo> {
    return this.account;
  }
}

export interface AccountInfo {
  personal: PersonalInformation;
  avatar?: Blob;
}

export interface PersonalInformation {
  firstName: string;
  lastName: string;
  day: string;
  month: string;
  year: string;
  phone: string;
}
