import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { map, shareReplay, delay, mergeMap } from 'rxjs/operators';
import { ACCOUNT_CONFIG, IAccountConfig} from './account.config';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})

export class AccountService {
  private accountInfo: AccountInfo;
  private readonly account: BehaviorSubject<AccountInfo>;

  constructor(@Inject(ACCOUNT_CONFIG) private accountConfig: IAccountConfig, private translate: TranslateService) {
    this.accountInfo = {
      personal: {
        firstName: 'Adnan',
        lastName: 'Saadeddine',
        month: '',
        day: '',
        year: ''
      }
    };
    this.account = new BehaviorSubject(this.accountInfo);
  }

  public getAvatar(): Observable<Blob> {
    return this.getAccount().pipe(map(() => this.accountInfo.avatar), shareReplay(1));
  }

  public setPersonalProperty(property: string, value: string) {
    const previousValue = this.accountInfo.personal[property];

    this.accountInfo.personal[property] = value;
    this.account.next(this.accountInfo);

    if (!value || !value.length) {
      this.accountInfo.personal[property] = previousValue;
      this.account.next(this.accountInfo);
    }
  }

  public getPersonalProprieties(): AccountProperty[] {
    return Object.keys(this.accountInfo.personal).map((proprietyKey) => ({
        key: proprietyKey,
        value: this.getPersonalProperty(proprietyKey).pipe(mergeMap((proprietyValue: string) => from([proprietyValue]).pipe(delay(1)))),
        options: this.getAccount().pipe(map(account => this.getOptions(proprietyKey, account)))
      }));
  }

  public getFullName(): Observable<string> {
    return this.getAccount().pipe(
      map(() => `${this.accountInfo.personal.firstName} ${this.accountInfo.personal.lastName}`),
      shareReplay(1)
    );
  }

  private getAccount(): BehaviorSubject<AccountInfo> {
    return this.account;
  }

  private getPersonalProperty(property: string): Observable<string> {
    return this.getAccount().pipe(map((account) => account.personal[property] || ''), shareReplay(1));
  }

  private getOptions(property: string, account: AccountInfo): string[] {
    const yearOfBirth = parseInt(account.personal.year, 10);
    const monthOfBirth = this.accountConfig.MONTHS.findIndex((month) => this.translate.instant(month) === account.personal.month);
    if (property === 'day') {
      const yearForNumberOfDays = yearOfBirth || new Date().getFullYear();
      const days = new Date(yearForNumberOfDays, monthOfBirth + 1, 0).getDate();
      return days ?
        Array.from(Array(days).keys()).map((day) => (day + 1).toString()) :
        Array.from(Array(31).keys()).map((day) => (day + 1).toString());
    }

    if (property === 'month') {
      return this.accountConfig.MONTHS.map((month) => this.translate.instant(month));
    }

    if (property === 'year') {
      return Array.from(Array(67).keys()).map(index => {
        const yearToSubtract = index + 14;
        const year = new Date().getFullYear() - yearToSubtract;
        return year.toString();
      });
    }

    return [];
  }
}

export interface AccountInfo {
  personal: {
    firstName: string;
    lastName: string;
    day: string;
    month: string;
    year: string;
  };
  avatar?: Blob;
}

export interface AccountProperty {
  key: string;
  value: Observable<string>;
  options?: Observable<string[]>;
}
