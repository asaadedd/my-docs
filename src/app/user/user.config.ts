import { InjectionToken } from '@angular/core';

export const USER_CONFIG = new InjectionToken('user.config');

export const UserConfig: UserConfig = {
  USER: {
    INFO : [{
      type: 'no-user',
      allowedPath: ['user/login', 'user/registration'],
      tabs: [
        {url: 'account', translatePath: 'header.tabs.account.TEXT', iconUrl: 'assets/images/account.png'},
        {url: 'docs', translatePath: 'header.tabs.docs.TEXT', iconUrl: 'assets/images/docs.png'}
      ]
    }],
    NO_USER: 'no-user',
    STORAGE_KEY: 'user'
  },
  LOGS: {
    interfaceName: 'USER',
    INFO: {
      USER_LOGIN_START: 'User login started',
      USER_SUCCESS_LOGIN: 'User has successfully authenticated',
      USER_LOGOUT: 'User has logged-out'
    },
    ERROR: {
      USER_FAILED_LOGIN: 'User has failed to authenticate',
    }
  }
};
