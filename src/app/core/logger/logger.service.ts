// import { Injectable, Inject } from '@angular/core';
// import { CORE_CONFIG } from '../core.config';
// import * as Log4js from 'log4js';
//
// @Injectable()
//
// export class LoggerService {
//   private loggers;
//   constructor(@Inject(CORE_CONFIG) private coreConfig: CoreConfig) {
//     this.loggers = this.getloggers();
//   }
//
//   public info(interfaceName: string, info: string) {
//     const logger = this.loggers[interfaceName];
//
//     logger.info(info);
//   }
//
//   public error(interfaceName: string, info: string) {
//     const logger = this.loggers[interfaceName];
//
//     logger.error(info);
//   }
//
//   public warn(interfaceName: string, info: string) {
//     const logger = this.loggers[interfaceName];
//
//     logger.warn(info);
//   }
//
//   private getloggers() {
//     return this.coreConfig.LOGS_INTERFACES.reduce((loggers, interfaceName) => {
//       loggers[interfaceName] = Log4js.getLogger(interfaceName);
//       return loggers;
//     }, {});
//   }
// }
