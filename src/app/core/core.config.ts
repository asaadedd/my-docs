import { InjectionToken } from '@angular/core';

export const CORE_CONFIG = new InjectionToken('core.config');

export const CoreConfig: CoreConfig = {
  LOGS_INTERFACES: ['CORE', 'USER'],
  HEADER: {
    LOGO_URL: 'assets/images/logo.png',
  },
  COLORS: {
    ICE: '#99D3DF',
    FRESH_WATER: '#88BBD6',
    PLASTER: '#CDCDCD',
    LINEN: '#E9E9E9'
  }
};
