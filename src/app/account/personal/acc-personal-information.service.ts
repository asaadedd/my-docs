import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ACCOUNT_CONFIG, IAccountConfig} from '../account.config';
import {TranslateService} from '@ngx-translate/core';
import {AccountService, AccountInfo} from '../account.service';
import {map} from 'rxjs/operators';
import {ToastrService} from 'ngx-toastr';

@Injectable()

export class AccountPersonalInformationService {
  private static readonly PROPERTY_TRANSLATE_PATH = 'information.personal.property';

  constructor(
    @Inject(ACCOUNT_CONFIG) private accountConfig: IAccountConfig,
    private translate: TranslateService,
    private accountService: AccountService,
    private toastrService: ToastrService,
    private translateService: TranslateService
  ) {
  }

  static isValueErroneous(property: string, value: string): boolean {
    if (property === 'email') {
      const regExp = new RegExp('/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/');

      return !regExp.test(value);
    }

    return !value;
  }

  public setProperty(property: string, value: string) {
    const propertyDisplayName = this.translateService.instant(`${AccountPersonalInformationService.PROPERTY_TRANSLATE_PATH}.${property}`);
    if (this.isParameterMandatory(property) && AccountPersonalInformationService.isValueErroneous(property, value)) {
      const wrongMessageText = this.translateService.instant(this.accountConfig.MESSAGES.WRONG_VALUE);
      this.toastrService.error(wrongMessageText, propertyDisplayName, {
        timeOut: 5000,
        positionClass: 'toast-top-center'
      });
    } else {
      const valueChangedText = this.translateService.instant(this.accountConfig.MESSAGES.VALUE_CHANGED);
      this.toastrService.success(valueChangedText, propertyDisplayName, {
        timeOut: 5000,
        positionClass: 'toast-top-center'
      });
      this.accountService.setPersonalProperty(property, value);
    }
  }

  public getProprieties(): Observable<PersonalProperty> {
    return this.accountService.getAccount().pipe(
      map((account: AccountInfo) => ({
        firstName: {
          key: 'firstName',
          value: account.personal.firstName
        },
        lastName: {
          key: 'lastName',
          value: account.personal.lastName
        },
        day: {
          key: 'day',
          value: account.personal.day,
          options: this.getOptionsForProperty('day', account)
        },
        month: {
          key: 'month',
          value: account.personal.month,
          options: this.getOptionsForProperty('month', account)
        },
        year: {
          key: 'year',
          value: account.personal.year,
          options: this.getOptionsForProperty('year', account)
        },
        phone: {
          key: 'phone',
          value: account.personal.phone
        }
      }))
    );
  }

  private getOptionsForProperty(property: string, account: AccountInfo): string[] {
    const yearOfBirth = parseInt(account.personal.year, 10);
    const monthOfBirth = this.accountConfig.PERSONAL.MONTHS.findIndex((month) => this.translate.instant(month) === account.personal.month);
    if (property === 'day') {
      const yearForNumberOfDays = yearOfBirth || new Date().getFullYear();
      const days = new Date(yearForNumberOfDays, monthOfBirth + 1, 0).getDate();
      return days ?
        Array.from(Array(days).keys()).map((day) => (day + 1).toString()) :
        Array.from(Array(31).keys()).map((day) => (day + 1).toString());
    }

    if (property === 'month') {
      return this.accountConfig.PERSONAL.MONTHS.map((month) => this.translate.instant(month));
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

  private isParameterMandatory(property: string): boolean {
    return this.accountConfig.PERSONAL.MANDATORY_PARAMETERS.includes(property);
  }
}

export interface PersonalProperty {
  firstName: AccountProperty;
  lastName: AccountProperty;
  day: AccountProperty;
  month: AccountProperty;
  year: AccountProperty;
  phone: AccountProperty;
}

export interface AccountProperty {
  key: string;
  value: string;
  options?: string[];
}
