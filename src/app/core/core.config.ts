import { InjectionToken } from '@angular/core';

export const CORE_CONFIG = new InjectionToken('core.config');

export const CoreConfig: CoreConfig = {
  LOGS_INTERFACES: ['CORE', 'USER'],
  HEADER: {
    LOGO_URL: ''
  }
};
