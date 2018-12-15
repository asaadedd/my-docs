import { InjectionToken } from '@angular/core';
import {Observable} from 'rxjs';

export let ACCOUNT_CONFIG = new InjectionToken('account.config');

export const AccountConfig: IAccountConfig = {
  INFORMATION: [
    {TRANSLATE: 'information.personal.TEXT', ICON_PATH: '/assets/images/personal-information.png', URL: 'personal'},
    {TRANSLATE: 'information.security.TEXT', ICON_PATH: '/assets/images/security.png', URL: 'security'},
    {TRANSLATE: 'information.payments.TEXT', ICON_PATH: '/assets/images/payments.png', URL: 'payments'}
  ],
  PERSONAL: {
    MONTHS: ['months.january', 'months.february', 'months.march', 'months.april', 'months.may', 'months.june', 'months.july',
      'months.august', 'months.september', 'months.october', 'months.november', 'months.december'],
    MANDATORY_PARAMETERS: ['firstName', 'lastName'],
  },
  SECURITY: {
    ALL_PARAMETERS: ['loginWithPattern', 'loginWithFingerPrint'],
    MANDATORY_PARAMETERS: [],
  },
  MESSAGES: {
    WRONG_VALUE: 'information.personal.messages.wrongValue',
    VALUE_CHANGED: 'information.personal.messages.valueChanged'
  }
};

export interface IAccountConfig {
  INFORMATION: AccountInformationType[];
  PERSONAL: {
    MONTHS: string[];
    MANDATORY_PARAMETERS: string[];
  };
  SECURITY: {
    ALL_PARAMETERS: string[];
    MANDATORY_PARAMETERS: string[];
  };
  MESSAGES: {
    WRONG_VALUE: string;
    VALUE_CHANGED: string;
  };
}

export interface AccountInformationType {
  TRANSLATE: string;
  ICON_PATH: string;
  URL: string;
}

