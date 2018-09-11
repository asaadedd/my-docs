import { InjectionToken } from '@angular/core';

export let ACCOUNT_CONFIG = new InjectionToken('account.config');

export const AccountConfig = {
  INFORMATION: [
    {TRANSLATE: 'information.personal.TEXT', ICON_PATH: '/assets/images/personal-information.png', URL: 'personal'},
    {TRANSLATE: 'information.security.TEXT', ICON_PATH: '/assets/images/security.png', URL: 'security'},
    {TRANSLATE: 'information.payments.TEXT', ICON_PATH: '/assets/images/payments.png', URL: 'payments'}
  ],
  MONTHS: ['months.january', 'months.february', 'months.march', 'months.april', 'months.may', 'months.june', 'months.july',
    'months.august', 'months.september', 'months.october', 'months.november', 'months.december'],
  YEARS: []
};

export interface IAccountConfig {
  INFORMATION: AccountInformationType[];
  MONTHS: string[];
  YEARS: string[];
}

export interface AccountInformationType {
  TRANSLATE: string;
  ICON_PATH: string;
  URL: string;
}

